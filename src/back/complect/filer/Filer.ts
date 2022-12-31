import fs from 'fs';
import { ExecutionRule } from '../executer/Executer.model';
import smylib, { SMyLib } from '../soki/complect/SMyLib';
import { LocalSokiAuth, PullEventValue, rootDirective, SokiAppName } from '../soki/Soki.model';
import cm from '../../apps/cm/config';
import index from '../../apps/index/config';
import spy from '../../apps/spy/config';
import lider from '../../apps/lider/config';
import { FilerAppRequirement, FilerAppStore, FilerContent, FilerContentData, FilerContents, SimpleKeyValue } from './Filer.model';

const actionsRequirement: FilerAppRequirement = {
  name: 'actions',
  map: (data: ExecutionRule[]) => {
    const map = (data: ExecutionRule[], top: Partial<ExecutionRule> = {}): ExecutionRule[] => {
      return data.map(({ action, args, next, level, track, expected, value, method, title, shortTitle }) => {
        const theTrack = top.track?.concat(track || []) || track;
        const nextTop: Partial<ExecutionRule> = {
          args: { ...top.args, ...args },
          track: theTrack,
          expected: (top.expected || []).concat(expected ? [[theTrack, expected]] : []),
        };

        return [{
          title,
          shortTitle,
          level,
          method,
          action,
          args: nextTop.args,
          track: nextTop.track,
          expecteds: nextTop.expected,
          value,
        }, ...(next ? map(next, nextTop as never) : [])]
      }).flat();
    };

    return map(data).filter(({ action }) => action);
  }
};

export class Filer {
  contents = {} as FilerContents;

  fileName(appName: SokiAppName, name: string, ext = 'json') {
    return `${appName}/${name}${ext ? `.${ext}` : ''}`;
  }

  filePath(filename: string) {
    return `${rootDirective}/apps/${filename}`;
  }

  fileNamePath(appName: SokiAppName, name: string, ext = 'json') {
    return `${rootDirective}/apps/${this.fileName(appName, name, ext)}`;
  }

  load() {
    return new Promise<void>((loadRes) => {
      const apps = {
        index,
        cm,
        spy,
        lider,
      } as FilerAppStore;
      let waits = 0;
      let oks = 0;

      SMyLib
        .entries(apps)
        .forEach(([appName, app]) => {
          const content: FilerContent = this.contents[appName] = {};

          [actionsRequirement, ...app.requirements].forEach((requ) => {
            const { name, ext = 'json', level = 0, prepare = (data: unknown) => data, map = () => null } = smylib.isStr(requ) ? { name: requ } : requ;

            const filename = this.fileName(appName, name, ext);
            const path = this.filePath(filename);

            waits++;
            fs.readFile(path, 'utf-8', (err, stringData) => {
              oks++;
              if (!err) {
                const stat = fs.statSync(path);
                const data = JSON.parse(stringData);

                try {
                  content[name] = {
                    data,
                    string: stringData,
                    mtime: new Date(stat.mtime).getTime(),
                    level,
                    prepare,
                    mapped: map(data),
                  };
                  if (waits === oks) loadRes();
                  return;
                } catch (e) { }
              }

              console.error(`!!!! Load error ${filename}`);
            });
          });
        });
    });
  }

  saveChanges(fixes: string[], appName: SokiAppName) {
    return new Promise<number | null>((res, rej) => {
      if (fixes.length === 0) {
        res(null);
        return;
      }

      let maxLastUpdate = 0;

      try {
        let waits = 0;
        let oks = 0;
        let errors: NodeJS.ErrnoException[] = [];

        fixes.forEach((fileName) => {
          if (!smylib.isStr(fileName)) return;
          const content = this.contents[appName][fileName] || {};
          const stringContent = JSON.stringify(content.data || {});
          const path = this.fileNamePath(appName, fileName);
          waits++;
          fs.writeFile(path, stringContent, (error) => {
            oks++;
            if (error) {
              errors.push(error);
              return;
            }
            const stat = fs.statSync(path);
            content.string = stringContent;
            const mtime = content.mtime = new Date(stat.mtime).getTime();
            if (maxLastUpdate < mtime) maxLastUpdate = mtime;
            if (waits === oks) {
              res(maxLastUpdate);
            }
          });
        });
      } catch (e) {
        rej(e);
      }
    });
  }

  getContents(appName: SokiAppName, topLastUpdate: number, topIndexLastUpdate: number, auth?: LocalSokiAuth | null): PullEventValue {
    let lastUpdates = { cts: topLastUpdate || 0, ts: topLastUpdate || 0 };
    let indexLastUpdates = { cts: topIndexLastUpdate || 0, ts: topIndexLastUpdate || 0 };
    const getContents = ([fixName, fixData]: [string, FilerContentData], ts: { cts: number, ts: number }) => {
      if (fixData.level > (auth?.level || 0) || ts.ts >= fixData.mtime) return null;
      if (ts.cts < fixData.mtime) ts.cts = fixData.mtime;

      return {
        key: fixName,
        value: fixData.prepare(fixData.mapped ?? fixData.data, auth),
      };
    };

    return {
      contents: SMyLib
        .entries(this.contents[appName])
        .map((entries) => getContents(entries, lastUpdates))
        .filter((data) => data) as SimpleKeyValue<SokiAppName>[],
      indexContents: SMyLib
        .entries(this.contents.index)
        .map((entries) => getContents(entries, indexLastUpdates))
        .filter((data) => data) as SimpleKeyValue<SokiAppName>[],
      appName,
      lastUpdate: lastUpdates.cts,
      indexLastUpdate: indexLastUpdates.cts,
    }
  }
}


export const filer = new Filer();

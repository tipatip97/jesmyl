import fs from 'fs';
import admin from '../../apps/admin/config';
import cm from '../../apps/cm/config';
import index from '../../apps/index/config';
import leader from '../../apps/leader/config';
import gamer from '../../apps/gamer/config';
import { Executer } from '../executer/Executer';
import { ExecutionRule } from '../executer/Executer.model';
import smylib, { SMyLib } from '../soki/complect/SMyLib';
import { LocalSokiAuth, PullEventValue, rootDirective, SokiAppName } from '../soki/soki.model';
import { FilerAppRequirement, FilerAppStore, FilerContent, FilerContentData, FilerContents, FilerWatcher, SimpleKeyValue } from './Filer.model';

const actionsRequirement: FilerAppRequirement = {
  name: 'actions',
  map: (data: Record<string, ExecutionRule>) => {
    const rules: Omit<ExecutionRule, 'method'>[] = [];
    const map = (data: Record<string, ExecutionRule>, top: Partial<ExecutionRule> = {}) => {
      for (const key in data) {
        if (key.startsWith('/') || (key.startsWith('<') && key.endsWith('>'))) {
          const rule = data[key];
          const {
            title,
            shortTitle,
            level,
            action,
            isSequre,
            args,
            cloneArgs,
          } = rule;

          const nextTop: Partial<ExecutionRule> = {
            args: { ...top.args, ...args },
            cloneArgs: (top.cloneArgs || cloneArgs) && { ...top.cloneArgs, ...cloneArgs },
          };

          rules.push({
            title,
            shortTitle,
            level,
            action,
            isSequre,
            args: nextTop.args,
            cloneArgs: nextTop.cloneArgs,
          });

          map(rule as never, nextTop);
        }
      }

      return rules;
    };

    return map(data).filter(({ action }) => action);
  }
};

export class Filer {
  contents = {} as FilerContents;
  private watcher: FilerWatcher = () => { };
  private appConfigs = {
    index,
    cm,
    gamer,
    leader,
    admin,
  } as FilerAppStore;

  setWatcher(watcher: FilerWatcher) {
    this.watcher = watcher;
  }

  private triggers: { refreshTrigger: string, cb: () => void }[] = [];
  trigger(triggerName: string) {
    this.triggers.forEach(({ refreshTrigger, cb }) => triggerName === refreshTrigger && cb());
  }

  fileName(appName: SokiAppName, name: string, ext: string | null = 'json') {
    return `${appName}/${name}${ext ? `.${ext}` : ''}`;
  }

  filePath(filename: string) {
    return `${rootDirective}/apps/${filename}`;
  }

  fileNamePath(appName: SokiAppName, name: string, ext = 'json') {
    return `${rootDirective}/apps/${this.fileName(appName, name, ext)}`;
  }

  rootFileName(path: string, ext: string | null = 'json') {
    return `${path.replace(/^\//, '')}${ext === null ? '' : `.${ext}`}`;
  }

  rootPath(rootFileName: string) {
    return `${rootDirective}/${rootFileName}`;
  }

  rootNamePath(path: string, ext: string | null = 'json') {
    return `${rootDirective}/${this.rootFileName(path, ext)}`;
  }

  load() {
    return new Promise<void>((loadRes) => {
      let waits = 0;
      let oks = 0;

      SMyLib
        .entries(this.appConfigs)
        .forEach(([appName, app]) => {
          const content: FilerContent = this.contents[appName] = {} as never;
          const loadInContent = (requ: string | FilerAppRequirement, cb?: () => void) => {
            const {
              name,
              rootPath = '',
              ext = 'json',
              level = 0,
              prepare = (data: unknown) => data,
              map = () => null,
              watch = null,
              refreshTrigger = '',
            } = smylib.isStr(requ) ? { name: requ } : requ;

            if (refreshTrigger) this.triggers.push({
              refreshTrigger,
              cb: () => loadInContent(requ, cb),
            });

            const filename = rootPath ? this.rootFileName(rootPath, ext) : this.fileName(appName, name, ext);
            const path = rootPath ? this.rootPath(filename) : this.filePath(filename);

            const createExpected = () => {
              if (content.actions) {
                const action = content.actions.mapped.find(({ track, expecteds }) => {
                  return expecteds !== undefined && track?.[0] === name;
                });

                if (action) {
                  const { expecteds } = action;
                  const [, expected] = expecteds?.find(([track]) => track.length === 1 && track[0] === name) ?? [];
                  if (!expected) return;
                  const string = JSON.stringify(expected);

                  fs.writeFile(path, string, (err) => {
                    if (err) {
                      console.error(`!!! WriteError ${filename}`);
                      cb?.();
                    } else console.info(`... ExpectedCreted ${filename}`);

                    const stat = fs.statSync(path);

                    content[name] = {
                      data: expected,
                      string,
                      level,
                      prepare,
                      mapped: map(expected),
                      mtime: new Date(stat.mtime).getTime(),
                    };
                  });
                } else {
                  console.error(`!!! NoExpected ${filename}`);
                  return;
                }
              } else {
                console.info(`!!! NoActions ${filename}`);
                return;
              }

              cb?.();
            };

            waits++;
            fs.readFile(path, 'utf-8', async (err, stringData) => {
              oks++;
              if (!err) {
                try {
                  const stat = fs.statSync(path);
                  const data = JSON.parse(stringData);

                  content[name] = {
                    data,
                    string: stringData,
                    mtime: new Date(stat.mtime).getTime(),
                    level,
                    prepare,
                    mapped: map(data),
                  };
                } catch (e) { }
                cb?.();
              } else {
                if (watch) {
                  const [watchPath, cb] = watch;
                  const read = () => {
                    fs.readFile(watchPath, 'utf-8', (err, fileContent) => {
                      if (err) return;
                      try {
                        const data = cb(fileContent);

                        content[name] = {
                          data,
                          string: fileContent,
                          mtime: new Date(fs.statSync(watchPath).mtime).getTime(),
                          level,
                          prepare,
                          mapped: map(data),
                        };

                        this.watcher(appName, name, data);
                      } catch (e) { }
                    });
                  };

                  fs.watchFile(watchPath, () => read());
                  read();

                } else createExpected();
              }

              if (waits === oks) loadRes();
            });
          };

          loadInContent(
            actionsRequirement,
            () => app.requirements.forEach((data) => loadInContent(data))
          );
        });
    });
  }

  saveChanges(fixes: string[], appName: SokiAppName) {
    return new Promise<number | null>((resolve, reject) => {
      if (fixes.length === 0) {
        resolve(null);
        return;
      }

      try {
        let maxLastUpdate = 0;
        let waits = 0;
        let oks = 0;
        let errors: NodeJS.ErrnoException[] = [];

        fixes.forEach((fileName) => {
          if (!smylib.isStr(fileName)) return;
          const content = this.contents[appName][fileName] || {};

          if (!content.data) {
            if (waits === oks) resolve(maxLastUpdate);
            return;
          }

          waits++;

          const req = this.appConfigs[appName]?.requirements
            .find((data) => !smylib.isStr(data) && data.name === fileName) as FilerAppRequirement | undefined;
          const rootPath = req?.rootPath;
          const stringContent = JSON.stringify(content.data);
          const path = rootPath
            ? this.rootNamePath(rootPath, req.ext)
            : this.fileNamePath(appName, fileName);

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
            if (waits === oks) resolve(maxLastUpdate);
          });
        });
      } catch (e) {
        reject('' + e);
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

import fs from 'fs';
import admin from '../../apps/admin/config';
import cm from '../../apps/cm/config';
import gamer from '../../apps/gamer/config/gamer-config';
import index from '../../apps/index/config';
import leader from '../../apps/leader/config';
import smylib, { SMyLib } from '../../shared/SMyLib';
import { LocalSokiAuth, PullEventValue, rootDirective, SokiAppName, SokiClientUpdateCortage } from '../soki/soki.model';
import {
  FilerAppConfig,
  FilerAppRequirement,
  FilerAppStore,
  FilerContent,
  FilerContentData,
  FilerContents,
  FilerWatcher,
  SimpleKeyValue,
} from './Filer.model';

export class Filer {
  contents = {} as FilerContents;
  private watcher: FilerWatcher = () => {};
  appConfigs = {
    index,
    cm,
    gamer,
    leader,
    admin,
  } as FilerAppStore;

  setWatcher(watcher: FilerWatcher) {
    this.watcher = watcher;
  }

  private triggers: { refreshTrigger: string; cb: () => void }[] = [];
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
    return new Promise<void>(loadRes => {
      let waits = 0;
      let oks = 0;

      SMyLib.entries(this.appConfigs).forEach(([appName, app]) => {
        const content: FilerContent = (this.contents[appName] = {} as never);
        const loadInContent = (name: string, requ: null | FilerAppRequirement, cb?: () => void) => {
          const {
            rootPath = '',
            ext = 'json',
            level = 0,
            prepareContent,
            watch = null,
            refreshTrigger = '',
          } = requ === null ? ({ name } as FilerAppRequirement) : requ;

          if (refreshTrigger)
            this.triggers.push({
              refreshTrigger,
              cb: () => loadInContent(name, requ, cb),
            });

          const filename = rootPath ? this.rootFileName(rootPath, ext) : this.fileName(appName, name, ext);
          const path = rootPath ? this.rootPath(filename) : this.filePath(filename);

          const createExpected = () => {
            if (app.actions) {
              const action = app.actions.rules?.find(({ track, expecteds }) => {
                return expecteds !== undefined && track?.[0] === name;
              });

              if (action) {
                const {
                  expecteds,
                  track: [trackFitrst],
                } = action;
                const [, expected] = expecteds?.find(([trackEnd]) => trackEnd === 1 && trackFitrst === name) ?? [];
                if (!expected) return;
                const string = JSON.stringify(expected);

                fs.writeFile(path, string, err => {
                  if (err) {
                    console.error(`!!! WriteError ${filename}`);
                    cb?.();
                  } else console.info(`... ExpectedCreted ${filename}`);

                  const stat = fs.statSync(path);

                  content[name] = {
                    data: expected,
                    string,
                    level,
                    prepareContent,
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
            if (!err && stringData) {
              try {
                const stat = fs.statSync(path);
                const data = JSON.parse(stringData);

                content[name] = {
                  data,
                  string: stringData,
                  mtime: new Date(stat.mtime).getTime(),
                  level,
                  prepareContent,
                };
              } catch (e) {}
              cb?.();
            } else {
              if (watch) {
                const [watchPath, cb] = watch;
                const read = () => {
                  fs.readFile(watchPath, 'utf-8', (err, fileContent) => {
                    if (err) return;
                    try {
                      const data = cb(fileContent);
                      const mtime = new Date(fs.statSync(watchPath).mtime).getTime();

                      content[name] = {
                        data,
                        string: fileContent,
                        mtime,
                        level,
                        prepareContent,
                      };

                      this.watcher(appName, name, data, mtime);
                    } catch (e) {}
                  });
                };

                fs.watchFile(watchPath, () => read());
                read();
              } else createExpected();
            }

            if (waits === oks) loadRes();
          });
        };

        SMyLib.entries(app.requirements).forEach(([name, data]) => loadInContent(name, data));
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

        fixes.forEach(fileName => {
          if (!smylib.isStr(fileName)) return;
          const content = this.contents[appName][fileName] || {};

          if (!content.data) {
            if (waits === oks) resolve(maxLastUpdate);
            return;
          }

          waits++;

          const req = this.appConfigs[appName]?.requirements[fileName];
          const rootPath = req?.rootPath;
          const stringContent = JSON.stringify(content.data);
          const path = rootPath ? this.rootNamePath(rootPath, req.ext) : this.fileNamePath(appName, fileName);

          fs.writeFile(path, stringContent, error => {
            oks++;
            if (error) {
              errors.push(error);
              return;
            }
            const stat = fs.statSync(path);
            content.string = stringContent;
            const mtime = (content.mtime = new Date(stat.mtime).getTime());
            if (maxLastUpdate < mtime) maxLastUpdate = mtime;
            if (waits === oks) resolve(maxLastUpdate);
          });
        });
      } catch (e) {
        reject('' + e);
      }
    });
  }

  getContents(appName: SokiAppName, pullCortage: SokiClientUpdateCortage, auth?: LocalSokiAuth | null): PullEventValue {
    try {
      const [pullIndexLastUpdate, pullIndexMd5, pullAppLastUpdate, pullAppMd5] = pullCortage;

      let appLastUpdates = {
        cts: pullAppLastUpdate || 0,
        ts: pullAppLastUpdate || 0,
      };
      let indexLastUpdates = {
        cts: pullIndexLastUpdate || 0,
        ts: pullIndexLastUpdate || 0,
      };

      const getContents = ([fixName, fixData]: [string, FilerContentData], ts: { cts: number; ts: number }) => {
        if (fixData.level > (auth?.level || 0) || ts.ts >= fixData.mtime) return null;
        if (ts.cts < fixData.mtime) ts.cts = fixData.mtime;

        return {
          key: fixName,
          value: fixData.prepareContent ? fixData.prepareContent(fixData.data, auth) : fixData.data,
        };
      };

      const getRulesData = (config: FilerAppConfig, md5: string | nil) => {
        return config && md5 !== config.actions.shortRulesMd5
          ? { key: 'rules', value: config.actions.shortRules }
          : null;
      };

      const indexMd5 = this.appConfigs.index.actions.shortRulesMd5;
      const appMd5 = this.appConfigs[appName]?.actions.shortRulesMd5;

      return {
        contents: [
          SMyLib.entries(this.contents.index)
            .map(entries => getContents(entries, indexLastUpdates))
            .concat(getRulesData(this.appConfigs.index, pullIndexMd5))
            .filter(data => data) as SimpleKeyValue<SokiAppName>[],
          SMyLib.entries(this.contents[appName])
            .map(entries => getContents(entries, appLastUpdates))
            .concat(getRulesData(this.appConfigs[appName], pullAppMd5))
            .filter(data => data) as SimpleKeyValue<SokiAppName>[],
        ],
        appName,
        updates: [
          indexLastUpdates.cts === pullIndexLastUpdate ? 0 : indexLastUpdates.cts,
          indexMd5 === pullIndexMd5 ? '' : indexMd5,
          appLastUpdates.cts === pullAppLastUpdate ? 0 : appLastUpdates.cts,
          appMd5 === pullAppMd5 ? '' : appMd5,
        ],
      };
    } catch (error) {
      console.error('CATCHED', error);

      return {
        contents: [[], []],
        appName,
        updates: [null, null, null, null],
      };
    }
  }
}

export const filer = new Filer();

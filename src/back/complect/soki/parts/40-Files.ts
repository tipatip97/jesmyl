import { filer } from '../../filer/Filer';
import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerLiveTransfers } from './30-LiveTransfers';

export class SokiServerFiles extends SokiServerLiveTransfers implements SokiServerDoAction<'PullData'> {
  constructor() {
    super();

    filer.load().catch(() => {});

    filer.setWatcher((appName, key, value, mtime) => {
      this.send({
        appName,
        pull:
          appName === 'index'
            ? {
                appName,
                contents: [[{ key, value }], []],
                updates: [mtime, null, null, null],
              }
            : {
                appName,
                contents: [[], [{ key, value }]],
                updates: [null, null, mtime, null],
              },
      });
    });
  }

  async reloadFiles() {
    await filer.load();
    this.send({
      system: { name: 'reloadFiles', ok: true },
      appName: 'index',
    });
  }

  async doOnPullData({ appName, capsule, client, eventBody, eventData, requestId }: SokiServerDoActionProps) {
    if (eventBody.pullData === undefined) return false;
    if (!eventData.appName) return false;
    if (capsule) capsule.appName = eventData.appName;

    this.sendStatistic();

    const pull = filer.getContents(eventData.appName, eventBody.pullData, capsule?.auth);

    if (pull.contents[0].length || pull.contents[1].length) this.send({ requestId, pull, appName }, client);
    else this.send({ requestId, appName }, client);

    return false;
  }
}

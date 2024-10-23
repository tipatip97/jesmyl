import { WebSocket } from 'ws';
import { filer } from '../../filer/Filer';
import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerDownloads } from './110-Downloads';

export type ServerStoreFeedback = { getLastValues: string[]; contents: ServerStoreContent[] };

export type ServerStoreContent = {
  ts: number;
  key: string;
  value: unknown;
};

export class SokiServerServerStore extends SokiServerDownloads implements SokiServerDoAction<'ServerStore'> {
  getServerStore = () =>
    filer.contents.index['serverUserStore'].data as Partial<
      Record<string, Partial<Record<`${string}/${string}`, [number, unknown]>>>
    >;

  private saveServerStoreTimeout: TimeOut;

  private actionWithUserClientsByLogin(client: WebSocket, cb: (client: WebSocket) => void) {
    this.actionWithCapsule(client, capsule => {
      const login = capsule.auth?.login;
      if (!login) return;

      this.capsules.forEach((capsule, client) => {
        if (capsule.auth?.login !== login) return;

        cb(client);
      });
    });
  }

  async doOnServerStore({ appName, client, eventBody }: SokiServerDoActionProps) {
    if (eventBody.userContents === undefined) return false;

    const capsule = this.capsules.get(client);
    if (!capsule?.auth?.login) return false;

    const storeData = this.getServerStore();
    if (storeData == null) return false;

    const savedUserStoreData = (storeData[capsule.auth.login] ??= {});
    const freshUserContents: ServerStoreContent[] = [];
    const sendBackUserContents: ServerStoreContent[] = [];
    let isNeedSaveData = false;

    eventBody.userContents.forEach(({ key, ts, value }) => {
      const savedUserData = savedUserStoreData[`${appName}/${key}`];

      if (savedUserData == null) {
        savedUserStoreData[`${appName}/${key}`] = [ts, value];
        freshUserContents.push({ key, ts, value });
        isNeedSaveData = true;
        return;
      }

      const [savedLastWrite, savedLastWriteData] = savedUserData;

      if (savedLastWrite === ts) return;
      if (savedLastWrite < ts) {
        savedUserStoreData[`${appName}/${key}`] = [ts, value];
        freshUserContents.push({ key, ts, value });
        isNeedSaveData = true;
        return;
      }

      sendBackUserContents.push({ key, ts: savedLastWrite, value: savedLastWriteData });
    });

    if (sendBackUserContents.length) this.send({ appName, freshUserContents: sendBackUserContents }, client);

    if (freshUserContents.length) {
      this.actionWithUserClientsByLogin(client, clientRecipient => {
        if (client === clientRecipient) return;
        this.send({ appName, freshUserContents }, clientRecipient);
      });
    }

    if (isNeedSaveData) {
      clearTimeout(this.saveServerStoreTimeout);
      this.saveServerStoreTimeout = setTimeout(() => {
        filer.saveChanges(['serverUserStore'], 'index');
      }, 100);
    }

    return false;
  }
}

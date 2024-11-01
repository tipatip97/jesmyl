import { WebSocket } from 'ws';
import { SMyLib } from '../../../shared/SMyLib';
import { filer } from '../../filer/Filer';
import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerDownloads } from './110-Downloads';

export type ServerStoreFeedback = { getLastValues: string[]; contents: ServerStoreContent[] };

export type ServerStoreContent<Value = unknown> = {
  ts: number;
  key: StringBySlash;
  value: Value;
};

const lastWriteTsKey = 'appLastWriteTs/' as const;

export class SokiServerServerStore extends SokiServerDownloads implements SokiServerDoAction<'ServerStore'> {
  getServerStore = () =>
    filer.contents.index['serverUserStore'].data as
      | nil
      | Partial<Record<string, Partial<Record<StringBySlash, [number, unknown]>>>>;

  private saveServerStoreTimeout: TimeOut;

  private debounceRequestMap = new Map<WebSocket, TimeOut>();

  private actionWithUserClientsByLogin(client: WebSocket, cb: (client: WebSocket) => void) {
    this.actionWithCapsule(client, capsule => {
      const login = capsule.auth?.login;
      if (!login) return;

      this.capsules.forEach((capsule, targetClient) => {
        if (targetClient === client || capsule.auth?.login !== login) return;

        cb(targetClient);
      });
    });
  }

  async doOnServerStore({ appName, client, eventBody }: SokiServerDoActionProps) {
    if (eventBody.pullFreshUserContentsByTs === undefined && eventBody.serverUserContents === undefined) return false;

    clearTimeout(this.debounceRequestMap.get(client));
    this.debounceRequestMap.set(
      client,
      setTimeout(() => {
        this.debounceRequestMap.delete(client);
        const capsule = this.capsules.get(client);
        if (!capsule?.auth?.login) return false;

        const storeData = this.getServerStore();
        if (storeData == null) return false;

        const savedUserStoreData = (storeData[capsule.auth.login] ??= {});
        const freshSenderUserContents: ServerStoreContent[] = [];
        let lastWriteTsBox = (savedUserStoreData[`${lastWriteTsKey}${appName}`] ??= [0, 0]) as [number, number];

        if (eventBody.pullFreshUserContentsByTs !== undefined) {
          const requestTs = eventBody.pullFreshUserContentsByTs;

          if (requestTs >= lastWriteTsBox[0]) {
            this.send({ appName, pullFreshUserContentsByTs: lastWriteTsBox[0] }, client);
          } else {
            SMyLib.entries(savedUserStoreData).forEach(([key, storeValue]) => {
              if (key.startsWith(lastWriteTsKey) || storeValue === undefined) return;
              const [ts, value] = storeValue;

              if (requestTs < ts) freshSenderUserContents.push({ key, ts, value });
            });
          }
        }

        if (eventBody.serverUserContents !== undefined) {
          let isNeedSaveData = false;

          const freshUserContents: ServerStoreContent[] = [];
          lastWriteTsBox[1]++;

          eventBody.serverUserContents.forEach(content => {
            const savedUserData = savedUserStoreData[content.key];

            if (savedUserData == null) {
              savedUserStoreData[content.key] = [content.ts, content.value];
              freshUserContents.push(content);
              isNeedSaveData = true;
            } else {
              const [savedLastWrite, savedLastWriteData] = savedUserData;

              if (lastWriteTsBox[0] < content.ts) {
                lastWriteTsBox[0] = content.ts;
                isNeedSaveData = true;
              }

              if (savedLastWrite < content.ts) {
                savedUserStoreData[content.key] = [content.ts, content.value];
                freshUserContents.push(content);
                isNeedSaveData = true;
              } else if (savedLastWrite > content.ts)
                freshSenderUserContents.push({ key: content.key, ts: savedLastWrite, value: savedLastWriteData });
            }
          });

          if (freshUserContents.length) {
            this.actionWithUserClientsByLogin(client, clientRecipient => {
              this.send({ appName, freshUserContents }, clientRecipient);
            });
          }

          if (isNeedSaveData) {
            clearTimeout(this.saveServerStoreTimeout);
            this.saveServerStoreTimeout = setTimeout(() => {
              filer.saveChanges(['serverUserStore'], 'index');
            }, 100);
          }
        }

        if (freshSenderUserContents.length) this.send({ appName, freshUserContents: freshSenderUserContents }, client);
      }, 300),
    );
    return false;
  }
}

import { SecretChatSecretMessage } from '../../../apps/index/Index.model';
import smylib from '../../../shared/SMyLib';
import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerServerStore } from './120-ServerStore';

export type ServerStoreFeedback = { getLastValues: string[]; contents: ServerStoreContent[] };

export type ServerStoreContent = {
  ts: number;
  key: string;
  value: unknown;
};

export class SokiServerOtherEvents extends SokiServerServerStore implements SokiServerDoAction<'OtherEvents'> {
  async doOnOtherEvents({ appName, client, eventBody, requestId }: SokiServerDoActionProps) {
    if (eventBody.secretMessage === undefined) return false;
    const sentMessage = eventBody.secretMessage;
    const targetDeviceId = sentMessage.deviceId;
    const targetCapsule = this.capsulesByDeviceId.get(targetDeviceId);

    if (targetCapsule == null) {
      this.send(
        {
          appName,
          secretMessage: { targetDeviceId, messageOrOffline: null },
          requestId,
        },
        client,
      );
      return false;
    }

    this.actionWithCapsule(client, senderCapsule => {
      const secretMessage: SecretChatSecretMessage = {
        targetDeviceId,
        messageOrOffline: {
          ts: Date.now() + smylib.howMs.inHour * 25,
          text: sentMessage.message,
          senderDeviceId: senderCapsule.deviceId,
        },
      };

      this.send({ appName, secretMessage }, targetCapsule.client);
      this.send({ appName, secretMessage, requestId }, client);
    });

    return false;
  }
}

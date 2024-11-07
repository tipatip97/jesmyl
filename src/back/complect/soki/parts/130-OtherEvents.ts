import { DeviceId } from '../../../apps/index/Index.model';
import { SecretChat } from '../../../apps/index/SecretChat.complect';
import Eventer from '../../Eventer';
import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerServerStore } from './120-ServerStore';

export class SokiServerOtherEvents extends SokiServerServerStore implements SokiServerDoAction<'OtherEvents'> {
  private delayedSecretMessages: Partial<Record<DeviceId, SecretChat.ImportableMessage[]>> = {};

  protected onInitOtherEvents() {
    Eventer.listenValue(this.onCapsuleSetListeners, capsule => {
      if (this.delayedSecretMessages[capsule.deviceId] == null) return;
      const secretMessages = this.delayedSecretMessages[capsule.deviceId];
      delete this.delayedSecretMessages[capsule.deviceId];

      setTimeout(() => {
        this.send(
          {
            appName: 'index',
            secretMessages,
          },
          capsule.client,
        );
      });
    });
  }

  async doOnOtherEvents({ appName, client, eventBody, requestId }: SokiServerDoActionProps) {
    if (eventBody.secretMessage === undefined) return false;

    const sentMessage = eventBody.secretMessage;
    const senderId = sentMessage.body.senderId;

    const secretMessage: SecretChat.ImportableMessage = {
      chat:
        sentMessage.body.type === 'newMember' || sentMessage.body.type === 'chatCreate' ? sentMessage.chat : undefined,
      chatId: sentMessage.chatId,
      message: {
        ...sentMessage.body,
        ts: `${Date.now()}${Math.random()}` as never,
      },
    };

    sentMessage.targetIds.forEach(targetId => {
      if (targetId === senderId) return;
      const targetCapsule = this.capsulesByDeviceId.get(targetId);

      if (targetCapsule == null) {
        this.delayedSecretMessages[targetId] ??= [];
        this.delayedSecretMessages[targetId].push(secretMessage);

        return false;
      }

      this.send({ appName, secretMessage }, targetCapsule.client);
    });

    this.send({ appName, secretMessage, requestId }, client);

    return false;
  }
}

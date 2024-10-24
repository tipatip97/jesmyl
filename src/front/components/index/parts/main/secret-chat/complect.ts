import { DeviceId, SecretChatTextMessage } from '../../../../../../back/apps/index/Index.model';
import { atom } from '../../../../../complect/atoms';

export namespace SecretChat {
  export type Chat = { name: string; messages: SecretChatTextMessage[] };
  export type Messages = Record<DeviceId, Chat>;
}

export const secretMessagesAtom = atom<SecretChat.Messages>({} as never, 'complect', 'secretMessages');

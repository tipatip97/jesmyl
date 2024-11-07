import { DeviceId } from './Index.model';

export namespace SecretChat {
  export enum ChatId {
    def = '00',
  }

  export enum MessageTs {
    def = '00',
  }

  export interface UserData {
    id: DeviceId;
    fio: string;
    role: 'admin' | 'creator' | 'user';
  }

  export type ChatInfo = {
    title: string;
    id: ChatId;
    users: Partial<Record<DeviceId, UserData>>;
  };

  export type MessageDraftType = 'text' | 'reply' | 'edit';

  export type MessagesHashMap = Partial<Record<SecretChat.MessageTs, SecretChat.Message>>;

  export type MessageDraft = {
    text: string;
    type: MessageDraftType;
    targetTs?: MessageTs;
  };

  export interface Message extends ExportableMessageBody {
    ts: MessageTs;
  }

  export interface ImportableMessage {
    message: Message;
    chatId: ChatId;
    chat?: ChatInfo;
  }

  export type MessageType =
    | 'text'
    | 'bigText'
    | 'senderRename'
    | 'newMember'
    | 'chatRename'
    | 'chatCreate'
    | 'delete'
    | 'reply'
    | 'edit';

  export interface ExportableMessageBody {
    text: string;
    prevText?: string;
    type: MessageType;
    senderId: DeviceId;
    targetTs?: MessageTs;
  }

  export interface ExportableMessage {
    chat?: ChatInfo;
    chatId: ChatId;
    targetIds: DeviceId[];
    body: ExportableMessageBody;
  }

  export const editableMessageTypesSet = new Set<MessageType>(['text', 'bigText', 'reply']);
}

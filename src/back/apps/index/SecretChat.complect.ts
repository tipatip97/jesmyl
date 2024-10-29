import { DeviceId } from './Index.model';

export namespace SecretChat {
  export type ChatId = `${number}${number}`;

  export type ChatInfo = {
    title: string;
    id: ChatId;
    team: DeviceId[];
    fios: string[];
  };

  export type LocalChat = {
    info: ChatInfo;
    lastReadTs: number;
    messages: MessageBody[];
  };

  export type Messages = Record<ChatId, LocalChat>;
  export type MessageTs = `${number}${number}`;

  export interface MessageBody extends ExportableMessageBody {
    ts: MessageTs;
  }

  export interface ImportableMessage {
    body: MessageBody;
    chat: ChatInfo;
  }

  export type MessageType = 'text' | 'bigText';

  export interface ExportableMessageBody {
    text: string;
    type: MessageType;
    senderId: DeviceId;
  }

  export interface ExportableMessage {
    chat: ChatInfo;
    body: ExportableMessageBody;
  }
}

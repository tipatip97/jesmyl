import { DeviceId, SecretChat } from 'shared/api';
import { atom } from '../../../../../complect/atoms';
import { contextCreator } from '../../../../../complect/contextCreator';
import { iconPackOfWechat, IconWechatStrokeRounded } from '../../../../../complect/the-icon/icons/wechat';

// export const makeChatId = (chatIdScalar: string | und): SecretChat.ChatId | null =>
//   chatIdScalar ? (+chatIdScalar ? (chatIdScalar as never) : null) : null;

export const secretChatIconPack = iconPackOfWechat;
export const SecretChatsIcon = IconWechatStrokeRounded;
// export const secretChatMessageInputId = 'secretChatMessageInputId';

export const secretChatClassNamesDict = {
  markAsAccent: 'mark-as-accent',
  messageOnDraft: 'message-on-draft',
  messageOnContextMenu: 'message-on-context-menu',
} as const;

const newMemberKey = 'secretChatingWith';
export const secretChatingJoinerStringify = (deviceId: DeviceId, fio: string | und) => {
  return JSON.stringify({ [newMemberKey]: { deviceId, fio } });
};
export const secretChatingJoinerParse = (joinerStr: string): { deviceId: DeviceId; fio: string } => {
  return JSON.parse(joinerStr)[newMemberKey];
};

export const [SecretChatContext, useSecretChatContext] = contextCreator<SecretChat.ChatMiniInfo>({
  chatId: SecretChat.ChatId.def,
  title: '',
  messages: [],
  members: [],
});

export const secretChatMessageTsAsOpenContextAtom = atom<SecretChat.MessageId | null>(null);

export const [SecretChatIdContext, useSecretChatIdContext] = contextCreator(SecretChat.ChatId.def);
export const [SecretChatLastReadTsContext, useSecretChatLastReadTsContext] = contextCreator<SecretChat.StrMessageId>(
  `${SecretChat.MessageId.def}`,
);

export const [SecretChatMessagesHashContext, useSecretChatMessagesHashContext] =
  contextCreator<SecretChat.MessagesHashMap>({});

export const [SecretChatUnreachedMessagesMessagesHashContext, useSecretChatUnreachedMessagesMessagesHashContext] =
  contextCreator<SecretChat.MessagesHashMap | und>(undefined);

export const [SecretChatMessagesTssContext, useSecretChatMessagesTssContext] = contextCreator<
  SecretChat.StrMessageId[]
>([]);

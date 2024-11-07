import { DeviceId } from '../../../../../../back/apps/index/Index.model';
import { SecretChat } from '../../../../../../back/apps/index/SecretChat.complect';
import { atom } from '../../../../../complect/atoms';
import { contextCreator } from '../../../../../complect/contextCreator';
import { iconPackOfWechat, IconWechatStrokeRounded } from '../../../../../complect/the-icon/icons/wechat';

export const makeChatId = (chatIdScalar: string | und): SecretChat.ChatId | null =>
  chatIdScalar ? (+chatIdScalar ? (chatIdScalar as never) : null) : null;

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

export const [SecretChatContext, useSecretChatContext] = contextCreator<SecretChat.ChatInfo>({
  id: SecretChat.ChatId.def,
  title: '',
  users: {} as never,
});

export const secretChatMessageTsAsOpenContextAtom = atom<SecretChat.MessageTs | null>(null);

export const [SecretChatIdContext, useSecretChatIdContext] = contextCreator(SecretChat.ChatId.def);
export const [SecretChatLastReadTsContext, useSecretChatLastReadTsContext] = contextCreator(SecretChat.MessageTs.def);

export const [SecretChatMessagesHashContext, useSecretChatMessagesHashContext] =
  contextCreator<SecretChat.MessagesHashMap>({});

export const [SecretChatMessagesTssContext, useSecretChatMessagesTssContext] = contextCreator<SecretChat.MessageTs[]>(
  [],
);

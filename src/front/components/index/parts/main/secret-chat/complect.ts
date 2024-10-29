import { SecretChat } from '../../../../../../back/apps/index/SecretChat.complect';
import { atom } from '../../../../../complect/atoms';
import { iconPackOfWechat, IconWechatStrokeRounded } from '../../../../../complect/the-icon/icons/wechat';

export const isSecretChatsShowInBottomMenuAtom = atom(false, 'index', 'secretChatsShowInBottomPanel');

export const makeChatId = (chatIdScalar: string | und): SecretChat.ChatId | null =>
  chatIdScalar ? (+chatIdScalar ? (chatIdScalar as never) : null) : null;

export const secretChatIconPack = iconPackOfWechat;
export const SecretChatsIcon = IconWechatStrokeRounded;

export const secretChatsAtom = atom<SecretChat.Messages>({} as never, 'complect', 'secretChats');

export const secretChatingWithQrCodeKey = 'secretChatingWith';

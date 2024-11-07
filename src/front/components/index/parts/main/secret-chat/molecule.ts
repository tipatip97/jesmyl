import { SecretChat } from '../../../../../../back/apps/index/SecretChat.complect';
import { atom, Molecule } from '../../../../../complect/atoms';

type ChatPackOf<Inner> = Record<SecretChat.ChatId, Inner>;

export const chatsMolecule = new Molecule(
  {
    chatInfos: {} as ChatPackOf<SecretChat.ChatInfo>,
    chatDrafts: {} as ChatPackOf<SecretChat.MessageDraft>,
    chatMessagesHashMap: {} as ChatPackOf<SecretChat.MessagesHashMap>,
    chatsLastReadTs: {} as ChatPackOf<SecretChat.MessageTs>,
  },
  'complect',
);

export const isSecretChatsShowInBottomMenuAtom = atom(false, 'index', 'secretChatsShowInBottomPanel');

export const secretChatsAtom = chatsMolecule.select(s => s.chatInfos);
export const secretChatsLastReadTsAtom = chatsMolecule.select(s => s.chatsLastReadTs);
export const secretChatMessagesHashMapAtom = chatsMolecule.select(s => s.chatMessagesHashMap);
export const secretChatsDraftsAtom = chatsMolecule.select(s => s.chatDrafts);

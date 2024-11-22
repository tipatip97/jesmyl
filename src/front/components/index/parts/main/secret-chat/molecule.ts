import { SecretChat } from 'shared/api';
import { atom, Molecule, useAtomSet, useAtomValue } from '../../../../../complect/atoms';

type ChatPackOf<Inner> = Partial<Record<SecretChat.ChatId, Inner>>;

type State = {
  isAlternativeChatMessagesHashLoad: ChatPackOf<boolean>;
  chatFaces: ChatPackOf<SecretChat.ChatMiniInfo>;
  chatDrafts: ChatPackOf<SecretChat.MessageDraft>;
  // chatMessagesHashMap: ChatPackOf<SecretChat.MessagesHashMap>;
  chatsLastReadTs: ChatPackOf<SecretChat.MessageId>;
} & Partial<Record<`chatMessages/${SecretChat.ChatId}`, SecretChat.MessagesHashMap>> &
  Partial<Record<`alternativeMessages/${SecretChat.ChatId}`, SecretChat.MessagesHashMap>> &
  Partial<Record<`unreachedMessages/${SecretChat.ChatId}`, SecretChat.MessagesHashMap>>;

export const chatsMolecule = new Molecule<State>(
  {
    isAlternativeChatMessagesHashLoad: {},
    chatFaces: {},
    chatDrafts: {},
    chatsLastReadTs: {},
    'chatMessages/': {},
    'unreachedMessages/': {},
    'alternativeMessages/': {},
  },
  'complect',
);

export const isSecretChatsShowInBottomMenuAtom = atom(false, 'index', 'secretChatsShowInBottomPanel');

export const secretChatFacesAtom = chatsMolecule.select(s => s.chatFaces);
export const secretChatsLastReadTsAtom = chatsMolecule.select(s => s.chatsLastReadTs);
export const secretChatsDraftsAtom = chatsMolecule.select(s => s.chatDrafts);
export const secretChatsIsAlternativeMessageHashMapAtom = chatsMolecule.select(
  s => s.isAlternativeChatMessagesHashLoad,
);

export const useChatMessagesHashMapValue = (chatId: SecretChat.ChatId | und) =>
  useAtomValue(chatsMolecule.take(`chatMessages/${chatId ?? ''}`));

export const useChatAlternativeMessagesHashMapValue = (chatId: SecretChat.ChatId | und) =>
  useAtomValue(chatsMolecule.take(`alternativeMessages/${chatId ?? ''}`));

export const useChatMessagesHashMapSet = (chatId: SecretChat.ChatId) =>
  useAtomSet(chatsMolecule.take(`chatMessages/${chatId}`));

export const useChatUnreachedMessagesHashMapValue = (chatId: SecretChat.ChatId | und) =>
  useAtomValue(chatsMolecule.take(`unreachedMessages/${chatId ?? ''}`));

export const extractChatMessageHashMap = () => {};

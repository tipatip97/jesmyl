import { useEffect } from 'react';
import { useAtomGet, useAtomSet } from '../../../../../complect/atoms';
import { soki } from '../../../../../soki';
import { useDeviceId } from '../../../complect/takeDeviceId';
import { secretChatMessagesHashMapAtom, secretChatsAtom, secretChatsLastReadTsAtom } from './molecule';

export const useSecretChatMessagesListen = () => {
  const setMessagesHashMap = useAtomSet(secretChatMessagesHashMapAtom);
  const setChatsLastReadTs = useAtomSet(secretChatsLastReadTsAtom);
  const getChats = useAtomGet(secretChatsAtom);
  const setChats = useAtomSet(secretChatsAtom);
  const myDeviceId = useDeviceId();

  useEffect(() => {
    return soki.listenEvent('secretMessages', async secretMessages => {
      if (secretMessages == null) return;

      secretMessages.forEach(secretMessage => {
        const { message, chatId, chat } = secretMessage;

        if (chat != null && getChats()[chatId] == null) {
          setChats(prev => ({ ...prev, [chatId]: chat }));
          setChatsLastReadTs(prev => ({ ...prev, [chatId]: message.ts }));
          setMessagesHashMap(prev => ({ ...prev, [chatId]: {} }));
        }

        setMessagesHashMap(prev => {
          let newMessagesHash = { ...prev[chatId] };

          if (message.type === 'edit') {
            if (message.targetTs === undefined) return prev;
            const targetMessage = newMessagesHash[message.targetTs];

            if (targetMessage === undefined || targetMessage.text === message.text) {
              return prev;
            }

            newMessagesHash[message.targetTs] = {
              ...targetMessage,
              text: message.text,
              prevText: targetMessage.text,
            };
          } else if (message.type === 'delete') {
            if (message.targetTs === undefined || newMessagesHash[message.targetTs] === undefined) {
              return prev;
            }

            delete newMessagesHash[message.targetTs];
          } else newMessagesHash[message.ts] = message;

          return { ...prev, [chatId]: newMessagesHash };
        });

        if (message.type === 'chatRename') {
          setChats(prev => ({ ...prev, [chatId]: { ...prev[chatId], title: message.text } }));
        } else if (message.type === 'newMember') {
          if (chat) {
            setChats(prev => ({
              ...prev,
              [chatId]: {
                ...prev[chatId],
                users: {
                  ...chat.users,
                },
              },
            }));
          }
        } else if (message.type === 'senderRename') {
          setChats(prev => {
            const prevChat = prev[chatId];

            if (prevChat == null) return prev;

            return {
              ...prev,
              [chatId]: {
                ...prevChat,
                users: {
                  ...prevChat.users,
                  [message.senderId]: {
                    ...prevChat.users[message.senderId],
                    fio: message.text,
                  },
                },
              },
            };
          });
        }
      });
    });
  }, [getChats, myDeviceId, setMessagesHashMap, setChats, setChatsLastReadTs]);
};

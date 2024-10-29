import { useEffect } from 'react';
import { SecretChat } from '../../../../../../back/apps/index/SecretChat.complect';
import { useAtomSet } from '../../../../../complect/atoms';
import { soki } from '../../../../../soki';
import { useDeviceId } from '../../../complect/takeDeviceId';
import { secretChatsAtom } from './complect';

export const useSecretChatsListen = () => {
  const setMessages = useAtomSet(secretChatsAtom);
  const myDeviceId = useDeviceId();

  useEffect(() => {
    return soki.listenEvent('secretMessages', async secretMessages => {
      if (secretMessages == null) return;

      secretMessages?.forEach(secretMessage => {
        const message = secretMessage.body;

        setMessages((prev): SecretChat.Messages => {
          const chatId = secretMessage.chat.id;

          const prevChat = (prev[chatId] ??= {
            messages: [],
            lastReadTs: 0,
            info: secretMessage.chat,
          });

          const messages = [...prevChat.messages];

          let insertIndex = messages.findIndex(msg => msg.ts < message.ts);

          if (insertIndex < 0) insertIndex = 0;

          messages.splice(insertIndex, 0, message);
          let info = secretMessage.chat.team[0] === myDeviceId ? prevChat.info : secretMessage.chat;

          const myFioi = info.team.indexOf(myDeviceId);

          if (myFioi > -1) {
            const fios = [...secretMessage.chat.fios];
            info = { ...info, fios };

            fios[myFioi] = prevChat.info.fios[myFioi];
          }

          return {
            ...prev,
            [chatId]: {
              ...prevChat,
              info,
              messages: [message, ...prevChat.messages],
            },
          };
        });
      });
    });
  }, [myDeviceId, setMessages]);
};

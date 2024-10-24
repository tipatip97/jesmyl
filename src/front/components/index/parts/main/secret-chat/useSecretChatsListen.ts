import { useEffect } from 'react';
import { useAtomSet } from '../../../../../complect/atoms';
import { soki } from '../../../../../soki';
import { takeDeviceId } from '../../../complect/takeDeviceId';
import { secretMessagesAtom } from './complect';

export const useSecretChatsListen = () => {
  const setMessages = useAtomSet(secretMessagesAtom);

  useEffect(() => {
    return soki.listenEvent('secretMessage', async secretMessage => {
      if (secretMessage?.messageOrOffline == null) return;
      const myDeviceId = await takeDeviceId();
      const message = secretMessage.messageOrOffline;

      setMessages(prev => {
        const chatId =
          myDeviceId === secretMessage.targetDeviceId ? message.senderDeviceId : secretMessage.targetDeviceId;

        const chat = (prev[chatId] ??= { messages: [], name: chatId });
        const messages = [...chat.messages];

        let insertIndex = messages.findIndex(msg => msg.ts < message.ts);

        if (insertIndex < 0) insertIndex = 0;

        messages.splice(insertIndex, 0, message);

        return {
          ...prev,
          [chatId]: {
            ...chat,
            messages: [message, ...chat.messages],
          },
        };
      });
    });
  }, [setMessages]);
};

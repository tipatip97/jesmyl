import { isMobileDevice } from 'front/complect/device-differences';
import { addEventListenerPipe, hookEffectPipe } from 'front/complect/hookEffectPipe';
import { useEffect, useState } from 'react';
import { SecretChat } from 'shared/api';
import { makeRegExp } from 'shared/utils';
import { useAtomSet, useAtomValue } from '../../../../../../../../complect/atoms';
import { useActualRef } from '../../../../../../../../complect/useActualRef';
import { soki } from '../../../../../../../../soki';
import {
  useSecretChatContext,
  useSecretChatLastReadTsContext,
  useSecretChatMessagesHashContext,
  useSecretChatMessagesTssContext,
} from '../../../complect';
import { secretChatsDraftsAtom } from '../../../molecule';

export const useSecretChatSendMessageControl = (
  inputRef: React.RefObject<HTMLTextAreaElement>,
  onMessageSent: (message: SecretChat.ImportableMessage) => void,
) => {
  const [isSending, setIsSending] = useState(false);
  const chat = useSecretChatContext();
  const setDraftMessages = useAtomSet(secretChatsDraftsAtom);
  const draftMessages = useAtomValue(secretChatsDraftsAtom);
  const draft = draftMessages[chat.chatId];
  const messagesHashMap = useSecretChatMessagesHashContext();
  const chatLastReadTs = useSecretChatLastReadTsContext();
  const messageTss = useSecretChatMessagesTssContext();

  const draftTargetTs = draft?.replyId ?? draft?.editId;
  const draftTargetMessage = draftTargetTs ? messagesHashMap[draftTargetTs] : undefined;

  const sendMessageRef = useActualRef(() => {
    if (isSending || inputRef.current === null) return;

    const text = inputRef.current.value.trim();
    if (!text) return;

    const setValue = (inputRef.current as unknown as { setValue: (value: string) => void }).setValue;

    setIsSending(true);

    soki
      .send(
        {
          chatFetch: {
            chatId: chat.chatId,
            message: {
              text,
              type: text.match(
                makeRegExp(
                  '/^(\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)+|\\p{EPres}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F}))$/u',
                ),
              )
                ? 'BigText'
                : 'Text',
              replyMessageId: draft?.replyId,
              editMessageId: draft?.editId,
            },
          },
        },
        'index',
      )
      .on(event => {
        setIsSending(false);

        if (event.chatsData == null) return;
        const node = inputRef.current;

        if (node) {
          setTimeout(
            clearInterval,
            300,
            setInterval(() => node.scrollIntoView()),
          );
        }

        setDraftMessages(prev => ({
          ...prev,
          [chat.chatId]: {
            ...prev[chat.chatId],
            text: prev[chat.chatId]?.prevSimpleMessageText ?? '',
            editId: undefined,
            replyId: undefined,
            prevSimpleMessageText: '',
          },
        }));
        setValue('');

        const newMessage = event.chatsData.messages?.[chat.chatId]?.[0];
        if (newMessage) onMessageSent(newMessage);
      });
  });

  useEffect(() => {
    if (inputRef.current === null) return;
    const inputNode = inputRef.current;

    let saveDraftTimeout: TimeOut;

    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(inputNode, 'keydown', event => {
          if (event.key.length === 1) {
            clearTimeout(saveDraftTimeout);
            saveDraftTimeout = setTimeout(() => {
              setDraftMessages(prev => ({
                ...prev,
                [chat.chatId]: {
                  ...prev[chat.chatId]!,
                  text: inputNode.value,
                },
              }));
            }, 1500);
          }

          if (event.key !== 'Enter' || isMobileDevice) return;
          if (!event.ctrlKey && !event.shiftKey) {
            event.preventDefault();
            sendMessageRef.current();
          }
        }),
      )
      .effect();
  }, [chat.chatId, inputRef, sendMessageRef, setDraftMessages]);

  let unreadsCount = 0;

  for (const messageTs of messageTss) {
    if (messageTs === chatLastReadTs) break;
    unreadsCount++;
  }

  return {
    isSending,
    sendMessageRef,
    draftTargetMessage,
    unreadsCount,
    messagesHashMap,
  };
};

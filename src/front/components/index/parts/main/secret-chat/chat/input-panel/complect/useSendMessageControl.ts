import { useEffect, useState } from 'react';
import { SecretChat } from '../../../../../../../../../back/apps/index/SecretChat.complect';
import { makeRegExp } from '../../../../../../../../../back/complect/makeRegExp';
import { useAtomSet, useAtomValue } from '../../../../../../../../complect/atoms';
import { isMobileDevice } from '../../../../../../../../complect/device-differences';
import { addEventListenerPipe, hookEffectPipe } from '../../../../../../../../complect/hookEffectPipe';
import { MyLib } from '../../../../../../../../complect/my-lib/MyLib';
import { useActualRef } from '../../../../../../../../complect/useActualRef';
import { soki } from '../../../../../../../../soki';
import { useDeviceId } from '../../../../../../complect/takeDeviceId';
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
  const myDeviceId = useDeviceId();
  const chat = useSecretChatContext();
  const setDraftMessages = useAtomSet(secretChatsDraftsAtom);
  const draftMessages = useAtomValue(secretChatsDraftsAtom);
  const draft = draftMessages[chat.id];
  const messagesHashMap = useSecretChatMessagesHashContext();
  const chatLastReadTs = useSecretChatLastReadTsContext();
  const messageTss = useSecretChatMessagesTssContext();

  const draftTargetTs = draft?.targetTs;
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
          secretMessage: {
            chatId: chat.id,
            targetIds: MyLib.keys(chat.users),
            body: {
              text,
              type: draftTargetTs
                ? draft.type
                : text.match(
                      makeRegExp(
                        '/^(\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)+|\\p{EPres}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F}))$/u',
                      ),
                    )
                  ? 'bigText'
                  : 'text',
              senderId: myDeviceId,
              targetTs: draftTargetTs || undefined,
            },
          },
        },
        'index',
      )
      .on(event => {
        setIsSending(false);

        if (event.secretMessage == null) return;
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
          [chat.id]: { text: '', targetTs: undefined, type: 'text' },
        }));
        setValue('');
        onMessageSent(event.secretMessage);
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
                [chat.id]: {
                  ...prev[chat.id],
                  type: prev[chat.id]?.type ?? 'text',
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
  }, [chat.id, inputRef, sendMessageRef, setDraftMessages]);

  let unreadsCount = 0;

  for (const messageTs of messageTss) {
    if (messageTs === chatLastReadTs) break;
    unreadsCount++;
  }

  return { isSending, sendMessageRef, draftTargetMessage, unreadsCount, messagesHashMap };
};

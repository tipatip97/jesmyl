import { addEventListenerPipe, hookEffectPipe } from 'front/complect/hookEffectPipe';
import { useEffect } from 'react';
import { SecretChat } from 'shared/api';
import { useAtomSet } from '../../../../../../../complect/atoms';
import { ActualRef } from '../../../../../../../complect/useActualRef';
import { secretChatMessageTsAsOpenContextAtom } from '../../complect';
import { secretChatsDraftsAtom, secretChatsLastReadTsAtom } from '../../molecule';
import { addChildrenSwipeHookPipes } from './complect';

export const useLastReadTsController = (
  chatRef: React.RefObject<HTMLDivElement>,
  listRef: React.RefObject<HTMLDivElement>,
  replyFloatIconBoxRef: React.RefObject<HTMLDivElement>,
  chat: SecretChat.ChatMiniInfo,
  messageTssRef: ActualRef<SecretChat.StrMessageId[]>,
  initialLastReadTs: SecretChat.StrMessageId,
  setInitialLastReadTs: React.Dispatch<React.SetStateAction<SecretChat.StrMessageId>>,
) => {
  const setChatsLastReadTs = useAtomSet(secretChatsLastReadTsAtom);
  const setDraftMessages = useAtomSet(secretChatsDraftsAtom);
  const setContextOfMessageTs = useAtomSet(secretChatMessageTsAsOpenContextAtom);

  useEffect(() => {
    if (listRef.current === null) return;
    const node = document.querySelector(`:has( + [message-id='${initialLastReadTs}'])`);

    if (node === null) return;

    node.scrollIntoView({ block: 'start' });
    listRef.current.scrollTop -= 40;
  }, [initialLastReadTs, listRef]);

  useEffect(() => {
    if (listRef.current === null) return;

    const listNode = listRef.current;

    const setChatLastTs = (ts?: SecretChat.MessageId) => {
      // setChatsLastReadTs(prev => {
      //   const lastReadTs = ts ?? messageTssRef.current[0];
      //   if (lastReadTs == null || lastReadTs <= prev[chat.chatId]) return prev;
      //   return {
      //     ...prev,
      //     [chat.id]: lastReadTs,
      //   };
      // });
    };

    const setLastReadTsIfScrollBottom = () => {
      if (listNode.scrollTop < -20) return;

      setChatLastTs();

      if (messageTssRef.current[0]) setInitialLastReadTs(messageTssRef.current[0]);
    };

    setTimeout(setLastReadTsIfScrollBottom, 100);

    const toDownButtonNode = document.querySelector('.to-down-button');
    let checkIsCanShowToDownButton = () => {};

    if (toDownButtonNode) {
      let isShowToDownButtonTurn = false;

      checkIsCanShowToDownButton = () => {
        if (listNode.scrollTop < -20) {
          if (!isShowToDownButtonTurn) {
            isShowToDownButtonTurn = true;
            toDownButtonNode.classList.add('show');
          }
        } else if (isShowToDownButtonTurn) {
          isShowToDownButtonTurn = false;
          toDownButtonNode.classList.remove('show');
        }
      };

      setTimeout(checkIsCanShowToDownButton, 100);
    }

    let prevSettedLastReadTs = initialLastReadTs;
    let lastReadSetterTimeout: TimeOut;
    let isReplyFloatIconInMessage = false;

    return hookEffectPipe()
      .pipe(
        ...addChildrenSwipeHookPipes<HTMLDivElement>(listNode, 'message-place', (action, messageNode, progress) => {
          if (action === 'context') {
            const messageIdStr = messageNode.getAttribute('message-id');
            if (messageIdStr) setContextOfMessageTs(+messageIdStr);
            return;
          }

          const reply = () => {
            const messageIdStr = messageNode.getAttribute('message-id');

            if (messageIdStr)
              setDraftMessages(prev => ({
                ...prev,
                [chat.chatId]: {
                  ...prev[chat.chatId]!,
                  editId: undefined,
                  replyId: +messageIdStr,
                  prevSimpleMessageText: '',
                },
              }));
          };

          if (action === 'dblclick') reply();

          messageNode.style.setProperty('--reply-swipe-progress', '' + progress);

          if (replyFloatIconBoxRef.current === null) return;

          if (action === 'progressEnd') {
            chatRef.current?.appendChild(replyFloatIconBoxRef.current);
            isReplyFloatIconInMessage = false;
            if (progress > 0.9) reply();
          } else if (action === 'progress') {
            if (isReplyFloatIconInMessage) return;
            isReplyFloatIconInMessage = true;

            (messageNode as HTMLElement)?.appendChild(replyFloatIconBoxRef.current);
          }
        }),
        addEventListenerPipe(listNode, 'scroll', () => {
          setLastReadTsIfScrollBottom();

          checkIsCanShowToDownButton();

          clearTimeout(lastReadSetterTimeout);
          lastReadSetterTimeout = setTimeout(() => {
            const childs = listNode.childNodes as unknown as HTMLDivElement[];
            const inputScrollTop = listNode.scrollTop + listNode.clientHeight;

            for (const child of childs) {
              const sentTs = +child.getAttribute('message-id')! as SecretChat.MessageId;
              if (!sentTs || sentTs >= +prevSettedLastReadTs) break;

              if (child.offsetTop < inputScrollTop && child.offsetTop + child.clientHeight > inputScrollTop) {
                if (sentTs) {
                  setChatLastTs(sentTs);
                  prevSettedLastReadTs = '' + sentTs;
                }

                break;
              }
            }
          }, 10);
        }),
      )
      .effect();
  }, [
    chat.chatId,
    setChatsLastReadTs,
    initialLastReadTs,
    messageTssRef,
    setDraftMessages,
    listRef,
    setInitialLastReadTs,
    replyFloatIconBoxRef,
    setContextOfMessageTs,
    chatRef,
  ]);
};

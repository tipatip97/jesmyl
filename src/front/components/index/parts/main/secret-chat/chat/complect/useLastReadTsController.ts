import { useEffect } from 'react';
import { SecretChat } from '../../../../../../../../back/apps/index/SecretChat.complect';
import { useAtomSet } from '../../../../../../../complect/atoms';
import { addEventListenerPipe, hookEffectPipe } from '../../../../../../../complect/hookEffectPipe';
import { ActualRef } from '../../../../../../../complect/useActualRef';
import { secretChatMessageTsAsOpenContextAtom } from '../../complect';
import { secretChatsDraftsAtom, secretChatsLastReadTsAtom } from '../../molecule';
import { addChildrenSwipeHookPipes } from './complect';

export const useLastReadTsController = (
  listRef: React.RefObject<HTMLDivElement>,
  chat: SecretChat.ChatInfo,
  messageTssRef: ActualRef<SecretChat.MessageTs[]>,
  initialLastReadTs: SecretChat.MessageTs,
  setInitialLastReadTs: React.Dispatch<React.SetStateAction<SecretChat.MessageTs>>,
  replyFloatIconBoxRef: React.RefObject<HTMLDivElement>,
) => {
  const setChatsLastReadTs = useAtomSet(secretChatsLastReadTsAtom);
  const setDraftMessages = useAtomSet(secretChatsDraftsAtom);
  const setContextOfMessageTs = useAtomSet(secretChatMessageTsAsOpenContextAtom);

  useEffect(() => {
    if (listRef.current === null) return;

    const listNode = listRef.current;

    const setChatLastTs = (ts?: SecretChat.MessageTs) => {
      setChatsLastReadTs(prev => {
        const lastReadTs = ts ?? messageTssRef.current[0];
        if (lastReadTs == null || lastReadTs <= prev[chat.id]) return prev;

        return {
          ...prev,
          [chat.id]: lastReadTs,
        };
      });
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
            const ts = messageNode.getAttribute('sent-ts');
            if (ts) setContextOfMessageTs(ts as never);
            return;
          }

          const reply = () => {
            const ts = messageNode.getAttribute('sent-ts');
            if (ts)
              setDraftMessages(prev => ({
                ...prev,
                [chat.id]: {
                  ...prev[chat.id],
                  text: prev[chat.id]?.text ?? '',
                  type: 'reply',
                  targetTs: ts as never,
                },
              }));
          };

          if (action === 'dblclick') reply();

          messageNode.style.setProperty('--reply-swipe-progress', '' + progress);

          if (replyFloatIconBoxRef.current === null) return;

          if (action === 'progressEnd') {
            listNode.appendChild(replyFloatIconBoxRef.current);
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
              const sentTs = child.getAttribute('sent-ts') as SecretChat.MessageTs;
              if (sentTs >= prevSettedLastReadTs) break;

              if (child.offsetTop < inputScrollTop && child.offsetTop + child.clientHeight > inputScrollTop) {
                if (sentTs) {
                  setChatLastTs(sentTs);
                  prevSettedLastReadTs = sentTs;
                }

                break;
              }
            }
          }, 10);
        }),
      )
      .effect();
  }, [
    chat.id,
    setChatsLastReadTs,
    initialLastReadTs,
    messageTssRef,
    setDraftMessages,
    listRef,
    setInitialLastReadTs,
    replyFloatIconBoxRef,
    setContextOfMessageTs,
  ]);
};

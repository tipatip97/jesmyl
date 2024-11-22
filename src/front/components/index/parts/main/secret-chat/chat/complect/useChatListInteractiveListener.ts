import { useAtomSet } from 'front/complect/atoms';
import { addEventListenerPipe, hookEffectPipe } from 'front/complect/hookEffectPipe';
import { getParentNodeWithClassName } from 'front/complect/utils';
import { useEffect } from 'react';
import { SecretChat } from 'shared/api';
import { secretChatMessageTsAsOpenContextAtom } from '../../complect';

export const useChatListInteractiveListener = (
  listRef: React.RefObject<HTMLDivElement>,
  scrollToAccentMessage: (targetMessage: SecretChat.MessageId) => void,
  messagesHash: SecretChat.MessagesHashMap,
) => {
  const setContextOfMessageTs = useAtomSet(secretChatMessageTsAsOpenContextAtom);

  useEffect(() => {
    if (listRef.current === null) return;
    const listNode = listRef.current;

    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(listNode, 'touchstart', () => setContextOfMessageTs(null)),
        addEventListenerPipe(listNode, 'click', event => {
          setContextOfMessageTs(null);

          const { foundClassNames, node } = getParentNodeWithClassName(event, 'message-place', ['message-head']);

          if (node === null || foundClassNames['message-head'] !== true) return;

          event.stopPropagation();
          event.preventDefault();

          const messageIdStr = node.getAttribute('message-id');

          if (messageIdStr === null) return;

          const currentMessage = messagesHash[+messageIdStr as SecretChat.MessageId];

          if (currentMessage?.replyMessageId == null) return;

          scrollToAccentMessage(currentMessage.replyMessageId);
        }),
      )
      .effect();
  }, [listRef, messagesHash, scrollToAccentMessage, setContextOfMessageTs]);
};

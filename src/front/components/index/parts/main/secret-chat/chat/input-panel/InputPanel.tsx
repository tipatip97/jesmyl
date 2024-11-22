import { MyLib } from 'front/utils';
import { useCallback, useEffect, useRef } from 'react';
import { SecretChat } from 'shared/api';
import { useAtom } from '../../../../../../../complect/atoms';
import { IconArrowDown01StrokeRounded } from '../../../../../../../complect/the-icon/icons/arrow-down-01';
import { useSecretChatContext } from '../../complect';
import { secretChatsDraftsAtom } from '../../molecule';
import {
  StyledSecretChatMessageControlContainer,
  StyledSecretChatMessageInputStockBlock,
  StyledSecretChatMessageUnreadsCountBadge,
  StyledSecretChatToDownButton,
} from './InputPanel.styled';
import { SecretChatMessageDraftHeader } from './complect/DraftHeader';
import { useSecretChatSendMessageControl } from './complect/useSendMessageControl';
import { SecretChatMessageTextInputControl } from './input/TextInputControl';

const stopperPropagation = (event: EventStopper) => event.stopPropagation();

interface Props {
  listRef: React.RefObject<HTMLDivElement>;
  setLimits: (start: number, finish: number) => void;
  className?: string;
  scrollToAccentMessage: (messageId: SecretChat.MessageId) => void;
  setInitialLastReadTs: (id: SecretChat.StrMessageId) => void;
}

export const SecretChatMessageInputPanel = ({
  listRef,
  setLimits,
  className,
  scrollToAccentMessage,
  setInitialLastReadTs,
}: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const onMessageSent = useCallback(
    (message: SecretChat.ImportableMessage) => {
      if (listRef.current) {
        listRef.current.scrollTop = 0;
        setInitialLastReadTs(`${message.id}`);
      }
    },
    [listRef, setInitialLastReadTs],
  );

  const { isSending, sendMessageRef, draftTargetMessage, unreadsCount, messagesHashMap } =
    useSecretChatSendMessageControl(inputRef, onMessageSent);
  const [draftMessages, setDraftMessages] = useAtom(secretChatsDraftsAtom);
  const chat = useSecretChatContext();
  const draft = draftMessages[chat.chatId];

  useEffect(() => {
    if (draftTargetMessage) inputRef.current?.select();
  }, [draftTargetMessage]);

  useEffect(() => {
    if (
      (draft?.replyId || draft?.editId) &&
      !messagesHashMap[draft.replyId || draft.editId!] &&
      MyLib.keys(messagesHashMap).length > 1
    ) {
      setDraftMessages(prev => ({
        ...prev,
        [chat.chatId]: {
          ...prev[chat.chatId]!,
          editId: undefined,
          replyId: undefined,
        },
      }));
    }
  }, [chat.chatId, draft?.editId, draft?.replyId, messagesHashMap, setDraftMessages]);

  return (
    <StyledSecretChatMessageControlContainer
      className={className}
      onTouchStart={stopperPropagation}
    >
      <StyledSecretChatToDownButton
        onClick={() => {
          if (listRef.current === null) return;
          const listNode = listRef.current;
          setLimits(0, 50);
          listNode.scrollTo({ top: -listNode.clientHeight, behavior: 'instant' });
          setTimeout(() => listNode.scrollTo({ top: 0, behavior: 'smooth' }));
        }}
      >
        {!unreadsCount || (
          <StyledSecretChatMessageUnreadsCountBadge>{unreadsCount}</StyledSecretChatMessageUnreadsCountBadge>
        )}
        <IconArrowDown01StrokeRounded />
      </StyledSecretChatToDownButton>

      <StyledSecretChatMessageInputStockBlock>
        {draftTargetMessage && (
          <SecretChatMessageDraftHeader
            draftTargetMessage={draftTargetMessage}
            scrollToAccentMessage={scrollToAccentMessage}
            listRef={listRef}
          />
        )}

        <SecretChatMessageTextInputControl
          inputRef={inputRef}
          isSending={isSending}
          sendMessageRef={sendMessageRef}
        />
      </StyledSecretChatMessageInputStockBlock>
    </StyledSecretChatMessageControlContainer>
  );
};

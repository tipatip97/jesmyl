import { useEffect, useRef } from 'react';
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
  onMessageSent: (message: SecretChat.ImportableMessage) => void;
  listRef: React.RefObject<HTMLDivElement>;
  setLimits: (start: number, finish: number) => void;
  className?: string;
  scrollToAccentMessage: (targetMessage: SecretChat.Message) => void;
}

export const SecretChatMessageInputPanel = ({
  onMessageSent,
  listRef,
  setLimits,
  className,
  scrollToAccentMessage,
}: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { isSending, sendMessageRef, draftTargetMessage, unreadsCount, messagesHashMap } =
    useSecretChatSendMessageControl(inputRef, onMessageSent);
  const [draftMessages, setDraftMessages] = useAtom(secretChatsDraftsAtom);
  const chat = useSecretChatContext();
  const draft = draftMessages[chat.id];

  useEffect(() => {
    if (draftTargetMessage) inputRef.current?.select();
  }, [draftTargetMessage]);

  useEffect(() => {
    if (draft?.targetTs && !messagesHashMap[draft.targetTs]) {
      setDraftMessages(prev => ({ ...prev, [chat.id]: { ...prev[chat.id], type: 'text', targetTs: undefined } }));
    }
  }, [chat.id, draft?.targetTs, messagesHashMap, setDraftMessages]);

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

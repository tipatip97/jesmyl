import { SecretChat } from 'shared/api';
import { useAtom } from '../../../../../../../../complect/atoms';
import { IconCancel01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/cancel-01';
import { IconLinkBackwardStrokeRounded } from '../../../../../../../../complect/the-icon/icons/link-backward';
import { IconPencilEdit01StrokeSharp } from '../../../../../../../../complect/the-icon/icons/pencil-edit-01';
import { useSecretChatIdContext } from '../../../complect';
import { secretChatsDraftsAtom } from '../../../molecule';
import { StyledSecretChatMessageDraftHeader } from '../InputPanel.styled';

interface Props {
  draftTargetMessage: SecretChat.Message;
  scrollToAccentMessage: (targetMessage: SecretChat.Message) => void;
}

export const SecretChatMessageDraftHeader = ({ draftTargetMessage, scrollToAccentMessage }: Props) => {
  const chatId = useSecretChatIdContext();
  const [draftMessages, setDraftMessages] = useAtom(secretChatsDraftsAtom);
  const draft = draftMessages[chatId];

  return (
    <StyledSecretChatMessageDraftHeader $draft={draft}>
      <div
        className="flex flex-gap full-width"
        onClick={event => {
          event.stopPropagation();
          event.preventDefault();
          scrollToAccentMessage(draftTargetMessage);
        }}
      >
        <IconPencilEdit01StrokeSharp className="edit-icon margin-gap" />
        <IconLinkBackwardStrokeRounded className="reply-icon margin-gap" />
        <div className="info-block">
          <div className="title"></div>
          <div className="message-text ellipsis">{draftTargetMessage.text}</div>
        </div>
      </div>

      <IconCancel01StrokeRounded
        className="margin-gap"
        onClick={() =>
          setDraftMessages(prev => ({
            ...prev,
            [chatId]: { ...prev[chatId], targetTs: undefined },
          }))
        }
      />
    </StyledSecretChatMessageDraftHeader>
  );
};

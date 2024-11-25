import { useEffect } from 'react';
import { SecretChat } from 'shared/api';
import { useAtom } from '../../../../../../../../complect/atoms';
import { IconCancel01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/cancel-01';
import { IconLinkBackwardStrokeRounded } from '../../../../../../../../complect/the-icon/icons/link-backward';
import { IconPencilEdit01StrokeSharp } from '../../../../../../../../complect/the-icon/icons/pencil-edit-01';
import { secretChatClassNamesDict, useSecretChatIdContext } from '../../../complect';
import { secretChatsDraftsAtom } from '../../../molecule';
import { StyledSecretChatMessageDraftHeader } from '../InputPanel.styled';

interface Props {
  draftTargetMessage: SecretChat.ImportableMessage;
  scrollToAccentMessage: (messageId: SecretChat.MessageId) => void;
  listRef: React.RefObject<HTMLDivElement>;
}

export const SecretChatMessageDraftHeader = ({ draftTargetMessage, scrollToAccentMessage, listRef }: Props) => {
  const chatId = useSecretChatIdContext();
  const [draftMessages, setDraftMessages] = useAtom(secretChatsDraftsAtom);
  const draft = draftMessages[chatId];

  useEffect(() => {
    if (listRef.current === null || (!draft?.editId && !draft?.replyId)) return;

    const targetNode = listRef.current.querySelector(`[message-id='${draft.replyId || draft.editId}']`);
    if (targetNode === null) return;

    const type = draft.replyId ? 'reply' : 'edit';
    targetNode.classList.add(secretChatClassNamesDict.messageOnDraft, type);

    return () => {
      targetNode.classList.remove(secretChatClassNamesDict.messageOnDraft, type);
    };
  }, [draft?.editId, draft?.replyId, listRef]);

  return (
    <StyledSecretChatMessageDraftHeader $draft={draft}>
      <div
        className="flex flex-gap full-width"
        onClick={event => {
          event.stopPropagation();
          event.preventDefault();
          scrollToAccentMessage(draftTargetMessage.id);
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
            [chatId]: { ...prev[chatId]!, editId: undefined, replyId: undefined },
          }))
        }
      />
    </StyledSecretChatMessageDraftHeader>
  );
};

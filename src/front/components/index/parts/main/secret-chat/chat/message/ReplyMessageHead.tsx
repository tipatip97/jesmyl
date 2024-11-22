import { SecretChat } from 'shared/api';
import styled from 'styled-components';
import {
  useSecretChatContext,
  useSecretChatMessagesHashContext,
  useSecretChatUnreachedMessagesMessagesHashContext,
} from '../../complect';

export const SecretChatReplyMessageHead = ({ message }: { message: SecretChat.ImportableMessage }) => {
  const chat = useSecretChatContext();
  const messagesHashMap = useSecretChatMessagesHashContext();
  const replyTargets = useSecretChatUnreachedMessagesMessagesHashContext();

  const targetMessage = message.replyMessageId
    ? messagesHashMap[message.replyMessageId] ?? replyTargets?.[message.replyMessageId]
    : undefined;

  if (targetMessage === undefined || targetMessage.isRemoved) return null;

  return (
    <StyledMessageHead>
      <div className="vertical-border" />
      <div className="image" />
      <div className="info">
        <div className="title">{chat.members.find(member => member.id === targetMessage.sentMemberId)?.user.fio}</div>
        <div className="text">{targetMessage.text}</div>
      </div>
    </StyledMessageHead>
  );
};

const StyledMessageHead = styled.div.attrs({ className: 'message-head' })`
  position: relative;
  display: flex;
  gap: var(--main-gap);
  border-radius: 3px;
  background-color: rgba(var(--color--4-rgb), 0.1);
  padding-bottom: 5px;
  padding-top: 3px;
  overflow: hidden;

  .vertical-border {
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: var(--color--7);
  }

  .title,
  .text {
    line-height: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(var(--stock-width) - 100px);
    font-size: 0.8em;
    padding-right: 5px;
  }

  .title {
    font-weight: bold;
  }
`;

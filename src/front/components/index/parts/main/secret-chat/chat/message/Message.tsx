import { memo } from 'react';
import { SecretChat } from 'shared/api';
import { StyledMessage, StyledMessagePlace, StyledMessageText } from './Message.styled';
import { SecretChatReplyMessageHead } from './ReplyMessageHead';

export const SecretChatMessage = memo(
  ({
    message,
    prevMessage,
  }: {
    message: SecretChat.ImportableMessage;
    prevMessage: SecretChat.ImportableMessage | und;
  }) => {
    const date = new Date(message.createdAt);
    let attrDate: und | string = undefined;

    if (prevMessage) {
      const prevDateStr = prevMessage.createdAt.split('T')[0];
      attrDate = prevDateStr && prevDateStr !== message.createdAt.split('T')[0] ? prevDateStr : undefined;
    }

    return (
      <StyledMessagePlace
        attr-date={attrDate}
        message-id={message.id}
        sender-id={message.sentMemberId}
        message-type={message.type}
      >
        <StyledMessage>
          <div className="message-title color--7 margin-gap-b ellipsis full-width" />

          {message.replyMessageId != null && <SecretChatReplyMessageHead message={message} />}

          <StyledMessageText>{message.text}</StyledMessageText>
          <span className="timestamp">
            {message.prevText ? 'Изменено ' : null}
            {date.toLocaleTimeString('ru').slice(0, -3)}
          </span>
        </StyledMessage>
      </StyledMessagePlace>
    );
  },
);

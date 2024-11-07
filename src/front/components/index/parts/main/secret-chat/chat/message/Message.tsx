import { memo } from 'react';
import { SecretChat } from '../../../../../../../../back/apps/index/SecretChat.complect';
import { StyledMessage, StyledMessagePlace, StyledMessageText } from './Message.styled';
import { SecretChatReplyMessageHead } from './ReplyMessageHead';

export const SecretChatMessage = memo(
  ({ message, prevMessage }: { message: SecretChat.Message; prevMessage: SecretChat.Message | und }) => {
    const date = new Date(+message.ts / 10);
    const prevDate = prevMessage && new Date(+prevMessage.ts / 10);

    const dateStr = date.toLocaleDateString('ru');
    const prevDateStr = prevDate?.toLocaleDateString('ru');

    return (
      <StyledMessagePlace
        attr-date={prevDateStr && prevDateStr !== dateStr ? prevDateStr : undefined}
        sent-ts={message.ts}
        target-ts={message.targetTs}
        sender-id={message.senderId}
        message-type={message.type}
      >
        <StyledMessage>
          <div className="message-title color--7 margin-gap-b ellipsis full-width" />

          {message.type === 'reply' && <SecretChatReplyMessageHead message={message} />}

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

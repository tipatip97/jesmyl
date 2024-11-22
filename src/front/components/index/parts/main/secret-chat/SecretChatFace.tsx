import { Link } from 'react-router-dom';
import { SecretChat } from 'shared/api';
import styled from 'styled-components';
import { FaceItem } from '../../../../../complect/FaceItem';
import { IconBubbleChatEditStrokeRounded } from '../../../../../complect/the-icon/icons/bubble-chat-edit';
import { styledBadgeContainer } from './MarkUnreadSecretChatsPath';

interface Props {
  chat: SecretChat.ChatMiniInfo;
}

export const SecretChatFace = ({ chat }: Props) => {
  const lastMessage = chat.messages[0];
  const lastMessageMember = chat.members.find(member => member.id === lastMessage.sentMemberId);

  return (
    <Link
      to={chat.chatId}
      className="pointer"
    >
      <FaceItem>
        <StyledFaceLogo
          className="face-logo"
          $withUnreadBadge={false}
        >
          <IconBubbleChatEditStrokeRounded />
        </StyledFaceLogo>
        <StyledTextInfo className="face-title full-max-width">
          <div>
            <div className="ellipsis color--7">{chat.title}</div>
            <br />
            {lastMessageMember && <div className="ellipsis">{lastMessageMember.user.fio}</div>}
          </div>
          {lastMessage && (
            <div className="fade-07 full-max-width">
              <StyledLastMessageText>{lastMessage.text}</StyledLastMessageText>
              {' • '}
              {new Date(lastMessage.createdAt).toLocaleTimeString()}
            </div>
          )}
        </StyledTextInfo>
      </FaceItem>
    </Link>
  );
};

const StyledFaceLogo = styled.div.attrs({ className: 'with strong class name' })<{ $withUnreadBadge: boolean }>`
  &.with.strong.class.name {
    ${props => props.$withUnreadBadge && styledBadgeContainer('absolute')}
  }
`;

const StyledTextInfo = styled.div`
  line-height: 1;
`;

const StyledLastMessageText = styled.span.attrs({ className: 'ellipsis' })`
  max-width: calc(100vw - 170px);
`;

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SecretChat } from 'shared/api';
import { FaceItem } from '../../../../../complect/FaceItem';
import { MyLib, mylib } from 'front/utils';
import { IconBubbleChatEditStrokeRounded } from '../../../../../complect/the-icon/icons/bubble-chat-edit';
import { styledBadgeContainer } from './MarkUnreadSecretChatsPath';

interface Props {
  chat: SecretChat.ChatInfo;
  messagesHash: SecretChat.MessagesHashMap | und;
  lastReadTs: SecretChat.MessageTs | und;
}

export const SecretChatFace = ({ chat, messagesHash, lastReadTs }: Props) => {
  const messageTss = useMemo(() => MyLib.reverseSort(MyLib.keys(messagesHash ?? {})), [messagesHash]);
  if (messagesHash == null) return;

  const lastMessage = messagesHash[messageTss[0]];

  return (
    <Link
      to={chat.id}
      className="pointer"
    >
      <FaceItem>
        <StyledFaceLogo
          className="face-logo"
          $withUnreadBadge={!!messageTss[0] && lastReadTs !== messageTss[0]}
        >
          <IconBubbleChatEditStrokeRounded />
        </StyledFaceLogo>
        <StyledTextInfo className="face-title full-max-width">
          <div className="ellipsis">{chat.title}</div>
          {lastMessage && (
            <div className="fade-07 full-max-width">
              <StyledLastMessageText>{lastMessage.text}</StyledLastMessageText>
              {' • '}
              {new Date(+lastMessage.ts / 10).toLocaleTimeString()}
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

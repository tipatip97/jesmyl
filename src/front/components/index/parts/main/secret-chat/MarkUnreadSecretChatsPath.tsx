import { memo } from 'react';
import styled, { css } from 'styled-components';
import { useAtomValue } from '../../../../../complect/atoms';
import { MyLib, mylib } from 'front/utils';
import { useSecretChatMessagesTssContext } from './complect';
import { secretChatMessagesHashMapAtom, secretChatsLastReadTsAtom } from './molecule';

export const MarkUnreadSecretChatsPath = memo(
  ({ children, containerSelector }: { children?: React.ReactNode; containerSelector: string }) => {
    const messagesHash = useAtomValue(secretChatMessagesHashMapAtom);
    const chatLastReadTs = useAtomValue(secretChatsLastReadTsAtom);
    const messagesTss = useSecretChatMessagesTssContext();

    const isThereUnreadMessages = MyLib.keys(messagesHash).some(chatId => {
      const lastReadTs = chatLastReadTs[chatId] ?? '';

      return messagesTss[0] && lastReadTs < messagesTss[0];
    });

    return (
      <>
        <StyledPathItem
          $withBadge={isThereUnreadMessages}
          $containerSelector={containerSelector}
        />
        {children}
      </>
    );
  },
);

export const styledBadgeContainer = (selfPosition = 'relative') => css`
  position: ${selfPosition};

  &:after {
    content: '';
    position: absolute;
    background-color: var(--color--ko);
    width: 10px;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    top: 0;
    right: -4px;
  }
`;

const StyledPathItem = styled.span.attrs({ className: 'badge' })<{ $withBadge: boolean; $containerSelector: string }>`
  ${props =>
    props.$withBadge &&
    props.$containerSelector &&
    css`
      & + * ${props.$containerSelector}, & + ${props.$containerSelector} {
        ${styledBadgeContainer()}
      }
    `}
`;

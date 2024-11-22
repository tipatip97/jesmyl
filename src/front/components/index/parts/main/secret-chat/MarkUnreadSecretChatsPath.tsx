import { MyLib } from 'front/utils';
import { memo } from 'react';
import styled, { css } from 'styled-components';
import { useAtomValue } from '../../../../../complect/atoms';
import { useSecretChatIdContext, useSecretChatMessagesTssContext } from './complect';
import { secretChatsLastReadTsAtom, useChatMessagesHashMapValue } from './molecule';

export const MarkUnreadSecretChatsPath = memo(
  ({ children, containerSelector }: { children?: React.ReactNode; containerSelector: string }) => {
    const chatId = useSecretChatIdContext();
    const messagesHash = useChatMessagesHashMapValue(chatId);
    const chatLastReadTs = useAtomValue(secretChatsLastReadTsAtom);
    const messagesTss = useSecretChatMessagesTssContext();

    // const isThereUnreadMessages = MyLib.keys(messagesHash ?? {}).some(chatId => {
    //   const lastReadTs = chatLastReadTs[chatId] ?? '';

    //   return messagesTss[0] && lastReadTs < messagesTss[0];
    // });

    return (
      <>
        <StyledPathItem
          $withBadge={false}
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

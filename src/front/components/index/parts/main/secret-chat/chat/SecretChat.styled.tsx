import { SecretChat } from 'shared/api';
import styled, { css, keyframes } from 'styled-components';
import { IconLinkBackwardStrokeRounded } from '../../../../../../complect/the-icon/icons/link-backward';
import { secretChatClassNamesDict } from '../complect';
import { SecretChatMessageInputPanel } from './input-panel/InputPanel';

export const StyledSecretChatReplyIcon = styled(IconLinkBackwardStrokeRounded).attrs({ className: 'absolute' })`
  scale: var(--reply-swipe-progress);
`;

export const StyledReplyFloatIconBox = styled.div.attrs({ className: 'absolute flex center' })`
  right: -20px;
  top: 0;
  bottom: 0;
`;

export const StyledMessageInputPanel = styled(SecretChatMessageInputPanel)``;

export const StyledMessagesList = styled.div<{ $lastReadMessageId?: SecretChat.StrMessageId; className: string }>`
  display: flex;
  flex-direction: column-reverse;
  max-height: 100%;
  overflow: hidden auto;
  max-width: var(--stock-width);
  padding: 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  > ${StyledReplyFloatIconBox} {
    display: none;
    visibility: hidden;
  }

  ${props => css`
    [message-id='${props.$lastReadMessageId}']:not(:first-child) {
      padding-bottom: calc(var(--main-gap) * 6);

      &:before {
        @starting-style {
          scale: 0;
        }

        content: 'Новые сообщения';
        position: absolute;
        display: flex;
        justify-content: center;
        padding: 5px;
        background-color: var(--color--3);
        color: var(--color--1);
        width: 100%;
        bottom: var(--main-gap);
        left: -8px;
        scale: 1;
        transition: scale 0.1s 0.2s;
      }
    }
  `}
`;

const editAnimation = keyframes`${css`
  from {
    transform-origin: 0 100%;
  }

  to {
    transform-origin: 100% 100%;
  }
`}
  `;

const replyAnimation = keyframes`${css`
  0% {
    transform-origin: 100% 100%;
  }

  10% {
    transform-origin: 0 100%;
  }

  20% {
    transform-origin: 100% 100%;
  }

  25% {
    transform-origin: 100% 100%;
  }

  35% {
    transform-origin: 0 100%;
  }

  45% {
    transform-origin: 100% 100%;
  }

  50% {
    transform-origin: 100% 100%;
  }

  100% {
    transform-origin: 100% 100%;
  }
`}
  `;

const messageInAnimation = keyframes`${css`
  from {
    max-height: 100vh;
    bottom: -100vh;
  }
  to {
    max-height: 10000vh;
    bottom: 50vh;
  }
`}`;

export const StyledSecretChat = styled.div.attrs({
  className: 'the-secret-chat relative full-size flex column between',
})`
  --stock-width: min(600px, 100vw);

  ${`container: chat / inline-size;`}

  .${secretChatClassNamesDict.messageOnDraft} {
    &.reply,
    &.edit {
      .timestamp::before {
        display: inline-block;
        scale: 0.6;
        transform-origin: 0 100%;
        margin-right: 5px;
        vertical-align: top;
        height: 0;
        color: var(--color--2);
      }
    }

    &.reply {
      .timestamp::before {
        content: var(--url-icon-link-backward-stroke-rounded);
        animation: ${replyAnimation} 2s linear infinite;
      }
    }

    &.edit {
      .timestamp::before {
        content: var(--url-icon-edit-02-stroke-rounded);
        animation: ${editAnimation} 2s linear infinite;
      }
    }
  }

  &:has(.${secretChatClassNamesDict.messageOnContextMenu}) {
    ${StyledMessageInputPanel}, .header {
      display: none;
    }
  }

  .${secretChatClassNamesDict.messageOnContextMenu} {
    position: fixed;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(50px);
    top: 0;
    left: 0;
    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    z-index: 500;
    overflow-y: auto;

    .chat-message {
      position: absolute;
      animation: ${messageInAnimation} 0.1s ease forwards;
    }

    @supports not (backdrop-filter: blur(50px)) {
      background-color: var(--color--4);
    }
  }
`;

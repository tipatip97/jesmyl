import { MessageType } from '@prisma/client';
import { useAuth } from 'front/components/index/molecules';
import { memo } from 'react';
import { SecretChat } from 'shared/api';
import styled, { css, keyframes } from 'styled-components';
import { secretChatClassNamesDict, useSecretChatContext } from '../../complect';
import { StyledSecretChat } from '../SecretChat.styled';
import { StyledMessage, StyledMessagePlace, StyledMessageText } from '../message/Message.styled';

const inlineTypes: SecretChat.MessageType[] = ['ChatRename', 'ChatCreate', 'NewMember'];
const inlineTypesSelectors = inlineTypes.map(type => `[message-type='${type}']`);

const backgroundLessTypes: SecretChat.MessageType[] = [...inlineTypes, 'BigText'];
const backgroundLessTypesSelector = backgroundLessTypes.map(type => `[message-type='${type}']`).join(',&');

const markAsAccentMessageAnimation = keyframes`${css`
  from {
    background-color: var(--color--2);
  }

  to {
    background-color: transparent;
  }
`}`;

export const CssSecretChatMessage = memo(() => {
  const chat = useSecretChatContext();
  const auth = useAuth();
  const memberMe = auth.login ? chat.members.find(member => member.user.login === auth.login) : null;

  if (memberMe == null) return;

  return (
    <Styled
      $chat={chat}
      $myId={memberMe.id}
    />
  );
});

const Styled = styled.div<{
  $chat: SecretChat.ChatMiniInfo;
  $myId: number;
}>`
  ~ ${StyledSecretChat} {
    ${props => css`
      ${StyledMessagePlace}.weight-up {
        &${backgroundLessTypesSelector} {
          ${StyledMessage} {
            background-color: transparent;
          }
        }

        &[message-type='${MessageType.BigText}'] {
          @starting-style {
            scale: 0;
          }

          transition: scale 0.5s;
          scale: 1;

          ${StyledMessageText} {
            display: flex;
            justify-content: center;
            font-size: clamp(100px, 30vmin, 300px);
            line-height: 1;
            margin-top: -3vmin;
            image-rendering: pixelated;
          }
        }

        &[message-type='${MessageType.ChatRename}'] ${StyledMessageText}::before {
          content: ' переименовал(а) чат на ';
        }

        &[message-type='${MessageType.ChatCreate}'] ${StyledMessageText}::before {
          content: ' создал(а) чат ';
        }

        &[message-type='${MessageType.NewMember}'] ${StyledMessageText}::before {
          content: ' добавил(а) ';
        }

        &${inlineTypesSelectors.join(',&')} {
          ${StyledMessage} {
            width: 100%;
            max-width: 100%;
            text-align: center;

            ${StyledMessageText} {
              color: var(--color--7);

              &::before {
                color: var(--color--4);
              }
            }
          }

          .message-title,
          ${StyledMessageText} {
            display: inline;
          }
        }

        &.${secretChatClassNamesDict.markAsAccent} {
          animation: ${markAsAccentMessageAnimation} 3s linear;
        }
      }

      ${props.$chat.members.map(member => {
        return css`
          [sender-id='${member.id}'] .message-title {
            &::before {
              content: '${member.user.fio}';
            }

            ${props.$myId === member.id && `display: none;`}
          }

          [sender-id='${member.id}']:not(:is(${inlineTypesSelectors.join(',')})):has(
              + [sender-id='${member.id}']:not(:is(${inlineTypesSelectors.join(',')}))
            ) {
            .message-title {
              display: none;
            }
          }
        `;
      })}

      ${props.$chat.members.map(member => {
        const isOutgoingMessage = props.$myId === member.id;
        const selector = css`
          ${StyledMessagePlace}[sender-id='${member.id}'] ${StyledMessage}
        `;

        return isOutgoingMessage
          ? css`
              ${selector} {
                background-color: var(--color--2);
                float: right;
              }
            `
          : css`
              ${selector} {
                background-color: var(--color--1);
              }
            `;
      })}
    `}
  }
`;

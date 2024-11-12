import { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { DeviceId } from 'shared/api';
import { SecretChat } from 'shared/api';
import { MyLib, mylib } from 'front/utils';
import { makePseudoElementCorrectContentText } from '../../../../../../../complect/utils';
import { useDeviceId } from '../../../../../complect/takeDeviceId';
import { secretChatClassNamesDict, useSecretChatContext } from '../../complect';
import { StyledSecretChat } from '../SecretChat.styled';
import { StyledMessage, StyledMessagePlace, StyledMessageText } from '../message/Message.styled';

const inlineTypes: SecretChat.MessageType[] = ['chatRename', 'senderRename', 'chatCreate', 'newMember'];
const inlineTypesSelectors = inlineTypes.map(type => `[message-type='${type}']`);

const backgroundLessTypes: SecretChat.MessageType[] = [...inlineTypes, 'bigText'];
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
  const myDeviceId = useDeviceId();
  const chat = useSecretChatContext();

  return (
    <Styled
      $chat={chat}
      $myDeviceId={myDeviceId}
    />
  );
});

const Styled = styled.div<{
  $chat: SecretChat.ChatInfo;
  $myDeviceId: DeviceId;
}>`
  ~ ${StyledSecretChat} {
    ${props => css`
      ${StyledMessagePlace}.weight-up {
        &${backgroundLessTypesSelector} {
          ${StyledMessage} {
            background-color: transparent;
          }
        }

        &[message-type='bigText'] {
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

        &[message-type='chatRename'] ${StyledMessageText}::before {
          content: ' переименовал(а) чат на ';
        }

        &[message-type='chatCreate'] ${StyledMessageText}::before {
          content: ' создал(а) чат ';
        }

        &[message-type='newMember'] ${StyledMessageText}::before {
          content: ' добавил(а) ';
        }

        &[message-type='senderRename'] {
          ${StyledMessage} {
            ${StyledMessageText}::before {
              content: ' переименован(а) на ';
            }
          }
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

      ${MyLib.values(props.$chat.users).map(user => {
        const senderIdSelector = makePseudoElementCorrectContentText(user.id);

        return css`
          [sender-id='${senderIdSelector}'] .message-title {
            &::before {
              content: '${user.fio === user.id ? senderIdSelector : user.fio}';
            }

            ${props.$myDeviceId === user.id && `display: none;`}
          }

          [sender-id='${senderIdSelector}']:not(:is(${inlineTypesSelectors.join(',')})):has(
              + [sender-id='${senderIdSelector}']:not(:is(${inlineTypesSelectors.join(',')}))
            ) {
            .message-title {
              display: none;
            }
          }
        `;
      })}

      ${MyLib.values(props.$chat.users).map(user => {
        const isOutgoingMessage = props.$myDeviceId === user.id;
        const selector = css`
          ${StyledMessagePlace}[sender-id='${makePseudoElementCorrectContentText(user.id)}'] ${StyledMessage}
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

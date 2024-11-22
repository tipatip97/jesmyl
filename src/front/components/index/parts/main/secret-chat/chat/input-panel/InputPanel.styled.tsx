import { SecretChat } from 'shared/api';
import styled, { css } from 'styled-components';
import { isIPhone } from '../../../../../../../complect/device-differences';
import IconButton from '../../../../../../../complect/the-icon/IconButton';

export const StyledSecretChatMessageDraftHeader = styled.div.attrs({ className: 'flex between margin-gap-b' })<{
  $draft: SecretChat.MessageDraft | und;
}>`
  .message-text {
    font-size: 0.9em;
    max-width: calc(var(--stock-width) - 120px);
  }

  .info-block {
    border-left: 2px solid var(--color--7);
    padding-left: 8px;
    width: 100%;

    .title::after {
      color: var(--color--7);
      line-height: 1;
    }
  }

  ${props =>
    props.$draft?.editId
      ? css`
          .title::after {
            content: 'Редактирование';
          }

          .reply-icon {
            display: none;
          }
        `
      : css`
          .title::after {
            content: 'Ответ';
          }

          .edit-icon {
            display: none;
          }
        `}
`;

export const StyledSecretChatMessageInputStockBlock = styled.div`
  max-width: var(--stock-width);
  margin: auto;
`;

export const StyledSecretChatMessageSendIconButton = styled(IconButton)`
  border-radius: 50%;
`;

export const StyledSecretChatMessageUnreadsCountBadge = styled.div`
  position: absolute;
  padding: 1px 6px;
  height: 1.1lh;
  background-color: var(--color--7);
  color: var(--color--1);
  border-radius: 19px;
  display: flex;
  justify-content: center;
  font-size: 0.9em;
  top: -13px;
`;

export const StyledSecretChatToDownButton = styled.div.attrs({
  className: 'to-down-button absolute color--3 bgcolor--1 padding-gap flex center',
})`
  ${`container: to-down-button / inline-size;`}
  top: -50px;
  right: calc((100vw - var(--stock-width)) / 2 + 7px);
  border-radius: 50%;
  scale: 0;
  transition: scale 0.3s;
  width: 40px;
  height: 40px;
  aspect-ratio: 1;

  &.show {
    scale: 1;
  }
`;

export const StyledSecretChatMessageTextArea = styled.textarea.attrs({ className: 'scrollIntoViewOnMessageNew' })`
  max-height: 10lh;
  padding: 0 5px;
  width: 100%;
  resize: none;
  background-color: var(--color--1);
  transition: height 0.1s;
  border-radius: 5px;
  overflow: auto;
`;

export const StyledSecretChatMessageControlsPanel = styled.label.attrs({ className: 'full-width' })<{
  $textLinesCount: number | und;
}>`
  display: flex;
  gap: 8px;

  ${props =>
    !props.$textLinesCount || props.$textLinesCount < 2
      ? css`
          align-items: center;
        `
      : css`
          align-items: flex-end;
        `}

  ${StyledSecretChatMessageTextArea} {
    ${props =>
      props.$textLinesCount &&
      css`
        height: ${!props.$textLinesCount || props.$textLinesCount < 1 ? 1.2 : props.$textLinesCount + 1}lh;
      `}
  }
`;

export const StyledSecretChatMessageControlContainer = styled.div.attrs({
  className: 'full-width margin-gap-t relative bgcolor--2',
})`
  padding: 8px;

  ${isIPhone &&
  css`
    padding-bottom: 40px;
    transition: padding-bottom 0.2s;

    &:has(${StyledSecretChatMessageTextArea}:focus) {
      padding-bottom: 8px;
    }
  `}
`;

import styled from 'styled-components';

export const StyledMessageText = styled.div``;

export const StyledMessage = styled.div.attrs({ className: 'chat-message padding-gap' })`
  position: relative;
  width: min-content;
  max-width: calc(var(--stock-width) - 60px);
  min-width: 140px;
  border-radius: 7px;
  white-space: pre-line;
  word-wrap: break-word;
  overflow: hidden;

  .timestamp {
    display: inline-block;
    bottom: 3px;
    right: 10px;
    font-size: 0.8em;
    opacity: 0.8;
    white-space: nowrap;
    text-align: right;
    width: 100%;
    margin-top: 0.5em;
  }
`;

export const StyledMessagePlace = styled.div.attrs({ className: 'message-place weight-up full-width' })`
  --reply-swipe-progress: 0;

  position: relative;
  max-width: var(--stock-width);
  padding: 4px;
`;

export const StyledSecretChatMessageContextMenu = styled.div.attrs({
  className: 'bgcolor--1 color--3  padding-gap-h',
})`
  @starting-style {
    scale: 0;
  }

  position: absolute;
  top: 50vh;
  scale: 1;
  z-index: 500;
  transition: scale 0.3s 0.2s;
  border-radius: 5px;
  margin-top: -65px;
`;

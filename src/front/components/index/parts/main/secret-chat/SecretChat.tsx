import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DeviceId } from '../../../../../../back/apps/index/Index.model';
import { makeRegExp } from '../../../../../../back/complect/makeRegExp';
import { escapeText } from '../../../../../../back/complect/utils';
import { atom, useAtom } from '../../../../../complect/atoms';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { TheIconLoading } from '../../../../../complect/the-icon/IconLoading';
import { IconDelete01StrokeRounded } from '../../../../../complect/the-icon/icons/delete-01';
import { IconSentStrokeRounded } from '../../../../../complect/the-icon/icons/sent';
import { soki } from '../../../../../soki';
import { useDeviceId } from '../../../complect/takeDeviceId';
import { secretMessagesAtom } from './complect';

const draftMessagesAtom = atom<Partial<Record<DeviceId, string>>>({}, 'complect', 'draftSecretMessages');

export const SecretChatPage = () => {
  const [secretMessages, setSecretMessages] = useAtom(secretMessagesAtom);
  const targetDeviceIdStr = useParams().deviceId;
  const targetDeviceId = targetDeviceIdStr ? (escapeText(targetDeviceIdStr) as DeviceId) : null;
  const chat = targetDeviceId ? secretMessages[targetDeviceId] : null;
  const [draftMessages, setDraftMessages] = useAtom(draftMessagesAtom);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const myDeviceId = useDeviceId();
  const listRef = useRef<HTMLDivElement>(null);

  if (!chat || !targetDeviceId || !myDeviceId)
    return (
      <PhaseContainerConfigurer
        className="index-chat unknown"
        headTitle={<>Чат</>}
        content={<div className="full-size color--ko center">Собеседник не найден</div>}
      />
    );

  const message = draftMessages[targetDeviceId] || '';
  let prevDateStr = '';

  return (
    <PhaseContainerConfigurer
      className="index-chat"
      headTitle={<>Чат {chat.name}</>}
      head={
        <span className="flex flex-gap">
          <IconButton
            Icon={IconDelete01StrokeRounded}
            className="color--ko"
            confirm="Очистить переписку локально?"
            onClick={() => setSecretMessages(prev => ({ ...prev, [targetDeviceId]: { ...chat, messages: [] } }))}
          />
        </span>
      }
      content={
        <StyledChat className="full-size flex column between">
          <StyledMessagesList
            className="full-size"
            ref={listRef}
          >
            {chat.messages.map(message => {
              const date = new Date(message.ts);
              const dateStr = date.toLocaleDateString('ru');
              const dateAttr = prevDateStr && prevDateStr !== dateStr ? prevDateStr : undefined;
              prevDateStr = dateStr;

              return (
                <StyledMessagePlace
                  key={message.ts}
                  className={'margin-gap-t full-width'}
                  attr-date={dateAttr}
                  $isOutgoing={myDeviceId === message.senderDeviceId}
                >
                  <StyledMessage className="padding-gap">
                    {message.text}
                    <span className="timestamp">{date.toLocaleTimeString('ru')}</span>
                  </StyledMessage>
                </StyledMessagePlace>
              );
            })}
          </StyledMessagesList>
          <div className="full-width">
            <StyledErrorText className="color--ko">{errorMessage}</StyledErrorText>
            <label className="flex flex-gap full-width">
              <StyledInput
                onChange={event => {
                  setDraftMessages(prev => ({ ...prev, [targetDeviceId]: event.currentTarget.value }));
                }}
                value={draftMessages[targetDeviceId]}
              />
              <TheIconLoading isLoading={isSending}>
                <IconButton
                  Icon={IconSentStrokeRounded}
                  disabled={!message.trim()}
                  onClick={() => {
                    setIsSending(true);
                    setErrorMessage('');

                    soki
                      .send({ secretMessage: { deviceId: targetDeviceId, message: message.trim() } }, 'index')
                      .on(message => {
                        setIsSending(false);

                        if (message.secretMessage?.messageOrOffline == null) {
                          setErrorMessage('Собеседник не в сети');
                          return;
                        }

                        setDraftMessages(prev => ({ ...prev, [targetDeviceId]: '' }));
                        if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
                      });
                  }}
                />
              </TheIconLoading>
            </label>
          </div>
        </StyledChat>
      }
    />
  );
};

const StyledChat = styled.div``;

const StyledInput = styled.textarea`
  max-height: 10lh;
  width: 100%;
  resize: none;
  background-color: var(--color--1);

  height: ${props => {
    const lines = props.value?.toString().match(makeRegExp('/\\n/g'))?.length;

    return !lines || lines < 2 ? 2 : lines;
  }}lh;

  &.multiline {
    overflow: auto;
  }
`;

const StyledErrorText = styled.div`
  min-height: 1lh;
`;

const StyledMessagesList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 500px;
  max-height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMessage = styled.div`
  position: relative;
  width: min-content;
  max-width: 70vw;
  min-width: 130px;
  border-radius: 7px;
  white-space: pre-line;
  word-wrap: break-word;

  .timestamp {
    position: absolute;
    bottom: 3px;
    right: 10px;
    font-size: 0.8em;
    opacity: 0.8;
  }
`;

const StyledMessagePlace = styled.div<{ $isOutgoing: boolean }>`
  &[attr-date] {
    position: relative;
    margin-bottom: 30px;

    &:after {
      content: attr(attr-date);
      display: block;
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      bottom: -1.7em;
    }
  }

  ${StyledMessage} {
    padding-bottom: 1.5em;

    ${props =>
      props.$isOutgoing
        ? css`
            background-color: var(--color--2);
            float: right;
          `
        : css`
            background-color: var(--color--1);
          `}
  }
`;

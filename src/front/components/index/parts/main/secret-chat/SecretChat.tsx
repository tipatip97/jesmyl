import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DeviceId } from '../../../../../../back/apps/index/Index.model';
import { SecretChat } from '../../../../../../back/apps/index/SecretChat.complect';
import { makeRegExp } from '../../../../../../back/complect/makeRegExp';
import { atom, useAtom } from '../../../../../complect/atoms';
import { addEventListenerPipe, hookEffectPipe } from '../../../../../complect/hookEffectPipe';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import Modal from '../../../../../complect/modal/Modal/Modal';
import { ModalBody } from '../../../../../complect/modal/Modal/ModalBody';
import { ModalHeader } from '../../../../../complect/modal/Modal/ModalHeader';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { TheIconLoading } from '../../../../../complect/the-icon/IconLoading';
import { IconDelete01StrokeRounded } from '../../../../../complect/the-icon/icons/delete-01';
import { IconEdit02StrokeRounded } from '../../../../../complect/the-icon/icons/edit-02';
import { IconSentStrokeRounded } from '../../../../../complect/the-icon/icons/sent';
import { soki } from '../../../../../soki';
import { useDeviceId } from '../../../complect/takeDeviceId';
import { makeChatId, secretChatsAtom } from './complect';
import { SecretChatQrReader } from './SecretChatQrReader';

const draftMessagesAtom = atom<Partial<Record<SecretChat.ChatId, string>>>({}, 'complect', 'draftSecretMessages');

const enum LastTsFoundState {
  Not = 0,
  Now,
  Was,
}

const lastReadClassName = 'last-read-message';
const incomingMessageClassName = 'incoming-message';
const outgoingMessageClassName = 'outgoing-message';

type MessageInfo = {
  dateAttr?: string;
  className: string;
  timeStamp: string;
  message: SecretChat.MessageBody;
  isSenderMe: boolean;
};

let lastUserScrollTopPosition = 0;
const sliceInitialLimit = 50;
const upSliceLimit = (lim: number) => lim + 20;

export const SecretChatPage = () => {
  const [secretChats, setSecretChats] = useAtom(secretChatsAtom);
  const chatId = makeChatId(useParams().chatId);
  const chat = chatId ? secretChats[chatId] : null;
  const [draftMessages, setDraftMessages] = useAtom(draftMessagesAtom);
  const [isSending, setIsSending] = useState(false);
  const myDeviceId = useDeviceId();
  const listRef = useRef<HTMLDivElement>(null);
  const [isOpenRedact, setIsOpenRedact] = useState<unknown>(false);
  const [isRenameOpen, setIsRenameOpen] = useState<unknown>(false);
  const [lastReadTs, setLastReadTs] = useState(chat?.lastReadTs || 0);
  const [isInitRender, setIsInitRender] = useState(true);
  const [messagesLimit, setMessagesLimit] = useState(sliceInitialLimit);

  const updateChatData = (chatData: Partial<SecretChat.LocalChat>) => {
    if (chatId) setSecretChats(prev => ({ ...prev, [chatId]: { ...prev[chatId], ...chatData } }));
  };

  const { messageInfoDict, lastReadMessage } = useMemo(() => {
    const messageInfoDict: Record<SecretChat.MessageTs, MessageInfo> = {};
    let lastReadMessage: SecretChat.MessageBody | null = null;

    if (chat?.messages) {
      let prevDateStr = '';
      let foundLastTsState = LastTsFoundState.Not;

      for (let messagei = 0; messagei < chat.messages.length; messagei++) {
        const message = chat.messages[messagei];
        const date = new Date(+message.ts / 10);

        const dateStr = date.toLocaleDateString('ru');
        const dateAttr = prevDateStr && prevDateStr !== dateStr ? prevDateStr : undefined;
        prevDateStr = dateStr;

        if (foundLastTsState === LastTsFoundState.Not) {
          if (lastReadTs === date.getTime()) {
            foundLastTsState = LastTsFoundState.Now;
          }
        } else foundLastTsState = LastTsFoundState.Was;

        const info = (messageInfoDict[message.ts] = {
          dateAttr,
          className: `padding-gap-t full-width`,
          timeStamp: date.toLocaleTimeString('ru'),
          message,
          isSenderMe: myDeviceId === message.senderId,
        });

        if (foundLastTsState === LastTsFoundState.Now) {
          messageInfoDict[message.ts].className += ` ${lastReadClassName}`;
          lastReadMessage = message;
        }

        messageInfoDict[message.ts].className +=
          ' ' + (info.isSenderMe ? outgoingMessageClassName : incomingMessageClassName);
      }
    }

    return { messageInfoDict, lastReadMessage };
  }, [chat?.messages, lastReadTs, myDeviceId]);

  useEffect(() => document.querySelector(`.${lastReadClassName}`)?.scrollIntoView(), []);

  useEffect(() => {
    const lastMessage = chat?.messages[0] as SecretChat.MessageBody | und;

    if (lastMessage == null || listRef.current === null) return;

    if (lastMessage?.senderId !== myDeviceId && (!lastReadMessage || lastReadMessage.senderId !== myDeviceId)) {
      if (lastUserScrollTopPosition < -20) return;
      listRef.current.scrollTop = 0;

      return;
    }
    listRef.current.scrollTop = 0;

    setMessagesLimit(sliceInitialLimit);
    setLastReadTs(Math.trunc(+lastMessage.ts / 10));
  }, [chat?.messages, lastReadMessage, myDeviceId]);

  useEffect(() => {
    if (listRef.current === null || chatId == null) {
      if (isInitRender) setTimeout(setIsInitRender, 100, false);
      return;
    }
    const listNode = listRef.current;

    const setLastReadTsIfScrollBottom = () => {
      if (listNode.scrollTop < -20) return;

      setSecretChats(prev => {
        const lastMessage = prev[chatId].messages[0];
        if (lastMessage == null) return prev;

        const lastMessageTs = Math.trunc(+lastMessage.ts / 10);

        if (lastMessageTs === prev[chatId].lastReadTs) return prev;

        return {
          ...prev,
          [chatId]: {
            ...prev[chatId],
            lastReadTs: lastMessageTs,
          },
        };
      });
    };

    setTimeout(setLastReadTsIfScrollBottom, 100);

    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(listNode, 'scroll', () => {
          setTimeout(() => (lastUserScrollTopPosition = listNode.scrollTop));
          setLastReadTsIfScrollBottom();
        }),
      )
      .effect();
  }, [chatId, isInitRender, setSecretChats]);

  if (!chat || !chatId || !myDeviceId)
    return (
      <PhaseContainerConfigurer
        className="index-chat unknown"
        headTitle={<>Чат</>}
        content={<div className="full-size color--ko center">Собеседник не найден</div>}
      />
    );

  const draftMessage = draftMessages[chatId] || '';
  const fiosDict: Partial<Record<DeviceId, { fio: string; index: number }>> = {};

  chat.info.team.forEach(
    (deviceId, deviceIdi) => (fiosDict[deviceId] = { fio: chat.info.fios?.[deviceIdi], index: deviceIdi }),
  );

  return (
    <PhaseContainerConfigurer
      className="index-chat"
      headTitle={<span className="ellipsis ">Чат {chat.info.title}</span>}
      head={
        <span className="flex flex-gap">
          {chat.info.team[0] === myDeviceId ? (
            <IconButton
              Icon={IconEdit02StrokeRounded}
              onClick={setIsOpenRedact}
            />
          ) : (
            fiosDict[myDeviceId] && (
              <IconButton
                Icon={IconEdit02StrokeRounded}
                onClick={setIsRenameOpen}
                className="ellipsis"
              />
            )
          )}
          <IconButton
            Icon={IconDelete01StrokeRounded}
            className="color--ko"
            confirm="Очистить переписку локально?"
            onClick={() => updateChatData({ messages: [] })}
          />
        </span>
      }
      content={
        <StyledChat className="relative full-size flex column between">
          <StyledMessagesList
            className="full-size"
            ref={listRef}
          >
            {chat.messages.slice(0, messagesLimit).map(message => {
              const info = messageInfoDict[message.ts];

              return (
                <StyledMessagePlace
                  key={message.ts}
                  className={info.className}
                  attr-date={info.dateAttr}
                  $messageType={info.message.type}
                >
                  <StyledMessage className="padding-gap">
                    {info.isSenderMe || (
                      <div className="color--7 margin-gap-b ellipsis full-width">{fiosDict[message.senderId]?.fio}</div>
                    )}
                    <StyledMessageText>{message.text}</StyledMessageText>
                    <span className="timestamp">{info.timeStamp}</span>
                  </StyledMessage>
                </StyledMessagePlace>
              );
            })}
            {messagesLimit < chat.messages.length && (
              <div
                className="pointer color--7 full-width bgcolor--1 padding-gap flex center"
                onClick={() => setMessagesLimit(upSliceLimit)}
              >
                Показать предыдущие сообщения
              </div>
            )}
          </StyledMessagesList>
          <div className="full-width margin-gap-t relative">
            {/* {isThereUnreadMessages && <StyledIsThereUnreadMessagesIcon className="absolute color--ko pointers-none" />} */}
            <label className="flex flex-gap full-width">
              <StyledInput
                onChange={event => {
                  setDraftMessages(prev => ({ ...prev, [chatId]: event.currentTarget.value }));
                }}
                value={draftMessage}
              />
              <TheIconLoading isLoading={isSending}>
                <IconButton
                  Icon={IconSentStrokeRounded}
                  disabled={!draftMessage.trim()}
                  onClick={() => {
                    setIsSending(true);
                    const text = draftMessage.trim();

                    soki
                      .send(
                        {
                          secretMessage: {
                            chat: chat.info,
                            body: {
                              text,
                              type: text.match(
                                makeRegExp(
                                  '/^(\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)+|\\p{EPres}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F}))$/u',
                                ),
                              )
                                ? 'bigText'
                                : 'text',
                              senderId: myDeviceId,
                            },
                          },
                        },
                        'index',
                      )
                      .on(event => {
                        setIsSending(false);

                        if (event.secretMessage == null) return;

                        setDraftMessages(prev => ({ ...prev, [chatId]: '' }));
                        if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
                      });
                  }}
                />
              </TheIconLoading>
            </label>
          </div>
          <>
            {isOpenRedact && (
              <Modal onClose={setIsOpenRedact}>
                <ModalHeader>
                  <div className="full-width flex between">
                    <span>Настройки чата</span>
                    <SecretChatQrReader
                      onDeviceIdDetected={deviceId => {
                        setSecretChats((prev: SecretChat.Messages): SecretChat.Messages => {
                          return {
                            ...prev,
                            [chatId]: {
                              ...prev[chatId],
                              info: {
                                ...prev[chatId].info,
                                team: [...prev[chatId].info.team, deviceId],
                                fios: [...prev[chatId].info.fios, deviceId],
                              },
                            },
                          };
                        });
                      }}
                    />
                  </div>
                </ModalHeader>
                <ModalBody>
                  {fiosDict[myDeviceId] && (
                    <IconButton
                      Icon={IconEdit02StrokeRounded}
                      onClick={setIsRenameOpen}
                      className="ellipsis margin-gap-v"
                      prefix={fiosDict[myDeviceId]?.fio}
                    />
                  )}
                  <div>Название чата</div>
                  <KeyboardInput
                    value={chat.info.title}
                    withoutCloseButton
                    onChange={title => updateChatData({ info: { ...chat.info, title } })}
                  />
                </ModalBody>
              </Modal>
            )}
            {isRenameOpen && (
              <Modal onClose={setIsRenameOpen}>
                <ModalHeader>
                  <div className="full-width flex between">
                    <span>Переименовать себя</span>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <KeyboardInput
                    value={fiosDict[myDeviceId]?.fio}
                    withoutCloseButton
                    onChange={fio => {
                      const myFioi = fiosDict[myDeviceId]?.index;

                      if (myFioi == null) return;

                      const fios = [...chat.info.fios];

                      fios[myFioi] = fio;

                      updateChatData({ info: { ...chat.info, fios } });
                    }}
                  />
                </ModalBody>
              </Modal>
            )}
          </>
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

const StyledMessageText = styled.div``;

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

const StyledMessagePlace = styled.div<{ $messageType: SecretChat.MessageType }>`
  position: relative;

  &[attr-date] {
    padding-bottom: 30px;

    &:after {
      content: attr(attr-date);
      display: block;
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      bottom: 0.3em;
      bottom: 0.3em;
    }
  }

  ${props =>
    props.$messageType === 'bigText'
      ? css`
          ${StyledMessageText} {
            display: flex;
            justify-content: center;
            font-size: clamp(100px, 30vmin, 300px);
            line-height: 1;
            margin-top: -3vmin;
            image-rendering: pixelated;
          }
        `
      : css`
          &.${outgoingMessageClassName} {
            ${StyledMessage} {
              background-color: var(--color--2);
            }
          }

          &.${incomingMessageClassName} {
            ${StyledMessage} {
              background-color: var(--color--1);
            }
          }
        `}

  &.${outgoingMessageClassName} {
    ${StyledMessage} {
      float: right;
    }
  }

  &.${incomingMessageClassName} {
    ${StyledMessage} {
    }

    &.${lastReadClassName}${':not(:first-child)'} {
      padding-top: calc(var(--main-gap) * 6);

      &:before {
        content: 'Новые сообщения';
        position: absolute;
        display: flex;
        justify-content: center;
        padding: 5px;
        background-color: var(--color--3);
        color: var(--color--1);
        width: 50%;
        top: var(--main-gap);
        left: -8px;
      }
    }
  }

  ${StyledMessage} {
    padding-bottom: 1.5em;
  }
`;

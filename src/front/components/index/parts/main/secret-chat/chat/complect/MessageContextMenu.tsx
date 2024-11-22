import { IconEdit02StrokeRounded } from 'front/complect/the-icon/icons/edit-02';
import { useAuth } from 'front/components/index/molecules';
import { soki } from 'front/soki';
import { useEffect, useState } from 'react';
import { SecretChat } from 'shared/api';
import styled from 'styled-components';
import { BottomPopupItem } from '../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useAtom, useAtomSet } from '../../../../../../../complect/atoms';
import CopyTextButton from '../../../../../../../complect/CopyTextButton';
import { IconCopy01StrokeRounded } from '../../../../../../../complect/the-icon/icons/copy-01';
import {
  IconDelete01BulkRounded,
  IconDelete01StrokeRounded,
} from '../../../../../../../complect/the-icon/icons/delete-01';
import { IconLinkBackwardStrokeRounded } from '../../../../../../../complect/the-icon/icons/link-backward';
import { IconPinStrokeRounded } from '../../../../../../../complect/the-icon/icons/pin';
import {
  secretChatClassNamesDict,
  secretChatMessageTsAsOpenContextAtom,
  useSecretChatContext,
  useSecretChatMessagesHashContext,
} from '../../complect';
import { secretChatsDraftsAtom, useChatMessagesHashMapSet } from '../../molecule';
import { StyledSecretChatMessageContextMenu } from '../message/Message.styled';

export const MessageContextMenu = ({
  listRef,
  messageId,
}: {
  messageId: SecretChat.MessageId;
  listRef: React.RefObject<HTMLDivElement>;
}) => {
  const setMessageTs = useAtomSet(secretChatMessageTsAsOpenContextAtom);
  const [isOpenDeleteContent, setIsOpenDeleteContent] = useState<unknown>(false);
  let content = null;
  const messagesHash = useSecretChatMessagesHashContext();
  const chat = useSecretChatContext();
  const setMessages = useChatMessagesHashMapSet(chat.chatId);
  const [draftMessages, setDraftMessages] = useAtom(secretChatsDraftsAtom);
  const auth = useAuth();

  useEffect(() => {
    if (listRef.current === null) return;

    const targetNode = listRef.current.querySelector(`[message-id='${messageId}']`);
    if (targetNode === null) return;

    targetNode.classList.add(secretChatClassNamesDict.messageOnContextMenu);

    return () => {
      targetNode.classList.remove(secretChatClassNamesDict.messageOnContextMenu);
    };
  }, [listRef, messageId]);

  if (messagesHash[messageId] === undefined) return null;
  const message = messagesHash[messageId];

  const memberMe = auth.login ? chat.members.find(member => member.user.login === auth.login) : undefined;
  const isMyMessage = message.sentMemberId === memberMe?.id;
  const isEditableMessage = SecretChat.editableMessageTypesSet.has(message.type);

  if (isOpenDeleteContent) {
    const targetId = draftMessages[chat.chatId]?.replyId ?? draftMessages[chat.chatId]?.editId;

    const simplifyCurrentDraft =
      targetId === messageId
        ? () => {
            setDraftMessages(prev => ({
              ...prev,
              [chat.chatId]: {
                ...prev[chat.chatId],
                text: prev[chat.chatId]?.prevSimpleMessageText ?? '',
                editId: undefined,
                replyId: undefined,
                prevSimpleMessageText: '',
              },
            }));
          }
        : undefined;

    content = (
      <>
        <Item
          Icon={IconDelete01StrokeRounded}
          title="Удалить у меня"
          onClick={() => {
            setMessages(prev => {
              const newMessagesHash = { ...prev };
              newMessagesHash[messageId] = { ...newMessagesHash[messageId]!, isRemoved: true };
              return newMessagesHash;
            });
            simplifyCurrentDraft?.();
            setMessageTs(null);
          }}
        />
        {isMyMessage && (
          <Item
            Icon={IconDelete01BulkRounded}
            title="Удалить у всех"
            className="color--ko"
            onClick={() => {
              const send = soki.send(
                {
                  chatFetch: {
                    chatId: chat.chatId,
                    removeMessages: [messageId],
                  },
                },
                'index',
              );
              if (simplifyCurrentDraft) send.on(simplifyCurrentDraft);
              setMessageTs(null);
            }}
          />
        )}
      </>
    );
  } else {
    content = (
      <>
        <Item
          Icon={IconLinkBackwardStrokeRounded}
          title="Ответить"
          onClick={() => {
            setDraftMessages(prev => ({
              ...prev,
              [chat.chatId]: {
                ...prev[chat.chatId]!,
                editId: undefined,
                replyId: messageId,
              },
            }));
            setMessageTs(null);
          }}
        />
        {isEditableMessage && (
          <>
            <CopyTextButton
              text={message.text}
              withoutIcon
              onClose={() => setMessageTs(null)}
              description={
                <Item
                  Icon={IconCopy01StrokeRounded}
                  title="Скопировать"
                />
              }
            />
            {isMyMessage && (
              <Item
                Icon={IconEdit02StrokeRounded}
                title="Изменить"
                onClick={() => {
                  setDraftMessages(prev => ({
                    ...prev,
                    [chat.chatId]: {
                      ...prev[chat.chatId]!,
                      text: message.text,
                      editId: messageId,
                      replyId: undefined,
                      prevSimpleMessageText: prev[chat.chatId]?.text ?? '',
                    },
                  }));
                  setMessageTs(null);
                }}
              />
            )}
            <Item
              Icon={IconPinStrokeRounded}
              title="Закрепить"
            />
          </>
        )}
        <Item
          Icon={IconDelete01StrokeRounded}
          title="Удалить"
          className="color--ko"
          onClick={setIsOpenDeleteContent}
        />
      </>
    );
  }

  return <StyledSecretChatMessageContextMenu>{content}</StyledSecretChatMessageContextMenu>;
};

const Item = styled(BottomPopupItem)`
  margin: 0 var(--main-gap);

  .icon-box {
    margin-right: var(--main-big-gap);
  }
`;

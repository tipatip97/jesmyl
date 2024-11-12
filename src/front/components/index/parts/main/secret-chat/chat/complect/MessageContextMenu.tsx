import { useState } from 'react';
import styled from 'styled-components';
import { SecretChat } from 'shared/api';
import { BottomPopupItem } from '../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useAtom, useAtomSet } from '../../../../../../../complect/atoms';
import CopyTextButton from '../../../../../../../complect/CopyTextButton';
import { MyLib, mylib } from 'front/utils';
import { IconCopy01StrokeRounded } from '../../../../../../../complect/the-icon/icons/copy-01';
import {
  IconDelete01BulkRounded,
  IconDelete01StrokeRounded,
} from '../../../../../../../complect/the-icon/icons/delete-01';
import { IconEdit02StrokeRounded } from '../../../../../../../complect/the-icon/icons/edit-02';
import { IconLinkBackwardStrokeRounded } from '../../../../../../../complect/the-icon/icons/link-backward';
import { IconPinStrokeRounded } from '../../../../../../../complect/the-icon/icons/pin';
import { soki } from '../../../../../../../soki';
import { useDeviceId } from '../../../../../complect/takeDeviceId';
import {
  secretChatMessageTsAsOpenContextAtom,
  useSecretChatContext,
  useSecretChatMessagesHashContext,
} from '../../complect';
import { secretChatMessagesHashMapAtom, secretChatsDraftsAtom } from '../../molecule';
import { StyledSecretChatMessageContextMenu } from '../message/Message.styled';

export const MessageContextMenu = () => {
  const [messageTs, setMessageTs] = useAtom(secretChatMessageTsAsOpenContextAtom);
  const [isOpenDeleteContent, setIsOpenDeleteContent] = useState<unknown>(false);
  let content = null;
  const messagesHash = useSecretChatMessagesHashContext();
  const setMessages = useAtomSet(secretChatMessagesHashMapAtom);
  const [draftMessages, setDraftMessages] = useAtom(secretChatsDraftsAtom);
  const chat = useSecretChatContext();
  const myDeviceId = useDeviceId();

  if (messageTs === null || messagesHash[messageTs] === undefined) return null;
  const message = messagesHash[messageTs];

  const isMyMessage = message.senderId === myDeviceId;
  const isEditableMessage = SecretChat.editableMessageTypesSet.has(message.type);

  if (isOpenDeleteContent) {
    const simplifyCurrentDraft =
      draftMessages[chat.id]?.targetTs === messageTs
        ? () => {
            setDraftMessages(prev => ({
              ...prev,
              [chat.id]: {
                ...prev[chat.id],
                text: prev[chat.id]?.text ?? '',
                type: 'text',
                targetTs: undefined,
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
              const newMessagesHash = { ...messagesHash };
              delete newMessagesHash[messageTs];
              return { ...prev, [chat.id]: newMessagesHash };
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
                  secretMessage: {
                    chatId: chat.id,
                    targetIds: MyLib.keys(chat.users),
                    body: {
                      senderId: myDeviceId,
                      text: '',
                      type: 'delete',
                      targetTs: messageTs,
                    },
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
              [chat.id]: {
                ...prev[chat.id],
                text: prev[chat.id]?.text ?? '',
                targetTs: messageTs,
                type: 'reply',
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
                    [chat.id]: { text: message.text, targetTs: messageTs, type: 'edit' },
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

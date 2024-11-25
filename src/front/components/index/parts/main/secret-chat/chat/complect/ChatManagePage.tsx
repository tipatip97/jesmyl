import { FaceItem } from 'front/complect/FaceItem';
import PhaseContainerConfigurer from 'front/complect/phase-container/PhaseContainerConfigurer';
import IconButton from 'front/complect/the-icon/IconButton';
import { IconPlusSignCircleStrokeRounded } from 'front/complect/the-icon/icons/plus-sign-circle';
import { soki } from 'front/soki';
import { useEffect, useState } from 'react';
import { SecretChat } from 'shared/api';
import { useSecretChatContext } from '../../complect';

export const ChatManagePage = () => {
  const chat = useSecretChatContext();
  const [users, setUsers] = useState<SecretChat.ChatMemberUser[] | null>(null);
  const chatMembersSet = new Set(chat.members.map(member => member.user.id));
  const [addingUserId, setAddingUserId] = useState<SecretChat.UserId | null>(null);

  useEffect(() => {
    soki.send({ chatsFetch: { users: true } }, 'index').on(({ chatsData }) => {
      setUsers(chatsData?.users ?? []);
    });
  }, [chat.chatId]);

  return (
    <PhaseContainerConfigurer
      className="index-chat"
      hideFooterMenu
      contentClass=" "
      headTitle={<span className="ellipsis ">Управление чатом {chat.title}</span>}
      content={users?.map(user => {
        return (
          <FaceItem
            key={user.id}
            className="flex flex-gap margin-gap-v"
          >
            {user.fio}
            {chatMembersSet.has(user.id) || (
              <IconButton
                Icon={IconPlusSignCircleStrokeRounded}
                isLoading={addingUserId === user.id}
                disabled={addingUserId !== null}
                onClick={() => {
                  setAddingUserId(user.id);
                  soki
                    .send({ chatFetch: { chatId: chat.chatId, newMember: { userLogin: user.login } } }, 'index')
                    .on(() => {
                      setAddingUserId(null);
                    });
                }}
              />
            )}
          </FaceItem>
        );
      })}
    />
  );
};

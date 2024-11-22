import { useState } from 'react';
import { useAtomSet } from '../../../../../../../complect/atoms';
import Modal from '../../../../../../../complect/modal/Modal/Modal';
import { ModalBody } from '../../../../../../../complect/modal/Modal/ModalBody';
import { ModalHeader } from '../../../../../../../complect/modal/Modal/ModalHeader';
import IconButton from '../../../../../../../complect/the-icon/IconButton';
import { IconDelete01StrokeRounded } from '../../../../../../../complect/the-icon/icons/delete-01';
import { IconEdit02StrokeRounded } from '../../../../../../../complect/the-icon/icons/edit-02';
import { useDeviceId } from '../../../../../complect/takeDeviceId';
import { useSecretChatContext } from '../../complect';
import { secretChatsLastReadTsAtom, useChatMessagesHashMapSet } from '../../molecule';
import { Link } from 'react-router-dom';

export const SecretChatHead = () => {
  const [isOpenRedact, setIsOpenRedact] = useState<unknown>(false);

  return (
    <>
      <span className="flex flex-gap">
        <Link to="manage">
          <IconButton
            Icon={IconEdit02StrokeRounded}
            // onClick={setIsOpenRedact}
            className="padding-gap"
          />
        </Link>
      </span>
      {isOpenRedact && <EditModal onClose={setIsOpenRedact} />}
    </>
  );
};

const EditModal = ({ onClose }: { onClose: (isOpen: false) => void }) => {
  const chat = useSecretChatContext();
  const setMessages = useChatMessagesHashMapSet(chat.chatId);
  const setSecretChatLastReadTs = useAtomSet(secretChatsLastReadTsAtom);
  const myDeviceId = useDeviceId();

  const [newTitle, setNewTitle] = useState(chat.title);

  // const myUserData = chat.users[myDeviceId];
  // const myFio = myUserData?.fio ?? '';
  // const [newFio, setNewFio] = useState(myFio);

  // const isMeManager = myUserData?.role === 'admin' || myUserData?.role === 'creator';

  return (
    <Modal onClose={onClose}>
      <ModalHeader>
        <div className="full-width flex between">
          <span>Настройки чата</span>
          <span className="flex flex-gap">
            {/* {isMeManager && (
              // <SecretChatQrReader
              //   onDeviceIdDetected={(deviceId, fio) => {
              //     if (chat.users[deviceId]) return;

              //     soki
              //       .send(
              //         {
              //           chatMessage: {
              //             chat: {
              //               ...chat,
              //               users: {
              //                 ...chat.users,
              //                 [deviceId]: {
              //                   id: deviceId,
              //                   fio: fio || deviceId,
              //                   role: 'user',
              //                 },
              //               },
              //             },
              //             chatId: chat.id,
              //             targetIds: MyLib.keys(chat.users).concat(deviceId),
              //             body: {
              //               senderId: myDeviceId,
              //               text: fio || deviceId,
              //               type: 'newMember',
              //             },
              //           },
              //         },
              //         'index',
              //       )
              //       .on(() => onClose(false));
              //   }}
              // />
            )} */}
            <IconButton
              Icon={IconDelete01StrokeRounded}
              className="color--ko"
              confirm="Очистить переписку локально?"
              // onClick={() => {
              //   setSecretChatMessages(prev => ({ ...prev, [chat.id]: {} }));
              //   setSecretChatLastReadTs(prev => ({ ...prev, [chat.id]: undefined! }));
              // }}
            />
          </span>
        </div>
      </ModalHeader>
      <ModalBody>
        {/* {isMeManager && (
          <>
            <div>Название чата</div>
            <KeyboardInput
              value={newTitle}
              withoutCloseButton
              onChange={setNewTitle}
            />
          </>
        )} */}

        <div>Моё имя</div>
        {/* <KeyboardInput
          value={newFio}
          withoutCloseButton
          onChange={setNewFio}
        /> */}
      </ModalBody>
      {/* <ModalFooter>
        <IconButton
          Icon={IconCheckmarkBadge01StrokeRounded}
          postfix="Изменить"
          className="color--ok"
          disabled={!newFio || !newTitle || (myFio === newFio && newTitle === chat.title)}
          disabledReason={
            !newFio ? 'Имя должно быть заполнено' : !newTitle ? 'Название чата пустое' : 'Изменений не было'
          }
          onClick={() => {
            if (myFio !== newFio) {
              soki
                .send(
                  {
                    chatMessage: {
                      chatId: chat.id,
                      targetIds: MyLib.keys(chat.users),
                      body: {
                        senderId: myDeviceId,
                        text: newFio,
                        type: 'senderRename',
                      },
                    },
                  },
                  'index',
                )
                .on(() => onClose(false));
            }

            if (newTitle !== chat.title) {
              soki
                .send(
                  {
                    chatMessage: {
                      chatId: chat.id,
                      targetIds: MyLib.keys(chat.users),
                      body: {
                        senderId: myDeviceId,
                        text: newTitle,
                        type: 'chatRename',
                      },
                    },
                  },
                  'index',
                )
                .on(() => onClose(false));
            }
          }}
        />
      </ModalFooter> */}
    </Modal>
  );
};

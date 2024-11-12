import { useState } from 'react';
import { useAtomSet } from '../../../../../../../complect/atoms';
import KeyboardInput from '../../../../../../../complect/keyboard/KeyboardInput';
import Modal from '../../../../../../../complect/modal/Modal/Modal';
import { ModalBody } from '../../../../../../../complect/modal/Modal/ModalBody';
import { ModalFooter } from '../../../../../../../complect/modal/Modal/ModalFooter';
import { ModalHeader } from '../../../../../../../complect/modal/Modal/ModalHeader';
import { MyLib, mylib } from 'front/utils';
import IconButton from '../../../../../../../complect/the-icon/IconButton';
import { IconCheckmarkBadge01StrokeRounded } from '../../../../../../../complect/the-icon/icons/checkmark-badge-01';
import { IconDelete01StrokeRounded } from '../../../../../../../complect/the-icon/icons/delete-01';
import { IconEdit02StrokeRounded } from '../../../../../../../complect/the-icon/icons/edit-02';
import { soki } from '../../../../../../../soki';
import { useDeviceId } from '../../../../../complect/takeDeviceId';
import { useSecretChatContext } from '../../complect';
import { secretChatMessagesHashMapAtom, secretChatsLastReadTsAtom } from '../../molecule';
import { SecretChatQrReader } from '../../SecretChatQrReader';

export const SecretChatHead = () => {
  const [isOpenRedact, setIsOpenRedact] = useState<unknown>(false);

  return (
    <>
      <span className="flex flex-gap">
        <IconButton
          Icon={IconEdit02StrokeRounded}
          onClick={setIsOpenRedact}
          className="padding-gap"
        />
      </span>
      {isOpenRedact && <EditModal onClose={setIsOpenRedact} />}
    </>
  );
};

const EditModal = ({ onClose }: { onClose: (isOpen: false) => void }) => {
  const setSecretChatMessages = useAtomSet(secretChatMessagesHashMapAtom);
  const setSecretChatLastReadTs = useAtomSet(secretChatsLastReadTsAtom);
  const chat = useSecretChatContext();
  const myDeviceId = useDeviceId();

  const [newTitle, setNewTitle] = useState(chat.title);

  const myUserData = chat.users[myDeviceId];
  const myFio = myUserData?.fio ?? '';
  const [newFio, setNewFio] = useState(myFio);

  const isMeManager = myUserData?.role === 'admin' || myUserData?.role === 'creator';

  return (
    <Modal onClose={onClose}>
      <ModalHeader>
        <div className="full-width flex between">
          <span>Настройки чата</span>
          <span className="flex flex-gap">
            {isMeManager && (
              <SecretChatQrReader
                onDeviceIdDetected={(deviceId, fio) => {
                  if (chat.users[deviceId]) return;

                  soki
                    .send(
                      {
                        secretMessage: {
                          chat: {
                            ...chat,
                            users: {
                              ...chat.users,
                              [deviceId]: {
                                id: deviceId,
                                fio: fio || deviceId,
                                role: 'user',
                              },
                            },
                          },
                          chatId: chat.id,
                          targetIds: MyLib.keys(chat.users).concat(deviceId),
                          body: {
                            senderId: myDeviceId,
                            text: fio || deviceId,
                            type: 'newMember',
                          },
                        },
                      },
                      'index',
                    )
                    .on(() => onClose(false));
                }}
              />
            )}
            <IconButton
              Icon={IconDelete01StrokeRounded}
              className="color--ko"
              confirm="Очистить переписку локально?"
              onClick={() => {
                setSecretChatMessages(prev => ({ ...prev, [chat.id]: {} }));
                setSecretChatLastReadTs(prev => ({ ...prev, [chat.id]: undefined! }));
              }}
            />
          </span>
        </div>
      </ModalHeader>
      <ModalBody>
        {isMeManager && (
          <>
            <div>Название чата</div>
            <KeyboardInput
              value={newTitle}
              withoutCloseButton
              onChange={setNewTitle}
            />
          </>
        )}

        <div>Моё имя</div>
        <KeyboardInput
          value={newFio}
          withoutCloseButton
          onChange={setNewFio}
        />
      </ModalBody>
      <ModalFooter>
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
                    secretMessage: {
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
                    secretMessage: {
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
      </ModalFooter>
    </Modal>
  );
};

import { MessageType } from '@prisma/client';
import KeyboardInput from 'front/complect/keyboard/KeyboardInput';
import Modal from 'front/complect/modal/Modal/Modal';
import { ModalBody } from 'front/complect/modal/Modal/ModalBody';
import { ModalFooter } from 'front/complect/modal/Modal/ModalFooter';
import { ModalHeader } from 'front/complect/modal/Modal/ModalHeader';
import IconButton from 'front/complect/the-icon/IconButton';
import { soki } from 'front/soki';
import { MyLib } from 'front/utils';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SecretChat } from 'shared/api';
import { useAtomValue } from '../../../../../complect/atoms';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { IconCheckmarkCircle03StrokeRounded } from '../../../../../complect/the-icon/icons/checkmark-circle-03';
import { IconMessageAdd01StrokeRounded } from '../../../../../complect/the-icon/icons/message-add-01';
import { SecretChatFace } from './SecretChatFace';
import { SecretChatPage } from './chat/SecretChat';
import { secretChatFacesAtom } from './molecule';

export const IndexSecretChats = ({ withoutBackButton }: { withoutBackButton?: boolean }) => {
  const [isNewChatOpen, setIsNewChatOpen] = useState<unknown>(false);
  const chats = useAtomValue(secretChatFacesAtom);

  const [newChatTitle, setNewChatTitle] = useState('');
  const [isNewChatSending, setIsNewChatSending] = useState(false);

  if (1) return null;

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseContainerConfigurer
            className="index-chats"
            withoutBackButton={withoutBackButton}
            headTitle="Чаты"
            head={
              <span className="flex flex-gap">
                <IconMessageAdd01StrokeRounded onClick={setIsNewChatOpen} />
              </span>
            }
            content={
              <>
                {MyLib.values(chats).map(chat => {
                  return (
                    <SecretChatFace
                      key={chat.chatId}
                      chat={chat}
                    />
                  );
                })}
                {isNewChatOpen && (
                  <Modal onClose={setIsNewChatOpen}>
                    <ModalHeader>Новый чат</ModalHeader>
                    <ModalBody>
                      <KeyboardInput
                        value={newChatTitle}
                        onChange={setNewChatTitle}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <IconButton
                        Icon={IconCheckmarkCircle03StrokeRounded}
                        className="color--ok"
                        postfix="Создать"
                        disabled={!newChatTitle}
                        isLoading={isNewChatSending}
                        onClick={() => {
                          setIsNewChatSending(true);

                          soki
                            .send(
                              {
                                chatFetch: {
                                  chatId: SecretChat.ChatId.def,
                                  message: {
                                    text: newChatTitle,
                                    type: MessageType.ChatCreate,
                                  },
                                },
                              },
                              'index',
                            )
                            .on(() => {
                              setIsNewChatSending(false);
                              setIsNewChatOpen(false);
                            });
                        }}
                      />
                    </ModalFooter>
                  </Modal>
                )}
              </>
            }
          />
        }
      />

      <Route
        path=":chatId/*"
        element={<SecretChatPage />}
      />
    </Routes>
  );
};

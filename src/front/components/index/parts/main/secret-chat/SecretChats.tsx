import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SecretChat } from 'shared/api';
import { itIt } from 'shared/utils';
import { useAtomSet, useAtomValue } from '../../../../../complect/atoms';
import { FullContent } from '../../../../../complect/fullscreen-content/FullContent';
import { MyLib, mylib } from 'front/utils';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import QRCode from '../../../../../complect/qr-code/QRCode';
import { IconQrCodeStrokeRounded } from '../../../../../complect/the-icon/icons/qr-code';
import { soki } from '../../../../../soki';
import { useDeviceId } from '../../../complect/takeDeviceId';
import { useAuth } from '../../../molecules';
import { SecretChatFace } from './SecretChatFace';
import { SecretChatQrReader } from './SecretChatQrReader';
import { SecretChatPage } from './chat/SecretChat';
import { secretChatingJoinerStringify } from './complect';
import { secretChatMessagesHashMapAtom, secretChatsAtom, secretChatsLastReadTsAtom } from './molecule';

export const IndexSecretChats = ({ withoutBackButton }: { withoutBackButton?: boolean }) => {
  const [isQrCodeOpen, setIsQrCodeOpen] = useState<unknown>(false);
  const myDeviceId = useDeviceId();
  const chats = useAtomValue(secretChatsAtom);
  const chatsLastReadTs = useAtomValue(secretChatsLastReadTsAtom);
  const chatMessagesHashMaps = useAtomValue(secretChatMessagesHashMapAtom);
  const setChats = useAtomSet(secretChatsAtom);
  const setChatMessages = useAtomSet(secretChatMessagesHashMapAtom);
  const setChatsLastReadTs = useAtomSet(secretChatsLastReadTsAtom);
  const auth = useAuth();

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
                <SecretChatQrReader
                  onDeviceIdDetected={(deviceId, joinerFio) => {
                    const chatId = `${Date.now()}${Math.random()}` as SecretChat.ChatId;
                    const title = [auth.fio || myDeviceId, joinerFio || deviceId].filter(itIt).join(', ');

                    const chat: SecretChat.ChatInfo = {
                      id: chatId,
                      title,
                      users: {
                        [myDeviceId]: {
                          fio: auth.fio || myDeviceId,
                          id: myDeviceId,
                          role: 'creator',
                        },
                        [deviceId]: {
                          fio: joinerFio || deviceId,
                          id: deviceId,
                          role: 'user',
                        },
                      },
                    };

                    setChats(prev => ({ ...prev, [chatId]: chat }));
                    setChatMessages(prev => ({ ...prev, [chatId]: {} }));

                    soki
                      .send(
                        {
                          secretMessage: {
                            chat,
                            chatId: chat.id,
                            targetIds: MyLib.keys(chat.users),
                            body: {
                              senderId: myDeviceId,
                              text: title,
                              type: 'chatCreate',
                            },
                          },
                        },
                        'index',
                      )
                      .on(({ secretMessage }) => {
                        if (secretMessage == null) return;

                        setChatsLastReadTs(prev => ({ ...prev, [chatId]: secretMessage.message.ts }));
                      });
                  }}
                />
                {myDeviceId && <IconQrCodeStrokeRounded onClick={setIsQrCodeOpen} />}
              </span>
            }
            content={
              <>
                {MyLib.keys(chats).map(chatId => {
                  return (
                    <SecretChatFace
                      key={chatId}
                      chat={chats[chatId]!}
                      messagesHash={chatMessagesHashMaps[chatId]}
                      lastReadTs={chatsLastReadTs[chatId]}
                    />
                  );
                })}
                {isQrCodeOpen && (
                  <FullContent
                    onClose={setIsQrCodeOpen}
                    className=""
                    containerClassName="flex center full-size"
                    closable
                  >
                    <QRCode
                      text={secretChatingJoinerStringify(myDeviceId, auth.fio)}
                      className="full-width"
                    />
                  </FullContent>
                )}
              </>
            }
          />
        }
      />

      <Route
        path=":chatId"
        element={<SecretChatPage />}
      />
    </Routes>
  );
};

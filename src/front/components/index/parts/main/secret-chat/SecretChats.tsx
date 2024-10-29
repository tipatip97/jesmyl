import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { SecretChat } from '../../../../../../back/apps/index/SecretChat.complect';
import { FaceItem } from '../../../../../complect/FaceItem';
import { useAtomSet, useAtomValue } from '../../../../../complect/atoms';
import { FullContent } from '../../../../../complect/fullscreen-content/FullContent';
import { MyLib } from '../../../../../complect/my-lib/MyLib';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import QRCode from '../../../../../complect/qr-code/QRCode';
import { IconBubbleChatEditStrokeRounded } from '../../../../../complect/the-icon/icons/bubble-chat-edit';
import { IconQrCodeStrokeRounded } from '../../../../../complect/the-icon/icons/qr-code';
import { useDeviceId } from '../../../complect/takeDeviceId';
import { useAuth } from '../../../molecules';
import { SecretChatPage } from './SecretChat';
import { SecretChatQrReader } from './SecretChatQrReader';
import { secretChatingWithQrCodeKey, secretChatsAtom } from './complect';

export const IndexSecretChats = ({ withoutBackButton }: { withoutBackButton?: boolean }) => {
  const [isQrCodeOpen, setIsQrCodeOpen] = useState<unknown>(false);
  const myDeviceId = useDeviceId();
  const secretMessages = useAtomValue(secretChatsAtom);
  const setSecretChats = useAtomSet(secretChatsAtom);
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
                  onDeviceIdDetected={deviceId => {
                    setSecretChats((prev: SecretChat.Messages): SecretChat.Messages => {
                      const chatId = `${Date.now()}${Math.random()}` as const;

                      const localChat: SecretChat.LocalChat = {
                        info: {
                          id: chatId,
                          team: [myDeviceId, deviceId],
                          fios: [auth.fio || myDeviceId, deviceId],
                          title: deviceId,
                        },
                        lastReadTs: 0,
                        messages: [],
                      };

                      return { ...prev, [chatId]: localChat };
                    });
                  }}
                />
                {myDeviceId && <IconQrCodeStrokeRounded onClick={setIsQrCodeOpen} />}
              </span>
            }
            content={
              <>
                {MyLib.keys(secretMessages).map(chatId => {
                  const chat = secretMessages[chatId];

                  return (
                    <Link
                      key={chatId}
                      to={'' + chatId}
                    >
                      <FaceItem>
                        <div className="face-logo">
                          <IconBubbleChatEditStrokeRounded />
                        </div>
                        <div className="face-title ellipsis">{chat.info.title}</div>
                      </FaceItem>
                    </Link>
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
                      text={JSON.stringify({ [secretChatingWithQrCodeKey]: { deviceId: myDeviceId } })}
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

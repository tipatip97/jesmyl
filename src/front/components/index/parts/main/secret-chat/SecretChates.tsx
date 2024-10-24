import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { DeviceId } from '../../../../../../back/apps/index/Index.model';
import { FaceItem } from '../../../../../complect/FaceItem';
import { useAtom } from '../../../../../complect/atoms';
import { FullContent } from '../../../../../complect/fullscreen-content/FullContent';
import { MyLib } from '../../../../../complect/my-lib/MyLib';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import QRCode from '../../../../../complect/qr-code/QRCode';
import { QrReader } from '../../../../../complect/qr-code/useQrReader';
import { IconBubbleChatAddStrokeRounded } from '../../../../../complect/the-icon/icons/bubble-chat-add';
import { IconBubbleChatEditStrokeRounded } from '../../../../../complect/the-icon/icons/bubble-chat-edit';
import { IconQrCodeStrokeRounded } from '../../../../../complect/the-icon/icons/qr-code';
import { useDeviceId } from '../../../complect/takeDeviceId';
import { SecretChatPage } from './SecretChat';
import { secretMessagesAtom } from './complect';

const secretMessagingWithQrCodeKey = 'secretMessagingWith';

export const IndexSecretChates = () => {
  const [isScannerOpen, setIsScannerOpen] = useState<unknown>(false);
  const [isQrCodeOpen, setIsQrCodeOpen] = useState<unknown>(false);
  const deviceId = useDeviceId();
  const [secretMessages, setSecretMessages] = useAtom(secretMessagesAtom);

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseContainerConfigurer
            className="index-chats"
            headTitle="Чаты"
            head={
              <span className="flex flex-gap">
                <IconBubbleChatAddStrokeRounded onClick={setIsScannerOpen} />
                {deviceId && <IconQrCodeStrokeRounded onClick={setIsQrCodeOpen} />}
              </span>
            }
            content={
              <>
                {MyLib.keys(secretMessages).map(deviceId => {
                  const chat = secretMessages[deviceId];

                  return (
                    <Link
                      key={deviceId}
                      to={deviceId}
                    >
                      <FaceItem>
                        <div className="face-logo">
                          <IconBubbleChatEditStrokeRounded />
                        </div>
                        <div className="face-title ellipsis">{chat.name}</div>
                      </FaceItem>
                    </Link>
                  );
                })}
                {isQrCodeOpen && (
                  <FullContent
                    onClose={setIsQrCodeOpen}
                    className="flex center"
                  >
                    <QRCode
                      text={JSON.stringify({ [secretMessagingWithQrCodeKey]: { deviceId } })}
                      className="full-width"
                    />
                  </FullContent>
                )}
                {isScannerOpen && (
                  <QrReader
                    onClose={setIsScannerOpen}
                    onReadData={result => {
                      try {
                        const deviceId = JSON.parse(result.data)[secretMessagingWithQrCodeKey].deviceId as DeviceId;

                        setSecretMessages(prev => {
                          if (prev[deviceId] != null) return prev;

                          return { ...prev, [deviceId]: { name: deviceId, messages: [] } };
                        });
                      } catch (error) {}

                      setIsScannerOpen(false);
                    }}
                  />
                )}
              </>
            }
          />
        }
      />

      <Route
        path=":deviceId"
        element={<SecretChatPage />}
      />
    </Routes>
  );
};

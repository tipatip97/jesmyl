import { useState } from 'react';
import { DeviceId } from '../../../../../../back/apps/index/Index.model';
import { QrReader } from '../../../../../complect/qr-code/useQrReader';
import { IconBubbleChatAddStrokeRounded } from '../../../../../complect/the-icon/icons/bubble-chat-add';
import { secretChatingWithQrCodeKey } from './complect';

export const SecretChatQrReader = ({ onDeviceIdDetected }: { onDeviceIdDetected: (deviceId: DeviceId) => void }) => {
  const [isScannerOpen, setIsScannerOpen] = useState<unknown>(false);
  let isDetected = false;

  return (
    <>
      <IconBubbleChatAddStrokeRounded onClick={setIsScannerOpen} />
      {isScannerOpen && (
        <QrReader
          onClose={setIsScannerOpen}
          onReadData={result => {
            if (isDetected) return;

            try {
              const deviceId = JSON.parse(result.data)[secretChatingWithQrCodeKey].deviceId as DeviceId;
              onDeviceIdDetected(deviceId);

              isDetected = true;
              setTimeout(() => (isDetected = false), 1000);
            } catch (error) {}

            setIsScannerOpen(false);
          }}
        />
      )}
    </>
  );
};

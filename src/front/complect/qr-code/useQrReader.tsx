import QrScanner from 'qr-scanner';
import { useEffect, useRef } from 'react';
import Portal from '../popups/[complect]/Portal';
import { useActualRef } from '../useActualRef';

interface Props {
  facingMode?: 'user' | 'environment';
  onReadData: (result: QrScanner.ScanResult) => void;
  onClose: (isOpen: false) => void;
}

export const QrReader = ({ facingMode = 'environment', onReadData, onClose }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onReadDataRef = useActualRef(onReadData);

  useEffect(() => {
    if (videoRef.current === null) return;

    const qrScanner = new QrScanner(videoRef.current, onReadDataRef.current, {
      preferredCamera: facingMode,
    });
    qrScanner.start();

    return () => qrScanner.stop();
  }, [facingMode, onReadDataRef]);

  return (
    <Portal>
      <div
        className="bgcolor--1 flex center full-size"
        onClick={() => onClose(false)}
      >
        <video ref={videoRef} />
      </div>
    </Portal>
  );
};

import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { IconCopy01StrokeRounded } from '../../complect/the-icon/icons/copy-01';
import QRCode from './QRCode';
import { QRMasterControllerData } from './QRCodeMaster.model';
import useQRMaster, { qrCodeMasterContainerId } from './useQRMaster';

let slideQRCodeTimeout: TimeOut;
const qrReaderReadAreaSize = Math.min(window.innerHeight, window.innerWidth) * 0.9;
let tsInterval = 100;

export function QRCodeMasterApplication({
  controller,
  openError,
}: {
  controller: (ctrl: (data: QRMasterControllerData) => TimeOut) => void;
  openError: string;
}) {
  const [isOpenReader, setIsOpenReader] = useState(false);
  const [isOpenQRSlider, setIsOpenQRSlider] = useState(false);
  const [qrNodes, setQrNodes] = useState<ReactNode[]>([]);
  const [currentQr, setCurrentQr] = useState(0);
  const [partsLoaded, setPartsLoaded] = useState(0);
  const [partsToLoad, setPartsToLoad] = useState(0);
  const { closeReader } = useQRMaster();

  controller(event => {
    if (event.ok) {
      switch (event.type) {
        case 'openReader':
          setPartsLoaded(0);
          setPartsToLoad(0);
          setIsOpenReader(isOpen => {
            const open = event.value ?? !isOpen;
            if (!open) clearTimeout(slideQRCodeTimeout);

            return open;
          });
          break;
        case 'showQRs': {
          const nodes = event.isExt
            ? event.value.map(qr => (
                <div className="qr-container external">
                  <QRCode text={qr} />
                  <div
                    className="link-anchor block"
                    onClick={evt => {
                      evt.stopPropagation();
                      navigator.clipboard.writeText(event.linkValue ? `${qr}\n\n${event.linkValue}` : qr);
                    }}
                  >
                    <IconCopy01StrokeRounded />
                  </div>
                </div>
              ))
            : event.value.map(qr => (
                <div className="qr-container internal">
                  <QRCode text={qr} />
                </div>
              ));
          setQrNodes(nodes);
          setIsOpenQRSlider(true);

          if (nodes.length > 1) {
            let currQr = 0;
            const slideQRCode = (ts: number) => {
              if (++currQr >= nodes.length) currQr = 0;
              setCurrentQr(currQr);
              slideQRCodeTimeout = setTimeout(() => slideQRCode(ts + 1), ts);
            };
            slideQRCode(tsInterval);
          } else if (nodes.length === 1) setCurrentQr(0);
          break;
        }
        case 'partsToLoad':
          setPartsToLoad(event.value);
          break;
        case 'partsLoaded':
          setPartsLoaded(event.value);
          break;
      }
    }

    return slideQRCodeTimeout;
  });

  return (
    <Screen
      className={`${isOpenReader ? ' open-reader' : ''}${isOpenQRSlider ? ' open-slider' : ''}`}
      onClick={() => {
        if (isOpenQRSlider) {
          clearTimeout(slideQRCodeTimeout);
          setIsOpenQRSlider(false);
        }
        if (isOpenReader) {
          closeReader();
        }
      }}
    >
      <div
        style={{ width: `${qrReaderReadAreaSize}px`, position: 'relative' }}
        id={qrCodeMasterContainerId}
      />
      {openError && <div className="color--ko">{openError}</div>}
      {isOpenReader &&
        (partsToLoad ? (
          <div>
            {partsLoaded} / {partsToLoad}
          </div>
        ) : (
          <div>Наведи камеру на QR</div>
        ))}
      {isOpenQRSlider && (
        <div className="qr-code-slider">
          {qrNodes[currentQr]}
          <div className="flex full-width center">
            {currentQr + 1} / {qrNodes.length}
          </div>
        </div>
      )}
    </Screen>
  );
}

const Screen = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  opacity: 0;
  z-index: 10000000;
  transition: opacity 0.5s;
  background-color: var(--current-bg);
  width: 100vw;
  height: 100%;

  &.open-reader,
  &.open-slider {
    display: flex;
    opacity: 0.9;
  }

  .qr-container {
    position: relative;

    &.external {
      .link-anchor {
        position: absolute;
        right: 0;
      }
    }

    &.internal {
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.5;
        background: var(--color--7);
        content: '';
      }
    }
  }

  .qr-code {
    width: 90vmin;
  }
`;

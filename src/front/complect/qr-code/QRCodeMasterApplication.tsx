import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import EvaIcon from '../eva-icon/EvaIcon';
import QRCode from './QRCode';
import { QRMasterControllerData } from './QRCodeMaster.model';
import useQRMaster, { qrCodeMasterContainerId } from './useQRMaster';

let slideQRCodeTimeout: TimeOut;
const qrReaderReadAreaSize = Math.min(window.innerHeight, window.innerWidth) * 0.9;
let tsInterval = 100;

export function QRCodeMasterApplication({
  controller,
}: {
  controller: (ctrl: (data: QRMasterControllerData) => TimeOut) => void;
}) {
  const [isOpenReader, setIsOpenReader] = useState(false);
  const [isOpenQRSlider, setIsOpenQRSlider] = useState(false);
  const [qrNodes, setQrNodes] = useState<ReactNode[]>([]);
  const [currentQr, setCurrentQr] = useState(0);
  const [partsLoaded, setPartsLoaded] = useState(0);
  const [partsToLoad, setPartsToLoad] = useState(0);
  const { closeReader } = useQRMaster();

  controller((event) => {
    if (event.ok) {
      switch (event.type) {
        case 'openReader':
          setPartsLoaded(0);
          setPartsToLoad(0);
          setIsOpenReader((isOpen) => {
            const open = event.value ?? !isOpen;
            if (!open) clearTimeout(slideQRCodeTimeout);

            return open;
          });
          break;
        case 'showQRs': {
          const nodes = event.isExt
            ? event.value.map((qr) => (
                <div className="qr-container external">
                  <QRCode text={qr} />
                  <div
                    className="link-anchor block"
                    onClick={(evt) => {
                      evt.stopPropagation();
                      navigator.clipboard.writeText(event.linkValue ? `${qr}\n\n${event.linkValue}` : qr);
                    }}
                  >
                    <EvaIcon name="copy-outline" />
                  </div>
                </div>
              ))
            : event.value.map((qr) => (
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
      <div style={{ width: `${qrReaderReadAreaSize}px` }} id={qrCodeMasterContainerId}></div>
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
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  background-color: var(--current-bg);
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 10000000;

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
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: var(--color--7);
        opacity: 0.5;
      }
    }
  }

  .qr-code {
    width: 90vmin;
  }
`;

import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { MyLib, mylib } from 'front/utils';
import { makeWid } from '../../../../../../complect/useWid';
import { FingerprintSVG } from '../resources/fingerprint.svg';

export default function FingerprintScreen({
  setIsOpen,
  setTitle,
}: {
  setIsOpen: (is: boolean) => void;
  setTitle: (title: string) => void;
}) {
  const [isScanning, setIsScanning] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [repeats, setRepeats] = useState(0);

  useEffect(() => setTitle('Проведи сканирование'), [setTitle]);

  useEffect(() => {
    if (isTouching) {
      setIsScanning(true);
      setRepeats(mylib.randomItem([0, 0, 0, 1]));
    } else setRepeats(0);
  }, [isTouching]);

  useEffect(() => setIsOpen(!isScanning && isTouching), [isScanning, isTouching, setIsOpen]);

  return (
    <div
      className="relative margin-gap-t pointer"
      ref={panelRef}
    >
      <Fingerprint
        className="absolute pos-left pos-top"
        onAnimationIteration={() => {
          if (repeats === 0) setIsScanning(false);
          else setRepeats(repeats - 1);
        }}
        $isScanning={isScanning}
        $height={panelRef.current?.clientHeight}
      />
      <FingerprintSVG
        onTouchStart={event => {
          event.stopPropagation();
          setIsTouching(true);
        }}
        onTouchEnd={event => {
          event.preventDefault();
          setIsTouching(false);
        }}
        onTouchMove={isTouching ? () => setIsTouching(false) : undefined}
      />
    </div>
  );
}

const fingerprintPanelAnimWid = makeWid();
export const Fingerprint = styled.div<{
  $isScanning: boolean;
  $height?: number;
}>`
  opacity: 0;
  transition:
    opacity 0.2s,
    top 1s;

  border-radius: 3px;
  background: var(--color--7);
  width: 100%;
  height: 5px;

  ${props =>
    props.$isScanning &&
    css`
      opacity: 1;
      animation: ${fingerprintPanelAnimWid} 1.5s infinite;
    `}

  ${props => {
    return (
      props.$height !== undefined &&
      css`
        @keyframes ${fingerprintPanelAnimWid} {
          from {
            top: 0;
          }
          20% {
            top: 0;
          }
          40% {
            top: ${props.$height - 5}px;
          }
          60% {
            top: ${props.$height - 5}px;
          }
          80% {
            top: 0;
          }
          to {
            top: 0;
          }
        }
      `
    );
  }}
`;

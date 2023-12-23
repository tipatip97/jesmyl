import { ReactNode, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import FingerprintScreen from './Fingerprint';
import PasswordTyping from './PasswordTyping';
import { SPY_ROLE } from '../hooks/locations';

const isTouchDevice =
  'ontouchstart' in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;

interface Props {
  myRole: string | nil;
  leftContent: ReactNode;
  rightContent: ReactNode;
  isAllSpiesFound?: boolean;
}

export default function LocationHideScreen(props: Props) {
  const locationNameRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <div className="full-width flex center column margin-b ig-gap-h">
      <HideScreen
        className="relative flex center column"
        $isOpen={isOpen || !!props.isAllSpiesFound}
        $width={locationNameRef.current?.clientWidth}
      >
        <div
          className={
            'hidden-screen relative text-center' + (props.isAllSpiesFound ? ' bgcolor--7 color--5' : ' bgcolor--2')
          }
        >
          <div className="relative">{props.isAllSpiesFound ? 'Больше шпионов нет' : 'Твоя локация'}</div>
          <div className="relative">{title}</div>
        </div>
        <div ref={locationNameRef}>{props.myRole === SPY_ROLE ? 'Не определена' : props.myRole}</div>
      </HideScreen>
      <BottomControls className="full-width">
        <div className="flex column center">{props.leftContent}</div>
        <PassControl
          className="flex column center"
          $active={!props.isAllSpiesFound}
        >
          {isTouchDevice ? (
            <FingerprintScreen
              setIsOpen={setIsOpen}
              setTitle={setTitle}
            />
          ) : (
            <PasswordTyping
              setIsOpen={setIsOpen}
              setTitle={setTitle}
            />
          )}
        </PassControl>
        <div className="flex column center">{props.rightContent}</div>
      </BottomControls>
    </div>
  );
}

const PassControl = styled.div<{ $active: boolean }>`
  ${props =>
    !props.$active &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;

const BottomControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'left center right';

  > :nth-child(1) {
    grid-area: left;
  }

  > :nth-child(2) {
    grid-area: center;
  }

  > :nth-child(3) {
    grid-area: right;
  }

  > * {
    display: flex;
    align-items: center;
  }
`;

const HideScreen = styled.div<{ $isOpen: boolean; $width: number | nil }>`
  > .hidden-screen {
    top: ${props => (props.$isOpen ? 0 : 22)}px;
    transition: top 0.3s ease-in;
    border-radius: 4px;
    padding: 5px 0;
    width: ${props => (props.$width && props.$width > 250 ? props.$width : 250) + 10}px;
    height: 30px;
    overflow: hidden;

    > * {
      top: ${props => (props.$isOpen ? -2 : -27)}px;
      transition: top 0.3s ease-in;
      height: 25px;
    }
  }
`;

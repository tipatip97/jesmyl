import { HTMLAttributes, PropsWithChildren, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import EvaIcon from '../../../../complect/eva-icon/EvaIcon';
import useFullScreen from '../../../../complect/useFullscreen';
import { RootState } from '../../../../shared/store';
import { CmRollMode } from '../Cm.model';
import di from '../Cm.store';
import useCmNav from './useCmNav';

const speedRollKfSelector = (state: RootState) => state.cm.speedRollKf;

export default function RollControled(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const { toggleRoll, rollMode } = useRoll();
  const [isFullscreen] = useFullScreen();
  speedRollKf = useSelector(speedRollKfSelector);
  const dispatch = useDispatch();

  return (
    <RollContent
      {...props}
      onClick={toggleRoll}
      ref={element => element && (container = element.parentElement)}
      className={'roll-controled-container full-width full-height' + (isFullscreen ? ' fullscreen' : '')}
    >
      <div className={'roll-controls flex column center' + (rollMode === 'play' ? ' open' : '')}>
        <EvaIcon
          name="minus"
          onClick={event => {
            event.stopPropagation();
            updateSpeedRollKf(-1);
            dispatch(di.speedRollKf(speedRollKf));
          }}
        />
        <div
          ref={element => {
            if (element) {
              speedScreen = element;
              updateSpeedRollKf(0);
              dispatch(di.speedRollKf(speedRollKf));
            }
          }}
        />
        <EvaIcon
          name="plus"
          onClick={event => {
            event.stopPropagation();
            updateSpeedRollKf(1);
            dispatch(di.speedRollKf(speedRollKf));
          }}
        />
      </div>
      {props.children}
    </RollContent>
  );
}

const setRollInterval = (): number => (interval = (20 - speedRollKf || 0.7) * 30);

let speedRollKf = 10;
let container: HTMLElement | null = null;
let speedScreen: HTMLDivElement | null = null;
let interval: number;
let rollMode: CmRollMode = null;

const rollModeMarksSelector = (state: RootState) => state.cm.rollModeMarks;

export function useRoll() {
  const { registerBackAction } = useCmNav();
  const [rollModeState, setRollMode] = useState<CmRollMode>(null);

  const ret = {
    rollModeMarks: useSelector(rollModeMarksSelector),
    rollMode: rollModeState,
    switchRollMode: (topRollMode: CmRollMode) => {
      rollMode = topRollMode;
      setRollMode(topRollMode);
    },
    speedRollKf,
    toggleRoll: () => {
      if (rollMode !== 'play') {
        ret.switchRollMode('play');
        startRoll(ret.switchRollMode);

        registerBackAction(() => {
          const was = rollMode === 'play';
          ret.switchRollMode(null);
          return was;
        });
      } else {
        ret.switchRollMode('pause');
      }
    },
  };
  return ret;
}

const updateSpeedRollKf = (delta: 1 | -1 | 0) => {
  if (!speedScreen || (delta && (delta < 0 ? speedRollKf <= 1 : speedRollKf >= 20))) return;
  speedRollKf += delta;
  setRollInterval();
  speedScreen.innerText = (speedRollKf / 10).toFixed(1);
};

const startRoll = (switchRollMode: (rollMode: CmRollMode) => void) => {
  if (!container) return;

  const scroll = (dec: number, container: HTMLElement) =>
    setTimeout(() => {
      if (rollMode !== 'play') return;
      const prevScrollTop = container.scrollTop;
      container.scrollTop += 1;
      const diff = container.scrollTop === prevScrollTop ? 1 : 0;

      if (dec > 0) scroll(dec - diff, container);
      else switchRollMode('pause');
    }, interval);

  scroll(10, container);
};

const RollContent = styled.div`
  transition: padding 0.3s;
  padding: 0;

  &.fullscreen {
    padding-top: 30%;
  }

  .roll-controls {
    --height: 100px;

    position: fixed;
    top: calc(50vh - var(--height) / 2);
    right: 10px;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.7s;
    cursor: pointer;
    height: var(--height);
    pointer-events: none;

    > * {
      margin: 5px;
    }

    &.open {
      opacity: 0.7;
      pointer-events: all;
    }
  }
`;

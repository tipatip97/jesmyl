import { HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import EvaIcon from '../../../../complect/eva-icon/EvaIcon';
import useFullScreen from '../../../../complect/useFullscreen';
import { RootState } from '../../../../shared/store';
import di from '../Cm.store';

const speedRollKfSelector = (state: RootState) => state.cm.speedRollKf;

export default function RollControled(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const [isFullscreen] = useFullScreen();
  const speedRollKf = useSelector(speedRollKfSelector);
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (containerRef.current?.parentElement == null || !isRolling) return;
    const node = containerRef.current.parentElement;
    let rollTimeout: TimeOut;
    let prevScrollTop = 0;
    let countsToStop = 20;

    const roll = () => {
      if (prevScrollTop === node.scrollTop && --countsToStop < 1) {
        setIsRolling(false);
        return;
      }
      prevScrollTop = node.scrollTop;
      node.scrollTop += 1;

      rollTimeout = setTimeout(roll, (20 - speedRollKf || 0.7) * 30);
    };

    roll();

    return () => clearTimeout(rollTimeout);
  }, [isRolling, speedRollKf]);

  const updateSpeedRollKf = (delta: 1 | -1 | 0) => {
    if (delta && (delta < 0 ? speedRollKf <= 1 : speedRollKf >= 20)) return;
    dispatch(di.speedRollKf(speedRollKf + delta));
  };

  return (
    <RollContent
      {...props}
      onClick={() => setIsRolling(is => !is)}
      ref={containerRef}
      className={'roll-controled-container full-width full-height' + (isFullscreen ? ' fullscreen' : '')}
    >
      <div className={'roll-controls flex column center' + (isRolling ? ' open' : '')}>
        <EvaIcon
          name="minus"
          onClick={event => {
            event.stopPropagation();
            updateSpeedRollKf(-1);
          }}
        />
        <div>{(speedRollKf / 10).toFixed(1)}</div>
        <EvaIcon
          name="plus"
          onClick={event => {
            event.stopPropagation();
            updateSpeedRollKf(1);
          }}
        />
      </div>
      {props.children}
    </RollContent>
  );
}

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

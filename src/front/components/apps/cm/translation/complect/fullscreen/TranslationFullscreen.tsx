import { useEffect, useReducer, useState } from 'react';
import styled, { css } from 'styled-components';
import { atom, useAtom } from '../../../../../../complect/atoms';
import { backSwipableContainerMaker } from '../../../../../../complect/backSwipableContainerMaker';
import { IconCancel01StrokeRounded } from '../../../../../../complect/the-icon/icons/cancel-01';
import { IconHelpCircleStrokeRounded } from '../../../../../../complect/the-icon/icons/help-circle';
import { useActualRef } from '../../../../../../complect/useActualRef';
import FontSizeContain from '../../../base/font-size-contain/FontSizeContain';
import { useCloseTranslation } from '../hooks/close-translation';
import { useCmScreenTranslationComNavigations } from '../hooks/com-navigation';
import { useCmScreenTranslationComTextNavigations } from '../hooks/com-texts';

const emptyObj = {};
const forceUpdater = (it: number) => it + 1;
const style = { padding: '5px' };

const isShowAtom = atom(true);

export default function TranslationFullscreen() {
  const [forceUpdates, forceUpdate] = useReducer(forceUpdater, 0);
  const [isShowCloseButton, setIsShowCloseButton] = useState(false);
  const [isShowInfo, setIsShowInfo] = useAtom(isShowAtom);
  const [swipes, setSwipes] = useState(emptyObj);

  const { text, nextText, prevText } = useCmScreenTranslationComTextNavigations();
  const { nextCom, prevCom } = useCmScreenTranslationComNavigations();
  const closeTranslation = useCloseTranslation();

  const closeTranslationRef = useActualRef(closeTranslation);

  useEffect(() => {
    setSwipes(backSwipableContainerMaker(() => closeTranslationRef.current()));
  }, [closeTranslationRef]);

  useEffect(() => {
    window.addEventListener('resize', forceUpdate);
    return () => window.removeEventListener('resize', forceUpdate);
  }, []);

  return (
    <Container
      className="TranslationFullscreen"
      {...swipes}
    >
      {
        <Wrapper className={isShowInfo ? ' open-info ' : ''}>
          <Screen
            className="flex center"
            html={text}
            style={style}
            subUpdates={forceUpdates}
          />
          <div
            className="top-area info-area left"
            onDoubleClick={prevCom}
          >
            <div className="description">
              дважды клик&nbsp;-
              <br />
              предыдущая песня
            </div>
          </div>
          <div
            className="top-area info-area right"
            onDoubleClick={nextCom}
          >
            <div className="description">
              дважды клик&nbsp;-
              <br />
              следующая песня
            </div>
          </div>
          <IconCancel01StrokeRounded
            className="close-info-button"
            onClick={() => setIsShowInfo(false)}
          />
          <div
            className="bottom-area info-area left"
            onClick={prevText}
          >
            <div className="description">
              клик&nbsp;-
              <br />
              предыдущий слайд
            </div>
          </div>
          <div
            className="bottom-area info-area right"
            onClick={nextText}
          >
            <div className="description">
              клик&nbsp;-
              <br />
              следующий слайд
            </div>
          </div>
          <div
            className="center-area info-area top"
            onDoubleClick={() => {
              setIsShowCloseButton(true);
              setTimeout(() => setIsShowCloseButton(false), 2000);
            }}
          >
            <div className="description">
              дважды клик&nbsp;-
              <br />
              закрыть и&nbsp;инфо
            </div>
            <div
              className={`area-button ${isShowCloseButton ? 'show' : ''}`}
              onClick={closeTranslation}
            >
              <IconHelpCircleStrokeRounded />
            </div>
            <div
              className={`area-button second open-info-button ${isShowCloseButton ? 'show' : ''}`}
              onClick={() => setIsShowInfo(!isShowInfo)}
            >
              <IconHelpCircleStrokeRounded />
            </div>
          </div>
        </Wrapper>
      }
    </Container>
  );
}

const Screen = styled(FontSizeContain)`
  width: 100%;
  height: 100%;
  color: white;
  font-weight: bold;
  background-color: black;
  text-align: center;
  white-space: pre;

  .shadow-child {
    padding: 10px;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 300;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
`;

const area = (bgArea: 'first' | 'second') => {
  return css`
    --gradient-color: var(--${bgArea}-bg);
    background: repeating-linear-gradient(
      -60deg,
      var(--gradient-color) 0,
      var(--gradient-color) 1px,
      transparent 1px,
      transparent 5px
    );
  `;
};

const Wrapper = styled.div`
  --safe-gap: 50px;
  --block-height: 40%;
  --center-width: 20%;
  --half-safe-gap: calc(var(--safe-gap) / 3);
  --block-width: calc((100% - var(--safe-gap) * 2 - var(--center-width)) / 2);
  --center-left: calc(var(--safe-gap) + var(--block-width));
  z-index: 1000;
  transition: transform 0.1s;

  background: black;
  width: 100vw;
  height: 100vh;
  color: white;

  &.open-info {
    --first-bg: #999;
    --second-bg: grey;

    .close-info-button {
      opacity: 1;
      pointer-events: all;
    }

    .open-info-button {
      opacity: 0;
    }

    > .info-area {
      color: white;
    }

    > .center-area {
      &.top {
        ${area('first')}
      }

      &.bottom {
        ${area('second')}
      }
    }

    > .top-area {
      ${area('second')}
    }

    > .bottom-area {
      ${area('first')}
    }
  }

  .close-info-button {
    position: absolute;
    top: var(--half-safe-gap);
    right: var(--half-safe-gap);
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
  }

  .open-info-button {
    opacity: 1;
    transition: opacity 0.4s;
  }

  > .info-area {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #0000;
    text-align: center;
  }

  > .bottom-area,
  > .top-area {
    position: absolute;
    width: var(--block-width);
    height: var(--block-height);

    &.left {
      left: var(--safe-gap);
    }

    &.right {
      right: var(--safe-gap);
    }
  }

  > .top-area {
    top: var(--safe-gap);
  }

  > .bottom-area {
    bottom: var(--safe-gap);
  }

  > .center-area {
    --over-position: calc(0px - var(--safe-gap) * 4);
    --active-position: calc(0px - var(--safe-gap) / 2.5);
    --active-second-position: calc(var(--safe-gap) / 1.5);

    position: absolute;
    left: var(--center-left);
    width: var(--center-width);
    height: var(--block-height);

    &.top {
      top: var(--safe-gap);

      .area-button {
        top: var(--over-position);

        &.show {
          top: var(--active-position);

          &.second {
            top: var(--active-second-position);
          }
        }
      }
    }

    &.bottom {
      bottom: var(--safe-gap);

      .area-button {
        bottom: var(--over-position);

        &.show {
          bottom: var(--active-position);
        }
      }
    }

    .area-button {
      position: absolute;
      left: calc(50% - 24px / 2);
      z-index: 10000;
      transition:
        top 0.4s,
        bottom 0.4s;
      cursor: pointer;

      &.second {
        transition:
          top 0.5s,
          bottom 0.5s,
          opacity 0.2s;
      }
    }
  }
`;

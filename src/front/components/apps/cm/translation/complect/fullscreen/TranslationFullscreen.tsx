import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import EvaIcon from '../../../../../../complect/eva-icon/EvaIcon';
import { RootState } from '../../../../../../shared/store';
import di from '../../../Cm.store';
import FontSizeContain from '../../../base/font-size-contain/FontSizeContain';
import { useTranslation } from '../../useTranslation';

const isShowTranslationInfoSelector = (state: RootState) => state.cm.isShowTranslationInfo;

export default function TranslationFullscreen() {
  const dispatch = useDispatch();
  const [isShowCloseButton, setIsShowCloseButton] = useState(false);
  const isShowInfo = useSelector(isShowTranslationInfoSelector);

  const { prevText, nextText, prevCom, nextCom, closeTranslation, permanentText } = useTranslation();

  return (
    <Container className="TranslationFullscreen">
      {
        <Wrapper className={isShowInfo ? ' open-info ' : ''}>
          <Screen
            className="flex center"
            html={permanentText}
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
          <EvaIcon
            className="close-info-button"
            onClick={() => dispatch(di.switchShowTranslationInfo(false))}
            name="close-outline"
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
              <EvaIcon name="close-circle-outline" />
            </div>
            <div
              className={`area-button second open-info-button ${isShowCloseButton ? 'show' : ''}`}
              onClick={() => dispatch(di.switchShowTranslationInfo(!isShowInfo))}
            >
              <EvaIcon name="question-mark-circle-outline" />
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
  font-family: montserrat, main, calibri, georgia, times, serif, verdana, arial;
  background-color: black;
  text-align: center;
  white-space: pre;

  .fsc-shadow-child {
    padding: 5px;
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

import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { CmTranslationConfigsRef } from '../../../../hooks/configs';
import { TranslationScreenConfig } from '../../../../model';
import { PositionConfiguratorsResizers } from './complect/Resizers';

export const CmTranslateCurrentScreenPositionConfigurators = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TranslationScreenConfig;
}) => {
  const [top, setTop] = useState(currentConfig.top);
  const [left, setLeft] = useState(currentConfig.left);
  const [width, setWidth] = useState(currentConfig.width);
  const [height, setHeight] = useState(currentConfig.height);
  const rectRef = useRef<HTMLDivElement>(null);

  const [onMove, setOnMove] = useState<((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | und>();

  useEffect(() => {
    setTop(currentConfig.top);
    setLeft(currentConfig.left);
    setWidth(currentConfig.width);
    setHeight(currentConfig.height);

    return setTimeoutEffect(() => {
      if (rectRef.current === null) return;
      rectRef.current.style.top = '';
      rectRef.current.style.left = '';
      rectRef.current.style.width = '';
      rectRef.current.style.height = '';
    });
  }, [currentConfig.height, currentConfig.left, currentConfig.top, currentConfig.width]);

  return (
    <div
      className="full-size"
      onMouseUp={() => setOnMove(undefined)}
      onMouseMove={onMove}
    >
      <Rect
        $top={top}
        $left={left}
        $width={width}
        $height={height}
        ref={rectRef}
        onMouseDown={event => {
          if (event.currentTarget === null || event.currentTarget.parentElement === null) return;
          const target = event.currentTarget;
          const parent = event.currentTarget.parentElement;
          let timeout: TimeOut;

          setOnMove(() => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (event.buttons === 0) {
              setOnMove(undefined);
              return;
            }
            clearTimeout(timeout);

            let top = 0;
            let left = 0;

            const leftPx =
              parent.clientWidth < target.clientWidth + target.offsetLeft + event.movementX
                ? parent.clientWidth - target.clientWidth
                : target.offsetLeft + event.movementX < 0
                  ? 0
                  : target.offsetLeft + event.movementX;

            const topPx =
              parent.clientHeight < target.clientHeight + target.offsetTop + event.movementY
                ? parent.clientHeight - target.clientHeight
                : target.offsetTop + event.movementY < 0
                  ? 0
                  : target.offsetTop + event.movementY;

            if (leftPx !== null) {
              left = (leftPx / parent.clientWidth) * 100;
              target.style.left = left + '%';

              if (topPx === null) {
                timeout = setTimeout(() => {
                  setLeft(left);
                  configsStateRef.current.updateConfig({ left });
                }, 300);
                return;
              }
            }

            if (topPx !== null) {
              top = (topPx / parent.clientHeight) * 100;
              target.style.top = top + '%';

              if (leftPx === null) {
                timeout = setTimeout(() => {
                  setTop(top);
                  configsStateRef.current.updateConfig({ top });
                }, 300);
                return;
              }
            }

            timeout = setTimeout(() => configsStateRef.current.updateConfig({ left, top }), 300);
          });
        }}
      >
        <PositionConfiguratorsResizers
          setOnMove={setOnMove}
          configsStateRef={configsStateRef}
        />
      </Rect>
    </div>
  );
};

const size = 15;
const sizePx = `${size}px`;
const onBoard = `${-size / 2}px`;

const Rect = styled.div<{ $top: number; $left: number; $width: number; $height: number }>`
  position: absolute;
  border: 2px dotted white;
  z-index: 100;
  cursor: move;
  box-sizing: content-box;

  ${props => css`
    left: ${props.$left}%;
    top: ${props.$top}%;
    width: ${props.$width}%;
    height: ${props.$height}%;
  `}

  .resizer {
    position: absolute;

    &-top {
      top: ${onBoard};

      &-left {
        top: ${onBoard};
        cursor: se-resize;
      }

      &-right {
        top: ${onBoard};
        cursor: sw-resize;
      }
    }

    &-bottom {
      bottom: ${onBoard};

      &-left {
        bottom: ${onBoard};
        cursor: ne-resize;
      }

      &-right {
        bottom: ${onBoard};
        cursor: nw-resize;
      }
    }

    &-left {
      left: ${onBoard};
    }

    &-right {
      right: ${onBoard};
    }

    &-top,
    &-bottom {
      left: ${sizePx};
      height: ${sizePx};
      width: calc(100% - ${sizePx} * 2);
      cursor: ns-resize;

      &-right {
        right: ${onBoard};
      }

      &-left {
        left: ${onBoard};
      }

      &-left,
      &-right {
        height: ${sizePx};
        width: ${sizePx};
      }
    }

    &-left,
    &-right {
      top: ${sizePx};
      height: calc(100% - ${sizePx} * 2);
      width: ${sizePx};
      cursor: ew-resize;
    }
  }
`;

import { useDispatch } from 'react-redux';
import { complectActions } from '../../../../../../../../complect/Complect.store';
import { FixedResizerLines, ScreenTranslationPositionConfig } from '../../../model';

const minSize = 2;

export const usePositionConfiguratorResizerBorderMaker = (
  rectRef: React.RefObject<HTMLDivElement>,
  wrapperRef: React.RefObject<HTMLDivElement>,
  setOnMove: (callback: ((event: MouseEvent) => void) | null) => void,
  updateConfig: (config: Partial<ScreenTranslationPositionConfig>) => void,
  config: ScreenTranslationPositionConfig,
  fixedResizerLines: FixedResizerLines | und,
) => {
  const dispatch = useDispatch();

  return (vert: 'top' | 'bottom' | null, horz: 'left' | 'right' | null) => (
    <div
      className={'resizer resizer' + (vert === null ? '' : '-' + vert) + (horz === null ? '' : '-' + horz)}
      onClick={
        vert && horz
          ? undefined
          : (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              const rightLim = config.left + config.width;
              const bottomLim = config.top + config.height;

              if (event.ctrlKey) {
                dispatch(
                  complectActions.fixedResizerLines({
                    type: vert ? 'vert' : 'horz',
                    value:
                      vert === 'top'
                        ? config.top
                        : vert === 'bottom'
                          ? bottomLim
                          : horz === 'left'
                            ? config.left
                            : rightLim,
                  }),
                );
                return;
              }

              if (fixedResizerLines === undefined) return;
              if (fixedResizerLines.type === 'horz' ? vert : horz) return;
              const newPosition = fixedResizerLines.value;

              if (fixedResizerLines.type === 'horz') {
                dispatch(complectActions.fixedResizerLines(undefined));

                if ((newPosition === config.left && horz === 'left') || (newPosition === rightLim && horz === 'right'))
                  return;

                if (horz === 'left') {
                  let width =
                    event.shiftKey || newPosition > rightLim
                      ? newPosition + config.width > 100
                        ? 100 - newPosition
                        : config.width
                      : rightLim - newPosition;

                  if (width < minSize) width = minSize;

                  updateConfig({
                    left: newPosition,
                    width,
                  });
                } else {
                  if (event.shiftKey || newPosition < config.left) {
                    if (newPosition - config.width < 0)
                      updateConfig({
                        left: 0,
                        width: newPosition < minSize ? minSize : newPosition,
                      });
                    else updateConfig({ left: newPosition - config.width });
                  } else
                    updateConfig({
                      width: newPosition - config.left < minSize ? minSize : newPosition - config.left,
                    });
                }
              } else {
                dispatch(complectActions.fixedResizerLines(undefined));

                if ((newPosition === config.top && vert === 'top') || (newPosition === bottomLim && vert === 'bottom'))
                  return;

                if (vert === 'top')
                  if (event.shiftKey || newPosition > bottomLim) {
                    if (newPosition + config.height > 100)
                      updateConfig({
                        top: newPosition,
                        height: 100 - newPosition < minSize ? minSize : 100 - newPosition,
                      });
                    else updateConfig({ top: newPosition });
                  } else {
                    updateConfig({
                      top: newPosition,
                      height: bottomLim - newPosition < minSize ? minSize : bottomLim - newPosition,
                    });
                  }
                else {
                  if (event.shiftKey || newPosition < config.top) {
                    if (newPosition - config.height < 0)
                      updateConfig({
                        top: 0,
                        height: newPosition < minSize ? minSize : newPosition,
                      });
                    else updateConfig({ top: newPosition - config.height });
                  } else
                    updateConfig({
                      height:
                        config.height + (newPosition - bottomLim) < minSize
                          ? minSize
                          : config.height + (newPosition - bottomLim),
                    });
                }
              }
            }
      }
      onMouseDown={
        fixedResizerLines !== undefined
          ? undefined
          : event => {
              if (rectRef.current === null || wrapperRef.current === null) return null;
              event.stopPropagation();

              const rect = rectRef.current;
              const parent = wrapperRef.current;

              let timeout: TimeOut;

              setOnMove((event: MouseEvent) => {
                if (event.buttons === 0) {
                  setOnMove(null);
                  return;
                }

                clearTimeout(timeout);

                let height = 0;
                let width = 0;
                let top = 0;
                let left = 0;

                if (vert !== null) {
                  top = ((rect.offsetTop + event.movementY) / parent.clientHeight) * 100;

                  if (vert === 'top') {
                    rect.style.height = rect.clientHeight - event.movementY + 'px';
                    rect.style.top = rect.offsetTop + event.movementY + 'px';
                    height = ((rect.clientHeight - event.movementY) / parent.clientHeight) * 100;

                    if (horz === null) {
                      timeout = setTimeout(() => updateConfig({ height, top }), 300);
                      return;
                    }
                  } else {
                    rect.style.height = rect.clientHeight + event.movementY + 'px';
                    height = ((rect.clientHeight + event.movementY) / parent.clientHeight) * 100;

                    if (horz === null) {
                      timeout = setTimeout(() => updateConfig({ height }), 300);
                      return;
                    }
                  }
                }

                if (horz !== null) {
                  left = ((rect.offsetLeft + event.movementX) / parent.clientWidth) * 100;

                  if (horz === 'left') {
                    rect.style.width = rect.clientWidth - event.movementX + 'px';
                    rect.style.left = rect.offsetLeft + event.movementX + 'px';

                    width = ((rect.clientWidth - event.movementX) / parent.clientWidth) * 100;

                    if (vert === null) {
                      timeout = setTimeout(() => updateConfig({ width, left }), 300);
                      return;
                    }
                  } else {
                    rect.style.width = rect.clientWidth + event.movementX + 'px';
                    width = ((rect.clientWidth + event.movementX) / parent.clientWidth) * 100;

                    if (vert === null) {
                      timeout = setTimeout(() => updateConfig({ width }), 300);
                      return;
                    }
                  }
                }

                timeout = setTimeout(() => updateConfig({ left, top, height, width }), 300);
              });
            }
      }
    />
  );
};

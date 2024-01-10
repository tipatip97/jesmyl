import { memo } from 'react';
import { CmTranslationConfigsRef } from '../../../../../hooks/configs';

interface Props {
  setOnMove: (set: (() => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | und) => void;
  configsStateRef: CmTranslationConfigsRef;
}

export const PositionConfiguratorsResizers = memo(({ setOnMove, configsStateRef }: Props) => {
  const setMouseDouwn = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    vert: 'top' | 'bottom' | null,
    hor: 'left' | 'right' | null,
  ): (() => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | und => {
    if (event.currentTarget.parentElement === null || event.currentTarget.parentElement.parentElement === null) return;
    event.stopPropagation();

    const rect = event.currentTarget.parentElement;
    const parent = event.currentTarget.parentElement.parentElement;

    return () => {
      let timeout: TimeOut;

      return event => {
        if (event.buttons === 0) {
          setOnMove(undefined);
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

            if (hor === null) {
              timeout = setTimeout(() => configsStateRef.current.updateConfig({ height, top }), 300);
              return;
            }
          } else {
            rect.style.height = rect.clientHeight + event.movementY + 'px';
            height = ((rect.clientHeight + event.movementY) / parent.clientHeight) * 100;

            if (hor === null) {
              timeout = setTimeout(() => configsStateRef.current.updateConfig({ height }), 300);
              return;
            }
          }
        }

        if (hor !== null) {
          left = ((rect.offsetLeft + event.movementX) / parent.clientWidth) * 100;

          if (hor === 'left') {
            rect.style.width = rect.clientWidth - event.movementX + 'px';
            rect.style.left = rect.offsetLeft + event.movementX + 'px';

            width = ((rect.clientWidth - event.movementX) / parent.clientWidth) * 100;

            if (vert === null) {
              timeout = setTimeout(() => configsStateRef.current.updateConfig({ width, left }), 300);
              return;
            }
          } else {
            rect.style.width = rect.clientWidth + event.movementX + 'px';
            width = ((rect.clientWidth + event.movementX) / parent.clientWidth) * 100;

            if (vert === null) {
              timeout = setTimeout(() => configsStateRef.current.updateConfig({ width }), 300);
              return;
            }
          }
        }

        timeout = setTimeout(() => configsStateRef.current.updateConfig({ left, top, height, width }), 300);
      };
    };
  };

  return (
    <>
      <div
        className="resizer resizer-top"
        onMouseDown={event => setOnMove(setMouseDouwn(event, 'top', null))}
      />
      <div
        className="resizer resizer-right"
        onMouseDown={event => setOnMove(setMouseDouwn(event, null, 'right'))}
      />
      <div
        className="resizer resizer-bottom"
        onMouseDown={event => setOnMove(setMouseDouwn(event, 'bottom', null))}
      />
      <div
        className="resizer resizer-left"
        onMouseDown={event => setOnMove(setMouseDouwn(event, null, 'left'))}
      />
      <div
        className="resizer resizer-top-right"
        onMouseDown={event => setOnMove(setMouseDouwn(event, 'top', 'right'))}
      />
      <div
        className="resizer resizer-top-left"
        onMouseDown={event => setOnMove(setMouseDouwn(event, 'top', 'left'))}
      />
      <div
        className="resizer resizer-bottom-right"
        onMouseDown={event => setOnMove(setMouseDouwn(event, 'bottom', 'right'))}
      />
      <div
        className="resizer resizer-bottom-left"
        onMouseDown={event => setOnMove(setMouseDouwn(event, 'bottom', 'left'))}
      />
    </>
  );
});

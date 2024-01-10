import { useEffect } from 'react';
import { TranslationScreenConfig } from '../../model';
import { ActualRef } from '../../../../../../../../complect/useActualRef';
import { useControlledTranslation } from '../../hooks';

export const useScreenKeyDownListen = (
  win: Window | nil,
  configs: TranslationScreenConfig[],
  screeni: number | und,
  setCurrentConfigiRef: ActualRef<(configi: number) => void>,
  stateRef: ActualRef<ReturnType<typeof useControlledTranslation>>,
) => {
  useEffect(() => {
    const onKeyTranslations = async (event: KeyboardEvent) => {
      const state = stateRef.current;

      switch (event.code) {
        case 'F5':
          // just prevent default + stop propagation
          break;
        case 'Tab':
          setCurrentConfigiRef.current(
            event.shiftKey
              ? state.currentConfigi === 0
                ? configs.length - 1
                : state.currentConfigi - 1
              : state.currentConfigi === configs.length - 1
                ? 0
                : state.currentConfigi + 1,
          );
          break;
        case 'ArrowUp':
          if (!event.ctrlKey) return;
          state.prevCom();
          break;

        case 'ArrowDown':
          if (!event.ctrlKey) return;
          state.nextCom();
          break;

        case 'ArrowLeft':
          state.prevText();
          break;

        case 'ArrowRight':
          state.nextText();
          break;

        case 'Escape':
        case 'KeyV':
          state.switchVisible();
          break;

        case 'KeyF':
          win?.focus();
          break;

        case 'KeyT':
          state.switchPosition();
          break;

        default:
          return;
      }

      event.preventDefault();
      event.stopPropagation();
    };

    win?.addEventListener('keydown', onKeyTranslations);
    window.onkeydown = onKeyTranslations;

    return () => {
      win?.removeEventListener('keydown', onKeyTranslations);
      window.onkeydown = null;
    };
  }, [screeni, stateRef, win, setCurrentConfigiRef, configs.length]);
};

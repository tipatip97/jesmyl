import { useEffect } from 'react';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import { useToggleIsScreenTranslationTextVisible } from '../../../atoms';
import { TranslationWindow } from '../../../hooks/windows';
import { ScreenTranslationConfig } from '../../../model';

const invokeEach = (cb: () => void) => cb();
const itNNull = (it: unknown) => it !== null;

export const useScreenTranslationFaceLineListeners = (
  configs: ScreenTranslationConfig[],
  currentConfigi: number,
  setCurrentConfigi: (configi: number) => void,
  updateConfig: (configi: number, config: Partial<ScreenTranslationConfig> | null) => void,
  windows: readonly (nil | TranslationWindow)[],
) => {
  const switchIsVisible = useToggleIsScreenTranslationTextVisible();
  const currentConfigiRef = useActualRef(currentConfigi);

  useEffect(() => {
    const listeners = windows
      .map((parentWin, wini) => {
        if (parentWin == null) return null!;
        const win = parentWin.win;

        let timeout: TimeOut;

        const resize = () => updateConfig(wini, { proportion: win.innerWidth / win.innerHeight });

        win.onresize = () => {
          clearTimeout(timeout);
          timeout = setTimeout(resize);
        };

        const onKeyDown = (win.onkeydown = async event => {
          switch (event.code) {
            case 'Tab':
              setCurrentConfigi(
                event.shiftKey
                  ? currentConfigiRef.current === 0
                    ? configs.length - 1
                    : currentConfigiRef.current - 1
                  : currentConfigiRef.current === configs.length - 1
                    ? 0
                    : currentConfigiRef.current + 1,
              );
              break;

            case 'Enter':
              parentWin.focus();

              break;

            case 'Escape':
              parentWin.blur();
              break;
          }
        });

        win.onfocus = () => setCurrentConfigi(wini);
        window.addEventListener('keydown', onKeyDown);

        return () => {
          win.onresize = null;
          win.onkeydown = null;
          win.onfocus = null;
          window.removeEventListener('keydown', onKeyDown);
        };
      })
      .filter(itNNull);

    return () => listeners.forEach(invokeEach);
  }, [configs, currentConfigiRef, setCurrentConfigi, switchIsVisible, updateConfig, windows]);
};

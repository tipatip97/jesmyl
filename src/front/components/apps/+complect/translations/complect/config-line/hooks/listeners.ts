import { useEffect } from 'react';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import { useSwitchIsScreenTranslationTextVisible } from '../../../hooks/is-visible';
import { ScreenTranslationConfig } from '../../../model';

const invokeEach = (cb: () => void) => cb();
const itNNull = (it: unknown) => it !== null;

export const useScreenTranslationFaceLineListeners = (
  configs: ScreenTranslationConfig[],
  currentConfigi: number,
  setCurrentConfigi: (configi: number) => void,
  updateConfig: (configi: number, config: Partial<ScreenTranslationConfig> | null) => void,
  windows: readonly (nil | Window)[],
) => {
  const switchIsVisible = useSwitchIsScreenTranslationTextVisible();
  const currentConfigiRef = useActualRef(currentConfigi);

  useEffect(() => {
    const listeners = windows
      .map((win, wini) => {
        if (win == null) return null!;
        let timeout: TimeOut;

        win.onresize = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            updateConfig(wini, { proportion: win.innerWidth / win.innerHeight });
          }, 100);
        };

        window.onkeydown = win.onkeydown = async event => {
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

            case 'Escape':
              if (!event.ctrlKey) switchIsVisible();
              break;
          }
        };

        win.onfocus = () => setCurrentConfigi(wini);

        return () => {
          win.onresize = null;
          win.onkeydown = null;
          win.onfocus = null;
          window.onkeydown = null;
        };
      })
      .filter(itNNull);

    return () => listeners.forEach(invokeEach);
  }, [configs, currentConfigiRef, setCurrentConfigi, switchIsVisible, updateConfig, windows]);
};

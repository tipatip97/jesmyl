import { useEffect, useReducer } from 'react';
import { CmTranslationScreenConfig } from '../../model';
import { ActualRef } from '../../../../../../../../complect/useActualRef';

const forceUpdater = (it: number) => it + 1;

export const useScreenWinResizeListen = (
  win: Window | nil,
  screeni: number | und,
  updateConfig: (config: Partial<CmTranslationScreenConfig> | null, configi: number) => void,
  setCurrentConfigiRef: ActualRef<(configi: number) => void>,
) => {
  const [forceUpdates, forceUpdate] = useReducer(forceUpdater, 0);

  useEffect(() => {
    if (win == null || win === window) return;
    let debounceTimeout: TimeOut;

    const updater = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => forceUpdate(), 300);
    };

    win.addEventListener('resize', updater);
    return () => win.removeEventListener('resize', updater);
  }, [updateConfig, win, screeni, setCurrentConfigiRef]);

  return forceUpdates;
};

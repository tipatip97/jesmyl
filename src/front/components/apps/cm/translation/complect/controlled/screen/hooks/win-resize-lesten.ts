import { useEffect, useReducer } from 'react';
import { TrnslationScreenConfig } from '../../model';
import { ActualRef } from '../../../../../../../../complect/useActualRef';

const forceUpdater = (it: number) => it + 1;

export const useScreenWinResizeListen = (
  win: Window | nil,
  screeni: number | und,
  updateConfig: (config: Partial<TrnslationScreenConfig> | null, configi?: number) => void,
  setCurrentConfigiRef: ActualRef<(configi: number) => void>,
) => {
  const [forceUpdates, forceUpdate] = useReducer(forceUpdater, 0);

  useEffect(() => {
    if (win == null) return;
    let debounceTimeout: TimeOut;

    const updater = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        updateConfig({ proportion: win.innerWidth / win.innerHeight });
        forceUpdate();
      }, 300);
    };

    if (screeni !== undefined) {
      win.onfocus = () => setCurrentConfigiRef.current(screeni);
    }

    win.addEventListener('resize', updater);
    return () => win.removeEventListener('resize', updater);
  }, [updateConfig, win, screeni, setCurrentConfigiRef]);

  return forceUpdates;
};

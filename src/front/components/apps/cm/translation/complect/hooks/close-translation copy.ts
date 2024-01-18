import { useCallback } from 'react';
import useCmNav from '../../../base/useCmNav';

export const useCloseTranslation = () => {
  const { goBack } = useCmNav();

  return useCallback(
    (event?: EventStopper) => {
      event?.stopPropagation();
      goBack();
      if (document.fullscreenElement) document.exitFullscreen();
      return false;
    },
    [goBack],
  );
};

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCloseTranslation = () => {
  const navigate = useNavigate();

  return useCallback(
    (event?: EventStopper) => {
      event?.stopPropagation();
      navigate('..');
      if (document.fullscreenElement) document.exitFullscreen();
      return false;
    },
    [navigate],
  );
};

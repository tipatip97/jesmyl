import { useEffect } from 'react';
import { useActualRef } from '../../../../../../../../complect/useActualRef';
import { useCmScreenTranslationComNavigations } from '../../../hooks/com-navigation';
import { useCmScreenTranslationComTextNavigations } from '../../../hooks/com-texts';

export const useScreenKeyDownListen = (win: Window | nil) => {
  const comActionsRef = useActualRef(useCmScreenTranslationComNavigations());
  const comTextActionsRef = useActualRef(useCmScreenTranslationComTextNavigations());

  useEffect(() => {
    const onKeyTranslations = async (event: KeyboardEvent) => {
      switch (event.code) {
        case 'F5':
        case 'KeyR':
          if (!event.ctrlKey || !win || win === window) return;
          // just prevent default + stop propagation
          break;
        case 'ArrowUp':
          if (!event.ctrlKey) return;
          comActionsRef.current.prevCom();
          break;

        case 'ArrowDown':
          if (!event.ctrlKey) return;
          comActionsRef.current.nextCom();
          break;

        case 'ArrowLeft':
          comTextActionsRef.current.prevText();
          break;

        case 'ArrowRight':
          comTextActionsRef.current.nextText();
          break;

        default:
          return;
      }

      event.preventDefault();
      event.stopPropagation();
    };

    win?.addEventListener('keydown', onKeyTranslations);

    return () => {
      win?.removeEventListener('keydown', onKeyTranslations);
    };
  }, [comActionsRef, comTextActionsRef, win]);
};

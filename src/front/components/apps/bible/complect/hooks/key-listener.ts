import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useActualRef } from '../../../../../complect/useActualRef';
import { bibleStoreActions } from '../../Bible.store';

export const useBibleScreenTranslationKeyListener = (win: Window | und, versei: number) => {
  const dispatch = useDispatch();
  const verseiRef = useActualRef(versei);

  useEffect(() => {
    if (win === undefined) return;

    const onKey = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowLeft':
          dispatch(bibleStoreActions.currentTranslationVersei(verseiRef.current - 1));
          break;
        case 'ArrowRight':
          dispatch(bibleStoreActions.currentTranslationVersei(verseiRef.current + 1));
          break;
      }
    };

    win.addEventListener('keydown', onKey);

    return () => win.removeEventListener('keydown', onKey);
  }, [dispatch, verseiRef, win]);
};

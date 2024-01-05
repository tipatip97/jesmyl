import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isTouchDevice } from '../../../complect/device-differences';
import di from './Cm.store';
import useCmNav, { translationNavPoint } from './base/useCmNav';
import cmStorage from './cmStorage';
import { useControlledTranslation } from './translation/complect/controlled/hooks';

export default function CmApplication({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();
  const { watchTranslation } = useControlledTranslation();
  const { jumpTo } = useCmNav();

  cmStorage.initDispatches(dispatch, di);

  useEffect(() => {
    if (isTouchDevice) return;

    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'F5') {
        event.preventDefault();
        jumpTo(translationNavPoint, true);
        watchTranslation(true);
      }
    };

    window.addEventListener('keydown', onKeyUp);
    return () => window.removeEventListener('keydown', onKeyUp);
  }, [jumpTo, watchTranslation]);

  return <>{content}</>;
}

import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWatchScreenTranslations } from '../+complect/translations/hooks/watch-translation';
import { isTouchDevice } from '../../../complect/device-differences';
import di from './Cm.store';
import useCmNav, { translationNavPoint } from './base/useCmNav';
import cmStorage from './cmStorage';

export default function CmApplication({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();
  const watchTranslation = useWatchScreenTranslations();
  const { jumpTo } = useCmNav();

  cmStorage.initDispatches(dispatch, di);

  useEffect(() => {
    if (isTouchDevice) return;

    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'F5') {
        event.preventDefault();
        jumpTo(translationNavPoint, true);
        watchTranslation();
      }
    };

    window.addEventListener('keydown', onKeyUp);
    return () => window.removeEventListener('keydown', onKeyUp);
  }, [jumpTo, watchTranslation]);

  return <>{content}</>;
}

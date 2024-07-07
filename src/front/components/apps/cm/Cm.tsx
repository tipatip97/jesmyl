import { ReactNode, useEffect } from 'react';
import { useWatchScreenTranslations } from '../+complect/translations/hooks/watch-translation';
import { isTouchDevice } from '../../../complect/device-differences';
import useCmNav, { translationNavPoint } from './base/useCmNav';

export default function CmApplication({ content }: { content: ReactNode }) {
  const watchTranslation = useWatchScreenTranslations();
  const { jumpTo } = useCmNav();

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

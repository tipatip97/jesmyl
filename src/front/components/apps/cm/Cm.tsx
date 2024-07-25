import { ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useWatchScreenTranslations } from '../+complect/translations/hooks/watch-translation';
import { isTouchDevice } from '../../../complect/device-differences';
import useCmNav, { translationNavPoint } from './base/useCmNav';

export default function CmApplication({ content }: { content?: ReactNode }) {
  return (
    <>
      <Outlet />
    </>
  );
}

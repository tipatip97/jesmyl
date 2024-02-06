import { useEffect, useState } from 'react';
import { soki } from '../../../../soki';
import { useCurrentTranslationTextApp } from '../../../apps/+complect/translations/hooks/current-app';
import { useScreenTranslationWindows } from '../../../apps/+complect/translations/hooks/windows';
import useAuth from '../../useAuth';
import useIndexNav from '../useIndexNav';
import { IndexScheduleWidgetBibleTranslations } from './LiveBible';
import { ScheduleWidgetLiveCmTranslations } from './LiveCm';

const checkIsNNull = (it: unknown) => it !== null;

export const IndexScheduleWidgetTranslations = () => {
  const indexNav = useIndexNav();
  const auth = useAuth();
  const windows = useScreenTranslationWindows();
  const isCm = useCurrentTranslationTextApp() === 'cm';
  const [isCantTranslateLive, setIsCantTranslateLive] = useState(true);

  const subscribeData = `index-sch-${indexNav.appRouteData.schw}:${auth.login}` as const;

  useEffect(() => {
    if (windows.some(checkIsNNull)) setIsCantTranslateLive(false);
    else {
      setIsCantTranslateLive(true);
      soki.send({ liveData: null, subscribeData }, 'index');
    }

    const onUnload = () => soki.send({ liveData: null, subscribeData }, 'index');

    window.addEventListener('unload', onUnload);
    return () => window.removeEventListener('unload', onUnload);
  }, [auth.login, indexNav.appRouteData.schw, subscribeData, windows]);

  if (auth.fio === undefined) return;

  return isCm ? (
    <ScheduleWidgetLiveCmTranslations
      isCantTranslateLive={isCantTranslateLive}
      fio={auth.fio}
      subscribeData={subscribeData}
    />
  ) : (
    <IndexScheduleWidgetBibleTranslations
      isCantTranslateLive={isCantTranslateLive}
      fio={auth.fio}
      subscribeData={subscribeData}
    />
  );
};

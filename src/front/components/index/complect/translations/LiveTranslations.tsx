import { useEffect, useState } from 'react';
import { soki } from '../../../../soki';
import { useCurrentTranslationTextAppValue } from '../../../apps/+complect/translations/hooks/current-app';
import { useScreenTranslationWindows } from '../../../apps/+complect/translations/hooks/windows';
import BibleTranslatesContextProvider from '../../../apps/bible/translates/TranslatesContext';
import { useAuth, useIndexSchedules } from '../../molecules';
import useIndexNav from '../useIndexNav';
import { IndexScheduleWidgetBibleTranslations } from './LiveBible';
import { ScheduleWidgetLiveCmTranslations } from './LiveCm';

const checkIsNNull = (it: unknown) => it !== null;

export const IndexScheduleWidgetTranslations = () => {
  const indexNav = useIndexNav();
  const auth = useAuth();
  const windows = useScreenTranslationWindows();
  const isCm = useCurrentTranslationTextAppValue() === 'cm';
  const [isCantTranslateLive, setIsCantTranslateLive] = useState(true);
  const schedules = useIndexSchedules();
  const schedule =
    indexNav.appRouteData.schw === undefined
      ? null
      : schedules.list.find(schedule => schedule.w === indexNav.appRouteData.schw);

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
      headTitle={schedule?.title}
      schedule={schedule}
    />
  ) : (
    <BibleTranslatesContextProvider>
      <IndexScheduleWidgetBibleTranslations
        isCantTranslateLive={isCantTranslateLive}
        fio={auth.fio}
        subscribeData={subscribeData}
        headTitle={schedule?.title}
      />
    </BibleTranslatesContextProvider>
  );
};

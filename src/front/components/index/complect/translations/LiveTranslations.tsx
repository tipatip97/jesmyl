import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IScheduleWidgetWid } from '../../../../models';
import { soki } from '../../../../soki';
import { useCurrentTranslationTextAppValue } from '../../../apps/+complect/translations/hooks/current-app';
import { useScreenTranslationWindows } from '../../../apps/+complect/translations/hooks/windows';
import BibleTranslatesContextProvider from '../../../apps/bible/translates/TranslatesContext';
import { useAuth, useIndexSchedules } from '../../molecules';
import { IndexScheduleWidgetBibleTranslations } from './LiveBible';
import { ScheduleWidgetLiveCmTranslations } from './LiveCm';

const checkIsNNull = (it: unknown) => it !== null;
function findSchedule(this: IScheduleWidgetWid, item: { w: number }) {
  return item.w === this;
}

export const IndexScheduleWidgetTranslations = () => {
  const auth = useAuth();
  const windows = useScreenTranslationWindows();
  const isCm = useCurrentTranslationTextAppValue() === 'cm';
  const [isCantTranslateLive, setIsCantTranslateLive] = useState(true);
  const schedules = useIndexSchedules();

  const schw = +useParams().schw!;
  const schedule = isNaN(schw) ? null : schedules.list.find(findSchedule, schw);

  const subscribeData = `index-sch-${schw}:${auth.login}` as const;

  useEffect(() => {
    if (windows.some(checkIsNNull)) setIsCantTranslateLive(false);
    else {
      setIsCantTranslateLive(true);
      soki.send({ liveData: null, subscribeData }, 'index');
    }

    const onUnload = () => soki.send({ liveData: null, subscribeData }, 'index');

    window.addEventListener('unload', onUnload);
    return () => window.removeEventListener('unload', onUnload);
  }, [auth.login, subscribeData, windows]);

  if (auth.fio === undefined) return <div className="flex center full-size color--ko">Не авторизован</div>;

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

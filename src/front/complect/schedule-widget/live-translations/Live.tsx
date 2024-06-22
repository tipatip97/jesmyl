import { useEffect, useState } from 'react';
import { IconComputerStrokeRounded } from '../../../complect/the-icon/icons/computer';
import BibleTranslationSlide from '../../../components/apps/bible/translations/BibleTranslationSlide';
import BibleTranslationSlideMiniInfo from '../../../components/apps/bible/translations/BibleTranslationSlideMiniInfo';
import { CmTranslationSlideMiniInfo } from '../../../components/apps/cm/translation/complect/live/MiniInfo';
import { CmLiveTranslationScreen } from '../../../components/apps/cm/translation/complect/live/Screen';
import { IndexStateSchLiveData } from '../../../components/index/Index.model';
import indexStorage from '../../../components/index/indexStorage';
import { soki } from '../../../soki';
import BrutalItem from '../../brutal-item/BrutalItem';
import useFullContent from '../../fullscreen-content/useFullContent';
import mylib from '../../my-lib/MyLib';
import { useStorageValueGetter } from '../../useStorage';
import { IScheduleWidget } from '../ScheduleWidget.model';

export const ScheduleWidgetLiveTranslation = ({
  onClose,
  schedule,
}: {
  onClose: (isOpen: boolean) => void;
  schedule: IScheduleWidget;
}) => {
  const liveData: IndexStateSchLiveData = useStorageValueGetter(indexStorage, 'liveData', {});
  const [subscribeData, setSubscribeData] = useState<keyof IndexStateSchLiveData | und>();
  const [messageNode, setMessageNode] = useState<JSX.Element | null>(null);

  const [node] = useFullContent(
    () => {
      if (messageNode !== null) return messageNode;
      if (subscribeData === undefined) return;
      if (liveData[subscribeData] == null) return <div className="flex center full-size">Трансляция завершена</div>;

      return liveData[subscribeData].cm ? (
        <CmLiveTranslationScreen {...liveData[subscribeData].cm!} />
      ) : (
        <BibleTranslationSlide {...liveData[subscribeData].bible!} />
      );
    },
    'open',
    onClose,
    '',
  );

  useEffect(() => {
    if (subscribeData !== undefined) return;
    const schedulePrefix: keyof IndexStateSchLiveData = `index-sch-${schedule.w}:`;
    const dataNames = mylib.keys(liveData).filter(name => name.startsWith(schedulePrefix));

    if (dataNames.length === 0) {
      setMessageNode(<div className="flex center full-size">Трансляций нет</div>);
      return;
    }

    if (dataNames.length === 1) {
      setMessageNode(null);
      setSubscribeData(dataNames[0]);
      return;
    }

    setMessageNode(
      <div className="flex center column full-height margin-gap-h">
        <div className="margin-gap-v">Сейчас трансляцию ведут несколько человек:</div>
        {dataNames.map(translationId => {
          return (
            <BrutalItem
              key={translationId}
              icon={<IconComputerStrokeRounded />}
              title={liveData[translationId].fio}
              onClick={() => {
                setMessageNode(null);
                setSubscribeData(translationId);
              }}
              box={
                liveData[translationId].cm ? (
                  <CmTranslationSlideMiniInfo {...liveData[translationId].cm!} />
                ) : (
                  <BibleTranslationSlideMiniInfo {...liveData[translationId].bible!} />
                )
              }
            />
          );
        })}
      </div>,
    );
  }, [liveData, onClose, schedule.w, subscribeData]);

  useEffect(() => {
    soki.send({ subscribe: 'liveData', subscribeData }, 'index');

    return () => {
      soki.send({ unsubscribe: 'liveData' }, 'index');
    };
  }, [schedule.w, subscribeData]);

  return <>{node}</>;
};

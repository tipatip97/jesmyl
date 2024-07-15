import { useEffect } from 'react';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { soki } from '../../../../soki';
import { useSwitchCurrentTranslationTextApp } from '../../../apps/+complect/translations/hooks/current-app';
import { useComTranslationBlock } from '../../../apps/cm/atoms';
import useCmNav from '../../../apps/cm/base/useCmNav';
import CmTranslationControlled from '../../../apps/cm/translation/complect/controlled/CmTranslationControlled';
import { useCmScreenTranslationConfigs } from '../../../apps/cm/translation/complect/controlled/hooks/configs';
import { ScheduleWidgetCurrentCmTranslationList } from '../../../apps/cm/translation/complect/live/SchWgtCurrentList';
import { IndexSchWTranslationLiveDataValue } from '../../Index.model';
import useIndexNav from '../useIndexNav';
import { LiveTranslationAppProps } from './model';

export const ScheduleWidgetLiveCmTranslations = function LiveCmTr({
  isCantTranslateLive,
  subscribeData,
  fio,
  headTitle,
  schedule,
}: LiveTranslationAppProps) {
  const indexNav = useIndexNav();
  const cmNav = useCmNav();
  const [config] = useCmScreenTranslationConfigs();
  const switchCurrApp = useSwitchCurrentTranslationTextApp();
  const [currTexti] = useComTranslationBlock();

  useEffect(() => {
    if (isCantTranslateLive) return;

    return setTimeoutEffect(() => {
      if (indexNav.appRouteData.schw === undefined || cmNav.appRouteData.ccomw === undefined) return;

      const liveData: IndexSchWTranslationLiveDataValue = {
        fio,
        cm: {
          comw: cmNav.appRouteData.ccomw,
          texti: currTexti,
          config,
        },
      };

      soki.send({ liveData, subscribeData }, 'index');
    }, 100);
  }, [
    cmNav.appRouteData.ccomw,
    config,
    currTexti,
    fio,
    indexNav.appRouteData.schw,
    isCantTranslateLive,
    subscribeData,
  ]);

  return (
    <ScheduleWidgetCurrentCmTranslationList schedule={schedule}>
      <CmTranslationControlled
        head={
          <IconButton
            Icon={IconBookOpen02StrokeRounded}
            className="margin-gap-r"
            onClick={() => switchCurrApp()}
          />
        }
        useNav={useIndexNav as never}
        headTitle={headTitle}
      />
    </ScheduleWidgetCurrentCmTranslationList>
  );
};

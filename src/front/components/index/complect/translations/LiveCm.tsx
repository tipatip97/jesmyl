import { useEffect } from 'react';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { soki } from '../../../../soki';
import { useSwitchCurrentTranslationTextApp } from '../../../apps/+complect/translations/hooks/current-app';
import { useComTranslationBlock } from '../../../apps/cm/atoms';
import { useCcomw } from '../../../apps/cm/col/com/useCcom';
import CmTranslationControlled from '../../../apps/cm/translation/complect/controlled/CmTranslationControlled';
import { useCmScreenTranslationConfigs } from '../../../apps/cm/translation/complect/controlled/hooks/configs';
import { ScheduleWidgetCurrentCmTranslationList } from '../../../apps/cm/translation/complect/live/SchWgtCurrentList';
import { IndexSchWTranslationLiveDataValue } from '../../Index.model';
import { LiveTranslationAppProps } from './model';

export const ScheduleWidgetLiveCmTranslations = function LiveCmTr({
  isCantTranslateLive,
  subscribeData,
  fio,
  headTitle,
  schedule,
}: LiveTranslationAppProps) {
  const ccomw = useCcomw();
  const [config] = useCmScreenTranslationConfigs();
  const switchCurrApp = useSwitchCurrentTranslationTextApp();
  const [currTexti] = useComTranslationBlock();

  useEffect(() => {
    if (isCantTranslateLive) return;

    return setTimeoutEffect(() => {
      if (isNaN(ccomw)) return;

      const liveData: IndexSchWTranslationLiveDataValue = {
        fio,
        cm: {
          comw: ccomw,
          texti: currTexti,
          config,
        },
      };

      soki.send({ liveData, subscribeData }, 'index');
    }, 100);
  }, [ccomw, config, currTexti, fio, isCantTranslateLive, subscribeData]);

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
        headTitle={headTitle}
      />
    </ScheduleWidgetCurrentCmTranslationList>
  );
};

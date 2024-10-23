import { useEffect } from 'react';
import { useAtomValue } from '../../../../complect/atoms';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { soki } from '../../../../soki';
import { useSwitchCurrentTranslationTextApp } from '../../../apps/+complect/translations/hooks/current-app';
import { translationBlockAtom } from '../../../apps/cm/atoms';
import { useCcom } from '../../../apps/cm/col/com/useCcom';
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
  const ccom = useCcom();
  const [config] = useCmScreenTranslationConfigs();
  const switchCurrApp = useSwitchCurrentTranslationTextApp();
  const currTexti = useAtomValue(translationBlockAtom);

  useEffect(() => {
    if (isCantTranslateLive) return;

    return setTimeoutEffect(() => {
      if (!ccom?.texts) return;

      const liveData: IndexSchWTranslationLiveDataValue = {
        fio,
        cm: {
          comw: ccom.wid,
          texti: currTexti,
          text: ccom.texts[currTexti],
          nextText: ccom.texts[currTexti + 1] || '',
          config,
        },
      };

      soki.send({ liveData, subscribeData }, 'index');
    }, 100);
  }, [ccom, config, currTexti, fio, isCantTranslateLive, subscribeData]);

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
        backButtonPath=".."
      />
    </ScheduleWidgetCurrentCmTranslationList>
  );
};

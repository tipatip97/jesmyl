import { useEffect } from 'react';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { soki } from '../../../../soki';
import { useSwitchCurrentTranslationTextApp } from '../../../apps/+complect/translations/hooks/current-app';
import useCmNav from '../../../apps/cm/base/useCmNav';
import { useCols } from '../../../apps/cm/cols/useCols';
import { useMeetings } from '../../../apps/cm/lists/meetings/useMeetings';
import CmTranslationControlled from '../../../apps/cm/translation/complect/controlled/CmTranslationControlled';
import { useCmScreenTranslationConfigs } from '../../../apps/cm/translation/complect/controlled/hooks/configs';
import { useCmScreenTranslationComCurrentTexti } from '../../../apps/cm/translation/complect/hooks/com-texts';
import { IndexSchWTranslationLiveDataValue } from '../../Index.model';
import useIndexNav from '../useIndexNav';
import { LiveTranslationAppProps } from './model';

export const ScheduleWidgetLiveCmTranslations = function LiveCmTr({
  isCantTranslateLive,
  subscribeData,
  fio,
  headTitle,
}: LiveTranslationAppProps) {
  const indexNav = useIndexNav();
  const cmNav = useCmNav();
  const cols = useCols();
  const currTexti = useCmScreenTranslationComCurrentTexti();
  const [config] = useCmScreenTranslationConfigs();
  const { meetings } = useMeetings();
  const switchCurrApp = useSwitchCurrentTranslationTextApp();

  const meeting =
    indexNav.appRouteData.schTranslationEventw == null
      ? null
      : meetings?.stack?.find(event => event.w === indexNav.appRouteData.schTranslationEventw);

  const comList =
    cols === undefined
      ? []
      : [...(meeting?.s ?? []), ...(indexNav.appRouteData.schTranslationComws ?? [])]
          ?.map(comw => cols.coms.find(com => com.wid === comw)!)
          .filter(com => com !== undefined);

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
    <CmTranslationControlled
      head={
        <IconButton
          Icon={IconBookOpen02StrokeRounded}
          className="margin-gap-r"
          onClick={() => switchCurrApp()}
        />
      }
      comList={comList}
      useNav={useIndexNav as never}
      headTitle={headTitle}
    />
  );
};

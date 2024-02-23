import { useEffect, useMemo } from 'react';
import { soki } from '../../../../soki';
import TranslationPage from '../../../apps/+complect/translations/TranslationPage';
import useCmNav from '../../../apps/cm/base/useCmNav';
import { useCols } from '../../../apps/cm/cols/useCols';
import { useCmScreenTranslationConfigs } from '../../../apps/cm/translation/complect/controlled/hooks/configs';
import { useCmScreenTranslationComCurrentTexti } from '../../../apps/cm/translation/complect/hooks/com-texts';
import { IndexStateSchLiveData } from '../../Index.model';
import useIndexNav from '../useIndexNav';
import { LiveTranslationAppProps } from './model';

export const ScheduleWidgetLiveCmTranslations = ({
  isCantTranslateLive,
  subscribeData,
  fio,
  headTitle,
}: LiveTranslationAppProps) => {
  const indexNav = useIndexNav();
  const cmNav = useCmNav();
  const cols = useCols();
  const currTexti = useCmScreenTranslationComCurrentTexti();
  const [config] = useCmScreenTranslationConfigs();

  const comList = useMemo(() => {
    if (cols === undefined) return [];
    return indexNav.appRouteData.schTranslationComws
      ?.map(comw => cols.coms.find(com => com.wid === comw)!)
      .filter(com => com !== undefined);
  }, [cols, indexNav.appRouteData.schTranslationComws]);

  useEffect(() => {
    if (isCantTranslateLive) return;

    return setTimeoutEffect(() => {
      if (indexNav.appRouteData.schw === undefined || cmNav.appRouteData.ccomw === undefined) return;

      const liveData: IndexStateSchLiveData[never] = {
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
    <TranslationPage
      comList={comList}
      useNav={useIndexNav as never}
      headTitle={headTitle}
    />
  );
};

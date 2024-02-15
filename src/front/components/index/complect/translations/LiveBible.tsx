import { useEffect, useMemo } from 'react';
import { soki } from '../../../../soki';
import TranslationPage from '../../../apps/+complect/translations/TranslationPage';
import { useBibleTranslationJoinAddress } from '../../../apps/bible/hooks/address/address';
import { useBibleAddressBooki } from '../../../apps/bible/hooks/address/books';
import { useBibleAddressChapteri } from '../../../apps/bible/hooks/address/chapters';
import { useBibleAddressVersei } from '../../../apps/bible/hooks/address/verses';
import { useBibleSlideSyncContentUpdatesNum } from '../../../apps/bible/hooks/slide-sync';
import { BibleTranslationAddress } from '../../../apps/bible/model';
import { useBibleScreenTranslationConfigs } from '../../../apps/bible/translations/hooks/configs';
import useCmNav from '../../../apps/cm/base/useCmNav';
import { IndexStateSchLiveData } from '../../Index.model';
import useIndexNav from '../useIndexNav';
import { LiveTranslationAppProps } from './model';

export const IndexScheduleWidgetBibleTranslations = ({
  isCantTranslateLive,
  subscribeData,
  fio,
}: LiveTranslationAppProps) => {
  const indexNav = useIndexNav();
  const cmNav = useCmNav();
  const joinedAddress = useBibleTranslationJoinAddress();
  const booki = useBibleAddressBooki();
  const chapteri = useBibleAddressChapteri();
  const versei = useBibleAddressVersei();

  const [config] = useBibleScreenTranslationConfigs();
  const syncNum = useBibleSlideSyncContentUpdatesNum();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const address: BibleTranslationAddress = useMemo(() => joinedAddress ?? [booki, chapteri, versei], [syncNum]);

  useEffect(() => {
    if (isCantTranslateLive) return;

    return setTimeoutEffect(() => {
      if (indexNav.appRouteData.schw === undefined || cmNav.appRouteData.ccomw === undefined) return;

      const liveData: IndexStateSchLiveData[never] = {
        fio,
        bible: {
          address,
          config,
        },
      };

      soki.send({ liveData, subscribeData }, 'index');
    }, 100);
  }, [address, cmNav.appRouteData.ccomw, config, fio, indexNav.appRouteData.schw, isCantTranslateLive, subscribeData]);

  return <TranslationPage useNav={useIndexNav as never} />;
};

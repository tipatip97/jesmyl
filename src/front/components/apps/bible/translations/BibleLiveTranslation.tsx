import { useEffect } from 'react';
import { SokiClientSubData } from '../../../../models';
import { soki } from '../../../../soki';
import { IndexStateSchLiveData } from '../../../index/Index.model';
import useIndexNav from '../../../index/complect/useIndexNav';
import useCmNav from '../../cm/base/useCmNav';
import { useBibleScreenTranslationConfigs } from './hooks/configs';

interface Props {
  text: string;
  addressText: string;
  isCantTranslateLive: boolean;
  subscribeData: SokiClientSubData;
  fio: string;
}

export default function BibleLiveTranslation({ text, fio, subscribeData, addressText }: Props): JSX.Element {
  const indexNav = useIndexNav();
  const cmNav = useCmNav();

  const [config] = useBibleScreenTranslationConfigs();

  useEffect(() => {
    return setTimeoutEffect(() => {
      if (indexNav.appRouteData.schw === undefined || cmNav.appRouteData.ccomw === undefined) return;

      const liveData: IndexStateSchLiveData[never] = {
        fio,
        bible: {
          text,
          addressText,
          config,
        },
      };

      soki.send({ liveData, subscribeData }, 'index');
    }, 100);
  }, [addressText, cmNav.appRouteData.ccomw, config, fio, indexNav.appRouteData.schw, subscribeData, text]);

  return <></>;
}

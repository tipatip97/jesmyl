import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SokiClientSubData } from '../../../../models';
import { soki } from '../../../../soki';
import { IndexSchWTranslationLiveDataValue } from '../../../index/Index.model';
import { useBibleScreenTranslationConfigs } from './hooks/configs';

interface Props {
  text: string;
  addressText: string;
  isCantTranslateLive: boolean;
  subscribeData: SokiClientSubData;
  fio: string;
}

export default function BibleLiveTranslation({ text, fio, subscribeData, addressText }: Props): JSX.Element {
  const schw = +useParams().schw!;

  const [config] = useBibleScreenTranslationConfigs();

  useEffect(() => {
    return setTimeoutEffect(() => {
      if (isNaN(schw)) return;

      const liveData: IndexSchWTranslationLiveDataValue = {
        fio,
        bible: {
          text,
          addressText,
          config,
        },
      };

      soki.send({ liveData, subscribeData }, 'index');
    }, 100);
  }, [addressText, config, fio, schw, subscribeData, text]);

  return <></>;
}

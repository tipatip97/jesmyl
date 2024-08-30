import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IndexSchWTranslationLiveDataValue } from '../../../index/Index.model';
import { BibleTranslationScreenAddressTextContext, useBibleAddressTextContext } from '../texts/AddressContentContext';
import { useBibleScreenTranslationConfigs } from './hooks/configs';
import { BibleTranslationScreenTextContentContext, useBibleTextContentContext } from '../texts/TextContentContext';

interface Props {
  fio: string;
  onSend: (liveData: IndexSchWTranslationLiveDataValue) => void;
}

export default function BibleLiveTranslation(props: Props): JSX.Element {
  return (
    <BibleTranslationScreenTextContentContext isPreview={false}>
      <BibleTranslationScreenAddressTextContext isPreview={false}>
        <Live {...props} />
      </BibleTranslationScreenAddressTextContext>
    </BibleTranslationScreenTextContentContext>
  );
}

const Live = ({ fio, onSend }: Props) => {
  const schw = +useParams().schw!;
  const addressText = useBibleAddressTextContext();
  const text = useBibleTextContentContext();

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

      onSend(liveData);
    }, 100);
  }, [addressText, config, fio, onSend, schw, text]);

  return <></>;
};

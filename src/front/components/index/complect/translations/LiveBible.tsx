import { memo } from 'react';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconBook02StrokeRounded } from '../../../../complect/the-icon/icons/book-02';
import { useSwitchCurrentTranslationTextApp } from '../../../apps/+complect/translations/hooks/current-app';
import { BibleAddress } from '../../../apps/bible/address/Address';
import BibleTextContent from '../../../apps/bible/text-content/TextContent';
import BibleLiveTranslation from '../../../apps/bible/translations/BibleLiveTranslation';
import BibleTranslationControlled from '../../../apps/bible/translations/BibleTranslationControlled';
import { LiveTranslationAppProps } from './model';

export const IndexScheduleWidgetBibleTranslations: React.FC<LiveTranslationAppProps> = memo(function BibleTr({
  isCantTranslateLive,
  subscribeData,
  fio,
  headTitle,
}) {
  const switchCurrApp = useSwitchCurrentTranslationTextApp();

  return (
    <>
      {isCantTranslateLive || (
        <BibleAddress>
          {(_, addressText) => (
            <BibleTextContent>
              {(_, text) => (
                <BibleLiveTranslation
                  text={text}
                  addressText={addressText}
                  fio={fio}
                  isCantTranslateLive={isCantTranslateLive}
                  subscribeData={subscribeData}
                />
              )}
            </BibleTextContent>
          )}
        </BibleAddress>
      )}
      <BibleTranslationControlled
        head={
          <IconButton
            Icon={IconBook02StrokeRounded}
            className="margin-gap-r"
            onClick={() => switchCurrApp()}
          />
        }
        headTitle={headTitle}
      />
    </>
  );
});

import { useSelector } from 'react-redux';
import {
  useScreenTranslationCurrentConfig,
  useScreenTranslationCurrentConfigi,
} from '../../../../+complect/translations/hooks/configs';
import * as bibleJSON from '../../../../../../../back/apps/bible/bible.json';
import { RootState } from '../../../../../../shared/store';
import { useBibleScreenTranslationConfig } from '../../hooks/configs';
import { useBibleScreenTranslationFontSizeAddressAdapter } from '../../hooks/font-size-adapter/address-adapter';
import { useGetBibleScreenTranslationAddressTextWrapperStyle } from '../../hooks/styles/address-text-wrapper-style';

const bookiSelector = (state: RootState) => state.bible.currentTranslationBooki;
const chapteriSelector = (state: RootState) => state.bible.currentTranslationChapteri;
const verseiSelector = (state: RootState) => state.bible.currentTranslationVersei;

interface BibleBook {
  titles: string;
  i: number;
}

const bible: { books: BibleBook[] } = { ...bibleJSON } as never;

export const BibleTranslationScreenAddressContent = (props: { screeni: number | und }) => {
  const booki = useSelector(bookiSelector);
  const chapteri = useSelector(chapteriSelector);
  const versei = useSelector(verseiSelector);

  const currentConfigi = useScreenTranslationCurrentConfigi();
  const currentConfig = useBibleScreenTranslationConfig(props.screeni ?? currentConfigi);

  const config = useScreenTranslationCurrentConfig();

  const addressContent = `${bible.books[booki].titles[1]} ${chapteri + 1}:${versei + 1}`;
  const addressTextWrapperStyle = useGetBibleScreenTranslationAddressTextWrapperStyle(currentConfig);
  const [addressWrapperRef, addressContentRef] = useBibleScreenTranslationFontSizeAddressAdapter(
    addressContent,
    currentConfig,
    config,
  );

  if (currentConfig === undefined) return;

  return (
    <>
      <div
        className="absolute flex"
        style={addressTextWrapperStyle}
        ref={addressWrapperRef}
      >
        <div
          className="nowrap"
          ref={addressContentRef}
        >
          {addressContent}
        </div>
      </div>
    </>
  );
};

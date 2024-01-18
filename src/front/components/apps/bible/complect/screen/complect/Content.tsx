import { useSelector } from 'react-redux';
import { useBibleScreenTranslationFontSizeScreenAdapter } from '../../hooks/font-size-adapter/screen-adapter';
import { useGetBibleScreenTranslationScreenStyle } from '../../hooks/styles/screen-style';
import * as chaptersJSON from '../../../../../../../back/apps/bible/bibleChapters.json';
import { RootState } from '../../../../../../shared/store';
import { useBibleScreenTranslationConfig } from '../../hooks/configs';
import {
  useScreenTranslationCurrentConfig,
  useScreenTranslationCurrentConfigi,
} from '../../../../+complect/translations/hooks/configs';
import { useBibleScreenTranslationKeyListener } from '../../hooks/key-listener';

const chapters: { chapters: string[][][] } = { ...chaptersJSON } as never;

const bookiSelector = (state: RootState) => state.bible.currentTranslationBooki;
const chapteriSelector = (state: RootState) => state.bible.currentTranslationChapteri;
const verseiSelector = (state: RootState) => state.bible.currentTranslationVersei;

export const BibleTranslationScreenContent = (props: { screeni: number | und; win: Window | und }) => {
  const booki = useSelector(bookiSelector);
  const chapteri = useSelector(chapteriSelector);
  const versei = useSelector(verseiSelector);
  const currentConfigi = useScreenTranslationCurrentConfigi();

  const currentConfig = useBibleScreenTranslationConfig(props.screeni ?? currentConfigi);
  const config = useScreenTranslationCurrentConfig();

  const screenStyle = useGetBibleScreenTranslationScreenStyle(currentConfig);
  const screenContent = chapters.chapters[booki][chapteri][versei];

  useBibleScreenTranslationKeyListener(props.win, versei);

  const [screenWrapperRef, screenContentRef] = useBibleScreenTranslationFontSizeScreenAdapter(
    screenContent,
    currentConfig,
    config,
  );

  return (
    <>
      <div
        className="absolute flex center"
        style={screenStyle}
        ref={screenWrapperRef}
      >
        <div ref={screenContentRef}>{screenContent}</div>
      </div>
    </>
  );
};

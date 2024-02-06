import { useBibleScreenTranslationFontSizeScreenAdapter } from '../../hooks/font-size-adapter/screen-adapter';
import { useGetBibleScreenTranslationScreenStyle } from '../../hooks/styles/screen-style';
import { BibleTranslationScreenConfig } from '../../model';
import './Content.scss';

interface Props {
  screeni: number | und;
  win: Window | und;
  isPreview: boolean | und;
  screenContent: string;
  windowResizeUpdatesNum: number | und;
  bibleConfig: BibleTranslationScreenConfig | und;
  isVisible: boolean;
}

export const BibleTranslationScreenContent = (props: Props) => {
  const screenStyle = useGetBibleScreenTranslationScreenStyle(props.isVisible, props.bibleConfig);

  const [screenWrapperRef, screenContentRef] = useBibleScreenTranslationFontSizeScreenAdapter(
    props.screenContent,
    props.bibleConfig,
    props.windowResizeUpdatesNum,
  );

  return (
    <>
      <div
        className="bible-translation-screen-content absolute flex center"
        style={screenStyle}
        ref={screenWrapperRef}
      >
        <div
          className="fade-00"
          ref={screenContentRef}
          dangerouslySetInnerHTML={{ __html: props.screenContent }}
        />
      </div>
    </>
  );
};

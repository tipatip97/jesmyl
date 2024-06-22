import { useState } from 'react';
import styled from 'styled-components';
import BibleTextContent from '../../../text-content/TextContent';
import { verseTranslateTitleCssClassName, verseTranslateTitleCssVariableName } from '../../complect';
import { useBibleScreenTranslationFontSizeScreenAdapter } from '../../hooks/font-size-adapter/screen-adapter';
import { useGetBibleScreenTranslationScreenStyle } from '../../hooks/styles/screen-style';
import { BibleTranslationScreenConfig } from '../../model';
import './Content.scss';

interface Props {
  screeni: number | und;
  win: Window | und;
  isPreview: boolean | und;
  text?: string;
  windowResizeUpdatesNum: number | und;
  bibleConfig: BibleTranslationScreenConfig | und;
  isVisible: boolean;
}

export default function BibleTranslationScreenContent(props: Props) {
  const screenStyle = useGetBibleScreenTranslationScreenStyle(props.isVisible, props.bibleConfig);
  const [textContent, setTextContent] = useState('');

  const [screenWrapperRef, screenContentRef] = useBibleScreenTranslationFontSizeScreenAdapter(
    textContent + props.text,
    props.bibleConfig,
    props.windowResizeUpdatesNum,
  );

  return (
    <>
      <StyledVerseText
        className="bible-translation-screen-content absolute flex center"
        style={screenStyle}
        ref={screenWrapperRef}
      >
        {props.text ? (
          <span
            ref={screenContentRef}
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        ) : (
          <BibleTextContent isShowCachable={!props.isPreview}>
            {(text, cachedText) => {
              let actualText = '';

              if (props.isPreview) {
                if (textContent !== text) Promise.resolve().then(() => setTextContent(text));
                actualText = text;
              } else {
                if (textContent !== cachedText) Promise.resolve().then(() => setTextContent(cachedText));
                actualText = cachedText;
              }

              return (
                <span
                  className="fade-00"
                  ref={screenContentRef}
                  dangerouslySetInnerHTML={{ __html: actualText }}
                />
              );
            }}
          </BibleTextContent>
        )}
      </StyledVerseText>
    </>
  );
}

const StyledVerseText = styled.div`
  .${verseTranslateTitleCssClassName} {
    color: var(${verseTranslateTitleCssVariableName});
  }
`;

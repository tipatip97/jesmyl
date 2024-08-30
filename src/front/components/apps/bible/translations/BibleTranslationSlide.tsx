import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BibleTranslationScreenTextContentContext } from '../texts/TextContentContext';
import { BibleTranslationScreenConfig } from './model';
import { BibleTranslationScreen } from './screen/BibleTranslationScreen';

interface Props {
  text: string;
  config: BibleTranslationScreenConfig;
}

export default function BibleTranslationSlide({ config, text }: Props): JSX.Element {
  const [updates, setUpdates] = useState(0);

  useEffect(() => {
    let i = 0;

    return hookEffectLine()
      .addEventListener(window, 'resize', () => setUpdates(++i))
      .effect();
  }, []);

  return (
    <Container className="flex center full-size">
      <BibleTranslationScreenTextContentContext
        isPreview={false}
        text={text}
      >
        <BibleTranslationScreen
          isVisible
          bibleConfig={config}
          windowResizeUpdatesNum={updates}
        />
      </BibleTranslationScreenTextContentContext>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  margin: auto;
`;

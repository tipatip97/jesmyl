import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BibleTranslationAddress } from '../model';
import { BibleTranslationScreenConfig } from './model';
import { BibleTranslationScreen } from './screen/BibleTranslationScreen';

interface Props {
  text: string;
  address?: BibleTranslationAddress;
  addressText: string;
  config: BibleTranslationScreenConfig;
}

export default function BibleTranslationSlide({ address, config, addressText, text }: Props): JSX.Element {
  const [updates, setUpdates] = useState(0);

  useEffect(() => {
    let i = 0;

    return hookEffectLine()
      .addEventListener(window, 'resize', () => setUpdates(++i))
      .effect();
  }, []);

  return (
    <Container className="flex center full-size">
      <BibleTranslationScreen
        isVisible
        text={text}
        address={address}
        addressText={addressText}
        bibleConfig={config}
        windowResizeUpdatesNum={updates}
      />
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  margin: auto;
`;

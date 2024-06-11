import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  takeBibleAddressText,
  takeBibleJoinedAddressSlideText,
  takeBibleJoinedAddressText,
  takeBibleSlideText,
  useLoadBibleChaptersCombine,
} from '../hooks/texts';
import { BibleTranslationAddress } from '../model';
import { BibleTranslationScreenConfig } from './model';
import { BibleTranslationScreen } from './screen/BibleTranslationScreen';

interface Props {
  address: BibleTranslationAddress;
  config: BibleTranslationScreenConfig;
}

export const BibleTranslationSlide = ({ address, config }: Props) => {
  const [updates, setUpdates] = useState(0);
  const { chapters } = useLoadBibleChaptersCombine();

  useEffect(() => {
    let i = 0;
    const onResize = () => setUpdates(++i);

    window.addEventListener('resize', onResize);
    return () => window.addEventListener('resize', onResize);
  }, []);

  return (
    <Container className="flex center full-size">
      <BibleTranslationScreen
        isVisible
        screenContent={
          Array.isArray(address)
            ? takeBibleSlideText(chapters, address[0], address[1], address[2])
            : takeBibleJoinedAddressSlideText(address)
        }
        addressContent={
          Array.isArray(address)
            ? takeBibleAddressText(address[0], address[1], address[2])
            : takeBibleJoinedAddressText(address)
        }
        bibleConfig={config}
        windowResizeUpdatesNum={updates}
      />
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  margin: auto;
`;

import { useRef } from 'react';
import styled from 'styled-components';
import { useBibleAddressBooki } from '../../../hooks/address/books';
import { useBibleAddressChapteri } from '../../../hooks/address/chapters';
import { useBibleAddressVersei } from '../../../hooks/address/verses';
import { useBibleTranslatesContext } from '../../../translates/TranslatesContext';
import { useBibleShowTranslatesValue } from '../../../translates/hooks';
import { useSetBibleCurrentItems } from '../hooks/set-current-items';
import BibleVerseFace from './VerseFace';
import { useVerseListListeners } from './useVerseListListeners';

export const verseIdPrefix = 'bible-versei-';

export default function BibleVerseList(): JSX.Element {
  const verseListNodeRef = useRef<HTMLDivElement>(null);

  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();
  const showTranslates = useBibleShowTranslatesValue();
  const translates = useBibleTranslatesContext();

  const verses = translates[showTranslates[0]]?.chapters?.[currentBooki]?.[currentChapteri];

  useSetBibleCurrentItems(translates, currentBooki, currentChapteri, currentVersei);
  useVerseListListeners(verseListNodeRef, currentBooki, currentChapteri, currentVersei);

  return (
    <Container ref={verseListNodeRef}>
      {verses?.map((verse, versei) => {
        return (
          <BibleVerseFace
            key={versei}
            verse={verse}
            versei={versei}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: calc(100vw - 300px - 2.5em - 7em);

  insertedtext,
  textinbrackets {
    opacity: 0.6;
    font-style: italic;
    pointer-events: none;
  }
`;

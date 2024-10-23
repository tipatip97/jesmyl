import { useRef } from 'react';
import styled from 'styled-components';
import { useBibleAddressBooki } from '../../../hooks/address/books';
import { useBibleAddressChapteri } from '../../../hooks/address/chapters';
import { useBibleAddressVersei } from '../../../hooks/address/verses';
import { useBibleTranslatesContext } from '../../../translates/TranslatesContext';
import { useBibleShowTranslatesValue } from '../../../translates/hooks';
import { useVerseListListeners } from './useVerseListListeners';

export const verseiIdPrefix = 'bible-versei-';

export default function BibleVerseList(): JSX.Element {
  const verseListNodeRef = useRef<HTMLDivElement>(null);

  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();
  const showTranslates = useBibleShowTranslatesValue();
  const translates = useBibleTranslatesContext();

  const verses = translates[showTranslates[0]]?.chapters?.[currentBooki]?.[currentChapteri];

  useVerseListListeners(verseListNodeRef, currentBooki, currentChapteri, currentVersei);

  return (
    <Container ref={verseListNodeRef}>
      {verses?.map((verse, versei) => {
        return (
          <Face
            key={versei}
            id={verseiIdPrefix + versei}
            className="bible-list-face pointer"
            dangerouslySetInnerHTML={{ __html: `${versei + 1}. ${verse}` }}
          />
        );
      })}
    </Container>
  );
}

const Face = styled.div`
  max-width: 100%;
  transition-property: background-color, color;
  transition-duration: 0.5s;

  &:nth-child(odd) {
    background-color: var(--color--2);
  }

  &:nth-child(10n):not(:last-child) {
    margin-bottom: 10px;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      margin-top: 5px;
      height: 1px;
      width: 100%;
      background: red;
    }
  }
`;

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

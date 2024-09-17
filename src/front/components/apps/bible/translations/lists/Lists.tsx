import styled from 'styled-components';
import BibleBookList from './books/BookList';
import BibleChapterList from './chapters/ChapterList';
import BibleVerseList from './verses/VerseList';
import BibleTranslatesContextProvider from '../../translates/TranslatesContext';

export default function BibleLists() {
  return (
    <Lists className="flex flex-gap custom-align-items over-hidden">
      <BibleBookList />
      <BibleTranslatesContextProvider>
        <BibleChapterList />
        <BibleVerseList />
      </BibleTranslatesContextProvider>
    </Lists>
  );
}

const Lists = styled.div`
  .bible-list-face {
    &.current {
      background-color: var(--color--3);
      color: var(--color--1);
    }

    &.selected {
      background-color: var(--color--7);
      color: var(--color--1);

      &.current {
        opacity: 0.7;
      }
    }
  }
`;

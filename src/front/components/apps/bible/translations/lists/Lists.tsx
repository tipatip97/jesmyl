import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BibleBookList } from './books/BookList';
import { BibleChapterList } from './chapters/ChapterList';
import { useSetBibleCurrentItems } from './hooks/set-current-items';
import { BibleVerseList } from './verses/VerseList';

export const BibleLists = () => {
  const [isShowFaceWithCtrl, setIsShowFaceWithCtrl] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      setIsShowFaceWithCtrl(event.ctrlKey || event.shiftKey);
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', onKey);
    };
  }, []);

  useSetBibleCurrentItems(isShowFaceWithCtrl);

  return (
    <Lists className="flex flex-gap custom-align-items over-hidden">
      <BibleBookList />
      <BibleChapterList />
      <BibleVerseList isShowFaceWithCtrl={isShowFaceWithCtrl} />
    </Lists>
  );
};

const Lists = styled.div`
  .bible-list-face {
    cursor: pointer;
    /* white-space: nowrap; */

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

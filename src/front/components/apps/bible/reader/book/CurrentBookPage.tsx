import { useState } from 'react';
import styled from 'styled-components';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { useBibleAddressBooki } from '../../hooks/address/books';
import { useBibleAddressChapteri } from '../../hooks/address/chapters';
import { useBibleAddressVersei } from '../../hooks/address/verses';
import { justBibleStorageSet } from '../../hooks/storage';
import { useBibleBookList, useBibleCurrentAddressText, useBibleWholeChapterHTMLSBookList } from '../../hooks/texts';
import useBibleNav from '../../useBibleNav';
import { BibleReaderBook } from './BookPage';

export const BibleReaderCurrentBookPage = () => {
  const { goBack } = useBibleNav();
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();
  const bookTitles = useBibleBookList();
  const chaptersList = useBibleWholeChapterHTMLSBookList();
  const [booki, setBooki] = useState(currentBooki);
  const [chapteri, setChapteri] = useState(currentChapteri);

  const [bookSelectNode, openBookSelect] = useFullContent(() => {
    return (
      <>
        {bookTitles.map(([bookTitle], booki) => {
          return (
            <div
              key={bookTitle}
              className="margin-gap-b margin-gap-l pointer"
              onClick={() => {
                setBooki(booki);
                openChapterSelect(true);
              }}
            >
              {bookTitle}
            </div>
          );
        })}
      </>
    );
  });

  const [chapterSelectNode, openChapterSelect] = useFullContent(() => {
    return (
      <>
        {chaptersList[booki].map((chapter, chapteri) => {
          return (
            <ItemFace
              key={chapteri}
              className="inline-flex center pointer"
              chapter-length={chapter.length}
              onClick={() => {
                setChapteri(chapteri);
                justBibleStorageSet('translationBooki', booki);
                justBibleStorageSet('translationChapteri', chapteri);
                justBibleStorageSet('translationVersei', 0);
                openVerseSelect(true);
              }}
            >
              {chapteri + 1}
            </ItemFace>
          );
        })}
      </>
    );
  });

  const [verseSelectNode, openVerseSelect] = useFullContent(() => {
    return (
      <>
        {chaptersList[booki][chapteri].map((_, versei) => {
          return (
            <ItemFace
              key={versei}
              className="inline-flex center pointer"
              onClick={() => {
                justBibleStorageSet('translationBooki', booki);
                justBibleStorageSet('translationChapteri', chapteri);
                justBibleStorageSet('translationVersei', versei);
              }}
            >
              {versei + 1}
            </ItemFace>
          );
        })}
      </>
    );
  });

  return (
    <PhaseContainerConfigurer
      goBack={goBack}
      className=""
      withoutBackButton
      headTitle={
        <span
          className="pointer"
          onClick={() => openBookSelect(true)}
        >
          {useBibleCurrentAddressText()}
        </span>
      }
      content={
        <>
          {chapterSelectNode}
          {bookSelectNode}
          {verseSelectNode}
          <BibleReaderBook
            chapterList={chaptersList[currentBooki]}
            currentChapteri={currentChapteri}
            currentVersei={currentVersei}
            currentBooki={currentBooki}
          />
        </>
      }
    />
  );
};

const ItemFace = styled.div`
  --size: calc((100vw - var(--main-big-gap) * 2 - 12 * 3px) / 5);

  position: relative;

  min-width: var(--size);
  max-width: var(--size);
  width: var(--size);

  min-height: var(--size);
  max-height: var(--size);
  height: var(--size);

  background-color: var(--color--2);
  margin: 3px;
  color: var(--color--3);

  &::before {
    content: attr(chapter-length);
    position: absolute;
    top: 0;
    right: 5px;
    color: var(--color--4);
    font-size: 0.8em;
  }
`;

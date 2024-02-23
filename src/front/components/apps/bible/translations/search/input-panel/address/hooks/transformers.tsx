import { ReactNode, useEffect, useRef, useState } from 'react';
import { useBibleTranslationJoinAddressSetter, useSetBibleAddressIndexes } from '../../../../../hooks/address/address';
import { useBibleAddressBooki } from '../../../../../hooks/address/books';
import { useBibleAddressChapteri } from '../../../../../hooks/address/chapters';
import { useBibleAddressVersei } from '../../../../../hooks/address/verses';
import { useBibleBookList, useBibleBookLowerCaseList, useBibleWholeChapterBookList } from '../../../../../hooks/texts';

const addressParserReg = /^(\d?\s*[а-яё]+)?\s?(\d{1,3})[\s:]?(\d{1,3})([-,\s]{0,2})(\d{1,3})?$/;
const spacePlusReg = /\s+/;
const emptyFunc = () => {};

export const useBibleTransformAddressTermToAddress = (term: string, inputRef: React.RefObject<HTMLInputElement>) => {
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVarsei = useBibleAddressVersei();
  const lowerBooks = useBibleBookLowerCaseList();
  const books = useBibleBookList();
  const chapters = useBibleWholeChapterBookList();
  const [address, setAddress] = useState<ReactNode>(null);
  const onClickRef = useRef(emptyFunc);
  const setAddressIndexes = useSetBibleAddressIndexes();
  const setJoinAddress = useBibleTranslationJoinAddressSetter();

  useEffect(() => {
    if (inputRef.current === null) return;
    inputRef.current.addEventListener('keydown', event => {
      if (event.code === 'Enter') {
        onClickRef.current();
        inputRef.current?.blur();
      }
    });
  }, [inputRef]);

  useEffect(() => {
    if (term.length < 1) return;

    const match = term.trim().toLowerCase().match(addressParserReg);

    if (match === null) return;

    const [, bookn, chapterStr, verseStr, verseSeparator, plusVerseStr] = match;

    const chapterNumber = chapterStr === undefined ? currentChapteri + 1 : +chapterStr;
    const verseNumber = verseStr === undefined ? currentVarsei + 1 : +verseStr;
    const plusVerseNumber = plusVerseStr === undefined ? undefined : +plusVerseStr;

    let booki = -1;

    if (bookn === undefined) booki = currentBooki;
    else {
      const bookNameWithoutSpace = bookn.replace(spacePlusReg, '');

      if (booki < 0)
        booki = lowerBooks.findIndex(book => book.titles.includes(bookn) || book.titles.includes(bookNameWithoutSpace));
      if (booki < 0)
        booki = lowerBooks.findIndex(book =>
          book.titles.some(title => title.startsWith(bookn) || title.startsWith(bookNameWithoutSpace)),
        );
      if (booki < 0)
        booki = lowerBooks.findIndex(book =>
          book.titles.some(title => title.includes(bookn) || title.includes(bookNameWithoutSpace)),
        );
      if (booki < 0) booki = currentBooki;
    }

    const bookNameNode = booki === currentBooki ? <span className="color--7">{books[booki][0]}</span> : books[booki][0];

    let chapterNode: ReactNode = chapterNumber;
    let verseNode: ReactNode = verseNumber;
    let plusVerseNode: ReactNode = plusVerseNumber;

    if (chapterNumber > chapters[booki].length) {
      chapterNode = <span className="color--ko">{chapterNumber}</span>;
      verseNode = <span className="color--ko">{verseNumber}</span>;
      if (plusVerseNumber !== undefined) plusVerseNode = <span className="color--ko">{plusVerseNumber}</span>;

      onClickRef.current = () => {};
    } else if (
      chapters[booki]?.[chapterNumber - 1] !== undefined &&
      (verseNumber > chapters[booki][chapterNumber - 1].length ||
        (plusVerseNumber !== undefined && plusVerseNumber <= verseNumber))
    ) {
      verseNode = <span className="color--ko">{verseNumber}</span>;
      if (plusVerseNumber !== undefined) plusVerseNode = <span className="color--ko">{plusVerseNumber}</span>;

      onClickRef.current = () => {};
    } else if (
      plusVerseNumber !== undefined &&
      chapters[booki]?.[chapterNumber - 1] !== undefined &&
      plusVerseNumber > chapters[booki][chapterNumber - 1].length
    ) {
      plusVerseNode = <span className="color--ko">{plusVerseNumber}</span>;

      onClickRef.current = () => {};
    } else {
      onClickRef.current = () => {
        if (plusVerseNumber === undefined) setAddressIndexes(booki, chapterNumber - 1, verseNumber - 1);
        else {
          const min = verseNumber - 1;

          setJoinAddress({
            [booki]: {
              [chapterNumber - 1]:
                verseSeparator.trim() === ','
                  ? [verseNumber - 1, plusVerseNumber - 1]
                  : Array(plusVerseNumber - verseNumber + 1)
                      .fill(0)
                      .map((_, i) => i + min),
            },
          });
        }
      };
    }

    const address = (
      <>
        {bookNameNode} {chapterNode}:{verseNode}
        {plusVerseNode === undefined ? null : (
          <>
            {verseSeparator.trim() === ',' ? ',' : '-'}
            {plusVerseNode}
          </>
        )}
      </>
    );

    setAddress(address);
  }, [
    books,
    chapters,
    currentBooki,
    currentChapteri,
    currentVarsei,
    lowerBooks,
    setAddressIndexes,
    setJoinAddress,
    term,
  ]);

  return address;
};

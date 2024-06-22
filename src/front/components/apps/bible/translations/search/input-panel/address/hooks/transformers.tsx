import { ReactNode, useEffect, useRef, useState } from 'react';
import { useBibleTranslationJoinAddressSetter, useSetBibleAddressIndexes } from '../../../../../hooks/address/address';
import { useBibleAddressBooki } from '../../../../../hooks/address/books';
import { useBibleAddressChapteri } from '../../../../../hooks/address/chapters';
import { useBibleAddressVersei } from '../../../../../hooks/address/verses';
import { useBibleBookList } from '../../../../../hooks/texts';
import { useBibleTranslatesContext } from '../../../../../translates/TranslatesContext';

const addressParserReg = /^(\d?\s*[а-яё]+)?\s?(\d{1,3})[\s:]?(\d{1,3})([-,\s]{0,2})(\d{1,3})?$/;
const spacePlusReg = /\s+/;
const emptyFunc = () => {};

export const useBibleTransformAddressTermToAddress = (term: string, inputRef: React.RefObject<HTMLInputElement>) => {
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVarsei = useBibleAddressVersei();
  const books = useBibleBookList();
  const { chapters, lowerBooks } = useBibleTranslatesContext().rst ?? {};
  const [address, setAddress] = useState<ReactNode>(null);
  const onClickRef = useRef(emptyFunc);
  const setAddressIndexes = useSetBibleAddressIndexes();
  const setJoinAddress = useBibleTranslationJoinAddressSetter();

  useEffect(() => {
    if (inputRef.current === null) return;
    return hookEffectLine()
      .addEventListener(inputRef.current, 'keydown', event => {
        if (event.code !== 'Enter') return;

        onClickRef.current();
        inputRef.current?.blur();
      })
      .effect();
  }, [inputRef]);

  useEffect(() => {
    if (lowerBooks === undefined || chapters === undefined || term.length < 1) return;

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

      if (booki < 0) booki = lowerBooks.findIndex(book => book.includes(bookn) || book.includes(bookNameWithoutSpace));
      if (booki < 0)
        booki = lowerBooks.findIndex(book =>
          book.some(title => title.startsWith(bookn) || title.startsWith(bookNameWithoutSpace)),
        );
      if (booki < 0)
        booki = lowerBooks.findIndex(book =>
          book.some(title => title.includes(bookn) || title.includes(bookNameWithoutSpace)),
        );
      if (booki < 0) booki = currentBooki;
    }

    const bookNameNode = booki === currentBooki ? <span className="color--7">{books[booki][0]}</span> : books[booki][0];

    let chapterNode: ReactNode = chapterNumber;
    let verseNode: ReactNode = verseNumber;
    let plusVerseNode: ReactNode = plusVerseNumber;

    if (chapters[booki] == null) return;
    const book = chapters[booki]!;

    if (chapterNumber > book.length) {
      chapterNode = <span className="color--ko">{chapterNumber}</span>;
      verseNode = <span className="color--ko">{verseNumber}</span>;
      if (plusVerseNumber !== undefined) plusVerseNode = <span className="color--ko">{plusVerseNumber}</span>;

      onClickRef.current = () => {};
    } else if (
      book[chapterNumber - 1] !== undefined &&
      (verseNumber > book[chapterNumber - 1].length ||
        (plusVerseNumber !== undefined && plusVerseNumber <= verseNumber))
    ) {
      verseNode = <span className="color--ko">{verseNumber}</span>;
      if (plusVerseNumber !== undefined) plusVerseNode = <span className="color--ko">{plusVerseNumber}</span>;

      onClickRef.current = () => {};
    } else if (
      plusVerseNumber !== undefined &&
      book[chapterNumber - 1] !== undefined &&
      plusVerseNumber > book[chapterNumber - 1].length
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

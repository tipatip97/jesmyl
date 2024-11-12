import { ReactNode, useEffect, useRef, useState } from 'react';
import { makeRegExp } from 'shared/utils';
import { emptyFunc } from 'shared/utils';
import { addEventListenerPipe, hookEffectPipe } from '../../../../../../../../complect/hookEffectPipe';
import { useBibleTranslationJoinAddressSetter, useSetBibleAddressIndexes } from '../../../../../hooks/address/address';
import { useBibleBookList } from '../../../../../hooks/texts';
import { BibleBooki, BibleChapteri, BibleVersei } from '../../../../../model';
import { bibleLowerBooks, useBibleTranslatesContext } from '../../../../../translates/TranslatesContext';

const addressReg = makeRegExp('/(\\d?\\s*[а-яё]+)\\s*((\\d{1,3})((:|\\s+)(\\d{1,3})(\\s*([-,]?)\\s*)(\\d{1,3})?)?)?/i');
const makePropsFromAddressArgs = (args: [string, ...(string | und)[]] | RegExpMatchArray) => {
  const [$all, bookn, , chapterStr, , , verseStr, , verseSeparator, finishVerseStr] = args;

  return { $all, bookn, chapterStr, verseStr, verseSeparator, finishVerseStr };
};

export const useBibleTransformAddressTermToAddress = (term: string, inputRef: React.RefObject<HTMLInputElement>) => {
  const books = useBibleBookList();
  const { chapters } = useBibleTranslatesContext().rst ?? {};
  const [address, setAddress] = useState<ReactNode>(null);
  const onEnterPressRef = useRef(emptyFunc);
  const setAddressIndexes = useSetBibleAddressIndexes();
  const setJoinAddress = useBibleTranslationJoinAddressSetter();

  useEffect(() => {
    if (inputRef.current === null) return;
    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(inputRef.current, 'keydown', event => {
          if (event.code !== 'Enter') return;

          onEnterPressRef.current();
          inputRef.current?.blur();
        }),
      )
      .effect();
  }, [inputRef]);

  useEffect(() => {
    if (chapters === undefined || term.length < 1) return;

    const match = term.match(addressReg);

    if (match === null) return;

    const { bookn, chapterStr, verseStr, verseSeparator, finishVerseStr } = makePropsFromAddressArgs(match);

    const chapterNumberi = chapterStr === undefined ? 0 : ((+chapterStr - 1) as BibleChapteri);
    const verseNumber = (verseStr === undefined ? 1 : (+verseStr as BibleVersei)) || 1;
    const finishVerseNumber = finishVerseStr === undefined ? undefined : +finishVerseStr;

    let booki = BibleBooki.none;

    if (bookn === undefined) booki = 0;
    else {
      const bookNameWithoutSpace = bookn.replace(makeRegExp('/\\s+/'), '');

      if (booki < 0)
        booki = bibleLowerBooks.findIndex(book => book.includes(bookn) || book.includes(bookNameWithoutSpace));
      if (booki < 0)
        booki = bibleLowerBooks.findIndex(book =>
          book.some(title => title.startsWith(bookn) || title.startsWith(bookNameWithoutSpace)),
        );
      if (booki < 0)
        booki = bibleLowerBooks.findIndex(book =>
          book.some(title => title.includes(bookn) || title.includes(bookNameWithoutSpace)),
        );
      if (booki < 0) booki = 0;
    }

    const bookNameNode = booki === 0 ? <span className="color--7">{books[booki][0]}</span> : books[booki][0];

    let chapterNode: ReactNode = chapterNumberi + 1;
    let verseNode: ReactNode = verseNumber;
    let finishVerseNode: ReactNode = finishVerseNumber;

    if (chapters[booki] == null) return;
    const book = chapters[booki]!;

    do {
      const isChapterOverOfBookLength = chapterNumberi >= book.length;

      if (isChapterOverOfBookLength) {
        chapterNode = <span className="color--ko">{chapterNumberi + 1}</span>;
        verseNode = <span className="color--ko">{verseNumber}</span>;
        if (finishVerseNumber !== undefined) finishVerseNode = <span className="color--ko">{finishVerseNumber}</span>;

        onEnterPressRef.current = emptyFunc;

        break;
      }

      const chapterLength = book[chapterNumberi]?.length ?? 0;
      const isFinishVerseOverOfCurrentChapter = finishVerseNumber !== undefined && finishVerseNumber > chapterLength;

      if (isFinishVerseOverOfCurrentChapter) {
        finishVerseNode = <span className="color--ko">{finishVerseNumber}</span>;

        onEnterPressRef.current = emptyFunc;

        break;
      }

      const isVerseOverOfChapter = verseNumber > chapterLength;
      const isFinishVerseLessThenStartVerse = finishVerseNumber !== undefined && finishVerseNumber <= verseNumber;
      const isVerseDiapasonIncorrect = isVerseOverOfChapter || isFinishVerseLessThenStartVerse;

      if (isVerseDiapasonIncorrect) {
        verseNode = <span className="color--ko">{verseNumber}</span>;
        if (finishVerseNumber !== undefined) finishVerseNode = <span className="color--ko">{finishVerseNumber}</span>;

        onEnterPressRef.current = emptyFunc;

        break;
      }

      onEnterPressRef.current = () => {
        if (finishVerseNumber === undefined) setAddressIndexes(booki, chapterNumberi, verseNumber - 1);
        else {
          setAddressIndexes(booki, chapterNumberi, finishVerseNumber - 1);

          setJoinAddress({
            [booki]: {
              [chapterNumberi]:
                verseSeparator?.trim() === ','
                  ? [verseNumber - 1, finishVerseNumber - 1]
                  : Array(finishVerseNumber - verseNumber + 1)
                      .fill(0)
                      .map((_, i) => i + verseNumber - 1),
            },
          } as never);
        }
      };
    } while (false);

    const address = (
      <>
        {bookNameNode} {chapterNode}:{verseNode}
        {finishVerseNode === undefined ? null : (
          <>
            {verseSeparator?.trim() === ',' ? ',' : '-'}
            {finishVerseNode}
          </>
        )}
      </>
    );

    setAddress(address);
  }, [books, chapters, setAddressIndexes, setJoinAddress, term]);

  return address;
};

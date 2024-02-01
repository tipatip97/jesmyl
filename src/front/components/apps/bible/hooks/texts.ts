import * as bibleTitlesJSON from '../../../../../back/apps/bible/bibleBookTitles.json';
import * as chaptersJSON from '../../../../../back/apps/bible/rst.json';
import { MyLib } from '../../../../complect/my-lib/MyLib';
import { BibleTranslationJoinAddress } from '../model';
import { useBibleTranslationJoinAddress } from './address/address';
import { useBibleAddressBooki } from './address/books';
import { useBibleAddressChapteri } from './address/chapters';
import { useBibleAddressVersei } from './address/verses';

export const chapterBooks: string[][][] = ({ ...chaptersJSON } as any).chapters;
export const bible: { titles: [string, string][] } = { ...bibleTitlesJSON } as never;
const lowerChapterBooks: string[][][] = [];
const numSortFunc = (a: number, b: number) => a - b;

for (const book of chapterBooks) {
  const lowerBook = (lowerChapterBooks[lowerChapterBooks.length] = [] as string[][]);

  for (const chapter of book) {
    const lowerChapter = (lowerBook[lowerBook.length] = [] as string[]);

    for (const verse of chapter) lowerChapter[lowerChapter.length] = verse.toLowerCase();
  }
}

export const useBibleCurrentVerseTexts = (): string[] | und => {
  const currentChapteri = useBibleAddressChapteri();

  return chapterBooks[useBibleAddressBooki()]?.[currentChapteri];
};

const lowerBooks = bible.titles.map(book => ({ ...book, titles: book.map(title => title.toLowerCase()) }));

export const useBibleCurrentChapterList = () => chapterBooks[useBibleAddressBooki()];
export const useBibleBookList = () => bible.titles;
export const useBibleBookLowerCaseList = () => lowerBooks;
export const useBibleCurrentWholeLowerCaseChapterBookList = () => lowerChapterBooks;
export const useBibleCurrentWholeChapterBookList = () => chapterBooks;

export const takeBibleSlideText = (booki: number, chapteri: number, versei: number, isSetAddress?: boolean) => {
  return (isSetAddress === false ? '' : versei + 1 + '. ') + chapterBooks[booki]?.[chapteri]?.[versei];
};

export const takeBibleJoinedAddressSlideText = (joinAddress: BibleTranslationJoinAddress, isSetAddress?: boolean) => {
  return MyLib.entries(joinAddress)
    .map(([booki, book], _, booka) => {
      const bookEntries = MyLib.entries(book);

      return (
        (isSetAddress !== false && booka.length > 1
          ? bible.titles[booki][0] + (bookEntries.length > 1 ? '' : ', ' + (1 + +bookEntries[0][0])) + ':\n'
          : '') +
        bookEntries
          .map(([chapteri, chapter], _, chaptera) => {
            const chapterPrefix = isSetAddress === false ? '' : chaptera.length > 1 ? +chapteri + 1 + ':' : '';
            return chapter
              .slice(0)
              .sort(numSortFunc)
              .map(
                versei =>
                  (isSetAddress === false ? '' : `${chapterPrefix}${versei + 1}. `) +
                  (chapterBooks[booki]?.[chapteri]?.[versei] ?? ''),
              )
              .join('\n');
          })
          .join('\n')
      );
    })
    .join('\n\n');
};

export const useBibleCurrentSlideText = () => {
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();
  const joinAddress = useBibleTranslationJoinAddress();

  if (joinAddress === null) return takeBibleSlideText(currentBooki, currentChapteri, currentVersei);
  return takeBibleJoinedAddressSlideText(joinAddress);
};

export const takeBibleAddressText = (booki: number, chapteri: number, versei: number, titleVariant: 0 | 1 = 0) => {
  return `${bible.titles[booki][titleVariant]} ${chapteri + 1}:${versei + 1}`;
};

export const takeBibleJoinedAddressText = (joinAddress: BibleTranslationJoinAddress, titleVariant: 0 | 1 = 0) => {
  return MyLib.entries(joinAddress)
    .map(([booki, book]) => {
      return (
        bible.titles[booki][titleVariant] +
        ' ' +
        MyLib.entries(book)
          .map(([chapteri, chapter]) => {
            let versesStr = '';
            const verses = [...chapter].sort(numSortFunc);

            for (let i = 0; i < verses.length; i++) {
              const versei = verses[i];

              if (i === 0) {
                versesStr += versei + 1;
                continue;
              }

              if (versei !== verses[i - 1] + 1) versesStr += ',' + (versei + 1);
              else if (versei !== verses[i + 1] - 1) versesStr += '-' + (versei + 1);
            }

            return 1 + +chapteri + ':' + versesStr;
          })
          .join(', ')
      );
    })
    .join('; ');
};

export const useBibleCurrentAddressText = () => {
  const joinAddress = useBibleTranslationJoinAddress();
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();

  if (joinAddress === null) return takeBibleAddressText(currentBooki, currentChapteri, currentVersei);
  return takeBibleJoinedAddressText(joinAddress);
};

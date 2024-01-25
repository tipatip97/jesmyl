import { memo } from 'react';
import { useBibleTranslationAddressIndexesSetter } from '../../hooks/address/address';
import { useBibleBookList, useBibleCurrentWholeChapterBookList } from '../../hooks/texts';

interface Props {
  booki: number;
  chapteri: number;
  versei: number;
  splitReg: RegExp;
  resulti: number;
}

export const BibleSearchResultVerse = memo(({ booki, chapteri, versei, splitReg, resulti }: Props) => {
  const chapterBooks = useBibleCurrentWholeChapterBookList();
  const books = useBibleBookList();
  const textBits = chapterBooks[booki][chapteri][versei].split(splitReg);
  const addressSetter = useBibleTranslationAddressIndexesSetter();

  return (
    <div
      id={`bible-search-result-${booki}-${chapteri}-${versei}`}
      className="bible-search-result pointer margin-gap-t flex"
      onClick={addressSetter(booki, chapteri, versei, resulti)}
    >
      <span className="color--3 margin-gap-r nowrap">
        {books[booki].titles[1]} {chapteri + 1} {versei + 1}
      </span>
      <span>
        {textBits.map((bit, biti) => {
          return (
            <span
              key={biti}
              className={biti % 2 ? 'color--7' : undefined}
            >
              {bit}
            </span>
          );
        })}
      </span>
    </div>
  );
});

import { memo } from 'react';
import { useBibleTranslationAddressIndexesSetter } from '../../hooks/address/address';
import { useBibleBookList, useBibleChaptersCombine } from '../../hooks/texts';

interface Props {
  booki: number;
  chapteri: number;
  versei: number;
  splitReg: RegExp;
  resulti: number;
  onClick?: (booki: number, chapteri: number, versei: number) => void;
}

export const BibleSearchResultVerse = memo(({ booki, chapteri, versei, splitReg, resulti, onClick }: Props) => {
  const { chapters } = useBibleChaptersCombine();
  const books = useBibleBookList();
  const textBits = chapters?.[booki][chapteri][versei].split(splitReg);
  const addressSetter = useBibleTranslationAddressIndexesSetter();

  return (
    <div
      id={`bible-search-result-${booki}-${chapteri}-${versei}`}
      className="bible-search-result pointer margin-gap-t flex"
      onClick={addressSetter(booki, chapteri, versei, resulti, onClick)}
    >
      <span className="color--3 margin-gap-r nowrap">
        {books[booki][1]} {chapteri + 1} {versei + 1}
      </span>
      <span>
        {textBits?.map((__html, biti) => {
          return (
            <span
              key={biti}
              className={biti % 2 ? 'color--7' : undefined}
              dangerouslySetInnerHTML={{ __html }}
            />
          );
        })}
      </span>
    </div>
  );
});

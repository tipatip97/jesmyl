import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBibleTranslationJoinAddressSetter } from '../../hooks/address/address';
import { useBibleAddressBooki } from '../../hooks/address/books';
import { useBibleAddressChapteri } from '../../hooks/address/chapters';
import { useBibleCurrentWholeLowerCaseChapterBookList } from '../../hooks/texts';
import { BibleTranslationSingleAddress } from '../../model';
import { BibleSearchResultVerse } from './ResultVerse';
import {
  useBibleTranslationSearchResultList,
  useBibleTranslationSearchResultListSetter,
  useBibleTranslationSearchResultSelected,
} from './hooks/results';
import { useBibleSearchTerm, useBibleSearchZone } from './selectors';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const BibleSearchResults = ({ inputRef }: Props) => {
  const searchZone = useBibleSearchZone();
  const searchTerm = useBibleSearchTerm();
  const lowerBooks = useBibleCurrentWholeLowerCaseChapterBookList();
  const [list, setList] = useState<JSX.Element[]>([]);
  const resultSelected = useBibleTranslationSearchResultSelected();
  const resultList = useBibleTranslationSearchResultList();
  const setResultList = useBibleTranslationSearchResultListSetter();
  const onClick = useCallback(() => inputRef.current?.focus(), [inputRef]);
  const setJoin = useBibleTranslationJoinAddressSetter();

  let currentBooki = useBibleAddressBooki();
  let currentChapteri = useBibleAddressChapteri();
  if (searchZone === 'global') {
    currentBooki = -1;
    currentChapteri = -1;
  }

  useEffect(() => {
    if (searchTerm.trim().length < 3) return;
    const freeTerm = searchTerm.trim().replace(/[^а-яё ]/gi, '');
    if (freeTerm.length < 3) return;

    const lowerTerm = freeTerm.trim().toLowerCase();
    const lowerWords = lowerTerm.split(/ +/);
    const founds: BibleTranslationSingleAddress[][] = Array(lowerWords.length)
      .fill(0)
      .map(() => []);
    const splitReg = RegExp('(' + lowerWords.join('|') + ')', 'ig');

    const searchInChapter = (booki: number, chapteri: number, chapter: string[]) => {
      for (let versei = 0; versei < chapter.length; versei++) {
        const verse = chapter[versei];
        let foundWordsCount = -1;

        for (const lowerWord of lowerWords) {
          if (verse.includes(lowerWord)) foundWordsCount++;
        }

        if (foundWordsCount > -1) founds[foundWordsCount].push([booki, chapteri, versei]);
      }
    };

    if (searchZone === 'global')
      for (let booki = 0; booki < lowerBooks.length; booki++) {
        const book = lowerBooks[booki];

        for (let chapteri = 0; chapteri < book.length; chapteri++) searchInChapter(booki, chapteri, book[chapteri]);
      }
    else searchInChapter(currentBooki, currentChapteri, lowerBooks[currentBooki][currentChapteri]);

    const list = founds.reverse().flat().slice(0, 50);

    setResultList(list);

    setList(
      list.map(([booki, chapteri, versei], resulti) => (
        <BibleSearchResultVerse
          key={booki + ' ' + chapteri + ' ' + versei}
          booki={booki}
          chapteri={chapteri}
          versei={versei}
          splitReg={splitReg}
          resulti={resulti}
        />
      )),
    );
  }, [currentBooki, currentChapteri, lowerBooks, searchTerm, searchZone, setResultList]);

  useEffect(() => {
    if (resultSelected === null || resultList[resultSelected] == null) return;
    const [booki, chapteri, versei] = resultList[resultSelected];
    const node = document.getElementById(`bible-search-result-${booki}-${chapteri}-${versei}`);
    setJoin(null);
    if (node === null) return;
    node.scrollIntoView({ block: 'nearest' });

    node.classList.add('selected');
    return () => node.classList.remove('selected');
  }, [resultList, resultSelected, setJoin]);

  return <List onClick={onClick}>{list}</List>;
};

const List = styled.div`
  height: 100px;
  overflow-y: auto;
  overflow-x: hidden;

  .bible-search-result.selected {
    background-color: var(--color--2);
    color: var(--color--3);
  }
`;

import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDebounceValue } from '../../../../../complect/useDebounceValue';
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

const spacePlusReg = / +/;
const notRuLettersSpaceReg_gi = /[^а-яё ]/gi;
const yoLetterReg_g = /[ёе]/g;
const mapRetArrFunc = (): BibleTranslationSingleAddress[] => [];

const maxItems = 49;

const sortStringsByLength = (a: string, b: string) => b.length - a.length;

export const BibleSearchResults = ({ inputRef }: Props) => {
  const searchZone = useBibleSearchZone();
  const searchTerm = useDebounceValue(useBibleSearchTerm());
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
    const freeTerm = searchTerm.trim().replace(notRuLettersSpaceReg_gi, '');
    if (freeTerm.length < 3) return;

    const lowerTerm = freeTerm.trim().toLowerCase();
    const lowerWords = lowerTerm.replace(yoLetterReg_g, '[её]').split(spacePlusReg);
    const founds: BibleTranslationSingleAddress[][] = Array(lowerWords.length).fill(0).map(mapRetArrFunc);
    const splitReg = RegExp('(' + lowerWords.sort(sortStringsByLength).join('|') + ')', 'ig');
    const lastFounds = founds[founds.length - 1];

    const searchInChapter = (booki: number, chapteri: number, chapter: string[]) => {
      for (let versei = 0; versei < chapter.length; versei++) {
        const verse = chapter[versei];
        let foundWordsCount = -1;

        for (const lowerWord of lowerWords) {
          if (verse.includes(lowerWord)) foundWordsCount++;
        }

        if (foundWordsCount > -1) {
          founds[foundWordsCount].push([booki, chapteri, versei]);

          if (lastFounds.length > maxItems) break;
        }
      }
    };

    if (searchZone === 'global')
      bibleSearchLoop: for (let booki = 0; booki < lowerBooks.length; booki++) {
        const book = lowerBooks[booki];

        for (let chapteri = 0; chapteri < book.length; chapteri++) {
          searchInChapter(booki, chapteri, book[chapteri]);
          if (lastFounds.length > maxItems) break bibleSearchLoop;
        }
      }
    else searchInChapter(currentBooki, currentChapteri, lowerBooks[currentBooki][currentChapteri]);

    const list = founds
      .reverse()
      .flat()
      .slice(0, maxItems + 1);

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

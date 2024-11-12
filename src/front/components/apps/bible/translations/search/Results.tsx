import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { makeRegExp } from 'shared/utils';
import { useDebounceValue } from '../../../../../complect/useDebounceValue';
import { useBibleTranslationJoinAddressSetter } from '../../hooks/address/address';
import { useBibleAddressBooki } from '../../hooks/address/books';
import { useBibleAddressChapteri } from '../../hooks/address/chapters';
import { BibleBooki, BibleChapteri, BibleTranslationSingleAddress, BibleVersei } from '../../model';
import { useBibleTranslatesContext } from '../../translates/TranslatesContext';
import { useBibleShowTranslatesValue } from '../../translates/hooks';
import BibleSearchResultVerse from './ResultVerse';
import { useBibleTranslationSearchResultList, useBibleTranslationSearchResultSelectedValue } from './hooks/results';
import { useBibleSearchTerm, useBibleSearchZone } from './selectors';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  height?: string;
  innerZone: 'book' | 'chapter';
  onClick?: (booki: BibleBooki, chapteri: BibleChapteri, versei: BibleVersei) => void;
}

const mapWordsReplaceYoLetter = (word: string) => word.replace(makeRegExp('/[ёе]/g'), '[её]');
const mapRetArrFunc = (): BibleTranslationSingleAddress[] => [];
const getSplitReg = (lowerWords: string[]) =>
  makeRegExp(`/(${lowerWords.map(mapWordsReplaceYoLetter).sort(sortStringsByLength).join('|')})/gi`);

const maxItems = 49;

const sortStringsByLength = (a: string, b: string) => b.length - a.length;

export default function BibleSearchResults({ inputRef, height = '100px', innerZone, onClick: userOnClick }: Props) {
  const [searchZone] = useBibleSearchZone();
  const searchTerm = useDebounceValue(useBibleSearchTerm()[0]);
  const showTranslates = useBibleShowTranslatesValue();
  const lowerChapters = useBibleTranslatesContext()[showTranslates[0]]?.lowerChapters;
  const [list, setList] = useState<JSX.Element[]>([]);
  const resultSelected = useBibleTranslationSearchResultSelectedValue();
  const [resultList, setResultList] = useBibleTranslationSearchResultList();
  const onClick = useCallback(() => inputRef.current?.focus(), [inputRef]);
  const setJoin = useBibleTranslationJoinAddressSetter();

  let currentBooki = useBibleAddressBooki();
  let currentChapteri = useBibleAddressChapteri();
  if (searchZone === 'global') {
    currentBooki = BibleBooki.none;
    currentChapteri = BibleChapteri.none;
  }

  useEffect(() => {
    if (lowerChapters === undefined || searchTerm.trim().length < 3) return;
    const freeTerm = searchTerm.trim().replace(makeRegExp('/[^а-яё ]/gi'), '');
    if (freeTerm.length < 3) return;

    const lowerTerm = freeTerm.trim().toLowerCase();
    const lowerWords = lowerTerm.split(makeRegExp('/ +/'));
    const founds = Array(lowerWords.length).fill(0).map(mapRetArrFunc);
    const splitReg = getSplitReg(lowerWords);
    const lastFounds = founds[founds.length - 1];

    const searchInChapter = (booki: BibleBooki, chapteri: BibleChapteri, chapter: string[]) => {
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
      bibleSearchLoop: for (let booki = 0; booki < lowerChapters.length; booki++) {
        const book = lowerChapters[booki];

        for (let chapteri = 0; chapteri < book.length; chapteri++) {
          searchInChapter(booki, chapteri, book[chapteri]);
          if (lastFounds.length > maxItems) break bibleSearchLoop;
        }
      }
    else {
      if (innerZone === 'book') {
        const book = lowerChapters[currentBooki];

        for (let chapteri = 0; chapteri < book.length; chapteri++) {
          searchInChapter(currentBooki, chapteri, book[chapteri]);
          if (lastFounds.length > maxItems) break;
        }
      } else searchInChapter(currentBooki, currentChapteri, lowerChapters[currentBooki][currentChapteri]);
    }

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
          onClick={userOnClick}
        />
      )),
    );
  }, [currentBooki, currentChapteri, innerZone, lowerChapters, searchTerm, searchZone, setResultList, userOnClick]);

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

  return (
    <List
      $height={height}
      onClick={onClick}
    >
      {list}
    </List>
  );
}

const List = styled.div<{ $height: string }>`
  height: ${props => props.$height};
  overflow-y: auto;
  overflow-x: hidden;

  .bible-search-result.selected {
    background-color: var(--color--2);
    color: var(--color--3);
  }
`;

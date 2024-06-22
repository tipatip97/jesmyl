import { useEffect, useRef, useState } from 'react';
import IconCheckbox from '../../../../../complect/the-icon/IconCheckbox';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { useBibleAddressBooki } from '../../hooks/address/books';
import { useBibleAddressChapteri } from '../../hooks/address/chapters';
import { justBibleStorageSet } from '../../hooks/storage';
import { useBibleBookList } from '../../hooks/texts';
import BibleSearchResults from '../../translations/search/Results';
import BibleSearchPanelSearchInput from '../../translations/search/input-panel/SearchInput';
import { useBibleSearchZone } from '../../translations/search/selectors';
import useBibleNav from '../../useBibleNav';

const resetSelected = () => justBibleStorageSet('translationSearchResultSelected', null);
const emptyArr: [] = [];

export default function BibleReaderSearchPage() {
  const { goBack, navigateToRoot } = useBibleNav();
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const searchZone = useBibleSearchZone();
  const bookTitles = useBibleBookList();
  const [innerZone, setInnerZone] = useState<'book' | 'chapter'>('book');

  useEffect(resetSelected, emptyArr);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <PhaseContainerConfigurer
      goBack={goBack}
      className=""
      headTitle="Поиск"
      content={
        <>
          <div className="full-size">
            <IconCheckbox
              checked={searchZone === 'global'}
              postfix="Глобальный поиск"
              onChange={() => justBibleStorageSet('translationSearchZone', 'global')}
            />
            <IconCheckbox
              checked={searchZone === 'inner' && innerZone === 'book'}
              postfix={
                <>
                  Поиск по книге <i>{bookTitles[currentBooki][0]}</i>
                </>
              }
              onChange={() => {
                justBibleStorageSet('translationSearchZone', 'inner');
                setInnerZone('book');
              }}
            />
            <IconCheckbox
              checked={searchZone === 'inner' && innerZone === 'chapter'}
              postfix={
                <>
                  {'Поиск по главе '}
                  <i>
                    {bookTitles[currentBooki][0]} {currentChapteri + 1}
                  </i>
                </>
              }
              onChange={() => {
                justBibleStorageSet('translationSearchZone', 'inner');
                setInnerZone('chapter');
              }}
            />
            <BibleSearchPanelSearchInput inputRef={inputRef} />
            <BibleSearchResults
              inputRef={inputRef}
              height="calc(100% - 100px)"
              innerZone={innerZone}
              onClick={() => navigateToRoot()}
            />
          </div>
        </>
      }
    />
  );
}

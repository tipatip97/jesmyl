import { useEffect, useRef, useState } from 'react';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import IconCheckbox from '../../../../../complect/the-icon/IconCheckbox';
import { useBibleAddressBooki } from '../../hooks/address/books';
import { useBibleAddressChapteri } from '../../hooks/address/chapters';
import { useBibleBookList } from '../../hooks/texts';
import BibleSearchResults from '../../translations/search/Results';
import { useBibleTranslationSearchResultSelectedSet } from '../../translations/search/hooks/results';
import BibleSearchPanelSearchInput from '../../translations/search/input-panel/SearchInput';
import { useBibleSearchZone } from '../../translations/search/selectors';
import useBibleNav from '../../useBibleNav';

const emptyArr: [] = [];

export default function BibleReaderSearchPage() {
  const { goBack, navigateToRoot } = useBibleNav();
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const [searchZone, setZone] = useBibleSearchZone();
  const bookTitles = useBibleBookList();
  const [innerZone, setInnerZone] = useState<'book' | 'chapter'>('book');
  const setResultSelected = useBibleTranslationSearchResultSelectedSet();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setResultSelected(null), emptyArr);

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
              onChange={() => setZone('global')}
            />
            <IconCheckbox
              checked={searchZone === 'inner' && innerZone === 'book'}
              postfix={
                <>
                  Поиск по книге <i>{bookTitles[currentBooki][0]}</i>
                </>
              }
              onChange={() => {
                setZone('inner');
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
                setZone('inner');
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

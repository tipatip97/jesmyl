import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import IconCheckbox from '../../../../../complect/the-icon/IconCheckbox';
import { useBibleAddressBooki } from '../../hooks/address/books';
import { useBibleAddressChapteri } from '../../hooks/address/chapters';
import { useBibleBookList } from '../../hooks/texts';
import BibleSearchResults from '../../translations/search/Results';
import { useBibleTranslationSearchResultSelectedSet } from '../../translations/search/hooks/results';
import BibleSearchPanelSearchTextInput from '../../translations/search/input-panel/SearchTextInput';
import { useBibleSearchZone } from '../../translations/search/selectors';

const emptyArr: [] = [];

export default function BibleReaderSearchPage() {
  const navigate = useNavigate();
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
      className=""
      withoutBackButton
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
            <BibleSearchPanelSearchTextInput inputRef={inputRef} />
            <BibleSearchResults
              inputRef={inputRef}
              height="calc(100% - 100px)"
              innerZone={innerZone}
              onClick={() => navigate('/bible/i')}
            />
          </div>
        </>
      }
    />
  );
}

import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import DebouncedSearchInput, { useIsNumberSearch } from '../../../../../complect/DebouncedSearchInput';
import LoadIndicatedContent from '../../../../../complect/load-indicated-content/LoadIndicatedContent';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import CmTranslationComListContextInCat from '../../base/translations/InCat';
import CmTranslationComListContextInZeroCat from '../../base/translations/InZeroCat';
import useLaterComList from '../../base/useLaterComList';
import { cmCompositionRoute } from '../../routing/cmRoutingApp';
import { Com } from '../com/Com';
import { ComFaceList } from '../com/face/list/ComFaceList';
import { CatSpecialSearches } from './Cat.complect';
import { TheCatSpecialSearches } from './SpecialSearches';
import { useCcat } from './useCcat';

const mapExtractItem = <Item,>({ item }: { item: Item }) => item;

export default function TheCat({ all }: { all?: boolean; catWid?: number }) {
  const cat = useCcat(all);
  const { laterComs } = useLaterComList();
  const isNumberSearch = useIsNumberSearch();
  const [mapper, setMapper] = useState<CatSpecialSearches['map'] | null>(null);
  const [term, setTerm] = useState(cat?.term ?? '');
  const [filteredComs, setFilteredComs] = useState<null | Com[]>(null);

  useEffect(() => {
    if (cat == null) return;

    if (mapper) {
      setFilteredComs(mapper(cat.coms, term));
      return;
    }

    const coms = cat.search(term, isNumberSearch)?.map(mapExtractItem);

    if (coms == null) return;

    setFilteredComs(coms);
  }, [cat, isNumberSearch, mapper, term]);

  const listRef = useRef<HTMLDivElement>(null);
  const categoryTitleRef = useRef<HTMLDivElement>(null);

  const Context = all ? CmTranslationComListContextInZeroCat : CmTranslationComListContextInCat;

  return (
    <Routes>
      <Route
        index
        element={
          <LoadIndicatedContent isLoading={!cat}>
            <CatPhaseContainer
              className="cat-content"
              withoutBackButton={all}
              headClass="flex between full-width"
              head={
                cat && (
                  <DebouncedSearchInput
                    placeholder="Поиск песен"
                    className="debounced-searcher round-styled"
                    initialTerm={term}
                    onSearch={term => {
                      cat.search(term, isNumberSearch);
                      if (term === '') setMapper(null);
                    }}
                    debounce={10}
                    onDebounced={() => {
                      if (listRef.current) listRef.current.scrollTop = 0;
                    }}
                    onTermChange={setTerm}
                  />
                )
              }
              contentRef={listRef}
              content={
                cat && (
                  <>
                    {term.startsWith('@') && (
                      <TheCatSpecialSearches
                        term={term}
                        setTerm={setTerm}
                        setMapper={setMapper}
                      />
                    )}
                    <div className={`later-com-list ${all && !term && laterComs?.length ? '' : 'hidden'}`}>
                      <div className="list-title sticky">Последние:</div>
                      <ComFaceList
                        list={laterComs}
                        isWithoutIds
                      />
                    </div>
                    <div
                      className="flex between sticky list-title"
                      ref={categoryTitleRef}
                    >
                      <div>{cat.name}:</div>
                      {filteredComs && (
                        <div>{`${cat.coms.length === filteredComs.length ? '' : `${filteredComs.length} / `}${
                          cat.coms.length
                        }`}</div>
                      )}
                    </div>
                    <div className="com-list">
                      <ComFaceList
                        list={filteredComs}
                        isNeedRenderingDelay
                      />
                    </div>
                  </>
                )
              }
            />
          </LoadIndicatedContent>
        }
      />

      {cmCompositionRoute(children => (
        <Context>{children}</Context>
      ))}
    </Routes>
  );
}

const CatPhaseContainer = styled(PhaseContainerConfigurer)`
  .list-title {
    cursor: ns-resize;
  }

  > .content {
    padding-top: 0;
  }

  .later-com-list {
    &.hidden {
      display: none;
    }
  }
`;

import { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import DebouncedSearchInput, { useIsNumberSearch } from '../../../../../complect/DebouncedSearchInput';
import LoadIndicatedContent from '../../../../../complect/load-indicated-content/LoadIndicatedContent';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import CmTranslationComListContextInZeroCat from '../../base/translations/InZeroCat';
import useLaterComList from '../../base/useLaterComList';
import { ComFaceList } from '../com/face/list/ComFaceList';
import TheComposition from '../com/TheComposition';
import { useCcat } from './useCcat';

export default function TheCat({ all }: { all?: boolean; catWid?: number }) {
  const cat = useCcat(all);
  const { laterComs } = useLaterComList();
  const isNumberSearch = useIsNumberSearch();

  const listRef = useRef<HTMLDivElement>(null);
  const categoryTitleRef = useRef<HTMLDivElement>(null);

  const [term, setTerm] = useState(cat?.term || '');

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
                    onSearch={term => cat.search(term, isNumberSearch)}
                    debounce={1000}
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
                      {cat.wraps && (
                        <div>
                          {`${cat.coms.length === cat.wraps.length ? '' : `${cat.wraps.length} / `}${cat.coms.length}`}
                        </div>
                      )}
                    </div>
                    <div className="com-list">
                      <ComFaceList
                        list={cat.wraps.map(({ item }) => item)}
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

      <Route
        path=":comw/*"
        element={
          <CmTranslationComListContextInZeroCat>
            <TheComposition key="compo1" />
          </CmTranslationComListContextInZeroCat>
        }
      />
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

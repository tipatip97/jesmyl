import { useRef, useState } from 'react';
import styled from 'styled-components';
import DebouncedSearchInput, { useIsNumberSearch } from '../../../../../complect/DebouncedSearchInput';
import LoadIndicatedContent from '../../../../../complect/load-indicated-content/LoadIndicatedContent';
import mylib from '../../../../../complect/my-lib/MyLib';
import useCmNav from '../../base/useCmNav';
import useLaterComList from '../../base/useLaterComList';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import { ComFaceList } from '../com/face/list/ComFaceList';
import { useCcat } from './useCcat';

export default function TheCat({ all }: { all?: boolean }) {
  const cat = useCcat(all);
  const { laterComs } = useLaterComList();
  const isNumberSearch = useIsNumberSearch();

  const listRef = useRef<HTMLDivElement>(null);
  const categoryTitleRef = useRef<HTMLDivElement>(null);
  const {
    nav,
    appRouteData: { ccomw },
  } = useCmNav();

  nav.onGeneralFooterButtonClick('all', 'TheCat')(() => scrollToCurrent(true));

  const [term, setTerm] = useState(cat?.term || '');

  const scrollToCurrent = (isSync?: boolean) => {
    if (ccomw) {
      const scroll = () => {
        if (listRef.current)
          if (listRef.current.scrollTop > 0) listRef.current.scrollTop = 0;
          else {
            const currentFace = document.getElementById(`com_face_wid_${ccomw}`);
            if (currentFace) {
              mylib.scrollToView(currentFace, 'top', {
                parent: listRef.current,
                top: categoryTitleRef.current?.clientHeight ?? 40,
              });
            }
          }
      };

      if (isSync && listRef.current?.scrollTop !== 0) scroll();
      else setTimeout(scroll);
    }
  };

  return (
    <LoadIndicatedContent
      isLoading={!cat}
      onLoad={() => scrollToCurrent()}
    >
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
                <div
                  className="list-title sticky"
                  onClick={() => scrollToCurrent()}
                >
                  Последние:
                </div>
                <ComFaceList
                  list={laterComs}
                  isWithoutIds
                />
              </div>
              <div
                className="flex between sticky list-title"
                ref={categoryTitleRef}
                onClick={() => scrollToCurrent()}
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
  );
}

const CatPhaseContainer = styled(PhaseCmContainer)`
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

import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import DebouncedSearchInput from "../../../../../complect/DebouncedSearchInput";
import LoadIndicatedContent from "../../../../../complect/load-indicated-content/LoadIndicatedContent";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import ComFace from "../com/face/ComFace";
import "./Cat.scss";
import { useCcat } from "./useCcat";

const isNumberSearchSelector = (state: RootState) => state.complect.isNumberSearch;

export default function TheCat({ all }: { all?: boolean }) {
  const cat = useCcat(all);
  const { laterComs } = useLaterComList();
  const isNumberSearch = useSelector(isNumberSearchSelector);

  const listRef = useRef<HTMLDivElement>(null);
  const categoryTitleRef = useRef<HTMLDivElement>(null);
  const { nav, appRouteData: { ccomw } } = useCmNav();

  nav.onGeneralFooterButtonClick('all', 'TheCat')(() => scrollToCurrent(true));

  const [term, setTerm] = useState(cat?.term || "");

  const scrollToCurrent = (isSync?: boolean) => {
    if (ccomw) {
      const scroll = () => {
        if (listRef.current)
          if (listRef.current.scrollTop > 0) listRef.current.scrollTop = 0;
          else {
            const currentFace = document.querySelector(
              `.face-item.com-of-cat.current.wid_${ccomw}`
            );
            if (currentFace) {
              mylib.scrollToView(currentFace, "top", {
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
    <LoadIndicatedContent isLoading={!cat} onLoad={() => scrollToCurrent()}>
      <PhaseCmContainer
        topClass="cat-content"
        withoutBackButton={all}
        headClass="flex between full-width"
        head={
          cat && <DebouncedSearchInput
            placeholder="Поиск песен"
            className="debounced-searcher round-styled"
            initialTerm={term}
            onSearch={(term) => cat.search(term, isNumberSearch)}
            debounce={500}
            onDebounced={() => {
              if (listRef.current) listRef.current.scrollTop = 0;
            }}
            onTermChange={(term) => setTerm(term)}
          />}
        contentRef={listRef}
        content={
          cat && (
            <>
              <div
                className={`later-com-list ${all && !term && laterComs.length ? "" : "hidden"}`}
              >
                <div className="list-title sticky">Последние:</div>
                {laterComs.map((com) => (
                  <ComFace
                    key={com.wid}
                    com={com}
                    rejectScrollToView
                  />
                ))}
              </div>
              <div
                className="flex between sticky list-title"
                ref={categoryTitleRef}
              >
                <div>{cat.name}:</div>
                {cat.wraps && (
                  <div>
                    {`${cat.coms.length === cat.wraps.length
                      ? ""
                      : `${cat.wraps.length} / `
                      }${cat.coms.length}`}
                  </div>
                )}
              </div>
              <div className="com-list">
                {cat.wraps.map((wrap) => (
                  <ComFace
                    key={wrap.com.wid}
                    {...wrap}
                    rejectScrollToView
                    groupClass="com-of-cat"
                  />
                ))}
              </div>
            </>
          )
        }
      />
    </LoadIndicatedContent>
  );
}

import { useRef, useState } from "react";
import LoadIndicatedContent from "../../../../../complect/load-indicated-content/LoadIndicatedContent";
import mylib from "../../../../../complect/my-lib/MyLib";
import DebouncedSearcher from "../../base/debounced-searcher/DebouncedSearcher";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import ComFace from "../com/face/ComFace";
import { useCcom } from "../com/useCcom";
import "./Cat.scss";
import { useCcat } from "./useCcat";

export default function TheCat({ all }: { all?: boolean }) {
  const [ccat, , zeroCat] = useCcat();
  const [ccom] = useCcom();
  const { laterComs } = useLaterComList();

  const listRef = useRef<HTMLDivElement>(null);
  const categoryTitleRef = useRef<HTMLDivElement>(null);
  const cat = all ? zeroCat : ccat;

  const [term, setTerm] = useState(cat?.term || "");

  const scrollToCurrent = () => {
    if (ccom) {
      setTimeout(() => {
        const currentFace = document.querySelector(
          `.com-face.com-of-cat.current.wid_${ccom.wid}`
        );
        if (listRef.current)
          if (listRef.current.scrollTop > 0) listRef.current.scrollTop = 0;
          else if (currentFace && categoryTitleRef.current) {
            mylib.scrollToView(currentFace, "top", {
              parent: listRef.current,
              top: categoryTitleRef.current.clientHeight,
            });
          }
      });
    }
  };

  return (
    <PhaseCmContainer
      topClass="cat-content"
      withoutBackButton={all}
      head={
        !cat ? null : (
          <DebouncedSearcher
            initialTerm={term}
            onSearch={(term) => cat.search(term)}
            debounce={500}
            onDebounced={() => {
              if (listRef.current) listRef.current.scrollTop = 0;
            }}
            onTermChange={(term) => setTerm(term)}
          />
        )
      }
      contentRef={listRef}
      content={
        <LoadIndicatedContent isLoading={!cat} onLoad={scrollToCurrent}>
          {!cat ? null : (
            <>
              <div
                className={`later-com-list ${
                  all && !term && laterComs.length ? "" : "hidden"
                }`}
                onClick={scrollToCurrent}
              >
                <div className="later-title sticky">Последние:</div>
                {laterComs.map((com) => (
                  <ComFace key={`later-com-${com.wid}`} com={com} />
                ))}
              </div>
              <div
                className="flex between sticky category-title"
                ref={categoryTitleRef}
                onClick={scrollToCurrent}
              >
                <div>{cat.name}:</div>
                {cat.wraps && (
                  <div>
                    {`${
                      cat.coms.length === cat.wraps.length
                        ? ""
                        : `${cat.wraps.length} / `
                    }${cat.coms.length}`}
                  </div>
                )}
              </div>
              <div className="com-list">
                {cat.wraps.map((wrap) => (
                  <ComFace
                    key={`com-face ${wrap.com.wid}`}
                    {...wrap}
                    groupClass="com-of-cat"
                  />
                ))}
              </div>
            </>
          )}
        </LoadIndicatedContent>
      }
    />
  );
}

import { useRef, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import LoadIndicatedContent from "../../../../../complect/load-indicated-content/LoadIndicatedContent";
import mylib from "../../../../../complect/my-lib/MyLib";
import useLaterComList from "../../base/useLaterComList";
import useCmNav from "../../base/useCmNav";
import { CmSpecialPhase } from "../../Cm.model";
import ComFace from "../com/face/ComFace";
import "./Cat.scss";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import { useCcat } from "./useCcat";
import { useCcom } from "../com/useCcom";

export default function TheCat({
  specialPhase: topSpecialPhase,
}: {
  specialPhase?: CmSpecialPhase;
}) {
  const [ccat, , zeroCat] = useCcat();
  const [ccom] = useCcom();
  const { laterComs } = useLaterComList();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const categoryTitleRef = useRef<HTMLDivElement>(null);
  const { specialPhase } = useCmNav();
  const isThematic = specialPhase === "thematic";

  const cat = isThematic ? ccat : zeroCat;

  const [term, setTerm] = useState(cat?.term || "");
  const [, setTerm1] = useState(cat?.term || "");

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
      withoutBackButton={!isThematic}
      head={
        !cat ? null : (
          <>
            <div className="com-searcher">
              <EvaIcon name="search-outline" />
              <input
                className="filter-input"
                type="text"
                placeholder="Поиск песен"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  cat?.search(
                    event.target.value,
                    () => setTerm(event.target.value),
                    500,
                    () => {
                      setTerm1(event.target.value);
                      if (listRef.current) listRef.current.scrollTop = 0;
                    }
                  )
                }
                ref={searchInputRef}
                value={term}
              />
              <EvaIcon
                name="close"
                className={`clear-button ${term ? "" : "hidden"}`}
                onClick={() => {
                  cat?.search("", () => setTerm(""));
                  searchInputRef.current?.focus();
                }}
              />
            </div>
          </>
        )
      }
      contentRef={listRef}
      content={
        <LoadIndicatedContent isLoading={!cat} onLoad={scrollToCurrent}>
          {!cat ? null : (
            <>
              <div
                className={`later-com-list ${
                  !isThematic && !term && laterComs.length ? "" : "hidden"
                }`}
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
                    specialPhase={topSpecialPhase}
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

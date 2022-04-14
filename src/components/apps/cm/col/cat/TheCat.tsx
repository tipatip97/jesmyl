import { useRef, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import PhaseContainer from "../../base/phase-container/PhaseContainer";
import useLaterComList from "../../base/useLaterComList";
import ComFace from "../com/face/ComFace";
import { useCcat } from "../useCcol";
import "./Cat.scss";

export default function TheCat({ allMode }: { allMode?: boolean }) {
  const [ccat, , zeroCat] = useCcat();
  const { laterComs } = useLaterComList();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const cat = allMode ? zeroCat : ccat;

  const [term, setTerm] = useState(cat?.term || "");
  const [, setTerm1] = useState(cat?.term || "");

  if (!cat) {
    return null;
  }

  return (
    <PhaseContainer
      topClass="cat-content"
      withoutBackButton={allMode}
      head={(backButton) => (
        <>
          {allMode ? null : backButton}
          <div className="com-searcher">
            <EvaIcon name="search-outline" />
            <input
              className="filter-input"
              type="text"
              placeholder="Поиск песен"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                cat.search(
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
                cat.search("", () => setTerm(""));
                searchInputRef.current?.focus();
              }}
            />
          </div>
        </>
      )}
      content={
        <div>
          <div
            className={`later-com-list ${
              allMode && !term && laterComs.length ? "" : "hidden"
            }`}
          >
            <div className="main-gap">Последние:</div>
            {laterComs.map((com) => (
              <ComFace key={`later-com-${com.wid}`} com={com} />
            ))}
          </div>
          <div className="main-gap flex between">
            <div>{allMode ? "Все песни" : cat.name}:</div>
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
          <div className="com-list" ref={listRef}>
            {cat.wraps.map((wrap) => (
              <ComFace
                key={`com-face-${wrap.com.wid}`}
                {...wrap}
                forPhase={allMode ? "com" : "thematic_com"}
              />
            ))}
          </div>
        </div>
      }
    />
  );
}

import { useRef, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useLaterComList from "../../base/useLaterComList";
import ComFace from "../com/face/ComFace";
import { useCcol } from "../useCcol";
import "./Cat.scss";

export default function TheCat() {
  const [ccat] = useCcol("cat");
  const [term, setTerm] = useState(ccat?.term || "");
  const [, setTerm1] = useState(ccat?.term || "");
  const { laterComs } = useLaterComList();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  if (!ccat) {
    return null;
  }

  return (
    <div className="cat-content">
      <div className="header-content">
        <div className="com-searcher">
          <EvaIcon name="search-outline" />
          <input
            className="filter-input"
            type="text"
            placeholder="Поиск песен"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              ccat.search(
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
              ccat.search("", () => setTerm(""));
              searchInputRef.current?.focus();
            }}
          />
        </div>
      </div>
      <div className="content-container">
        <div
          className={`later-com-list ${
            !term && laterComs.length ? "" : "hidden"
          }`}
        >
          <div className="main-gap">Последние:</div>
          {laterComs.map((com) => (
            <ComFace key={`later-com-${com.wid}`} com={com} />
          ))}
        </div>
        <div className="main-gap flex between">
          <div className="">Все песни:</div>
          {ccat.wraps && (
            <div>
              {`${
                ccat.coms.length === ccat.wraps.length
                  ? ""
                  : `${ccat.wraps.length} / `
              }${ccat.coms.length}`}
            </div>
          )}
        </div>
        <div className="com-list" ref={listRef}>
          {ccat.wraps.map((wrap) => (
            <ComFace key={`com-face-${wrap.com.wid}`} {...wrap} />
          ))}
        </div>
      </div>
    </div>
  );
}

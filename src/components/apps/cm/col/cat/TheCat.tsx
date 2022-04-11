import { useRef, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import mylib from "../../../../../complect/my-lib/MyLib";
import useNav from "../../base/useNav";
import { isAccessed } from "../../Cm.complect";
import { useCcol } from "../useCcol";
import "./Cat.scss";

export default function TheCat() {
  const [ccat] = useCcol("cat");
  const [ccom, setCcom] = useCcol("com");
  const { setPhase } = useNav();
  const [term, setTerm] = useState(ccat?.term || "");
  const [, setTerm1] = useState(ccat?.term || "");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  if (!ccat) {
    setPhase("cats");
    return null;
  }

  if (ccom && !term)
    setTimeout(() => {
      const view = document.getElementById(`com-face-${ccom.wid}`);
      if (view) mylib.scrollToView(view, "top");
    }, 100);

  return (
    <div className="cat-content">
      <div className="header-content">
        {/* <div
          key="category-title-col-title"
          className="category-title col-title"
        >
          {ccat.name || "Карегория без названия"}
        </div>, */}
        <div className="com-searcher">
          <EvaIcon name="search-outline" />
          <input
            key="com-searcher"
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
            key="com-filter-input-clear-button"
            name="close"
            className={`clear-button ${term ? "" : "hidden"}`}
            onClick={() => {
              ccat.search("", () => setTerm(""));
              searchInputRef.current?.focus();
            }}
          />
        </div>
      </div>
      <div
        key="com-list"
        className={`com-list ${isAccessed("catDel") ? "can-redact" : ""}`}
        ref={listRef}
      >
        {ccat.wraps ? (
          <div
            key="coms-count"
            style={{
              textAlign: "center",
            }}
          >
            {`${
              ccat.coms.length === ccat.wraps.length
                ? ""
                : `${ccat.wraps.length} / `
            }${ccat.coms.length}`}
          </div>
        ) : null}
        {ccat.wraps.map((wrap) => {
          const { com, errors } = wrap || {};

          return com == null ? null : (
            <div key={`com-face-${com.wid}`} id={`com-face-${com.wid}`}>
              <div
                key={`com-face-button-${com.wid}`}
                className={`com-face  ${
                  "" // errors ? "m-ko" : wrap.deep ? "m-no" : "m-ok"
                } `}
                style={{
                  backgroundColor: com.removed ? "red" : "",
                }}
                onClick={() => {
                  setCcom(com);
                  setPhase("com");
                }}
              >
                <div className="number">
                  <span>{`${com.index == null ? "?" : com.index - -1}${
                    com.refs && com.refs[ccat.wid]
                      ? `, №${com.refs[ccat.wid]}.`
                      : ""
                  }`}</span>
                </div>
                <span className="title ellipsis">{com.name}</span>
              </div>
              {errors}
            </div>
          );
        })}
      </div>
    </div>
  );
}

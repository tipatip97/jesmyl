import { useRef, useState } from "react";
import mylib from "../../../../../complect/my-lib/MyLib";
import { usePhase } from "../../base/usePhase";
import { isAccessed } from "../../Cm.complect";
import { useCcol } from "../useCcol";

export default function TheCat() {
  const [ccat] = useCcol("cat");
  const [ccom, setCcom] = useCcol("com");
  const { setPhase } = usePhase();
  const [term, setTerm] = useState(ccat?.term || "");
  const [term1, setTerm1] = useState(ccat?.term || "");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  if (!ccat) {
    setPhase("cats");
    return null;
  }

  if (ccom)
    setTimeout(() => {
      const view = document.getElementById(`com-face-${ccom.wid}`);
      if (view) mylib.scrollToView(view, "top");
    }, 100);

  return (
    <div className="category-wrapper">
      {[
        //  g.CatHeads ||
        <div
          key="category-title-col-title"
          className="category-title col-title"
        >
          {ccat.name || "Карегория без названия"}
        </div>,
        <input
          key="com-searcher"
          type="text"
          className="filter-input cleared-input minput m--ok mblock mmd"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
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
          onChange={() => {}}
          ref={searchInputRef}
          value={term}
        />,
        term1 ? (
          <span
            key="com-filter-input-clear-button"
            className="clear-button"
            onClick={() => {
              ccat.search("", () => setTerm(""));
              searchInputRef.current?.focus();
            }}
          />
        ) : null,
        <div
          key="component-list"
          className={`component-list ${
            isAccessed("catDel") ? "can-redact" : ""
          }`}
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
                <button
                  key={`com-face-button-${com.wid}`}
                  className={`com-face mbtn ${
                    errors ? "m-ko" : wrap.deep ? "m-no" : "m-ok"
                  } mblock mmd`}
                  style={{
                    backgroundColor: com.removed ? "red" : "",
                  }}
                  onClick={() => {
                    setCcom(com);
                    setPhase("com");
                  }}
                >
                  <span>{`${com.index == null ? "?" : com.index - -1}${
                    com.refs && com.refs[ccat.wid]
                      ? `, №${com.refs[ccat.wid]}.`
                      : "."
                  } ${com.name}`}</span>
                </button>
                {errors}
              </div>
            );
          })}
        </div>,
      ].filter((_, parti) => (ccat.removed ? parti === 0 : true))}
    </div>
  );
}

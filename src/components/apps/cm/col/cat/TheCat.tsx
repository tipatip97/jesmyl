import { useRef } from "react";
import { isAccessed } from "../../Cm.complect";
import { Cat } from "./Cat";

export function TheCat() {
  const ccat = new Cat({} as never, []);
  // const streamComw = g.streamManager.current && g.streamManager.current.comw;

  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  return !ccat ? null : (
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
            ccat
              .search
              (
                event.target.value,
              () => 0, //this.fu(),
              500,
              () => {
                // this.fu();
                // this.comsListElement.scrollTop = 0;
              }
              )
          }
          onChange={() => {}}
          ref={searchInputRef}
          value={ccat.term}
        />,
        ccat.term ? (
          <span
            key="com-filter-input-clear-button"
            className="clear-button"
            onClick={(event) => {
              // ccat.search("", () => this.fu());
              searchInputRef.current?.focus();
            }}
          />
        ) : null,
        <div
          key="component-list"
          className={`component-list ${
            isAccessed("delCat") ? "can-redact" : ""
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
          {ccat.wraps.map((wrap, comi) => {
            const { com, errors } = wrap || {};
            
            const className = () =>
              `${
                errors
                  ? "m-ko"
                  // : streamComw === com.wid
                  // ? "m-br"
                  : wrap.deep
                  ? "m-no"
                  : "m-ok"
              }`;

            return com == null ? null : (
              <div key={`com-face-${com.wid}`} id={'' + com.wid}>
                <button
                  key={`com-face-button-${com.wid}`}
                  className={`com-face mbtn ${className()} mblock mmd`}
                  style={{
                    backgroundColor: com.removed ? "red" : "",
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
      ].filter((part, parti) => (ccat.removed ? parti === 0 : true))}
    </div>
  );
}

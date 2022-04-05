import { useState } from "react";
import { cmStorage } from "../../../../store/jstorages";
import { Cat } from "../col/cat/Cat";
import { Cols } from "../cols/Cols";
import { IExportableCols } from "../cols/Cols.model";
import { useCols, useNav } from "../hooks";

export function TheCats() {
  const [, setPhase] = useNav('phase');
  const [, setCcat] = useNav('ccat');
  // const [rendersCount, setRendersCount] = useState(0);
  // const forceUpdate = () => setRendersCount(rendersCount + 1);
  const [cols, setCols] = useCols();

  cmStorage.listen("cats", (key, val) => {
    if (key === "cols") {
      setCols(new Cols(val as IExportableCols));
      // forceUpdate();
    }
  });

  return (
    <div>
      {/* <TheColAdditionButtons /> */}

      {/* {null && [ce('input',
          {
            key: 'cat-searcher',
            type: 'text',
            className: 'm--ok minput cleared-input mblock filter-input mmd',
            onInput: event => {
              let searchText = convertForRegExp(event.target.value);
              this.setState({ searchText });
            },
            value: this.state.searchText
          }
        ),
        ce('span', {
          key: 'cat-filter-input-clear-button',
          className: 'clear-button',
          onClick: event => {
            this.setState({ searchText: '' });
            event.target.previousSibling.focus();
          }
        })], */}
      {cols.cats.map((cat: Cat) => {
        return cat == null ? null : (
          <button
            key={`cat-face-button-${cat.wid}`}
            id={"" + cat.wid}
            className="mbtn mblock mupper m-ok mmd"
            style={{
              backgroundColor: cat.removed ? "red" : "",
            }}
            onClick={() => {
              setPhase("cat");
              setCcat(cat);
            }}
          >
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}

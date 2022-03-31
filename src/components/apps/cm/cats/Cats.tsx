import { selectCcol } from "../Cm.store";
import { Cat } from "../col/cat/Cat";
import { cols } from "../complect/cols/Cols";
import { TheColAdditionButtons } from "./ColAdditionalButtons";

export function TheCats() {
  return (
    <div>
      <TheColAdditionButtons />

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
            id={cat.wid}
            className="mbtn mblock mupper m-ok mmd"
            style={{
              backgroundColor: cat.removed ? "red" : "",
            }}
            onClick={() => selectCcol({ ccat: cat })}
          >
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}

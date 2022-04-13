import useNav from "../base/useNav";
import { Cat } from "../col/cat/Cat";
import { useCcat } from "../col/useCcol";
import { useCols } from "../cols/useCols";

export default function TheCats() {
  const { setPhase } = useNav();
  const [, setCcat] = useCcat();
  const [cols] = useCols();

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
          <div
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
          </div>
        );
      })}
    </div>
  );
}

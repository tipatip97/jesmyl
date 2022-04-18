import EvaIcon from "../../../../complect/eva-icon";
import BrutalItem from "../../../../complect/brutal-item";
import useCmNav from "../base/useCmNav";
import { useCcat } from "../col/useCcol";
import { useCols } from "../cols/useCols";
import "./Lists.scss";
import PhaseCmContainer from "../complect/phase-container/PhaseCmContainer";

export default function Lists() {
  const { setPhase } = useCmNav();
  const [cols] = useCols();
  const [, setCcat] = useCcat();

  return (
    <PhaseCmContainer
      topClass="lists-container"
      withoutBackButton
      head="Списки"
      contentClass="flex between column"
      content={
        <>
          <BrutalItem
            icon="star-outline"
            title="Избранное"
            onClick={() => setPhase("marks")}
          />
          <BrutalItem
            icon="calendar-outline"
            title="События"
            onClick={() => setPhase("meetings")}
          />
          <div className="thematic-item flex column custom-align-items">
            <div className="title">Тематические:</div>
            {cols?.cats.map((cat) => {
              return !cat.wid ? null : (
                <div
                  key={`thematic-cat-${cat.wid}`}
                  className="item flex"
                  onClick={() => {
                    setCcat(cat);
                    setPhase(["cat", "thematic"]);
                  }}
                >
                  <EvaIcon name="book-open-outline" className="main-big-gap" />
                  <div>{cat.name}</div>
                </div>
              );
            })}
          </div>
        </>
      }
    />
  );
}

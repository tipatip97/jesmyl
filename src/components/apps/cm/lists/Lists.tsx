import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import BrutalScreen from "../../../../complect/brutal-screen/BrutalScreen";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useCmNav from "../base/useCmNav";
import useSelectedComs from "../base/useSelectedComs";
import { useCcat } from "../col/cat/useCcat";
import { useCols } from "../cols/useCols";
import PhaseCmContainer from "../complect/phase-container/PhaseCmContainer";
import "./Lists.scss";

export default function Lists() {
  const { goTo } = useCmNav();
  const [cols] = useCols();
  const [, setCcat] = useCcat();
  const { selectedComws, isPreventSaveNav } = useSelectedComs();

  return (
    <PhaseCmContainer
      topClass="lists-container"
      withoutBackButton
      headTitle="Списки"
      contentClass="flex between column"
      content={
        <>
          <BrutalItem
            icon="star-outline"
            title="Избранное"
            onClick={() => goTo("marks")}
          />
          <BrutalItem
            icon="calendar-outline"
            title="События"
            onClick={() => goTo("meetings")}
          />
          {selectedComws.length ? (
            <BrutalItem
              icon="calendar-outline"
              title="Выбранное"
              onClick={() => goTo("selected", null, isPreventSaveNav())}
            />
          ) : null}
          <BrutalScreen>
            <div className="title sticky bg-inherit">Тематические:</div>
            {cols?.cats.map((cat) => {
              return !cat.wid ? null : (
                <div
                  key={`thematic-cat-${cat.wid}`}
                  className="item flex"
                  onClick={() => {
                    setCcat(cat);
                    goTo("cat");
                  }}
                >
                  <EvaIcon
                    name="book-open-outline"
                    className="margin-big-gap"
                  />
                  <div>{cat.name}</div>
                </div>
              );
            })}
          </BrutalScreen>
        </>
      }
    />
  );
}

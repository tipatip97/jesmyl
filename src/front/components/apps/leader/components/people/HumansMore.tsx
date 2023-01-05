import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import { setHumanListSortVariant } from "../../Leader.store";
import { humanFieldTranslations } from "./People.model";

export default function HumansMore({ moreNode }: { moreNode?: ReactNode }) {
  const dispatch = useDispatch();
  const humanListSortVariant = useSelector(
    (state: RootState) => state.leader.humanListSortVariant
  );

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={(event) => {
          event.stopPropagation();
          const next = mylib.findNext(
            mylib.keys(humanFieldTranslations),
            humanListSortVariant
          );
          dispatch(setHumanListSortVariant(next));
        }}
      >
        <EvaIcon name="bar-chart-2-outline" className="abs-icon" />
        <div>Сортировать личности</div>
        <div className="abs-action abs-full flex center">
          {humanFieldTranslations[humanListSortVariant]}
        </div>
      </div>
      {moreNode}
    </>
  );
}

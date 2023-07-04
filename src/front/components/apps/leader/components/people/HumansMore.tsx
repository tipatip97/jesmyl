import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomPopupContenterPreparer } from "../../../../../complect/absolute-popup/useBottomPopup";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import di from "../../Leader.store";
import { humanFieldTranslations } from "./People.model";

const humanListSortVariantSelector = (state: RootState) => state.leader.humanListSortVariant;

export function HumansMore({ moreNode, prepare }: { moreNode?: ReactNode, prepare: BottomPopupContenterPreparer }) {
  const dispatch = useDispatch();
  const humanListSortVariant = useSelector(humanListSortVariantSelector);

  return <>{
    prepare({
      items: [{
        title: 'Сортировать личности',
        icon: "bar-chart-2-outline",
        onClick: (event) => {
          event.stopPropagation();
          const next = mylib.findNext(
            mylib.keys(humanFieldTranslations),
            humanListSortVariant
          );
          dispatch(di.setHumanListSortVariant(next));
        },
        rightNode: <div className="abs-action abs-full flex center">
          {humanFieldTranslations[humanListSortVariant]}
        </div>,
      }]
    })}
    {mylib.func(moreNode).call()}
  </>;
}

import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import di from "../../Leader.store";
import { humanFieldTranslations } from "./People.model";

const humanListSortVariantSelector = (state: RootState) => state.leader.humanListSortVariant;

export default function HumansMore({ moreNode }: { moreNode?: ReactNode }) {
  const dispatch = useDispatch();
  const humanListSortVariant = useSelector(humanListSortVariantSelector);
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return <>{
    prepareAbsoluteBottomPopupContent({
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

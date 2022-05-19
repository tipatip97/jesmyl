import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import { Com } from "./Com";
import "./Com.scss";
import ComOrders from "./orders/ComOrders";
import { useCcom } from "./useCcom";
import "./block-styles/BlockStyles.scss";

export default function TheCom({
  com: topCom,
  hideInvisibles = true,
}: {
  com?: Com;
  hideInvisibles?: boolean;
}) {
  const [chordVisibleVariant] = useChordVisibleVariant();
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const isMiniAnchor = useSelector((state: RootState) => state.cm.isMiniAnchor);

  const [ccom] = useCcom();
  const com = topCom ?? ccom;
  const { addLaterComw } = useLaterComList();

  useEffect(() => {
    const add = setTimeout(() => com && addLaterComw(com.wid), 3000);
    return () => clearTimeout(add);
  }, []);

  if (com == null) {
    return (
      <PhaseCmContainer
        topClass="com-container"
        head="Упс"
        content="Песня не найдена("
      />
    );
  }

  return (
    <ComOrders
      com={com}
      fontSize={fontSize}
      chordVisibleVariant={chordVisibleVariant}
      isMiniAnchor={isMiniAnchor}
      hideInvisibles={hideInvisibles}
    />
  );
}

import { useEffect } from "react";
import useLaterComList from "../../base/useLaterComList";
import { ChordVisibleVariant } from "../../Cm.model";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import "./block-styles/BlockStyles.scss";
import { Com } from "./Com";
import "./Com.scss";
import ComOrders from "./orders/ComOrders";
import { useCcom } from "./useCcom";

export default function TheCom({
  com: topCom,
  showInvisibles,
  chordVisibleVariant,
  isMiniAnchor,
  fontSize,
}: {
  com?: Com;
  showInvisibles?: boolean;
  chordVisibleVariant?: ChordVisibleVariant;
  isMiniAnchor?: boolean;
  fontSize?: number;
}) {
  const ccom = useCcom();
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
        headTitle="Упс"
        content="Песня не найдена("
      />
    );
  }

  return (
    <ComOrders
      com={com}
      fontSize={fontSize}
      chordVisibleVariant={chordVisibleVariant ?? ChordVisibleVariant.Minimal}
      isMiniAnchor={isMiniAnchor}
      showInvisibles={showInvisibles}
    />
  );
}

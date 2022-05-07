import { useEffect } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullScreen from "../../../../../complect/useFullscreen";
import RollControled from "../../base/RolledContent";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import { useMarks } from "../../lists/marks/useMarks";
import "./Com.scss";
import ComTools from "./ComTools";
import TheCom from "./TheCom";
import { useCcom } from "./useCcom";

export default function TheComposition() {
  const [, switchFullscreen] = useFullScreen();

  const [ccom] = useCcom();
  const { addLaterComw } = useLaterComList();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { isMarked, toggleMarked } = useMarks();

  useEffect(() => {
    const add = setTimeout(() => ccom && addLaterComw(ccom.wid), 3000);
    return () => clearTimeout(add);
  }, []);

  if (ccom == null) {
    return (
      <PhaseCmContainer
        topClass="com-container"
        head="Упс"
        content="Песня не найдена("
      />
    );
  }

  return (
    <PhaseCmContainer
      topClass="com-container"
      headClass="flex between"
      headTitle={ccom.index + 1}
      head={
        <>
          <div className="flex">
            <EvaIcon
              name={isMarked(ccom.wid) ? "star" : "star-outline"}
              className="action-button"
              onClick={() => toggleMarked(ccom.wid)}
            />
            <EvaIcon
              className="action-button"
              name="expand-outline"
              onClick={() => switchFullscreen(true)}
            />

            <EvaIcon
              className="action-button"
              name="more-vertical"
              onClick={() => openAbsoluteBottomPopup(<ComTools />, false)}
            />
          </div>
        </>
      }
      content={
        <RollControled>
          <TheCom />
        </RollControled>
      }
    />
  );
}

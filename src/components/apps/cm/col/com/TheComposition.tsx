import { useEffect } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import RollControled from "../../base/RolledContent";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import "./Com.scss";
import ComTools from "./ComTools";
import TheCom from "./TheCom";
import { useCcom } from "./useCcom";
import useMigratableComTools from "./useMigratableComTools";

export default function TheComposition() {
  const [ccom] = useCcom();
  const { addLaterComw } = useLaterComList();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { topTools, toggleTopTool } = useMigratableComTools();

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
            {topTools.map(({ icon, onClick, tool }) => (
              <EvaIcon
                key={tool}
                name={icon}
                className="action-button"
                onClick={() => onClick()}
                onContextMenu={(event) => {
                  event.preventDefault();
                  toggleTopTool(tool);
                }}
              />
            ))}

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

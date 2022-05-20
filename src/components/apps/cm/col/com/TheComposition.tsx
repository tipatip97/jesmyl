import { useEffect } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import SwipeableContainer from "../../../../../complect/swipeable/SwipeableContainer";
import RollControled from "../../base/RolledContent";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import "./Com.scss";
import ComTools from "./ComTools";
import TheCom from "./TheCom";
import { useCcom } from "./useCcom";
import useComPack from "./useComPack";
import useMigratableComTools from "./useMigratableComTools";

export default function TheComposition() {
  const [ccom, setCcom] = useCcom();
  const { addLaterComw } = useLaterComList();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { topTools, toggleTopTool } = useMigratableComTools();
  const [comList] = useComPack();

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
        <SwipeableContainer
          onHorizontalSwipe={(dir) => {
            if (!comList) return;
            const comi = comList.findIndex((com) => com === ccom);

            if (comi > -1) {
              if ("l" === dir)
                if (comi < comList.length - 1) setCcom(comList[comi + 1]);
                else setCcom(comList[0]);

              if ("r" === dir)
                if (comi > 0) setCcom(comList[comi - 1]);
                else setCcom(comList[comList.length - 1]);
            }
          }}
          content={
            <RollControled>
              <TheCom />
            </RollControled>
          }
        />
      }
    />
  );
}

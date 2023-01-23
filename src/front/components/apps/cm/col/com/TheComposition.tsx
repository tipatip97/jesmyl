import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import propsOfClicker from "../../../../../complect/clicker/propsOfClicker";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import SwipeableContainer from "../../../../../complect/swipeable/SwipeableContainer";
import { RootState } from "../../../../../shared/store";
import RollControled from "../../base/RolledContent";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import "./Com.scss";
import ComTools from "./ComTools";
import TheCom from "./TheCom";
import { useCcom } from "./useCcom";
import useComPack from "./useComPack";
import useMigratableComTools from "./useMigratableComTools";

const fontSizeSelector = (state: RootState) => state.cm.comFontSize;
const isMiniAnchorSelector = (state: RootState) => state.cm.isMiniAnchor;

export default function TheComposition() {
  const [ccom, setCcom] = useCcom();
  const { addLaterComw } = useLaterComList();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { topTools, toggleTopTool } = useMigratableComTools();
  const [comList] = useComPack();
  const [chordVisibleVariant] = useChordVisibleVariant();
  const fontSize = useSelector(fontSizeSelector);
  const isMiniAnchor = useSelector(isMiniAnchorSelector);

  useEffect(() => {
    const add = setTimeout(() => ccom && addLaterComw(ccom.wid), 3000);
    return () => clearTimeout(add);
  }, []);

  const comListElem = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (comListElem.current) comListElem.current.scrollTop = 0;
  }, [ccom?.wid]);

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
      contentRef={comListElem}
      head={
        <>
          <div className="flex">
            <div className="com-actions-pannel">
              {topTools.map(({ icon, onClick, tool }) => (
                <EvaIcon
                  key={tool}
                  name={icon}
                  className="action-button"
                  onClick={() => onClick()}
                  {...propsOfClicker({
                    onCtxMenu: (event) => {
                      event.preventDefault();
                      toggleTopTool(tool);
                    }
                  })}
                />
              ))}
            </div>

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
          <SwipeableContainer
            props={{ diapasonMoveVKf: 50, diapasonMoveHKf: 70 }}
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
              <TheCom
                fontSize={fontSize}
                chordVisibleVariant={chordVisibleVariant}
                isMiniAnchor={isMiniAnchor}
              />
            }
          />
        </RollControled>
      }
    />
  );
}

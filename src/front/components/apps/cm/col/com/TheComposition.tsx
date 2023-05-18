import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import SwipeableContainer from "../../../../../complect/swipeable/SwipeableContainer";
import { RootState } from "../../../../../shared/store";
import RollControled from "../../base/RolledContent";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useCmNav from "../../base/useCmNav";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import { Com } from "./Com";
import "./Com.scss";
import ComTools from "./ComTools";
import ComPlayer from "./player/ComPlayer";
import TheCom from "./TheCom";
import { useCcom } from "./useCcom";
import useComPack from "./useComPack";
import useMigratableComTools from "./useMigratableComTools";

const fontSizeSelector = (state: RootState) => state.cm.comFontSize;
const isMiniAnchorSelector = (state: RootState) => state.cm.isMiniAnchor;
const playerHideModeSelector = (state: RootState) => state.cm.playerHideMode;

export default function TheComposition() {
  const ccom = useCcom();
  const { addLaterComw } = useLaterComList();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { topTools } = useMigratableComTools();
  const [comList] = useComPack(ccom);
  const [chordVisibleVariant] = useChordVisibleVariant();
  const fontSize = useSelector(fontSizeSelector);
  const isMiniAnchor = useSelector(isMiniAnchorSelector);
  const playerHideMode = useSelector(playerHideModeSelector);
  const { setAppRouteData } = useCmNav();
  const comAudio = ccom?.audio.trim();
  const setCom = (com: Com) => setAppRouteData({ ccomw: com.wid });

  useEffect(() => {
    const add = setTimeout(() => ccom && addLaterComw(ccom.wid), 3000);
    return () => clearTimeout(add);
  }, [ccom]);

  const comListElem = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (comListElem.current) comListElem.current.scrollTop = 0;
  }, [ccom?.wid]);

  if (ccom == null) {
    return (
      <PhaseCmContainer
        topClass="composition-container"
        headTitle="Упс"
        content="Песня не найдена("
      />
    );
  }

  return (
    <PhaseCmContainer
      topClass={`composition-container ${playerHideMode && comAudio ? `with-open-player ${playerHideMode}` : ''}`}
      headTitle={ccom.number}
      onMoreClick={() => openAbsoluteBottomPopup(<ComTools />, false)}
      contentClass="composition-content"
      contentRef={comListElem}
      head={<div className="com-actions-pannel">
        {topTools.map(({ icon, onClick, tool }) => (
          <EvaIcon
            key={tool}
            name={icon}
            className="action-button"
            onClick={() => onClick()}
          />
        ))}
      </div>}
      content={<>
        {comAudio && <ComPlayer src={comAudio} split />}
        <RollControled>
          <SwipeableContainer
            props={{ diapasonMoveVKf: 50, diapasonMoveHKf: 70 }}
            onHorizontalSwipe={(dir) => {
              if (!comList) return;
              const comi = comList.findIndex((com) => com === ccom);

              if (comi > -1) {
                if ("l" === dir)
                  if (comi < comList.length - 1) setCom(comList[comi + 1]);
                  else setCom(comList[0]);

                if ("r" === dir)
                  if (comi > 0) setCom(comList[comi - 1]);
                  else setCom(comList[comList.length - 1]);
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
      </>}
    />
  );
}

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../shared/store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useCmNav from "../../base/useCmNav";
import useLaterComList from "../../base/useLaterComList";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import { Com } from "./Com";
import "./Com.scss";
import ComTools from "./ComTools";
import TheControlledCom from "./TheControlledCom";
import ComPlayer from "./player/ComPlayer";
import { useCcom } from "./useCcom";
import useComPack from "./useComPack";
import useMigratableComTools from "./useMigratableComTools";
import styled from "styled-components";

const playerHideModeSelector = (state: RootState) => state.cm.playerHideMode;

export default function TheComposition() {
  const [chordVisibleVariant] = useChordVisibleVariant();
  const ccom = useCcom();
  const { addLaterComw } = useLaterComList();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { topTools } = useMigratableComTools();
  const [comList] = useComPack(ccom);
  const playerHideMode = useSelector(playerHideModeSelector);
  const comAudio = ccom?.audio.trim();
  const { setAppRouteData } = useCmNav();
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
      <ComContainer
        className="composition-container"
        headTitle="Упс"
        content="Песня не найдена("
      />
    );
  }

  return (
    <ComContainer
      className={`composition-container ${playerHideMode && comAudio ? `with-open-player ${playerHideMode}` : ''}`}
      headTitle={ccom.number}
      onMoreClick={() => openAbsoluteBottomPopup(<ComTools />, false)}
      contentClass="composition-content"
      contentRef={comListElem}
      withoutBackSwipe
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
        <TheControlledCom
          com={ccom}
          comList={comList}
          chordVisibleVariant={chordVisibleVariant}
          onComSet={setCom}
        />
      </>}
    />
  );
}

const ComContainer = styled(PhaseCmContainer)`
  .composition-content {
      transition: padding-top .2s;

      .composition-player {
          --transition-speed: .2s;

          position: absolute;
          top: var(--header-height);
          left: 0;
          right: 0;
          z-index: 1;
          opacity: 0;
          transition: width var(--transition-speed),
              background var(--transition-speed),
              margin var(--transition-speed),
              opacity var(--transition-speed);
      }
  }

  &.with-open-player {
      &.expand {
          --content-padding-top: var(--com-player-expand-height);
      }

      &.min {
          --content-padding-top: var(--com-player-height);
      }

      .composition-content {
          padding-top: var(--content-padding-top);
      }

      .composition-player {
          opacity: 1;
      }
  }

  .com-actions-pannel {
      max-width: calc(100vw - 130px);
      height: 40px;
      padding-left: 10px;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;

      &::-webkit-scrollbar {
          display: none;
      }
  }
`;

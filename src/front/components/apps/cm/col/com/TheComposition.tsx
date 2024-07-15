import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DocTitle } from '../../../../../complect/DocTitle';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { useAtom, useAtomValue } from '../../../../../complect/atoms';
import { Metronome } from '../../../../../complect/metronome/Metronome';
import { useChordVisibleVariant } from '../../base/useChordVisibleVariant';
import useCmNav from '../../base/useCmNav';
import useLaterComList from '../../base/useLaterComList';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import { cmMolecule } from '../../molecules';
import { Com } from './Com';
import './Com.scss';
import { ComTools } from './ComTools';
import TheControlledCom from './TheControlledCom';
import ComPlayer from './player/ComPlayer';
import { useCcom } from './useCcom';
import useComPack from './useComPack';
import useMigratableComTools from './useMigratableComTools';

export default function TheComposition() {
  const [chordVisibleVariant] = useChordVisibleVariant();
  const ccom = useCcom();
  const { addLaterComw } = useLaterComList();
  const [popupComToolsNode, openPopuComTools] = useBottomPopup(ComTools);
  const { topTools } = useMigratableComTools();
  const [comList] = useComPack();
  const [playerHideMode] = useAtom(cmMolecule.take('playerHideMode'));
  const isMetronomeHide = useAtomValue(cmMolecule.take('isMetronomeHide'));
  const comAudio = ccom?.audio.trim();
  const { setAppRouteData } = useCmNav();
  const setCom = (com: Com) => setAppRouteData({ ccomw: com.wid });

  useEffect(() => {
    const add = setTimeout(() => ccom && addLaterComw(ccom.wid), 3000);
    return () => clearTimeout(add);
  }, [addLaterComw, ccom]);

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
      className={
        'composition-container' +
        (playerHideMode && comAudio ? ` with-open-player ${playerHideMode}` : '') +
        (isMetronomeHide ? ' hide-metronome' : '')
      }
      headTitle={ccom.number}
      onMoreClick={openPopuComTools}
      contentClass="composition-content"
      contentRef={comListElem}
      withoutBackSwipe
      head={
        <div className="com-actions-pannel">
          {topTools.map(({ Icon, onClick, tool }) => (
            <Icon
              key={tool}
              className="action-button"
              onClick={() => onClick()}
            />
          ))}
        </div>
      }
      content={
        <>
          {popupComToolsNode}
          <DocTitle title={ccom.name} />
          {comAudio && (
            <ComPlayer
              src={comAudio}
              split
            />
          )}
          <Metronome
            meterSize={ccom.meterSize}
            bpm={ccom.beatsPerMinute}
          />
          <TheControlledCom
            com={ccom}
            comList={comList}
            chordVisibleVariant={chordVisibleVariant}
            onComSet={setCom}
          />
        </>
      }
    />
  );
}

const ComContainer = styled(PhaseCmContainer)`
  .composition-content {
    transition: padding-top 0.2s;

    .composition-player {
      --transition-speed: 0.2s;

      position: absolute;
      top: var(--header-height);
      right: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
      z-index: 1;
      transition:
        width var(--transition-speed),
        background var(--transition-speed),
        margin var(--transition-speed),
        opacity var(--transition-speed);
    }
  }

  &.hide-metronome .com-metronome {
    display: none;
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
      pointer-events: all;
    }
  }

  .com-actions-pannel {
    padding-left: 10px;
    max-width: calc(100vw - 130px);
    height: 40px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

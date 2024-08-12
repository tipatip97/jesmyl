import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/BottomPopup';
import { useAtom, useAtomValue } from '../../../../../complect/atoms';
import { FullContent } from '../../../../../complect/fullscreen-content/FullContent';
import { Metronome } from '../../../../../complect/metronome/Metronome';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { DocTitle } from '../../../../../complect/tags/DocTitle';
import { useCmTranslationComListContext } from '../../base/translations/context';
import { useChordVisibleVariant } from '../../base/useChordVisibleVariant';
import useLaterComList from '../../base/useLaterComList';
import { cmMolecule, isOpenChordImagesAtom } from '../../molecules';
import './Com.scss';
import TheControlledCom from './TheControlledCom';
import ChordImagesList from './chord-card/ChordImagesList';
import ComPlayer from './player/ComPlayer';
import { ComTools } from './tools/ComTools';
import { useMigratableTopComTools } from './tools/useMigratableComTools';
import { useCcom, useTakeActualComw } from './useCcom';

const playerHideModeAtom = cmMolecule.select(s => s.playerHideMode);
const isMetronomeHideAtom = cmMolecule.select(s => s.isMetronomeHide);

export default function TheComposition() {
  const [chordVisibleVariant] = useChordVisibleVariant();
  const ccom = useCcom();
  const { addLaterComw } = useLaterComList();
  const [isOpenTools, setIsOpenTools] = useState(false);
  const comToolsNode = useMigratableTopComTools();
  const { list } = useCmTranslationComListContext();
  const playerHideMode = useAtomValue(playerHideModeAtom);
  const isMetronomeHide = useAtomValue(isMetronomeHideAtom);
  const comAudio = ccom?.audio.trim();
  const [isOpenChordImages, setIsOpenChordImages] = useAtom(isOpenChordImagesAtom);

  useTakeActualComw();

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
      onMoreClick={setIsOpenTools}
      contentClass="composition-content"
      contentRef={comListElem}
      withoutBackSwipe
      rememberProps={['comw']}
      head={<div className="com-actions-pannel flex flex-gap">{comToolsNode}</div>}
      content={
        <>
          {isOpenChordImages && (
            <FullContent onClose={setIsOpenChordImages}>
              <ChordImagesList />
            </FullContent>
          )}
          {isOpenTools && (
            <BottomPopup onClose={setIsOpenTools}>
              <ComTools />
            </BottomPopup>
          )}
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
            comList={list}
            chordVisibleVariant={chordVisibleVariant}
          />
        </>
      }
    />
  );
}

const ComContainer = styled(PhaseContainerConfigurer)`
  .composition-content {
    padding-top: 150px;
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

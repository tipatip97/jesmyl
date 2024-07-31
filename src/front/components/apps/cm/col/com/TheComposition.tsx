import { useEffect, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { DocTitle } from '../../../../../complect/DocTitle';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { useAtomValue } from '../../../../../complect/atoms';
import { Metronome } from '../../../../../complect/metronome/Metronome';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { useCmTranslationComListContext } from '../../base/translations/context';
import { useChordVisibleVariant } from '../../base/useChordVisibleVariant';
import useLaterComList from '../../base/useLaterComList';
import { cmMolecule } from '../../molecules';
import Translations from '../../translation/Translation';
import './Com.scss';
import { ComTools } from './ComTools';
import TheControlledCom from './TheControlledCom';
import ComPlayer from './player/ComPlayer';
import { useCcom, useTakeActualComw } from './useCcom';
import useMigratableComTools from './useMigratableComTools';

const playerHideModeAtom = cmMolecule.select(s => s.playerHideMode);
const isMetronomeHideAtom = cmMolecule.select(s => s.isMetronomeHide);

export default function TheComposition() {
  const [chordVisibleVariant] = useChordVisibleVariant();
  const ccom = useCcom();
  const { addLaterComw } = useLaterComList();
  const [popupComToolsNode, openPopuComTools] = useBottomPopup(ComTools);
  const { topTools } = useMigratableComTools();
  const { list } = useCmTranslationComListContext();
  const playerHideMode = useAtomValue(playerHideModeAtom);
  const isMetronomeHide = useAtomValue(isMetronomeHideAtom);
  const comAudio = ccom?.audio.trim();

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
    <Routes>
      <Route
        index
        element={
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
            rememberProps={['comw']}
            head={
              <div className="com-actions-pannel">
                {topTools.map(({ Icon, onClick, tool, path }) =>
                  path !== undefined ? (
                    <Link
                      key={tool}
                      to={path}
                    >
                      <Icon className="action-button" />
                    </Link>
                  ) : (
                    onClick !== undefined && (
                      <Icon
                        key={tool}
                        className="action-button"
                        onClick={() => onClick()}
                      />
                    )
                  ),
                )}
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
                  comList={list}
                  chordVisibleVariant={chordVisibleVariant}
                />
              </>
            }
          />
        }
      />

      <Route
        path="tran"
        element={<Translations />}
      />
    </Routes>
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

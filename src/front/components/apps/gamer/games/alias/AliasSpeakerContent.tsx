import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { isTouchDevice } from '../../../../../complect/device-differences';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconHelpCircleStrokeRounded } from '@icons/help-circle';
import SendButton from '../../../../../complect/sends/send-button/SendButton';
import { useMyPossibilitiesCurrentRoom } from '../../complect/rooms/room/hooks/possibilities';
import { GamerAliasRoomStatePhase } from './Alias.model';
import GamerAliasTimer from './AliasTimer';
import { useAliasComputeScore } from './hooks/compute-score';
import { useAliasCurrentTeamNaked } from './hooks/current-team';
import { useAliasSimpleExecs, useAliasStrikeWord } from './hooks/execs';
import { useAliasRoomState } from './hooks/state';
import { IconCheckmarkCircle02StrokeRounded } from '@icons/checkmark-circle-02';

const altWordInfo = { minus: 0, weight: 0, plus: 0 };

export default function AliasSpeakerContent() {
  const [isWordSending, setIsWordSending] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);

  const state = useAliasRoomState();
  const strikeWord = useAliasStrikeWord();
  const myTeam = useAliasCurrentTeamNaked('team');
  const score = useAliasComputeScore();
  const { resetSpeech, startSpeech } = useAliasSimpleExecs();
  const myPossibilities = useMyPossibilitiesCurrentRoom();

  const sendWord = useCallback(
    (scope?: 'cor' | 'inc') => {
      return (event: { preventDefault(): void }) => {
        event.preventDefault();
        setIsWordSending(true);
        scope && strikeWord(scope)?.then(() => setIsWordSending(false));
      };
    },
    [strikeWord],
  );

  useEffect(() => {
    if (isTouchDevice || !state?.startTs) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') sendWord('cor')(event);
      if (event.key === 'ArrowRight') sendWord('inc')(event);
    };
    window.addEventListener('keyup', onKey);

    return () => {
      window.removeEventListener('keyup', onKey);
    };
  }, [state?.startTs, sendWord]);

  if (!state) return null;

  const { minus, plus } = state.winfo ?? altWordInfo;

  return (
    <>
      {isTimeOut ? null : state.arsenal ? (
        <ShowWordArea
          className={
            'flex column center text-center no-scrollbar' +
            (state.phase === GamerAliasRoomStatePhase.Speech ? ' speech' : '')
          }
        >
          <GamerAliasTimer onTimeOut={setIsTimeOut} />
          {state?.phase === GamerAliasRoomStatePhase.Speech ? (
            <div className="round-button flex center">{state.winfo?.word}</div>
          ) : (
            <div
              className="round-button flex center"
              onClick={startSpeech}
            >
              Начать
            </div>
          )}
          <div className="flex full-width between">
            <AboveButton className="flex column">
              <ScoreInc>+{plus}</ScoreInc>
              <Button
                Icon={IconCheckmarkCircle02StrokeRounded}
                className="color--ok"
                disabled={isWordSending}
                onPointerDown={sendWord('cor')}
              />
            </AboveButton>
            {myTeam && <div>{score}</div>}
            <AboveButton className="flex column">
              <ScoreInc>-{minus}</ScoreInc>
              <Button
                Icon={IconHelpCircleStrokeRounded}
                className="color--ko"
                disabled={isWordSending}
                onPointerDown={sendWord('inc')}
              />
            </AboveButton>
          </div>
        </ShowWordArea>
      ) : (
        <div className="half-height flex center color--ko">Слов в арсенале не осталось...</div>
      )}
      {myPossibilities.isManager && (
        <div className="flex center absolute pos-bottom full-width margin-big-gap-b">
          <SendButton
            title="Завершить спич"
            confirm
            onSend={resetSpeech}
          />
        </div>
      )}
    </>
  );
}

const ScoreInc = styled.div`
  display: inline-block;
  margin-top: -2.5em;
  margin-bottom: 2.5em;
`;

const Button = styled(IconButton)`
  --icon-scale: 4;
`;

const AboveButton = styled.div`
  --pos: 40px;

  opacity: 0;
  transition: opacity 0.5s;

  margin: var(--pos);
  pointer-events: none;

  @media screen and (max-width: 350px) {
    --icon-scale: 3;
    --pos: 30px;
  }
`;

const ShowWordArea = styled.div`
  --ring-size: 50vmin;

  position: relative;
  padding: 30px 0;
  overflow-y: scroll;

  .round-button {
    cursor: pointer;
  }

  &.speech {
    .round-button {
      cursor: initial;
      background: var(--color--2);
      padding: 0 20vmin;
      color: var(--color--3);
    }

    ${AboveButton} {
      opacity: 1;
      pointer-events: all;
    }
  }

  .loader-icon {
    --icon-size: 50px;
  }

  .round-button {
    transition: background 0.5s;
    border-radius: var(--ring-size);

    background: var(--color--7);
    width: var(--ring-size);
    min-width: var(--ring-size);
    max-width: var(--ring-size);
    height: var(--ring-size);
    min-height: var(--ring-size);
    max-height: var(--ring-size);
    color: var(--color--1);
  }
`;

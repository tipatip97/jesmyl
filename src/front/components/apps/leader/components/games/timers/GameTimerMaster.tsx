import { useEffect, useMemo, useState } from 'react';
import TheButton from '../../../../../../complect/Button';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { TeamGameImportable } from '../../../Leader.model';
import { LeaderCleans } from '../../LeaderCleans';
import LeaderCommentBlock from '../../comments/LeaderCommentBlock';
import { GameTeamImportable } from '../teams/GameTeams.model';
import { GameTimerImportable, GameTimerMode } from './GameTimer.model';
import './GameTimer.scss';
import TimerCompetitionsSelector from './complect/TimerCompetitionsSelector';
import TimerControlBoard from './complect/TimerControlBoard';
import TimerInfoPanel from './complect/TimerInfoPanel';
import TimerModeSelector from './complect/TimerModeSelector';
import TimerPublicateControls from './complect/TimerPublicateControls';
import TimerRatingBoard from './complect/TimerRatingBoard';
import TimerResetButton from './complect/TimerResetButton';
import TimerScreen from './complect/TimerScreen';
import useGameTimer from './useGameTimer';

const altObj = {};

export default function LeaderGameTimerMaster({
  timer: topTimer,
  close,
  game,
}: {
  game: TeamGameImportable;
  timer: GameTimerImportable;
  close: () => void;
}) {
  const use = useGameTimer(game, topTimer.w);
  const { timer, isNewTimer } = use;

  const [name, setName] = useState(timer?.name);
  const [mode, setMode] = useState(LeaderCleans.getTimerConfigurableField('mode', timer, game));
  const [joins, setJoins] = useState(LeaderCleans.getTimerConfigurableField('joins', timer, game));

  const teamList = useMemo(() => LeaderCleans.takeTimerTeamList(timer, game), [game, timer]);

  const [teams, updateTeams] = useState<GameTeamImportable[]>(teamList);

  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => updateTeams(teamList), [teamList]);

  if (!timer || !game) return null;

  const isTimerStarted = use.isTimerStarted();

  const teamNet = teams && mylib.netFromLine(teams, mode === GameTimerMode.TimerTotal ? 1 : joins, team => team);

  return (
    <div className="game-timer-master flex column over-hidden">
      {isNewTimer && LeaderCleans.isTimerWasPublicate(game.timers, topTimer.ts) ? (
        <div className="flex column center flex-gap full-width full-height">
          <span className="error-message">Этот таймер уже был опубликован! Создай новый.</span>
          <TheButton
            onClick={() => {
              use.updateTimer(null);
              close();
            }}
          >
            Удалить этот
          </TheButton>
        </div>
      ) : (
        <>
          <div className="dropdown-ancestor flex full-width flex-gap">
            <TimerInfoPanel
              onMapTimer={use.mapTimer}
              onNameChange={setName}
              game={game}
              isNewTimer={isNewTimer}
              mode={mode}
              joins={joins}
              sort={LeaderCleans.getTimerConfigurableField('sort', timer, game)}
              timer={timer}
            />
          </div>
          {isNewTimer && !isTimerStarted && (
            <TimerModeSelector
              mode={mode ?? GameTimerMode.Messager}
              onSelect={({ id }) => {
                setMode(id);
                use.mapTimer(timer => ({ ...timer, mode: id }));
              }}
            />
          )}
          {mode !== GameTimerMode.Messager && (
            <>
              {isNewTimer && (
                <>
                  {isTimerStarted || (
                    <>
                      {mode === GameTimerMode.TimerApart && (
                        <TimerCompetitionsSelector
                          joins={joins}
                          teams={teams}
                          onSelect={({ id }) => {
                            setJoins(id);
                            use.mapTimer(timer => ({ ...timer, joins: id }));
                          }}
                        />
                      )}
                      {mode === GameTimerMode.TimerTotal && (
                        <div
                          className="start-total flex center bgcolor--7 color--1 pointer"
                          onClick={() => use.startTotalTimer()}
                        >
                          СТАРТ
                        </div>
                      )}
                    </>
                  )}
                  {mode === GameTimerMode.TimerTotal && (
                    <TimerScreen
                      className="total-timer padding-giant-gap"
                      start={timer.start || 0}
                    />
                  )}
                </>
              )}
              <TimerControlBoard
                isNewTimer={isNewTimer}
                mode={mode}
                onTeamsUpdate={teams => updateTeams(teams)}
                teamNet={teamNet}
                teams={teams}
                timer={timer}
                game={game}
              />
            </>
          )}

          {isNewTimer ? (
            <TimerResetButton
              onTimerReset={() => use.resetTimers()}
              isCanReset={isTimerStarted || Object.keys(timer.finishes || altObj).length > 0}
            />
          ) : (
            <TimerRatingBoard
              timer={timer}
              game={game}
            />
          )}

          <div className="margin-big-gap-v full-width">
            <LeaderCommentBlock
              placeholder="Комментарий к таймеру"
              action="addCommentForGameTimer"
              gamew={game.w}
              listw={timer.w}
              listwNameMask="timerw"
              comments={timer.comments}
              newCommentTextChange={value => setNewCommentText(value)}
              {...(isNewTimer
                ? {
                    isWaitedToSend: true,
                    importantActionOnClick: comment => use.saveComment(comment),
                  }
                : null)}
            />
          </div>
          <TimerPublicateControls
            isNewTimer={isNewTimer}
            newCommentText={newCommentText}
            name={name}
            isTeamsTaken={!!teamNet?.length}
            timer={timer}
            game={game}
            generalTimerw={topTimer.w}
            onSuccess={close}
          />
        </>
      )}
    </div>
  );
}

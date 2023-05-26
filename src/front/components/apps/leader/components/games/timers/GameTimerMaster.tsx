import { useEffect, useMemo, useState } from "react";
import TheButton from "../../../../../../complect/Button";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { LeaderCleans } from "../../LeaderCleans";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import { GameTeamImportable } from "../teams/GameTeams.model";
import useGames from "../useGames";
import {
  GameTimerImportable,
  GameTimerMode
} from "./GameTimer.model";
import "./GameTimer.scss";
import TimerCompetitionsSelector from "./complect/TimerCompetitionsSelector";
import TimerControlBoard from "./complect/TimerControlBoard";
import TimerInfoPanel from "./complect/TimerInfoPanel";
import TimerModeSelector from "./complect/TimerModeSelector";
import TimerPublicateControls from "./complect/TimerPublicateControls";
import TimerRatingBoard from "./complect/TimerRatingBoard";
import TimerResetButton from "./complect/TimerResetButton";
import TimerScreen from "./complect/TimerScreen";
import useGameTimer from "./useGameTimer";

const altObj = {};

export default function LeaderGameTimerMaster({
  timer: topTimer,
  close,
}: {
  timer: GameTimerImportable;
  close: () => void;
}) {
  const { cgame } = useGames();
  const use = useGameTimer(topTimer.w);
  const {
    timer,
    isNewTimer,
  } = use;

  const [name, setName] = useState(timer?.name);
  const [mode, setMode] = useState(LeaderCleans.getTimerConfigurableField('mode', timer, cgame));
  const [joins, setJoins] = useState(LeaderCleans.getTimerConfigurableField('joins', timer, cgame));

  const teamList = useMemo(() => LeaderCleans.takeTimerTeamList(timer, cgame), [cgame, timer]);

  const [teams, updateTeams] = useState<GameTeamImportable[]>(teamList);

  const [newCommentText, setNewCommentText] = useState("");

  useEffect(() => updateTeams(teamList), [teamList]);

  if (!timer || !cgame) return null;

  const isTimerStarted = use.isTimerStarted();

  const teamNet = teams && mylib.netFromLine(
    teams,
    mode === GameTimerMode.TimerTotal ? 1 : joins,
    (team) => team
  );

  return <div className="game-timer-master full-container flex column over-hidden">
    {isNewTimer && LeaderCleans.isTimerWasPublicate(cgame.timers, topTimer.ts)
      ? <div className="flex column center flex-gap full-width full-height">
        <span className="error-message">Этот таймер уже был опубликован! Создай новый.</span>
        <TheButton
          onClick={() => {
            use.updateTimer(null);
            close();
          }}
        >Удалить этот</TheButton>
      </div>
      : <>
        <div className="dropdown-ancestor flex full-width flex-gap">
          <TimerInfoPanel
            onMapTimer={use.mapTimer}
            onNameChange={setName}
            game={cgame}
            isNewTimer={isNewTimer}
            mode={mode}
            joins={joins}
            sort={LeaderCleans.getTimerConfigurableField('sort', timer, cgame)}
            timer={timer}
          />
        </div>
        {isNewTimer && !isTimerStarted && (
          <TimerModeSelector
            mode={mode ?? GameTimerMode.Messager}
            onSelect={({ id }) => {
              setMode(id);
              use.mapTimer((timer) => ({ ...timer, mode: id }));
            }}
          />
        )}
        {mode !== GameTimerMode.Messager && <>
          {isNewTimer && <>
            {isTimerStarted || <>
              {mode === GameTimerMode.TimerApart &&
                <TimerCompetitionsSelector
                  joins={joins}
                  teams={teams}
                  onSelect={({ id }) => {
                    setJoins(id);
                    use.mapTimer((timer) => ({ ...timer, joins: id }));
                  }}
                />}
              {mode === GameTimerMode.TimerTotal &&
                <div
                  className="start-total flex center background--7 color--1 pointer"
                  onClick={() => use.startTotalTimer()}
                >
                  СТАРТ
                </div>}
            </>}
            {mode === GameTimerMode.TimerTotal &&
              <TimerScreen
                className="total-timer padding-giant-gap"
                start={timer.start || 0}
              />}
          </>}
          <TimerControlBoard
            isNewTimer={isNewTimer}
            mode={mode}
            onTeamsUpdate={(teams) => updateTeams(teams)}
            teamNet={teamNet}
            teams={teams}
            timer={timer}
            game={cgame}
          />
        </>}

        {isNewTimer
          ? <TimerResetButton
            onTimerReset={() => use.resetTimers()}
            isCanReset={isTimerStarted || Object.keys(timer.finishes || altObj).length > 0}
          />
          : <TimerRatingBoard timer={timer} game={cgame} />}

        <div className="margin-big-gap-v full-width">
          <LeaderCommentBlock
            placeholder="Комментарий к таймеру"
            action="addCommentForGameTimer"
            gamew={cgame.w}
            listw={timer.w}
            listwNameMask="timerw"
            comments={timer.comments}
            newCommentTextChange={(value) => setNewCommentText(value)}
            {...(isNewTimer
              ? {
                isWaitedToSend: true,
                importantActionOnClick: (comment) => use.saveComment(comment),
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
          game={cgame}
          generalTimerw={topTimer.w}
          onSuccess={close}
        />
      </>}
  </div>;
}

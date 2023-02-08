import { useState } from "react";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import SendButton from "../../../../../complect/SendButton";
import useLeaderContexts from "../contexts/useContexts";
import Game from "./Game";
import GameTeamListComputer from "./GameTeamListComputer";
import GameTeam from "./teams/GameTeam";
import { GameTimerConfigurable } from "./timers/GameTimer.model";
import TimerFieldsConfigurer from "./timers/TimerFieldsConfigurer";
import TimerNameListConfigurer from "./timers/TimerNameListConfigurer";

export default function LeaderGameMaster({ close }: { close: () => void }) {
  const [isComputeTeamsLater, setIsComputeTeamsLater] = useState(true);
  const [teams, updateTeams] = useState<GameTeam[] | und>();
  const [timerNames, updateTimerNames] = useState<string[] | und>();
  const [timerFields, updateTimerFields] = useState<
    GameTimerConfigurable | und
  >();
  const [name, setName] = useState('');
  const { ccontext } = useLeaderContexts();

  return (
    <div className="team-maker full-container padding-giant-gap">
      <div className="flex full-width margin-big-gap-v">
        <div className="nowrap">Название игры</div>
        <div className="full-width margin-gap-h">
          <KeyboardInput onChange={setName} />
        </div>
      </div>
      <TimerNameListConfigurer redact onUpdate={updateTimerNames} />
      <TimerFieldsConfigurer redactable onUpdate={updateTimerFields} />
      <div
        className="flex flex-gap margin-gap-v pointer"
        onClick={() => setIsComputeTeamsLater(!isComputeTeamsLater)}
      >
        <input
          type="checkbox"
          checked={isComputeTeamsLater}
          onChange={() => { }}
        />
        Разбить на команды позже
      </div>
      {isComputeTeamsLater || <GameTeamListComputer onUpdate={updateTeams} />}
      <div className="flex center">
        {name && (isComputeTeamsLater || teams) ? (
          <SendButton
            title="Опубликовать игру"
            onSuccess={() => close()}
            confirm
            onSend={() => {
              if (!ccontext) return;

              return Game.sendNewGame({
                name,
                contextw: ccontext.wid,
                timerNames,
                teams,
                timerFields,
              });
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

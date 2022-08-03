import { useEffect, useState } from "react";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import SendButton from "../../complect/SendButton";
import useLeaderContexts from "../contexts/useContexts";
import Game from "./Game";
import GameTeamListComputer from "./GameTeamListComputer";
import GameTeam from "./teams/GameTeam";
import TimerNameListConfigurer from "./timers/TimerNameListConfigurer";

export default function LeaderGameMaster({ close }: { close: () => void }) {
  const gameNameInput = useKeyboard()(`game-name`, {});
  const [isComputeTeamsLater, setIsComputeTeamsLater] = useState(false);
  const [teams, updateTeams] = useState<GameTeam[] | und>();
  const [timerNames, updateTimerNames] = useState<string[] | und>();
  const { ccontext } = useLeaderContexts();

  useEffect(() => {
    return () => {
      gameNameInput.remove();
    };
  }, []);

  return (
    <div className="team-maker full-container padding-giant-gap">
      <div className="flex full-width margin-big-gap-v">
        <div className="nowrap">Название игры</div>
        <div className="full-width margin-gap-h">{gameNameInput.node}</div>
      </div>
      <TimerNameListConfigurer redact onUpdate={updateTimerNames} />
      <div
        className="flex flex-gap margin-gap-v pointer"
        onClick={() => setIsComputeTeamsLater(!isComputeTeamsLater)}
      >
        <input
          type="checkbox"
          checked={isComputeTeamsLater}
          onChange={() => {}}
        />
        Разбить на команды позже
      </div>
      {isComputeTeamsLater || <GameTeamListComputer onUpdate={updateTeams} />}
      <div className="flex center">
        {gameNameInput.value() && (isComputeTeamsLater || teams) ? (
          <SendButton
            title="Опубликовать игру"
            onSuccess={() => close()}
            confirm
            onSend={() => {
              if (!ccontext) return;

              return Game.sendNewGame(
                gameNameInput.value(),
                ccontext.wid,
                timerNames,
                teams
              );
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

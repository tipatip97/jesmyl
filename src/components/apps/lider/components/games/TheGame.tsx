import { useState } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import SendButton from "../../complect/SendButton";
import { liderExer } from "../../Lider.store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import useLeaderContexts from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import GameMore from "./GameMore";
import GameTeamListComputer from "./GameTeamListComputer";
import OutsiderMore from "./OutsiderMore";
import GameTeam from "./teams/GameTeam";
import TheGameTeam from "./teams/TheGameTeam";
import LeaderGameTimerFace from "./timers/TimerFace";
import TimerNameListConfigurer from "./timers/TimerNameListConfigurer";
import useGameTimer from "./timers/useGameTimer";
import TotalScoreTable from "./TotalScoreTable";
import useCgame from "./useGames";

export default function TheGame() {
  const { cgame } = useCgame();
  const { ccontext } = useLeaderContexts();
  const [selectedTimers, updateSelectedTimers] = useState<number[]>([]);
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { openFullscreenContent } = useFullscreenContent();
  const [isTeamsLoading, setIsTeamsLoading] = useState(false);
  const usedHumans =
    cgame?.teams?.reduce<number[]>(
      (list, team) => list.concat(team.members),
      []
    ) || [];

  const { newTimer } = useGameTimer(cgame);
  const [teams, updateTeams] = useState<GameTeam[] | und>();

  const membersReadyToPlayNode = ccontext
    ?.membersReadyToPlay()
    ?.filter((human) => usedHumans.indexOf(human.wid) < 0)
    .map((human, humani) => (
      <HumanFace
        key={`humani-${humani}`}
        human={human}
        onMoreClick={
          cgame &&
          liderExer.actionAccessedOrUnd("addMemberToTeam") &&
          (() => {
            openAbsoluteBottomPopup(
              <OutsiderMore game={cgame} human={human} />
            );
          })
        }
      />
    ));

  return (
    <PhaseLiderContainer
      topClass="the-game"
      headTitle={`Игра - ${cgame?.name || ""}`}
      onMoreClick={() =>
        openAbsoluteBottomPopup((close) => (
          <GameMore close={close} selectedTimers={selectedTimers} />
        ))
      }
      content={
        <>
          {!!membersReadyToPlayNode?.length && (
            <>
              <h2 className="margin-gap">Не вошедшие игроки:</h2>
              {membersReadyToPlayNode}
            </>
          )}
          <h2 className="margin-gap">Таймеры:</h2>
          {cgame?.timers?.map((timer, timeri) => {
            return (
              <LeaderGameTimerFace
                key={`timer-${timeri}`}
                timer={timer}
                selectedPosition={selectedTimers.indexOf(timer.wid) + 1}
                onSelect={() =>
                  updateSelectedTimers(
                    selectedTimers.indexOf(timer.wid) < 0
                      ? [...selectedTimers, timer.wid]
                      : selectedTimers.filter((wid) => wid !== timer.wid)
                  )
                }
              />
            );
          })}
          <LeaderGameTimerFace timer={newTimer} />
          <TimerNameListConfigurer
            timerNames={cgame?.timerNames}
            redactable
            onSend={(list) => cgame?.publicateTimerNameList(list)}
          />
          {selectedTimers.length > 1 && (
            <div
              className="margin-big-gap pointer flex"
              onClick={() =>
                openFullscreenContent(
                  <TotalScoreTable selectedTimers={selectedTimers} />
                )
              }
            >
              <EvaIcon name="eye-outline" className="margin-gap" />
              Просмотреть объединённые результаты
            </div>
          )}
          <h2 className="margin-big-gap-v margin-gap">
            Команды{cgame && !cgame.teams ? " не разбиты" : ""}:
          </h2>
          {cgame?.teams?.map((team, teami) => {
            return (
              <TheGameTeam key={`teami-${teami}`} team={team} redactable />
            );
          })}
          <div className={isTeamsLoading ? "disabled" : ""}>
            {cgame && !cgame.teams && (
              <GameTeamListComputer
                onUpdate={(list) => updateTeams(list)}
                noComments
              />
            )}
          </div>
          {teams && liderExer.actionAccessedOrUnd("updateGameTeamList") && (
            <div className="flex center">
              <SendButton
                title="Обубликовать команды"
                onSuccess={() => {
                  setIsTeamsLoading(false);
                  updateTeams(undefined);
                }}
                onFailure={() => setIsTeamsLoading(false)}
                confirm
                onSend={() => {
                  setIsTeamsLoading(true);
                  return cgame?.publicateTeams(teams);
                }}
              />
            </div>
          )}
        </>
      }
    />
  );
}

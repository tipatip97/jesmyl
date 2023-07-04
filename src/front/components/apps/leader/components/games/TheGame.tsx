import { useState } from "react";
import CopyTextButton from "../../../../../complect/CopyTextButton";
import SendButton from "../../../../../complect/SendButton";
import { useBottomPopup } from "../../../../../complect/absolute-popup/useBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullContent from "../../../../../complect/fullscreen-content/useFullContent";
import modalService from "../../../../../complect/modal/Modal.service";
import { leaderExer } from "../../Leader.store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import useLeaderNav from "../../useLeaderNav";
import { LeaderCleans } from "../LeaderCleans";
import useLeaderContext from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import { GameDescription } from "./GameDescription";
import GameMore from "./GameMore";
import GameTeamListComputer from "./GameTeamListComputer";
import OutsiderMore from "./OutsiderMore";
import TotalScoreTable from "./TotalScoreTable";
import { GameTeamExportable } from "./teams/GameTeams.model";
import TheGameTeam from "./teams/TheGameTeam";
import LeaderGameTimerFace from "./timers/TimerFace";
import TimerFieldsConfigurer from "./timers/complect/TimerFieldsConfigurer";
import TimerNameListConfigurer from "./timers/complect/TimerNameListConfigurer";
import useGameTimer from "./timers/useGameTimer";
import useCgame from "./useGames";

export default function TheGame() {
  const { cgame } = useCgame();
  const { contextMembers } = useLeaderContext();
  const [selectedTimers, updateSelectedTimers] = useState<number[]>([]);
  const [outsiderw, setOutsiderw] = useState(0);
  const [outsiderMoreNode, openOutsiderMore] = useBottomPopup((_, prepare) => {
    if (cgame == null || outsiderw === 0) return null;
    const outsider = contextMembers.find(member => member.w === outsiderw);
    if (outsider === undefined) return null;

    return <OutsiderMore
      game={cgame}
      human={outsider}
      prepare={prepare}
    />;
  });
  const [gameMoreNode, openGameMore] = useBottomPopup((close, prepare) => (
    <GameMore
      close={close}
      selectedTimers={selectedTimers}
      prepare={prepare}
      onGameRemove={async () => {
        if (cgame && (await modalService.confirm(`Удалить игру "${cgame.name}" окончательно?`)))
          LeaderCleans.removeGame(cgame.w).then(() => goBack());
      }}
    />
  ));
  const [fullNode, openFullContent] = useFullContent(() => <TotalScoreTable selectedTimers={selectedTimers} />);
  const [isTeamsLoading, setIsTeamsLoading] = useState(false);
  const usedHumans =
    cgame?.teams?.reduce<number[]>((list, team) => list.concat(team.members), []) || [];

  const { isTimerStarted } = useGameTimer(cgame);
  const [teams, updateTeams] = useState<GameTeamExportable[] | und>();
  const { goBack } = useLeaderNav();

  const membersReadyToPlayNode = LeaderCleans.membersReadyToPlay(contextMembers)
    ?.filter((human) => usedHumans.indexOf(human.w) < 0)
    .map((human, humani) => (
      <HumanFace
        key={humani}
        human={human}
        onMoreClick={
          cgame &&
          leaderExer.actionAccessedOrUnd("addMemberToTeam") &&
          (() => {
            setOutsiderw(human.w);
            openOutsiderMore();
          })
        }
      />
    ));

  if (!cgame) return <PhaseLeaderContainer
    topClass="the-game"
    headTitle="Игра"
    content={<div className="error-message flex center">Игра удалена</div>}
  />;

  return (
    <PhaseLeaderContainer
      topClass="the-game"
      headTitle={`Игра - ${cgame.name}`}
      onMoreClick={() => openGameMore()}
      content={
        <>
          {fullNode}
          {gameMoreNode}
          {outsiderMoreNode}
          {!leaderExer.actionAccessedOrNull("updateGameTeamList") &&
            !cgame.teams ? (
            <div className="error-message">Команды не сформированы</div>
          ) : (
            <>
              <GameDescription game={cgame} redactable />
              {cgame.teams && !!membersReadyToPlayNode?.length && (
                <>
                  <h2 className="margin-gap">Не вошедшие игроки:</h2>
                  {membersReadyToPlayNode}
                </>
              )}
              <>
                <h2 className="margin-gap">Таймеры:</h2>
                {cgame.timers?.map((timer, timeri) => {
                  return (
                    <LeaderGameTimerFace
                      key={timeri}
                      timerw={timer.w}
                      game={cgame}
                      selectedPosition={selectedTimers.indexOf(timer.w) + 1}
                      onSelect={() =>
                        updateSelectedTimers(
                          selectedTimers.includes(timer.w)
                            ? selectedTimers.filter((wid) => wid !== timer.w)
                            : [...selectedTimers, timer.w]
                        )
                      }
                    />
                  );
                })}
                <LeaderGameTimerFace
                  timerw={0}
                  game={cgame}
                  namePostfix={isTimerStarted() && (
                    <span className="error-message">(Запущен)</span>
                  )}
                />
                {selectedTimers.length > 1 && (
                  <div
                    className="margin-big-gap pointer flex"
                    onClick={() => openFullContent()}
                  >
                    <EvaIcon name="eye-outline" className="margin-gap" />
                    Просмотреть объединённые результаты
                  </div>
                )}
              </>
              <TimerNameListConfigurer
                timerNames={cgame.timerNames}
                redactable
                onSend={(list) => LeaderCleans.publicateTimerNameList(cgame.w, list)}
              />
              <TimerFieldsConfigurer
                redactable
                game={cgame}
                onSend={(list) => LeaderCleans.publicateGameTimerFields(cgame.w, list)}
              />
              <h2 className="margin-big-gap-v margin-gap">
                <CopyTextButton
                  text={() => cgame.teams?.map(({ name }) => name).join("\n")}
                  description={cgame && !cgame.teams ? "Команды не собраны" : "Команды"}
                  message="Названия команд скопированы"
                />
              </h2>
              {cgame.teams?.map((team, teami) => {
                return (
                  <TheGameTeam
                    key={teami}
                    team={team}
                    game={cgame}
                    redactable
                  />
                );
              })}
              {!cgame.teams && (
                <div className={isTeamsLoading ? "disabled" : ""}>
                  {cgame && !cgame.teams && (
                    <GameTeamListComputer
                      onUpdate={(list) => updateTeams(list)}
                      game={cgame}
                      noComments
                    />
                  )}
                </div>
              )}
              {teams && leaderExer.actionAccessedOrUnd("updateGameTeamList") && (
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
                      return LeaderCleans.publicateTeams(cgame.w, teams);
                    }}
                  />
                </div>
              )}
            </>
          )}
        </>
      }
    />
  );
}

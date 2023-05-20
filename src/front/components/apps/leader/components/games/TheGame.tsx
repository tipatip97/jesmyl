import { useState } from "react";
import SendButton from "../../../../../complect/SendButton";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import modalService from "../../../../../complect/modal/Modal.service";
import { leaderExer } from "../../Leader.store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import useLeaderNav from "../../useLeaderNav";
import useLeaderContexts from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import GameMore from "./GameMore";
import GameTeamListComputer from "./GameTeamListComputer";
import OutsiderMore from "./OutsiderMore";
import TotalScoreTable from "./TotalScoreTable";
import { GameTeamExportable } from "./teams/GameTeams.model";
import TheGameTeam from "./teams/TheGameTeam";
import LeaderGameTimerFace from "./timers/TimerFace";
import TimerFieldsConfigurer from "./timers/TimerFieldsConfigurer";
import TimerNameListConfigurer from "./timers/TimerNameListConfigurer";
import useGameTimer from "./timers/useGameTimer";
import useCgame from "./useGames";

export default function TheGame() {
  const { cgame, publicateTimerNameList, publicateGameTimerFields, publicateTeams, removeGame } = useCgame();
  const { membersReadyToPlay, contextMembers } = useLeaderContexts();
  const [selectedTimers, updateSelectedTimers] = useState<number[]>([]);
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { openFullscreenContent } = useFullscreenContent();
  const [isTeamsLoading, setIsTeamsLoading] = useState(false);
  const usedHumans =
    cgame?.teams?.reduce<number[]>((list, team) => list.concat(team.members), []) || [];

  const { isTimerOnRedaction, isTimerStarted } = useGameTimer();
  const [teams, updateTeams] = useState<GameTeamExportable[] | und>();
  const [isShowNamesInInput, setIsShowNamesInInput] = useState(false);
  const { goBack } = useLeaderNav();

  const membersReadyToPlayNode = membersReadyToPlay(contextMembers)
    ?.filter((human) => usedHumans.indexOf(human.w) < 0)
    .map((human, humani) => (
      <HumanFace
        key={humani}
        human={human}
        onMoreClick={
          cgame &&
          leaderExer.actionAccessedOrUnd("addMemberToTeam") &&
          (() => {
            openAbsoluteBottomPopup(<OutsiderMore game={cgame} human={human} />);
          })
        }
      />
    ));

  if (!cgame) return null;

  return (
    <PhaseLeaderContainer
      topClass="the-game"
      headTitle={`Игра - ${cgame.name}`}
      onMoreClick={() =>
        openAbsoluteBottomPopup((close) => (
          <GameMore
            close={close}
            selectedTimers={selectedTimers}
            onGameRemove={async () => {
              if (cgame && (await modalService.confirm(`Удалить игру "${cgame.name}" окончательно?`)))
                removeGame(cgame.w).then(() => goBack());
            }}
          />
        ))
      }
      content={
        <>
          {!leaderExer.actionAccessedOrNull("updateGameTeamList") &&
            !cgame.teams ? (
            <div className="error-message">Команды не сформированы</div>
          ) : (
            <>
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
                      selectedPosition={selectedTimers.indexOf(timer.w) + 1}
                      isTimerOnRedaction={isTimerOnRedaction(timer.ts)}
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
                  namePostfix={isTimerStarted() && (
                    <span className="error-message">(Запущен)</span>
                  )}
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
              </>
              <TimerNameListConfigurer
                timerNames={cgame.timerNames}
                redactable
                onSend={(list) => publicateTimerNameList(cgame.w, list)}
              />
              <TimerFieldsConfigurer
                redactable
                game={cgame}
                onSend={(list) => publicateGameTimerFields(cgame.w, list)}
              />
              <EvaIcon
                name="copy-outline"
                onClick={() => setIsShowNamesInInput(!isShowNamesInInput)}
              />
              {isShowNamesInInput ? (
                <KeyboardInput
                  value={cgame.teams?.map(({ name }) => name).join("\n")}
                  multiline
                />
              ) : (
                <>
                  <h2 className="margin-big-gap-v margin-gap">
                    Команды{cgame && !cgame.teams ? " не собраны" : ""}
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
                </>
              )}
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
                      return publicateTeams(cgame.w, teams);
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

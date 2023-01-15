import { useState } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import SendButton from "../../../../../complect/SendButton";
import { leaderExer } from "../../Leader.store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import useLeaderContexts from "../contexts/useContexts";
import HumanFace from "../people/HumanFace";
import GameMore from "./GameMore";
import GameTeamListComputer from "./GameTeamListComputer";
import OutsiderMore from "./OutsiderMore";
import GameTeam from "./teams/GameTeam";
import TheGameTeam from "./teams/TheGameTeam";
import LeaderGameTimerFace from "./timers/TimerFace";
import TimerFieldsConfigurer from "./timers/TimerFieldsConfigurer";
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
      (list, team) => list.concat(team.memberIds),
      []
    ) || [];

  const { newTimer, isTimerOnRedaction } = useGameTimer();
  const [teams, updateTeams] = useState<GameTeam[] | und>();
  const [isShowNamesInInput, setIsShowNamesInInput] = useState(false);
  const inputMaker = useKeyboard();
  let input: any;
  if (cgame)
    input = inputMaker("TheGame team names", {
      initialValue: cgame.teams?.map(({ name }) => name).join("\n"),
      multiline: true,
    });

  const membersReadyToPlayNode = ccontext
    ?.membersReadyToPlay()
    ?.filter((human) => usedHumans.indexOf(human.wid) < 0)
    .map((human, humani) => (
      <HumanFace
        key={`humani-${humani}`}
        human={human}
        onMoreClick={
          cgame &&
          leaderExer.actionAccessedOrUnd("addMemberToTeam") &&
          (() => {
            openAbsoluteBottomPopup(
              <OutsiderMore game={cgame} human={human} />
            );
          })
        }
      />
    ));

  return (
    <PhaseLeaderContainer
      topClass="the-game"
      headTitle={`Игра - ${cgame?.name || ""}`}
      onMoreClick={() =>
        openAbsoluteBottomPopup((close) => (
          <GameMore
            close={close}
            selectedTimers={selectedTimers}
            game={cgame}
          />
        ))
      }
      content={
        <>
          {!leaderExer.actionAccessedOrNull("updateGameTeamList") &&
            !cgame?.teams ? (
            <div className="error-message">Команды не сформированы</div>
          ) : (
            <>
              {cgame?.teams && !!membersReadyToPlayNode?.length && (
                <>
                  <h2 className="margin-gap">Не вошедшие игроки:</h2>
                  {membersReadyToPlayNode}
                </>
              )}
              <>
                <h2 className="margin-gap">Таймеры:</h2>
                {cgame?.timers?.map((timer, timeri) => {
                  return (
                    <LeaderGameTimerFace
                      key={`timer-${timeri}`}
                      timer={timer}
                      selectedPosition={selectedTimers.indexOf(timer.wid) + 1}
                      isTimerOnRedaction={isTimerOnRedaction(timer.ts)}
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
                timerNames={cgame?.timerNames}
                redactable
                onSend={(list) => cgame?.publicateTimerNameList(list)}
              />
              <TimerFieldsConfigurer
                redactable
                game={cgame}
                onSend={(list) => cgame?.publicateGameTimerFields(list)}
              />
              <EvaIcon
                name="copy-outline"
                onClick={() => setIsShowNamesInInput(!isShowNamesInInput)}
              />
              {isShowNamesInInput ? (
                input.node
              ) : (
                <>
                  <h2 className="margin-big-gap-v margin-gap">
                    Команды{cgame && !cgame.teams ? " не собраны" : ""}
                  </h2>
                  {cgame?.teams?.map((team, teami) => {
                    return (
                      <TheGameTeam
                        key={`teami-${teami}`}
                        team={team}
                        redactable
                      />
                    );
                  })}
                </>
              )}
              {!cgame?.teams && (
                <div className={isTeamsLoading ? "disabled" : ""}>
                  {cgame && !cgame.teams && (
                    <GameTeamListComputer
                      onUpdate={(list) => updateTeams(list)}
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
                      return cgame?.publicateTeams(teams);
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

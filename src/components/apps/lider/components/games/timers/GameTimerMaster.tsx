import { useEffect, useMemo, useState } from "react";
import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { liderExer } from "../../../Lider.store";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import GameTeam from "../teams/GameTeam";
import { GameTimerMode } from "../Games.model";
import useGames from "../useGames";
import GameTimer from "./GameTimer";
import "./GameTimer.scss";
import GameTimerScreen from "./GameTimerScreen";
import useGameTimer from "./useGameTimer";

export default function GameTimerMaster({
  timer: topTimer,
  close,
}: {
  timer: GameTimer;
  close: () => void;
}) {
  const { cgame } = useGames();
  const timer = useMemo(
    () =>
      (topTimer.wid &&
        cgame?.timers?.find((timer) => topTimer.wid === timer.wid)) ||
      topTimer,
    [cgame?.timers, topTimer]
  );

  const [mode, setMode] = useState(timer.mode);
  const [joins, setJoins] = useState(timer.joins || 1);
  const [selectedTeam, setSelectedTeam] = useState<GameTeam | null>(null);
  const [teams, updateTeams] = useState<GameTeam[]>(timer.teams ?? []);
  const {
    startTotalTimer,
    mapTimer,
    resetTimers,
    startForRow,
    pauseForRow,
    updateTeamList,
    removeLocalTimer,
    saveComment,
    removeComment,
  } = useGameTimer(timer.game);
  const nameInput = useKeyboard()("name-of-GameTimer-input", {
    preferLanguage: "ru",
    initialValue: timer.name,
    onInput: (value) => {
      value && mapTimer((timer) => (timer.name = value));
    },
  });

  const teamNet = mylib.netFromLine(
    teams,
    mode === GameTimerMode.Total ? 1 : joins,
    (team) => team
  );
  useEffect(() => () => nameInput.remove(), []);

  const members = timer.teams.length;
  const membersInGame = timer.rateSortedTeams(true).length;

  return (
    <div className="game-timer-master full-container padding-giant-gap flex column over-hidden">
      <div className="flex full-width flex-gap">
        {timer.isNewTimer ? (
          <>
            <span>Название</span>
            {nameInput.node}
          </>
        ) : (
          <div className="padding-giant-gap">
            <div className="text-bold">Общее о таймере:</div>
            <div>Название: {timer.name}</div>
            <div>
              Старт: {timer.mode === GameTimerMode.Total ? "Общий" : "Частный"}
            </div>
            <div>
              Команд участвовало:{" "}
              {members === membersInGame
                ? members
                : `${membersInGame} / ${members}`}
            </div>
          </div>
        )}
      </div>
      {timer.isNewTimer && (
        <>
          {!timer.isStarted && (
            <>
              <Dropdown
                className="margin-big-gap-v"
                id={mode}
                items={[
                  {
                    id: GameTimerMode.Apart,
                    title: "Частный старт",
                  },
                  {
                    id: GameTimerMode.Total,
                    title: "Общий старт",
                  },
                ]}
                onSelect={({ id }) => {
                  setMode(id);
                  mapTimer((timer) => (timer.mode = id));
                }}
              />
              {mode !== GameTimerMode.Total && (
                <Dropdown
                  className="margin-big-gap-v"
                  id={joins}
                  items={[
                    {
                      id: 1,
                      title: "Глобальное противостояние",
                    },
                  ].concat(
                    [2, 3, 4, 5, 6, 7, 8, 9]
                      .map((num) => {
                        return num < teams.length
                          ? {
                              id: num,
                              title: `Соревнуются по ${num} ${mylib.declension(
                                num,
                                "команде",
                                "команды",
                                "команд"
                              )}`,
                            }
                          : { id: 0, title: "" };
                      })
                      .filter(({ id }) => id)
                  )}
                  onSelect={({ id }) => {
                    setJoins(id);
                    mapTimer((timer) => (timer.joins = id));
                  }}
                />
              )}
              {mode === GameTimerMode.Total && (
                <div
                  className="start-total flex center background--7 color--1 pointer"
                  onClick={() => startTotalTimer()}
                >
                  СТАРТ
                </div>
              )}
            </>
          )}
          {mode === GameTimerMode.Total && (
            <GameTimerScreen
              className="total-timer padding-giant-gap"
              start={timer.start || 0}
            />
          )}
        </>
      )}
      <div className="table-centered-wrapper team-list-table margin-big-gap-v">
        <div className="table">
          {teamNet?.map((row, rowi) => {
            return (
              <div key={`rowi-${rowi}`} className="row">
                <div className="cell flex column ellipsis">
                  {row.map((team, teami) => {
                    return (
                      <div
                        key={`teami-${teami}`}
                        className={`flex center full-max-width ${
                          selectedTeam === team ? "selected-team" : ""
                        }`}
                        onContextMenu={(event) => {
                          event.preventDefault();
                          if (timer.isTeamCantMove(team)) {
                            if (team === selectedTeam) setSelectedTeam(null);
                            return;
                          }
                          setSelectedTeam(team === selectedTeam ? null : team);
                        }}
                        onClick={() => {
                          if (timer.isTeamCantMove(team)) {
                            if (team === selectedTeam) setSelectedTeam(null);
                            return;
                          }
                          if (!selectedTeam) {
                            if (selectedTeam === team) setSelectedTeam(null);
                            return;
                          }
                          const newTeams = [...teams];
                          const selectedi = newTeams.indexOf(selectedTeam);
                          const teami = newTeams.indexOf(team);
                          [newTeams[selectedi], newTeams[teami]] = [
                            newTeams[teami],
                            newTeams[selectedi],
                          ];
                          updateTeams(newTeams);
                          updateTeamList(newTeams.map((team) => team.wid));
                          setSelectedTeam(null);
                        }}
                      >
                        <div className="flex column min-width-90 over-hidden">
                          <div className="team-box full-max-width ellipsis">
                            {team.upperName}
                          </div>

                          {!!timer.finishes?.[team.wid] && (
                            <GameTimerScreen
                              className="color--3"
                              start={timer.startTime(rowi)}
                              pause={timer.finishes?.[team.wid]}
                            />
                          )}
                        </div>

                        {timer.isNewTimer && (
                          <div
                            className={`${
                              timer.startTime(rowi) &&
                              !timer.finishes?.[team.wid]
                                ? ""
                                : "disabled clickable"
                            } control-button finish-button flex center pointer margin-gap`}
                          >
                            <EvaIcon
                              name="pause-circle-outline"
                              onContextMenu={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                if (timer.startTime(rowi))
                                  pauseForRow(team.wid, 0);
                              }}
                              onClick={() => {
                                if (
                                  !timer.startTime(rowi) ||
                                  timer.finishes?.[team.wid]
                                )
                                  return;
                                pauseForRow(team.wid);
                              }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {timer.isNewTimer &&
                    !timer.isRowFinished(rowi) &&
                    !!timer.starts?.[rowi] && (
                      <div>
                        <GameTimerScreen
                          className="color--3"
                          start={timer.startTime(rowi)}
                        />
                      </div>
                    )}
                </div>
                {mode !== GameTimerMode.Total && timer.isNewTimer ? (
                  <div
                    className={`control-button start-button flex center pointer margin-gap ${
                      timer.starts?.[rowi] ? "disabled" : ""
                    }`}
                  >
                    <EvaIcon
                      name="play-circle-outline"
                      onClick={() => startForRow(rowi)}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {timer.isNewTimer ? (
        <div className="flex around flex-gap margin-big-gap">
          {timer.isStarted && (
            <span
              className="pointer error-message"
              onClick={() => {
                modalService
                  .confirm(
                    mode === GameTimerMode.Total
                      ? "Сбросить таймер?"
                      : "Сбросить все таймеры?"
                  )
                  .then((reset) => reset && resetTimers());
              }}
            >
              Сбросить таймер
            </span>
          )}
        </div>
      ) : (
        <div>
          {timer.rateSortedTeams(true).map(
            ({ team, start, finish }, bagi) =>
              !!finish &&
              !!start && (
                <div key={`bagi-${bagi}`} className="flex flex-gap">
                  <div>{bagi + 1}</div>
                  <div>{team.upperName}</div>
                  <GameTimerScreen
                    className="color--3"
                    start={start}
                    pause={finish}
                  />
                </div>
              )
          )}
        </div>
      )}
      <div className="margin-big-gap-v full-width">
        <LeaderCommentBlock
          action="addCommentForGameTimer"
          inputId={`addCommentForGameTimer ${timer.wid} ${timer.game?.wid}`}
          listw={timer.wid}
          placeholder="Комментарий к таймеру"
          areaw={timer.game?.wid}
          comments={timer.comments}
          arean={"gameTimers"}
          {...(timer.isNewTimer
            ? {
                isWaitedToSend: true,
                importantActionOnClick: (comment) => saveComment(comment),
                onRejectSend: (comment) => removeComment(comment),
              }
            : null)}
        />
      </div>
      {timer.isNewTimer ? (
        <div className="flex around flex-gap margin-big-gap">
          {timer.finishes && nameInput.value() && (
            <span
              className="pointer"
              onClick={async () => {
                if (await modalService.confirm("Опубликовать таймер?"))
                  liderExer.send(
                    {
                      action: "addGameTimer",
                      method: "push",
                      args: timer.toExportDict(),
                    },
                    () => {
                      resetTimers();
                      removeLocalTimer();
                      nameInput.remove();
                      close();
                    }
                  );
              }}
            >
              Сохранить результаты
            </span>
          )}
        </div>
      ) : (
        <div
          className={`flex center pointer ${
            timer.isInactive ? "color--3" : "error-message"
          }`}
          onClick={async () => {
            if (
              await modalService.confirm(
                timer.isInactive ? "Восстановить таймер?" : "Исключить таймер?"
              )
            )
              liderExer.send({
                action: "setIsIctiveGameTimer",
                method: "set",
                args: {
                  value: !timer.isInactive,
                  gamew: timer.game?.wid,
                  timerw: timer.wid,
                },
              });
          }}
        >
          {timer.isInactive ? "Восстановить таймер" : "Исключить таймер"}
        </div>
      )}
    </div>
  );
}

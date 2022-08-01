import { useEffect, useMemo, useState } from "react";
import useAbsoluteFloatPopup from "../../../../../../complect/absolute-popup/useAbsoluteFloatPopup";
import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../complect/my-lib/MyLib";
import SendButton from "../../../complect/SendButton";
import { liderExer } from "../../../Lider.store";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import GameTeam from "../teams/GameTeam";
import useGames from "../useGames";
import LeaderGameTimer from "./GameTimer";
import {
  GameTimerMode,
  timerModeAliases,
  timerModeAliasList,
} from "./GameTimer.model";
import "./GameTimer.scss";
import GameTimerScreen from "./GameTimerScreen";
import useGameTimer from "./useGameTimer";

export default function LeaderGameTimerMaster({
  timer: topTimer,
  close,
}: {
  timer: LeaderGameTimer;
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
  const [selectedTeamw, setSelectedTeamw] = useState<number | null>(null);
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
  const { openAbsoluteFloatPopup } = useAbsoluteFloatPopup();

  const teamNet = mylib.netFromLine(
    teams,
    mode === GameTimerMode.TimerTotal ? 1 : joins,
    (team) => team
  );
  useEffect(() => () => nameInput.remove(), []);

  const members = timer.teams.length;
  const membersInGame = timer.rateSortedTeams(true).length;

  return (
    <div className="game-timer-master full-container padding-giant-gap flex column over-hidden">
      {topTimer.isNew && cgame?.isTimerWasPublicate(topTimer.ts) ? (
        <div className="flex center full-width full-height error-message">
          Этот таймер уже был опубликован! Создай новый.
        </div>
      ) : (
        <>
          <div className="flex full-width flex-gap">
            {timer.isNew ? (
              <>
                <span>Название</span>
                {nameInput.node}
              </>
            ) : (
              <div className="padding-giant-gap">
                <div className="text-bold">Общее о таймере:</div>
                <div>Название: {timer.name}</div>
                <div>Тип таймера: {timerModeAliases[mode]}</div>
                {mode !== GameTimerMode.Messager && (
                  <div>
                    Команд участвовало:{" "}
                    {members === membersInGame
                      ? members
                      : `${membersInGame} / ${members}`}
                  </div>
                )}
              </div>
            )}
          </div>
          {timer.isNew && !timer.isStarted && (
            <div className="dropdown-ancestor margin-big-gap-v flex flex-gap full-width">
              <span className="nowrap">Тип таймера</span>
              <Dropdown
                id={mode}
                items={timerModeAliasList}
                onSelect={({ id }) => {
                  setMode(id);
                  mapTimer((timer) => (timer.mode = id));
                }}
              />
            </div>
          )}
          {mode !== GameTimerMode.Messager && (
            <>
              {timer.isNew && (
                <>
                  {!timer.isStarted && (
                    <>
                      {mode === GameTimerMode.TimerApart && (
                        <div className="dropdown-ancestor margin-big-gap-v flex flex-gap full-width">
                          Таймер
                          <Dropdown
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
                        </div>
                      )}
                      {mode === GameTimerMode.TimerTotal && (
                        <div
                          className="start-total flex center background--7 color--1 pointer"
                          onClick={() => startTotalTimer()}
                        >
                          СТАРТ
                        </div>
                      )}
                    </>
                  )}
                  {mode === GameTimerMode.TimerTotal && (
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
                                  selectedTeamw === team.wid
                                    ? "selected-team"
                                    : ""
                                }`}
                                onContextMenu={(event) => {
                                  event.preventDefault();
                                  if (timer.isTeamCantMove(team)) {
                                    if (team.wid === selectedTeamw)
                                      setSelectedTeamw(null);
                                    return;
                                  }
                                  setSelectedTeamw(
                                    team.wid === selectedTeamw ? null : team.wid
                                  );
                                }}
                                onClick={() => {
                                  if (timer.isTeamCantMove(team)) {
                                    if (team.wid === selectedTeamw)
                                      setSelectedTeamw(null);
                                    return;
                                  }
                                  if (!selectedTeamw) {
                                    if (selectedTeamw === team.wid)
                                      setSelectedTeamw(null);
                                    return;
                                  }
                                  const newTeams = [
                                    ...teams.map(({ wid }) => wid),
                                  ];
                                  const selectedi =
                                    newTeams.indexOf(selectedTeamw);
                                  const teami = newTeams.indexOf(team.wid);
                                  [newTeams[selectedi], newTeams[teami]] = [
                                    newTeams[teami],
                                    newTeams[selectedi],
                                  ];
                                  updateTeams(
                                    newTeams
                                      .map((wid) =>
                                        teams.find((team) => team.wid === wid)
                                      )
                                      .filter((team) => team) as GameTeam[]
                                  );
                                  updateTeamList(newTeams);
                                  setSelectedTeamw(null);
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

                                {timer.isNew && (
                                  <div
                                    className={` control-button finish-button flex center pointer margin-gap`}
                                  >
                                    {!timer.finishes?.[team.wid] ? (
                                      <EvaIcon
                                        name="pause-circle-outline"
                                        className={
                                          !timer.startTime(rowi)
                                            ? "disabled "
                                            : ""
                                        }
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          if (
                                            !timer.startTime(rowi) ||
                                            timer.finishes?.[team.wid]
                                          )
                                            return;
                                          pauseForRow(team.wid);
                                        }}
                                      />
                                    ) : (
                                      <EvaIcon
                                        name="rewind-right-outline"
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          openAbsoluteFloatPopup(
                                            <div
                                              onClick={() => {
                                                if (timer.startTime(rowi))
                                                  pauseForRow(team.wid, 0);
                                              }}
                                            >
                                              Возобновить старый таймер
                                            </div>,
                                            event.clientX,
                                            event.clientY
                                          );
                                        }}
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                          {timer.isNew &&
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
                        {mode !== GameTimerMode.TimerTotal && timer.isNew ? (
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
            </>
          )}

          {timer.isNew ? (
            <div className="flex around flex-gap margin-big-gap">
              {timer.isStarted && (
                <span
                  className="pointer error-message"
                  onClick={() => {
                    modalService
                      .confirm(
                        mode === GameTimerMode.TimerTotal
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
                      <div>{team?.upperName}</div>
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
              arean="gameTimers"
              {...(timer.isNew
                ? {
                    isWaitedToSend: true,
                    importantActionOnClick: (comment) => saveComment(comment),
                    onRejectSend: (comment) => removeComment(comment),
                  }
                : null)}
            />
          </div>
          {timer.isNew ? (
            <div className="flex around flex-gap margin-big-gap">
              {(timer.finishes || mode === GameTimerMode.Messager) &&
                nameInput.value() && (
                  <SendButton
                    title="Опубликовать таймер"
                    onSuccess={() => {
                      close();
                      resetTimers();
                      removeLocalTimer();
                      nameInput.remove();
                    }}
                    onSend={async () => {
                      if (!cgame) return false;

                      if (await modalService.confirm("Опубликовать таймер?"))
                        return LeaderGameTimer.publicateNew({
                          ...timer.toDict(),
                          gamew: cgame.wid,
                        });
                      else return false;
                    }}
                  />
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
                    timer.isInactive
                      ? "Восстановить таймер?"
                      : "Исключить таймер?"
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
        </>
      )}
    </div>
  );
}

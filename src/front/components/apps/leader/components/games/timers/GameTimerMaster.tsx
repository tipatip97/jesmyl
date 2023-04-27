import { useMemo, useState } from "react";
import useAbsoluteFloatPopup from "../../../../../../complect/absolute-popup/useAbsoluteFloatPopup";
import propsOfClicker from "../../../../../../complect/clicker/propsOfClicker";
import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import EvaButton from "../../../../../../complect/eva-icon/EvaButton";
import KeyboardInput from "../../../../../../complect/keyboard/KeyboardInput";
import modalService from "../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../complect/my-lib/MyLib";
import SendButton from "../../../../../../complect/SendButton";
import { leaderExer } from "../../../Leader.store";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import GameTeam from "../teams/GameTeam";
import useGames from "../useGames";
import LeaderGameTimer from "./GameTimer";
import {
  GameTimerMode,
  timerModeAliases
} from "./GameTimer.model";
import "./GameTimer.scss";
import GameTimerScreen from "./GameTimerScreen";
import TimerCompetitionsSelector from "./TimerCompetitionsSelector";
import TimerModeSelector from "./TimerModeSelector";
import useGameTimer from "./useGameTimer";

export default function LeaderGameTimerMaster({
  timer: topTimer,
  close,
}: {
  timer: LeaderGameTimer;
  close: () => void;
}) {
  const { cgame } = useGames();
  const {
    startTotalTimer,
    mapTimer,
    resetTimers,
    startForRow,
    pauseForRow,
    isCanPauseForRow,
    updateTeamList,
    removeLocalTimer,
    saveComment,
    removeComment,
    publicateTimer,
    newTimer,
    isRedactOld,
    redactIcon,
    isCanSendOldTimerUpdates,
    isTimerOnRedaction,
  } = useGameTimer(topTimer.wid);

  const timer = useMemo(
    () =>
      isRedactOld
        ? newTimer
        : (topTimer.wid &&
          cgame?.timers?.find((timer) => topTimer.wid === timer.wid)) ||
        topTimer,
    [cgame?.timers, topTimer, isRedactOld, newTimer]
  );

  const [mode, setMode] = useState(timer.mode);
  const [name, setName] = useState(timer.name);
  const [joins, setJoins] = useState(timer.joins || 1);
  const [selectedTeamw, setSelectedTeamw] = useState<number | null>(null);
  const [teams, updateTeams] = useState<GameTeam[]>(timer.teams);

  const { openAbsoluteFloatPopup } = useAbsoluteFloatPopup();
  const [newCommentText, setNewCommentText] = useState("");
  const [isWriteName, setIsWriteName] = useState(false);

  const changeName = (name: string) => {
    mapTimer((timer) => (timer.name = name));
    setName(name);
  };

  const teamNet = mylib.netFromLine(
    teams,
    mode === GameTimerMode.TimerTotal ? 1 : joins,
    (team) => team
  );
  const isTeamsTaken = !!teamNet?.length;

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
          <div className="dropdown-ancestor flex full-width flex-gap">
            {timer.isNew ? (
              <>
                <span>Название</span>
                {!isWriteName &&
                  cgame?.timerNames?.length &&
                  (!name || cgame.timerNames.includes(name)) ? (
                  <>
                    <Dropdown
                      placeholder="Выбрать название"
                      id={timer.name}
                      items={cgame.timerNames.map((name) => ({
                        id: name,
                        title: name,
                      }))}
                      onSelect={({ id }) => changeName(id)}
                    />
                    <EvaButton
                      name="edit-outline"
                      onClick={() => setIsWriteName(true)}
                    />
                  </>
                ) : (
                  <>
                    <KeyboardInput
                      preferLanguage="ru"
                      value={name}
                      onInput={(value) => changeName(value)}
                    />
                    {!cgame?.timerNames?.length || (
                      <EvaButton
                        name="menu-outline"
                        onClick={() => {
                          setIsWriteName(false);
                          changeName("");
                        }}
                      />
                    )}
                  </>
                )}
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
            <TimerModeSelector
              hideable
              mode={mode}
              onSelect={({ id }) => {
                setMode(id);
                mapTimer((timer) => (timer.mode = id));
              }}
            />
          )}
          {mode !== GameTimerMode.Messager && (
            <>
              {timer.isNew && (
                <>
                  {!timer.isStarted && (
                    <>
                      {mode === GameTimerMode.TimerApart && (
                        <TimerCompetitionsSelector
                          hideable
                          joins={joins}
                          teams={teams}
                          onSelect={({ id }) => {
                            setJoins(id);
                            mapTimer((timer) => (timer.joins = id));
                          }}
                        />
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
              <div className="flex flex-end full-width">{redactIcon}</div>
              {!teamNet?.length || (
                <div className="table-centered-wrapper team-list-table margin-big-gap-v">
                  <div className="table">
                    {teamNet.map((row, rowi) => {
                      return (
                        <div key={`rowi-${rowi}`} className="row">
                          <div className="cell flex column ellipsis">
                            {row.map((team) => {
                              return (
                                <div
                                  key={`teami-${team.wid}`}
                                  className={`flex center full-max-width ${selectedTeamw === team.wid
                                    ? "selected-team"
                                    : ""}`}
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
                                  {...propsOfClicker({
                                    onCtxMenu: (event) => {
                                      event.preventDefault();
                                      if (timer.isTeamCantMove(team)) {
                                        if (team.wid === selectedTeamw)
                                          setSelectedTeamw(null);
                                        return;
                                      }
                                      setSelectedTeamw(
                                        team.wid === selectedTeamw
                                          ? null
                                          : team.wid
                                      );
                                    }
                                  })}
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

                                  {isCanPauseForRow(team.wid) && (
                                    <div
                                      className={`control-button finish-button flex center pointer margin-gap`}
                                    >
                                      {!timer.finishes?.[team.wid] ? (
                                        <EvaButton
                                          name="pause-circle-outline"
                                          disabled={!timer.startTime(rowi)}
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
                                        <EvaButton
                                          name="rewind-right-outline"
                                          onClick={(event) => {
                                            event.stopPropagation();
                                            openAbsoluteFloatPopup(
                                              <div
                                                className="nowrap"
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
                            {(isRedactOld || timer.isNew) &&
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
                          {mode !== GameTimerMode.TimerTotal &&
                            (isRedactOld || timer.isNew) ? (
                            <div
                              className={`control-button start-button flex center margin-gap`}
                            >
                              <EvaButton
                                name="play-circle-outline"
                                onClick={() => startForRow(rowi)}
                                disabled={!!timer.starts?.[rowi]}
                                onContextMenu={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  if (
                                    !timer.starts?.[rowi] ||
                                    timer.isRowFinished(rowi, false)
                                  )
                                    return;
                                  openAbsoluteFloatPopup(
                                    <div
                                      className="nowrap"
                                      onClick={() => {
                                        if (timer.startTime(rowi))
                                          startForRow(rowi, 0);
                                      }}
                                    >
                                      Сбросить начало
                                    </div>,
                                    event.clientX,
                                    event.clientY
                                  );
                                }}
                              />
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}

          {timer.isNew || isRedactOld ? (
            <div className="flex around flex-gap margin-big-gap">
              {timer.isStarted && (
                <span
                  className="pointer error-message"
                  onClick={() => {
                    modalService
                      .confirm(
                        isTimerOnRedaction(timer.ts)
                          ? "Сбросить новые изменения таймера?"
                          : mode === GameTimerMode.TimerTotal
                            ? "Сбросить таймер?"
                            : "Сбросить все таймеры?"
                      )
                      .then((reset) => reset && resetTimers());
                  }}
                >
                  {isTimerOnRedaction(timer.ts)
                    ? "Сбросить изменения"
                    : "Сбросить таймер"}
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
              placeholder="Комментарий к таймеру"
              action="addCommentForGameTimer"
              arean="gameTimers"
              gamew={timer.game?.wid}
              listw={timer.wid}
              listwNameMask="timerw"
              comments={timer.comments}
              newCommentTextChange={(value) => setNewCommentText(value)}
              {...(timer.isNew
                ? {
                  isWaitedToSend: true,
                  importantActionOnClick: (comment) => saveComment(comment),
                  onRejectSend: (comment) => removeComment(comment),
                }
                : null)}
            />
          </div>
          {isRedactOld || timer.isNew ? (
            <div className="flex around flex-gap margin-big-gap">
              {newCommentText ? (
                <div className="error-message">Комментарий не отправлен</div>
              ) : !name ? (
                <div className="error-message">Нет названия таймера</div>
              ) : !isTeamsTaken ? (
                <div className="flex center color--3">
                  Команды ещё не сформированы
                </div>
              ) : !timer.finishes && mode !== GameTimerMode.Messager ? (
                <div className="error-message">
                  Нет остановленных секундомеров
                </div>
              ) : (
                (!isRedactOld || isCanSendOldTimerUpdates()) && (
                  <SendButton
                    title={`Опубликовать ${isRedactOld ? "изменения" : "таймер"
                      }`}
                    confirm
                    onSuccess={() => {
                      close();
                      resetTimers();
                      removeLocalTimer();
                    }}
                    onSend={() => publicateTimer(timer)}
                  />
                )
              )}
            </div>
          ) : (
            <div
              className={`flex center pointer ${timer.isInactive ? "color--3" : "error-message"
                }`}
              onClick={async () => {
                if (
                  await modalService.confirm(
                    timer.isInactive
                      ? "Восстановить таймер?"
                      : "Исключить таймер?"
                  )
                )
                  leaderExer.send({
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

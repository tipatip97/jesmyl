import { useState } from "react";
import SendButton from "../../../../../../complect/SendButton";
import useAbsoluteFloatPopup from "../../../../../../complect/absolute-popup/useAbsoluteFloatPopup";
import propsOfClicker from "../../../../../../complect/clicker/propsOfClicker";
import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import EvaButton from "../../../../../../complect/eva-icon/EvaButton";
import KeyboardInput from "../../../../../../complect/keyboard/KeyboardInput";
import modalService from "../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { leaderExer } from "../../../Leader.store";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import { GameTeamImportable } from "../teams/GameTeams.model";
import useGames from "../useGames";
import {
  GameTimerImportable,
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
  timer: GameTimerImportable;
  close: () => void;
}) {
  const { cgame, isTimerWasPublicate } = useGames();
  const use = useGameTimer(topTimer.w);
  const {
    isRedactResults,
    isNewTimer,
    startTime,
    timer,
  } = use;

  const [mode, setMode] = useState(timer?.mode ?? GameTimerMode.None);
  const [name, setName] = useState(timer?.name);
  const [joins, setJoins] = useState(timer?.joins || 1);
  const [selectedTeamw, setSelectedTeamw] = useState<number | null>(null);
  const [teams, updateTeams] = useState<GameTeamImportable[] | und>(cgame?.teams);

  const { openAbsoluteFloatPopup } = useAbsoluteFloatPopup();
  const [newCommentText, setNewCommentText] = useState("");
  const [isWriteName, setIsWriteName] = useState(false);

  if (!timer) return null;

  const changeName = (name: string) => {
    use.mapTimer((timer) => ({ ...timer, name: name }));
    setName(name);
  };

  const teamNet = teams && mylib.netFromLine(
    teams,
    mode === GameTimerMode.TimerTotal ? 1 : joins,
    (team) => team
  );
  const isTeamsTaken = !!teamNet?.length;

  const membersInGame = cgame?.teams && use.rateSortedTeams(timer, cgame.teams, true).length;

  return (
    <div className="game-timer-master full-container padding-giant-gap flex column over-hidden">
      {isNewTimer && isTimerWasPublicate(cgame?.timers, topTimer.ts) ? (
        <div className="flex center full-width full-height error-message">
          Этот таймер уже был опубликован! Создай новый.
        </div>
      ) : (
        <>
          <div className="dropdown-ancestor flex full-width flex-gap">
            {isNewTimer ? (
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
                    {cgame?.teams
                      && (cgame.teams.length === membersInGame
                        ? cgame.teams.length
                        : `${membersInGame} / ${cgame.teams.length}`)}
                  </div>
                )}
              </div>
            )}
          </div>
          {isNewTimer && !use.isTimerStarted() && (
            <TimerModeSelector
              hideable
              mode={mode}
              onSelect={({ id }) => {
                setMode(id);
                use.mapTimer((timer) => ({ ...timer, mode: id }));
              }}
            />
          )}
          {mode !== GameTimerMode.Messager && (
            <>
              {isNewTimer && (
                <>
                  {!use.isTimerStarted() && (
                    <>
                      {mode === GameTimerMode.TimerApart && (
                        <TimerCompetitionsSelector
                          hideable
                          joins={joins}
                          teams={teams}
                          onSelect={({ id }) => {
                            setJoins(id);
                            use.mapTimer((timer) => ({ ...timer, joins: id }));
                          }}
                        />
                      )}
                      {mode === GameTimerMode.TimerTotal && (
                        <div
                          className="start-total flex center background--7 color--1 pointer"
                          onClick={() => use.startTotalTimer()}
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
              <div className="flex flex-end full-width">{use.redactIcon}</div>
              {!teamNet?.length || (
                <div className="table-centered-wrapper team-list-table margin-big-gap-v">
                  <div className="table">
                    {teamNet.map((row, rowi) => {
                      return (
                        <div key={rowi} className="row">
                          <div className="cell flex column ellipsis">
                            {row.map((team) => {
                              return (
                                <div
                                  key={team.w}
                                  className={`flex center full-max-width ${selectedTeamw === team.w
                                    ? "selected-team"
                                    : ""}`}
                                  onClick={() => {
                                    if (use.isTeamCantMove(cgame, timer, team.w)) {
                                      if (team.w === selectedTeamw)
                                        setSelectedTeamw(null);
                                      return;
                                    }
                                    if (!selectedTeamw) {
                                      if (selectedTeamw === team.w)
                                        setSelectedTeamw(null);
                                      return;
                                    }
                                    const newTeams = [
                                      ...teams?.map(({ w }) => w) || [],
                                    ];
                                    const selectedi =
                                      newTeams.indexOf(selectedTeamw);
                                    const teami = newTeams.indexOf(team.w);
                                    [newTeams[selectedi], newTeams[teami]] = [
                                      newTeams[teami],
                                      newTeams[selectedi],
                                    ];
                                    updateTeams(
                                      newTeams
                                        .map((wid) => teams?.find((team) => team.w === wid))
                                        .filter((team) => team) as GameTeamImportable[]
                                    );
                                    use.updateTeamList(newTeams);
                                    setSelectedTeamw(null);
                                  }}
                                  {...propsOfClicker({
                                    onCtxMenu: (event) => {
                                      event.preventDefault();
                                      if (use.isTeamCantMove(cgame, timer, team.w)) {
                                        if (team.w === selectedTeamw)
                                          setSelectedTeamw(null);
                                        return;
                                      }
                                      setSelectedTeamw(
                                        team.w === selectedTeamw
                                          ? null
                                          : team.w
                                      );
                                    }
                                  })}
                                >
                                  <div className="flex column min-width-90 over-hidden">
                                    <div className="team-box full-max-width ellipsis">
                                      {team.name}
                                    </div>

                                    {!!timer.finishes?.[team.w] && (
                                      <GameTimerScreen
                                        className="color--3"
                                        start={startTime(timer, rowi)}
                                        pause={timer.finishes?.[team.w]}
                                      />
                                    )}
                                  </div>

                                  {use.isCanPauseForRow(team.w) && (
                                    <div
                                      className={`control-button finish-button flex center pointer margin-gap`}
                                    >
                                      {!timer.finishes?.[team.w] ? (
                                        <EvaButton
                                          name="pause-circle-outline"
                                          disabled={!startTime(timer, rowi)}
                                          onClick={(event) => {
                                            event.stopPropagation();
                                            if (
                                              !startTime(timer, rowi) ||
                                              timer.finishes?.[team.w]
                                            )
                                              return;
                                            use.pauseForRow(team.w);
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
                                                  if (startTime(timer, rowi))
                                                    use.pauseForRow(team.w, 0);
                                                }}
                                              >
                                                Сбросить результат
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
                            {(isRedactResults || isNewTimer) &&
                              !use.isRowFinished(timer, cgame?.teams || [], rowi) &&
                              !!timer.starts?.[rowi] && (
                                <div>
                                  <GameTimerScreen
                                    className="color--3"
                                    start={startTime(timer, rowi)}
                                  />
                                </div>
                              )}
                          </div>
                          {mode !== GameTimerMode.TimerTotal &&
                            (isRedactResults || isNewTimer) ? (
                            <div
                              className={`control-button start-button flex center margin-gap`}
                            >
                              <EvaButton
                                name="play-circle-outline"
                                onClick={() => use.startForRow(rowi)}
                                disabled={!!timer.starts?.[rowi]}
                                onContextMenu={(event) => {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  if (
                                    !timer.starts?.[rowi] ||
                                    use.isRowFinished(timer, cgame?.teams || [], rowi, false)
                                  )
                                    return;
                                  openAbsoluteFloatPopup(
                                    <div
                                      className="nowrap"
                                      onClick={() => {
                                        if (startTime(timer, rowi))
                                          use.startForRow(rowi, 0);
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

          {isNewTimer || isRedactResults ? (
            <div className="flex around flex-gap margin-big-gap">
              {use.isTimerStarted() && (
                <span
                  className="pointer error-message"
                  onClick={() => {
                    modalService
                      .confirm(
                        use.isTimerOnRedaction(timer.ts)
                          ? "Сбросить новые изменения таймера?"
                          : mode === GameTimerMode.TimerTotal
                            ? "Сбросить таймер?"
                            : "Сбросить все таймеры?"
                      )
                      .then((reset) => reset && use.resetTimers());
                  }}
                >
                  {use.isTimerOnRedaction(timer.ts)
                    ? "Сбросить изменения"
                    : "Сбросить таймер"}
                </span>
              )}
            </div>
          ) : (
            <div>
              {use.rateSortedTeams(timer, cgame?.teams, true).map(
                ({ team, start, finish }, bagi) =>
                  !!finish &&
                  !!start && (
                    <div key={bagi} className="flex flex-gap">
                      <div>{bagi + 1}</div>
                      <div>{team?.name}</div>
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
              gamew={cgame?.w}
              listw={timer.w}
              listwNameMask="timerw"
              comments={timer.comments}
              newCommentTextChange={(value) => setNewCommentText(value)}
              {...(isNewTimer
                ? {
                  isWaitedToSend: true,
                  importantActionOnClick: (comment) => use.saveComment(comment),
                  onRejectSend: (comment) => use.removeComment(comment.w),
                }
                : null)}
            />
          </div>
          {isRedactResults || isNewTimer ? (
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
                (!isRedactResults || use.isCanSendOldTimerUpdates()) && (
                  <SendButton
                    title={`Опубликовать ${isRedactResults ? "изменения" : "таймер"
                      }`}
                    confirm
                    onSuccess={() => {
                      close();
                      use.resetTimers();
                      use.removeLocalTimer();
                    }}
                    onSend={() => use.publicateTimer(timer)}
                  />
                )
              )}
            </div>
          ) : (
            <div
              className={`flex center pointer ${timer.isInactive ? "color--3" : "error-message"}`}
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
                      gamew: cgame?.w,
                      timerw: timer.w,
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

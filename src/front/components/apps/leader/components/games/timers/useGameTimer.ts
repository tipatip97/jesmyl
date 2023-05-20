import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SourceBased from "../../../../../../complect/SourceBased";
import mylib, { MyLib } from "../../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../../shared/store";
import { TeamGameImportable } from "../../../Leader.model";
import di, { leaderExer } from "../../../Leader.store";
import useIsRedactArea from "../../../complect/useIsRedactArea";
import leaderStorage from "../../../leaderStorage";
import { GameTeamImportable } from "../teams/GameTeams.model";
import useGames from "../useGames";
import {
  GameTimerImportable,
  GameTimerMode,
  RateSortedItem,
  StoragedGameTimerDict
} from "./GameTimer.model";

let runTimeTimers: StoragedGameTimerDict = { news: {}, redacts: {} };

const gameTimersSelector = (state: RootState) => state.leader.gameTimers;
const getBlankTimer = (): GameTimerImportable => {
  return {
    fio: '',
    mode: GameTimerMode.TimerTotal,
    name: '',
    owner: '',
    ts: Date.now() + Math.random(),
    w: 0,
  };
};

export default function useGameTimer(topTimerw?: number) {
  const dispatch = useDispatch();
  const { cgame } = useGames();
  const timersStorage = useSelector(gameTimersSelector);

  const gameWid = cgame?.w || 0;
  const newTimer = topTimerw === undefined
    ? null
    : timersStorage?.news?.[gameWid]?.[topTimerw]
    || (topTimerw === 0 ? getBlankTimer() : null);

  const gameTimer = topTimerw === undefined ? null : cgame?.timers?.find((timer) => timer.w === topTimerw) || null;
  const redactTimer = topTimerw === undefined || newTimer ? null : timersStorage?.redacts?.[gameWid]?.[gameTimer ? gameTimer.ts : topTimerw] || null;
  const timer = newTimer || redactTimer || gameTimer;

  const isNewTimer = newTimer !== null;
  const arean = isNewTimer ? "news" : "redacts";
  const timerTs = isNewTimer ? 0 : gameTimer?.ts || -1;

  const { editIcon, isRedact: isRedactResults } = useIsRedactArea(
    !isNewTimer &&
    !!gameTimer &&
    gameTimer.mode !== GameTimerMode.TimerTotal &&
    gameTimer.teams?.length !== MyLib.values(gameTimer.finishes).length,
    redactTimer !== null,
    true,
    () => ret.updateTimer(gameTimer)
  );

  useEffect(() => {
    if (gameTimer) {
      if (runTimeTimers[arean][gameWid] === undefined) runTimeTimers[arean][gameWid] = {};
      runTimeTimers[arean][gameWid][timerTs] = { ...gameTimer, ...timer, comments: gameTimer.comments };
    }
  }, [arean, cgame, gameWid, isNewTimer, timer, timerTs, gameTimer]);

  const ret = {
    newTimer,
    timer,
    isNewTimer,
    isTimerOnRedaction: (timerTs: number) => !!timersStorage?.redacts?.[gameWid]?.[timerTs],
    removeLocalTimer: () => ret.updateTimer(null),
    isTimerStarted: () => !!(timer?.start || timer?.starts?.filter((ts) => ts).length),
    redactIcon: editIcon,
    isRedactResults,
    mapTimer: (
      map: (timer: GameTimerImportable) => GameTimerImportable,
      isRejectSave?: boolean
    ) => {
      const timer = newTimer || redactTimer;
      if (timer) {
        const mappedTimer = map(timer);
        if (!isRejectSave) ret.updateTimer(mappedTimer);
      }
    },
    updateTimer: (timer: GameTimerImportable | null) => {
      if (!cgame) return;

      const runTimer = runTimeTimers[arean][gameWid]?.[timerTs];

      if (runTimer && cgame.timers?.some((timer) => timer.ts === runTimer.ts))
        delete runTimeTimers[arean][gameWid];

      const timerStore = { ...leaderStorage.get("gameTimers") };
      const area = { ...timerStore[arean] };

      area[gameWid] = { ...area[gameWid], [timerTs]: timer };
      timerStore[arean] = area;

      if (timer == null) delete area[gameWid][timerTs];
      if (area[gameWid] && Object.keys(area[gameWid]).length === 0) delete area[gameWid];
      if (Object.keys(timerStore[arean] || {}).length === 0) delete timerStore[arean];

      leaderStorage.set("gameTimers", timerStore);
      dispatch(di.updateGamesTimers(timerStore));
    },
    saveComment: (comment: string) => {
      ret.mapTimer((timer) => ({
        ...timer,
        comments: [...timer.comments || [], {
          comment,
          fio: '',
          owner: '',
          ts: SourceBased.makeNewTs(),
          w: 0,
        }],
      }));
    },
    removeComment: (commentTs: number) => {
      ret.mapTimer((timer) => ({
        ...timer,
        comments: timer.comments?.filter(({ ts }) => ts !== commentTs),
      }));
    },
    startTotalTimer: () => {
      ret.mapTimer((timer) => ({ ...timer, start: Date.now() }));
    },
    updateTeamList: (wids: number[]) => {
      ret.mapTimer((timer) => {
        return {
          ...timer,
          teamList: wids,
        };
      });
    },
    startForRow: (rowi: number, value: number = Date.now()) => {
      ret.mapTimer((timer) => {
        const starts = [...(timer.starts || [])];
        starts[rowi] = value;
        return {
          ...timer,
          starts: starts.map((ts) => ts || 0),
        };
      });
    },
    isCanPauseForRow: (teamw: number) => {
      return isRedactResults ? !gameTimer?.finishes?.[teamw] : isNewTimer;
    },
    pauseForRow: (teamw: number, value: number = Date.now()) => {
      ret.mapTimer((timer) => {
        const finishes = { ...(timer.finishes || {}) };
        finishes[teamw] = value;

        return {
          ...timer,
          finishes,
        };
      });
    },
    resetTimers: () => {
      if (isRedactResults) ret.removeLocalTimer();
      else ret.mapTimer((timer) => {
        return {
          ...timer,
          start: null,
          starts: null,
          finishes: null,
        };
      });
    },
    isCanSendOldTimerUpdates: () => {
      return (
        gameTimer &&
        timer &&
        (!mylib.isEq(timer.starts, gameTimer.starts) ||
          !mylib.isEq(timer.finishes, gameTimer.finishes) ||
          !mylib.isEq(timer.teams, gameTimer.teams))
      );
    },
    publicateTimer: (timer: GameTimerImportable) => {
      if (!cgame) return;

      if (isRedactResults) {
        const { teams, starts, finishes } = timer;
        return leaderExer.send({
          action: "updateTimerComponents",
          method: "set_all",
          args: {
            gamew: gameWid,
            timerw: timer.w,
            value: {
              finishes,
              starts,
              teams,
            }
          },
        });
      } else {
        return leaderExer.send({
          action: "addGameTimer",
          method: "push",
          args: {
            ...timer,
            gamew: gameWid,
          },
        });
      }
    },
    rateSortedTeams,
    isTeamCantMove,
    startTime,
    isRowFinished,
  };

  return ret;
}



/////////////////////////////////////////////////////////////////////////////////


const isTeamCantMove = (game: TeamGameImportable | und, timer: GameTimerImportable, topTeamw: number) => {
  if (game?.timerFields?.teams) return true;
  const rowi = rateSortedTeams(timer, game?.teams || []).find(({ team }) => team && topTeamw === team.w)?.rowi;
  return rowi != null && startTime(timer, rowi) && timer.finishes?.[topTeamw];
};

const startTime = (timer: GameTimerImportable, rowi: number) => {
  return (timer.mode === GameTimerMode.TimerTotal
    ? timer.start
    : timer.starts?.[rowi]) || 0;
};

const isRowFinished = (timer: GameTimerImportable, topTeams: GameTeamImportable[], topRowi: number, isSomeOf = true) => {
  const finishes = timer.finishes || {};

  const teams = rateSortedTeams(timer, topTeams)
    .filter(({ rowi }) => topRowi === rowi);

  return !(isSomeOf
    ? teams.some(({ team }) => team && !finishes[team.w])
    : !teams.some(({ team }) => team && finishes[team.w]))
};

const rateSortedTeams = (timer: GameTimerImportable, teams: GameTeamImportable[] = [], isFilterOnlyFinished?: boolean): RateSortedItem[] => {
  const starts = timer.starts || [];
  const finishes = timer.finishes || {};
  const start = timer.start || 0;

  let teamsNet = mylib.netFromLine(teams, timer.joins || 1,
    timer.mode === GameTimerMode.TimerTotal
      ? (team, rowi) => ({ team, start, finish: finishes[team.w], rowi })
      : (team, rowi) => ({ team, start: starts[rowi], finish: finishes[team.w], rowi })
  ).flat();

  if (isFilterOnlyFinished)
    teamsNet = teamsNet.filter(({ start, finish }) => start && finish);

  return teamsNet.sort(({ start: aStart, finish: aFinish }, { start: bStart, finish: bFinish }) => {
    return (aFinish - aStart) - (bFinish - bStart);
  });
};

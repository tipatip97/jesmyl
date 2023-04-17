import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import mylib, { MyLib } from "../../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../../shared/store";
import useIsRedactArea from "../../../complect/useIsRedactArea";
import { updateGamesTimers } from "../../../Leader.store";
import leaderStorage from "../../../leaderStorage";
import { LeaderCommentImportable } from "../../comments/LeaderComment.model";
import useGames from "../useGames";
import LeaderGameTimer from "./GameTimer";
import {
  GameTimerImportable,
  GameTimerMode,
  StoragedGameTimerDict
} from "./GameTimer.model";

let runTimeTimers: StoragedGameTimerDict = { news: {}, redacts: {} };

const gameTimersSelector = (state: RootState) => state.leader.gameTimers;

export default function useGameTimer(topTimerw?: number) {
  const dispatch = useDispatch();
  const { cgame: game } = useGames();
  const gameTimers = useSelector(gameTimersSelector);

  const topTimer = useMemo(() => {
    return (topTimerw && game?.timers?.find((timer) => timer.wid === topTimerw)) || null;
  }, [game?.timers, topTimerw]);

  const isNewTimer = !topTimer || topTimer.isNew;
  const arean = isNewTimer ? "news" : "redacts";
  const gameWid = game?.wid || 0;
  const localTimer = game && gameTimers?.[arean]?.[gameWid]?.[isNewTimer ? 0 : topTimer?.ts || -1];
  const timerTs = isNewTimer ? 0 : topTimer?.ts || -1;

  const { editIcon, isRedact } = useIsRedactArea(
    !isNewTimer &&
    !!topTimer &&
    topTimer.mode !== GameTimerMode.TimerTotal &&
    topTimer.teams.length !== MyLib.values(topTimer.finishes).length,
    !!localTimer && !isNewTimer,
    true,
    () => topTimer && ret.onRedactOld(topTimer.toDict())
  );

  useEffect(() => {
    if (topTimer) {
      const timerDict = topTimer.toDict();
      runTimeTimers[arean][gameWid][timerTs] = new LeaderGameTimer({ ...timerDict, ...localTimer, comments: topTimer.comments }, game, isNewTimer, !isNewTimer);
    }
  }, [arean, game, gameWid, isNewTimer, localTimer, timerTs, topTimer]);


  const newTimer = useMemo(() => {
    const runTimer = runTimeTimers[arean][gameWid]?.[timerTs];

    runTimeTimers[arean][gameWid] ??= {};

    if (localTimer && !game?.isTimerWasPublicate(localTimer.ts)) {
      return (runTimeTimers[arean][gameWid][timerTs] ??= new LeaderGameTimer(
        localTimer,
        game,
        true
      ));
    }

    const getNewTimer = () => {
      let timerDict: GameTimerImportable;

      if (isNewTimer) {
        timerDict = {
          w: 0,
          ts: LeaderGameTimer.makeNewTs(),
          mode: GameTimerMode.TimerApart,
          name: "",
          owner: "",
          fio: "",
        };
      } else if (localTimer) {
        timerDict = { ...localTimer, comments: topTimer.comments };
      } else timerDict = topTimer.toDict();

      return new LeaderGameTimer(timerDict, game, isNewTimer, !isNewTimer);
    };

    runTimeTimers[arean][gameWid] ??= {};

    if (
      isNewTimer &&
      runTimer &&
      game?.timers?.some((timer) => timer.ts === runTimer.ts)
    )
      return (runTimeTimers[arean][gameWid][timerTs] = getNewTimer());
    else return (runTimeTimers[arean][gameWid][timerTs] ??= getNewTimer());
  }, [arean, game, gameWid, isNewTimer, localTimer, timerTs, topTimer]);

  const ret = {
    newTimer,
    isTimerOnRedaction: (timerTs: number) => !!gameTimers?.redacts?.[gameWid]?.[timerTs],
    removeLocalTimer: () => ret.updateTimer(null),
    updateTimer: (timer: GameTimerImportable | null) => {
      if (!game) return;

      const runTimer = runTimeTimers[arean][gameWid]?.[timerTs];

      if (runTimer && game.timers?.some((timer) => timer.ts === runTimer.ts))
        delete runTimeTimers[arean][gameWid];

      const timerStore = { ...leaderStorage.get("gameTimers") };
      const area = { ...timerStore[arean] };

      area[gameWid] = { ...area[gameWid], [timerTs]: timer };
      timerStore[arean] = area;

      if (timer == null) delete area[gameWid][timerTs];
      if (area[gameWid] && Object.keys(area[gameWid]).length === 0) delete area[gameWid];
      if (Object.keys(timerStore[arean] || {}).length === 0) delete timerStore[arean];

      leaderStorage.set("gameTimers", timerStore);
      dispatch(updateGamesTimers(timerStore));
    },
    mapTimer: (
      map: (timer: LeaderGameTimer) => void,
      isRejectSave?: boolean
    ) => {
      if (newTimer) {
        map(newTimer);
        if (!isRejectSave) ret.saveTimer();
      }
    },
    saveComment: (comment: string) => {
      ret.mapTimer((timer) => timer.newComment(comment));
    },
    removeComment: (comment: LeaderCommentImportable) => {
      ret.mapTimer((timer) => timer.removeComment(comment));
    },
    saveTimer: () => {
      if (newTimer) ret.updateTimer(newTimer.toDict());
    },
    startTotalTimer: () => {
      ret.mapTimer((timer) => (timer.start = Date.now()));
    },
    updateTeamList: (wids: number[]) => {
      ret.mapTimer((timer) => {
        timer.teamList = wids;
        timer.setTeams();
      });
    },
    startForRow: (rowi: number, value: number = Date.now()) => {
      ret.mapTimer((timer) => {
        timer.starts = [...(timer.starts || [])];
        timer.starts[rowi] = value;
        timer.starts = timer.starts.map((ts) => ts || 0);
      });
    },
    isCanPauseForRow: (teamw: number) => {
      return isRedact ? !topTimer?.finishes?.[teamw] : isNewTimer;
    },
    pauseForRow: (teamw: number, value: number = Date.now()) => {
      ret.mapTimer((timer) => {
        timer.finishes = { ...(timer.finishes || {}) };
        timer.finishes[teamw] = value;
      });
    },
    resetTimers: () => {
      if (isRedact) ret.removeLocalTimer();
      else ret.mapTimer(() => newTimer.resetTimers());
    },
    isCanSendOldTimerUpdates: () => {
      const topDict = topTimer?.toDict();
      return (
        topDict &&
        localTimer &&
        (!mylib.isEq(localTimer.starts, topDict.starts) ||
          !mylib.isEq(localTimer.finishes, topDict.finishes) ||
          !mylib.isEq(localTimer.teams, topDict.teams))
      );
    },
    onRedactOld: (timer: GameTimerImportable | null) => ret.updateTimer(timer),
    redactIcon: editIcon,
    isRedactOld: isRedact,
    publicateTimer: (timer: LeaderGameTimer) => {
      if (!game) return;

      if (isRedact) {
        const { teams, starts, finishes } = timer.toDict();
        return LeaderGameTimer.updateTimerComponents(gameWid, timer.wid, {
          finishes,
          starts,
          teams,
        });
      } else {
        return LeaderGameTimer.publicateNew({
          ...timer.toDict(),
          gamew: gameWid,
        });
      }
    },
  };

  return ret;
}

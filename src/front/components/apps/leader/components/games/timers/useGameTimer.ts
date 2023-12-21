import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SourceBased from '../../../../../../complect/SourceBased';
import { RootState } from '../../../../../../shared/store';
import { TeamGameImportable } from '../../../Leader.model';
import di from '../../../Leader.store';
import leaderStorage from '../../../leaderStorage';
import { LeaderCleans } from '../../LeaderCleans';
import { GameTimerImportable, StoragedGameTimerDict } from './GameTimer.model';

let runTimeTimers: StoragedGameTimerDict = { news: {} };

const gameTimersSelector = (state: RootState) => state.leader.gameTimers;
const getBlankTimer = (): GameTimerImportable => {
  return {
    fio: '',
    name: '',
    owner: '',
    ts: Date.now() + Math.random(),
    w: 0,
  };
};

export default function useGameTimer(game?: TeamGameImportable, topTimerw?: number) {
  const dispatch = useDispatch();
  const timersStorage = useSelector(gameTimersSelector);

  const gameWid = game?.w || 0;
  const newTimer =
    topTimerw === undefined
      ? null
      : timersStorage?.news?.[gameWid]?.[topTimerw] || (topTimerw === 0 ? getBlankTimer() : null);

  const gameTimer = topTimerw === undefined ? null : game?.timers?.find(timer => timer.w === topTimerw);
  const timer = newTimer || gameTimer;

  const isNewTimer = newTimer !== null;
  const timerTs = isNewTimer ? 0 : gameTimer?.ts || -1;

  useEffect(() => {
    if (gameTimer) {
      if (runTimeTimers.news[gameWid] === undefined) runTimeTimers.news[gameWid] = {};
      runTimeTimers.news[gameWid][timerTs] = { ...gameTimer, ...timer, comments: gameTimer.comments };
    }
  }, [game, gameWid, isNewTimer, timer, timerTs, gameTimer]);

  const ret = {
    newTimer,
    gameTimer,
    timer,
    isNewTimer,
    isTimerStarted: () => !!(timer?.start || timer?.starts?.filter(ts => ts).length),
    mapTimer: (map: (timer: GameTimerImportable) => GameTimerImportable, isRejectSave?: boolean) => {
      if (newTimer) {
        const mappedTimer = map(newTimer);
        if (!isRejectSave) ret.updateTimer(mappedTimer);
      }
    },
    updateTimer: async (timer: GameTimerImportable | null) => {
      if (!game) return;

      const runTimer = runTimeTimers.news[gameWid]?.[timerTs];

      if (runTimer && game.timers?.some(timer => timer.ts === runTimer.ts)) delete runTimeTimers.news[gameWid];

      const timerStore = { ...(await leaderStorage.get('gameTimers')) };
      const area = { ...timerStore.news };

      area[gameWid] = { ...area[gameWid], [timerTs]: timer };
      timerStore.news = area;

      if (timer == null) delete area[gameWid][timerTs];
      if (area[gameWid] && Object.keys(area[gameWid]).length === 0) delete area[gameWid];
      if (Object.keys(timerStore.news || {}).length === 0) delete timerStore.news;

      leaderStorage.set('gameTimers', timerStore);
      dispatch(di.gameTimers(timerStore));
    },
    saveComment: (comment: string) => {
      ret.mapTimer(timer => ({
        ...timer,
        comments: [
          ...(timer.comments || []),
          {
            comment,
            fio: '',
            owner: '',
            ts: SourceBased.makeNewTs(),
            w: 0,
          },
        ],
      }));
    },
    startTotalTimer: () => {
      ret.mapTimer(timer => ({ ...timer, start: Date.now() }));
    },
    updateTeamList: (teams: number[] | und) => {
      if (isNewTimer) {
        ret.mapTimer(timer => ({ ...timer, teams }));
      } else if (game && timer && teams) return LeaderCleans.updateTimerTeamList(game.w, timer.w, teams);

      return Promise.resolve();
    },
    startForRow: (rowi: number, value: number = Date.now()) => {
      ret.mapTimer(timer => {
        const starts = [...(timer.starts || [])];
        starts[rowi] = value;
        return {
          ...timer,
          starts: starts.map(ts => ts || 0),
          teams: timer.teams ?? game?.timerFields?.teams ?? game?.teams?.map(timer => timer.w),
        };
      });
    },
    isCanPauseForRow: (teamw: number) => {
      return !gameTimer?.finishes?.[teamw];
    },
    pauseForRow: (teamw: number, value: number = Date.now()) => {
      ret.mapTimer(timer => {
        const finishes = { ...(timer.finishes || {}) };
        finishes[teamw] = value;

        return {
          ...timer,
          finishes,
        };
      });
    },
    resetTimers: () => {
      ret.mapTimer(timer => {
        return {
          ...timer,
          start: null,
          starts: null,
          finishes: null,
        };
      });
    },
  };

  return ret;
}

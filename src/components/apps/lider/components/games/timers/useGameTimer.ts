import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { liderStorage } from "../../../../../../shared/jstorages";
import { RootState } from "../../../../../../shared/store";
import { riseUpNumUpdatesTimers, updateGamesTimers } from "../../../Lider.store";
import { LeaderCommentImportable } from "../../comments/LeaderComment.model";
import Game from "../Game";
import LeaderGameTimer from "./GameTimer";
import { GameTimerImportable, GameTimerMode } from "./GameTimer.model";

let runTimeTimers: Record<number, LeaderGameTimer | und> = {};

export default function useGameTimer(game?: Game) {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.lider.numUpdatesTimers);
    const gameTimers = useSelector((state: RootState) => state.lider.gameTimers);

    const newTimer = useMemo(() => {
        const localTimer = game && gameTimers?.[game.wid];
        const runTimer = runTimeTimers[game?.wid || 0];

        if (localTimer && !game?.isTimerWasPublicate(localTimer.ts)) {
            return runTimeTimers[game?.wid || 0] ??= new LeaderGameTimer(localTimer, game, true);
        }
        const newTimer = new LeaderGameTimer({
            w: 0,
            ts: LeaderGameTimer.makeNewTs(),
            mode: GameTimerMode.TimerApart,
            name: '',
            owner: '',
            fio: ''
        },
            game,
            true
        );

        if (runTimer && game?.timers?.some((timer) => timer.ts === runTimer.ts))
            return runTimeTimers[game?.wid || 0] = newTimer;
        else return runTimeTimers[game?.wid || 0] ??= newTimer;

    }, [game, gameTimers]);

    const ret = {
        newTimer,
        removeLocalTimer: () => ret.updateTimer(null),
        updateGamesTimers: (timers: Record<number, GameTimerImportable | null>) => {
            dispatch(updateGamesTimers(timers));
        },
        updateTimer: (timer: GameTimerImportable | null) => {
            if (!game) return;
            const runTimer = runTimeTimers[game.wid];

            if (runTimer && game.timers?.some((timer) => timer.ts === runTimer.ts)) {
                delete runTimeTimers[game.wid];
            }

            const timers = { ...liderStorage.get('gameTimers') };
            timers[game.wid] = timer;
            liderStorage.set('gameTimers', timers);
            dispatch(riseUpNumUpdatesTimers());
        },
        mapTimer: (map: (timer: LeaderGameTimer) => void, isRejectSave?: boolean) => {
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
            ret.mapTimer((timer) => timer.start = Date.now());
        },
        updateTeamList: (wids: number[]) => {
            ret.mapTimer((timer) => {
                timer.teamList = wids;
                timer.setTeams();
            });
        },
        startForRow: (rowi: number, value: number = Date.now()) => {
            ret.mapTimer((timer) => {
                timer.starts = [...timer.starts || []];
                timer.starts[rowi] = value;
                timer.starts = timer.starts.map((ts) => ts || 0);
            });
        },
        pauseForRow: (teamw: number, value: number = Date.now()) => {
            ret.mapTimer((timer) => {
                timer.finishes = { ...timer.finishes || {} };
                timer.finishes[teamw] = value;
            });
        },
        resetTimers: () => {
            ret.mapTimer(() => newTimer.resetTimers());
        },
    };

    return ret;
}
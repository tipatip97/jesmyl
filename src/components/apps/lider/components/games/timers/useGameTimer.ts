import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { liderStorage } from "../../../../../../shared/jstorages";
import { RootState } from "../../../../../../shared/store";
import { riseUpNumUpdatesTimers } from "../../../Lider.store";
import { LeaderCommentImportable } from "../../comments/LeaderComment.model";
import Game from "../Game";
import { GameTimerImportable, GameTimerMode } from "../Games.model";
import GameTimer from "./GameTimer";

let runTimeTimers: Record<number, GameTimer | und> = {};

export default function useGameTimer(game?: Game) {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.lider.numUpdatesTimers);
    const newTimer = useMemo(() => {
        return runTimeTimers[game?.wid || 0] ??= new GameTimer(
            (game && liderStorage.get('gameTimers')?.[game.wid])
            ?? {
                w: 0,
                ts: 0,
                mode: GameTimerMode.Apart,
                name: '',
                owner: '',
                fio: ''
            },
            game,
            true
        )
    }, [game?.wid]);

    const ret = {
        newTimer,
        removeLocalTimer: () => ret.updateTimer(null),
        updateTimer: (timer: GameTimerImportable | null) => {
            if (!game) return;

            const timers = { ...liderStorage.getOr('gameTimers', {}) };
            timers[game.wid] = timer;
            liderStorage.set('gameTimers', timers);
            dispatch(riseUpNumUpdatesTimers());
        },
        mapTimer: (map: (timer: GameTimer) => void, isRejectSave?: boolean) => {
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
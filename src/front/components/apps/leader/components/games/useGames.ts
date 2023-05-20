import { useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { leaderExer } from "../../Leader.store";
import useLeaderNav from "../../useLeaderNav";
import useLeaderContexts from "../contexts/useContexts";
import { GameTeamExportable } from "./teams/GameTeams.model";
import { GameTimerConfigurable, GameTimerImportable } from "./timers/GameTimer.model";

const gamesSelector = (state: RootState) => state.leader.games;

export default function useGames() {
    const games = useSelector(gamesSelector);
    const ctx = useLeaderContexts();
    const { goTo, appRouteData: { gamew } } = useLeaderNav();

    const cgame = games?.teamGames?.find((game) => game.w === gamew);
    const teamGames = games?.teamGames?.filter(({ contextw }) => ctx.ccontext?.w === contextw);

    const ret = {
        cgame,
        games,
        ctx,
        teamGames,
        goToGame: (gamew: number) => goTo({ place: "game", data: { gamew } }),
        getWidable,
        isTimerWasPublicate,
        publicateTimerNameList,
        publicateGameTimerFields,
        publicateTeams,
        removeGame,
    };
    return ret;
}


////////////////////////////////////////////////////////////////////////


const removeGame = (gamew: number) => {
    return leaderExer.send({
        action: "removeTeamGame",
        method: "remove",
        args: { gamew },
    });
};

const isTimerWasPublicate = (timers: GameTimerImportable[] | und, timerTs: number) => {
    return timers?.some((timer) => timer.ts === timerTs);
}

const getWidable = (timers: { w: number }[], timerWid: number) => {
    return timers?.find((timer) => timer.w === timerWid);
}

const publicateGameTimerFields = (gamew: number, value: GameTimerConfigurable) => {
    return leaderExer.send({
        action: 'updateGameTimerFields',
        method: 'set_all',
        args: { ...value, gamew },
    });
};

const publicateTimerNameList = (gamew: number, list: string[]) => {
    return leaderExer.send({
        action: 'updateGameTimerNames',
        method: 'set',
        args: { gamew, list },
    });
};

const publicateTeams = (gamew: number, teams: GameTeamExportable[]) => {
    return leaderExer.send({
        action: 'updateGameTeamList',
        method: 'set',
        args: {
            gamew,
            list: teams
        },
    });
}

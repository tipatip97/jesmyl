import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { GamesStoreImportable } from "../../Leader.model";
import { riseUpNumUpdatesGames, updateCgamew, updateGamesStore } from "../../Leader.store";
import useLeaderNav from "../../useLeaderNav";
import LeaderContext from "../contexts/Context";
import useLeaderContexts from "../contexts/useContexts";
import Game from "./Game";
import GamesStore from "./GameStore";

let cgame: Game | und;
let localGames: GamesStore | und;
let teamGames: Game[] | und;

export default function useGames() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.leader.numUpdatesGames);
    const cgamew = useSelector((state: RootState) => state.leader.cgamew);
    const games = useSelector((state: RootState) => state.leader.games);
    const { ccontext } = useLeaderContexts();
    const { goTo } = useLeaderNav();

    if (!localGames && games) {
        const members = ccontext?.members;
        if (members) {
            localGames = new GamesStore(games, members);
        }
    }

    if (!cgame && cgamew != null) cgame = localGames?.teamGames?.find((game) => game.wid === cgamew);

    const ret = {
        cgame,
        gamesImportable: games,
        teamGames,
        games: localGames,
        goToGame: (game?: Game) => {
            if (game) {
                ret.updateCgame(game);
                goTo("game");
            }
        },
        updateCgame: (game?: Game) => {
            if (game) {
                cgame = game;
                dispatch(updateCgamew(game.wid));
                dispatch(riseUpNumUpdatesGames());
            }
        },
        updateGamesImportable: (gamesImportable: GamesStoreImportable) => dispatch(updateGamesStore(gamesImportable)),
        updateGames: (games: GamesStoreImportable, context: LeaderContext) => {
            const members = context?.members;
            if (members) {
                localGames = new GamesStore(games, members);
                if (context)
                    teamGames = localGames.teamGames?.filter(({ contextw }) => context.wid === contextw);
                ret.updateCgame(localGames.teamGames?.find((game) => game.wid === cgamew));
                dispatch(riseUpNumUpdatesGames());
            }
        },
    };
    return ret;
}
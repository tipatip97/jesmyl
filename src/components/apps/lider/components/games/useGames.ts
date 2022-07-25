import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { GamesStoreExportable } from "../../Lider.model";
import { riseUpGamesNumUpdates, updateCgamew } from "../../Lider.store";
import useLiderNav from "../../useLiderNav";
import usePeople from "../people/usePeople";
import Game from "./Game";
import GamesStore from "./GameStore";

let cgame: Game | und;
let localGames: GamesStore | und;

export default function useGames() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.lider.numGamesUpdates);
    const cgamew = useSelector((state: RootState) => state.lider.cgamew);
    const games = useSelector((state: RootState) => state.lider.games);
    const { people } = usePeople();
    const { goTo } = useLiderNav();

    if (!localGames && games && people?.humanList) localGames = new GamesStore(games, people?.humanList);
    if (!cgame && cgamew != null) cgame = localGames?.teamGames?.find((game) => game.wid === cgamew);

    const ret = {
        cgame,
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
                dispatch(riseUpGamesNumUpdates());
            }
        },
        updateGames: (games: GamesStoreExportable) => {
            if (people?.humanList) {
                localGames = new GamesStore(games, people.humanList);
                ret.updateCgame(localGames.teamGames?.find((game) => game.wid === cgamew));
                dispatch(riseUpGamesNumUpdates());
            }
        },
    };
    return ret;
}
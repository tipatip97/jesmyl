import SourceBased from "../../../../../complect/SourceBased";
import { GamesStoreExportable } from "../../Lider.model";
import Human from "../people/Human";
import Game from "./Game";

export default class GamesStore extends SourceBased<GamesStoreExportable> {
    teamGames: Game[];

    constructor(top: GamesStoreExportable, humans: Human[]) {
        super(top);
        this.teamGames = this.getBasic('teamGames').map((game) => new Game(game, humans));
    }
}
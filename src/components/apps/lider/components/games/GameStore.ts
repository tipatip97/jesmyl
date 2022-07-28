import SourceBased from "../../../../../complect/SourceBased";
import { GamesStoreImportable } from "../../Lider.model";
import Human from "../people/Human";
import Game from "./Game";

export default class GamesStore extends SourceBased<GamesStoreImportable> {
    teamGames?: Game[];

    constructor(top: GamesStoreImportable, humans: Human[]) {
        super(top);
        this.teamGames = this.getBasic('teamGames')?.map((game) => new Game(game, humans));
    }
}
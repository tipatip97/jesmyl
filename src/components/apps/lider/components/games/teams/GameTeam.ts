import SourceBased from "../../../../../../complect/SourceBased";
import Game from "../Game";
import Human from "../../people/Human";
import { GameTeamExportable, GameTeamImportable as GameTeamImportable } from "./GameTeams.model";

export default class GameTeam extends SourceBased<GameTeamImportable> {
    humans: Human[];
    game: Game | null;

    constructor(top: GameTeamImportable, humans: Human[], game: Game | null) {
        super(top);
        this.humans = this.members
            .map((id) => humans.find((human) => human.id === id))
            .filter((human) => human) as Human[];
        this.game = game;
    }

    get wid() { return this.getBasic('w'); }
    get name() { return this.getBasic('name'); }
    set name(val) { this.setExportable('name', val); }
    get upperName() { return this.name?.toUpperCase(); }
    get members() { return this.getBasic('members'); }
    get comments() { return this.getBasic('comments'); }

    toExportDict(): GameTeamExportable {
        return {
            ...this.top,
            ...this.basics,
        };
    }
}
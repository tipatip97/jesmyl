import SourceBased from "../../../../../../complect/SourceBased";
import Game from "../Game";
import Human from "../../people/Human";
import { GameTeamExportable, GameTeamImportable } from "./GameTeams.model";
import { LeaderCommentImportable } from "../../comments/LeaderComment.model";

export default class GameTeam extends SourceBased<GameTeamImportable> {
    humans: Human[];
    game: Game | null;

    constructor(top: GameTeamImportable, humans: Human[], game: Game | null) {
        super(top);
        this.humans = this.members
            .map((id) => humans.find((human) => human.wid === id))
            .filter((human) => human) as Human[];
        this.game = game;
    }

    get wid() { return this.getBasic('w'); }
    get ts() { return this.getBasic('ts'); }
    get name() { return this.getBasic('name'); }
    set name(val) { this.setExportable('name', val); }
    get upperName() { return this.name?.toUpperCase(); }
    get members() { return this.getBasic('members'); }

    get comments() { return this.getBasic('comments'); }
    set comments(val) { this.setExportable('comments', val); }

    includeNewComment(comment: string) {
        if (this.comments == null) this.comments = [];
        this.comments = [...this.comments, {
            comment,
            fio: '',
            owner: '',
            ts: this.makeNewTs(),
            w: 0,
        }];
    }

    removeComment({ ts: topTs }: LeaderCommentImportable) {
        this.comments = this.comments?.filter(({ ts }) => ts !== topTs);
    }
}
import SourceBased from "../../../../../../complect/SourceBased";
import { LeaderCommentImportable } from "../../comments/LeaderComment.model";
import Human from "../../people/Human";
import Game from "../Game";
import { GameTeamImportable } from "./GameTeams.model";

export default class GameTeam extends SourceBased<GameTeamImportable> {
    members: Human[];
    game: Game | null;

    constructor(top: GameTeamImportable, humans: Human[], game: Game | null) {
        super(top);
        this.members = this.memberIds
            .map((wid) => humans.find((human) => human.wid === wid))
            .filter((human) => human) as Human[];
        this.game = game;
    }

    get wid() { return this.getBasic('w') || this.ts; }
    get ts() { return this.getBasic('ts'); }
    get name() { return this.getBasic('name'); }
    set name(val) { this.setExportable('name', val); }
    get upperName() { return this.name?.toUpperCase(); }
    get memberIds() { return this.getBasic('members'); }

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

    get activeMembers() {
        return this.members.filter((member) => !member.isInactive);
    }

    removeComment({ ts: topTs }: LeaderCommentImportable) {
        this.comments = this.comments?.filter(({ ts }) => ts !== topTs);
    }

    toDict() {
        return {
            ...super.toDict(),
            comments: this.comments?.map(comment => comment)
        };
    }
}
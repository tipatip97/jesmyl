import { LeaderCommentImportable } from "../../comments/LeaderComment.model";
import Human from "../../people/Human";

export interface GameTeamImportable extends GameTeamExportable {
    w: number;
    ts: number;
}

export interface GameTeamExportable {
    name?: string;
    members: number[];
    comments?: LeaderCommentImportable[];
}

export interface TeamInGameLocal extends GameTeamExportable {
    humans: Human[];
}

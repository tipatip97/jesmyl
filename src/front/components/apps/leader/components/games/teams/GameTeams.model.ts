import { LeaderCommentImportable } from "../../comments/LeaderComment.model";
import { HumanImportable } from "../../people/People.model";

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
    humans: HumanImportable[];
}

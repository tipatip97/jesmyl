import { LeaderCommentImportable } from "../comments/LeaderComment.model";
import Human from "../people/Human";

export interface TeamInGameExportable {
    w: number;
    name?: string;
    members: string[];
    comments?: LeaderCommentImportable[];
}

export interface TeamInGameLocal extends TeamInGameExportable {
    humans: Human[];
}

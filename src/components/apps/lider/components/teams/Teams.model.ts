import { LeaderCommentImportable } from "../comments/LeaderComment.model";
import Human from "../people/Human";

export interface TeamInGameImportable extends TeamInGameExportable {
    w: number;
    ts: number;
}

export interface TeamInGameExportable {
    name?: string;
    members: string[];
    comments?: LeaderCommentImportable[];
}

export interface TeamInGameLocal extends TeamInGameExportable {
    humans: Human[];
}

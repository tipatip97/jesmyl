import { ExecDict } from "../../../../../complect/exer/Exer.model";

export interface LeaderCommentInitializable {
    comment: string;
    ts: number;
}

export interface LeaderCommentExportable extends LeaderCommentInitializable {
    areaw: number;
    listw: number;
}

export interface LeaderCommentImportable extends LeaderCommentInitializable {
    owner: string;
    fio: string;
    w: number;
}

export type SendingCommentsAreaName = 'gameTimers' | 'gameTeams';

export type SendingComments = Record<SendingCommentsAreaName, { [areaw: number]: SendingCommentArea }>

export interface SendingCommentArea { [linew: number]: SendingComment[] }

export interface SendingComment {
    ts: number;
    exec: ExecDict;
    comment: LeaderCommentImportable;
}

export const defaultSendingComments = {} as SendingComments;

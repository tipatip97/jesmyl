import { ExecDict } from "../../../../../complect/exer/Exer.model";

export interface LeaderCommentExportable {
    comment: string;
    areaw: number;
    listw: number;
    ts: number;
}

export interface LeaderCommentImportable {
    comment: string;
    owner: string;
    fio: string;
    w: number;
    ts: number;
}

export type SendingCommentsAreaName = 'gameTimers' | 'gameTeams';

export type SendingComments = Record<SendingCommentsAreaName, { [areaw: number]: SendingCommentArea }>

export interface SendingCommentArea { [linew: number]: SendingComment[] }

export interface SendingComment {
    ts: number;
    exec: ExecDict;
    comment: LeaderCommentImportable;
}

export const defaultSendingComments: SendingComments = { gameTeams: {}, gameTimers: {} };

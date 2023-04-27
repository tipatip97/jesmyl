import { ClientExecutionDict } from "../../../../../complect/exer/Exer.model";

export interface LeaderCommentInitializable {
    comment: string;
    ts: number;
}

export interface LeaderCommentExportable extends LeaderCommentInitializable {
    gamew: number;
    listw: number;
}

export interface LeaderCommentImportable extends LeaderCommentInitializable {
    owner: string;
    fio: string;
    w: number;
}

export type SendingCommentsAreaName = 'gameTimers' | 'gameTeams';

export type SendingComments = Record<SendingCommentsAreaName, { [gamew: number]: SendingCommentArea }>

export interface SendingCommentArea { [linew: number]: SendingComment[] }

export interface SendingComment {
    ts: number;
    exec: ClientExecutionDict;
    comment: LeaderCommentImportable;
}

export const defaultSendingComments = {} as SendingComments;

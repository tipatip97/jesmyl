
export interface TeamInGameCommentSend {
    wid: number;
    comment: string;
    teamw: number;
    gamew: number;
}

export interface TeamInGameCommentExportable {
    comment: string;
    owner: string;
    fio: string;
    w: number;
}
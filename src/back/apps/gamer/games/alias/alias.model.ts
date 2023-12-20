import { GamerRoomMemberLogin } from "../../gamer.model";

export interface AliasGameTeam {
    title: string,
    members: GamerRoomMemberLogin[],
    messages: string[],
    score: number,
    rounds: number,
}


export enum GamerAliasRoomStatePhase {
    Initial,
    Wait,
    Speech,
    Results,
}

export interface AliasWordsPack {
    title: string,
    words: Record<string, number> | number,
    variants?: number[],
}


export interface StartAliasRoundState {
    teams: AliasGameTeam[],
    roundTime: number,
    dream: number,
    dicts: number[],
}

export interface GamerAliasRoomState extends StartAliasRoundState {
    phase: GamerAliasRoomStatePhase,
    speaks: number[],
    speakeri: number,
    wordsi: number,
    startTs: number,
    lens: number[] | und,
    token: string,
    cor: number[],
    inc: number[],
    fix: number[],
    invert: Record<number, string[]>,
}

export interface StartAliasRoundProps extends StartAliasRoundState {
    isResortWords: boolean,
}

export interface AliasWordInfo {
    word: string,
    weight: number,
    packi: number,
    wordi: number,
    plus: number,
    minus: number,
}

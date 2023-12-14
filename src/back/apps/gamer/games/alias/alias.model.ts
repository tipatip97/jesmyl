import { GamerRoomMemberLogin } from "../../gamer.model";

export interface AliasGameTeam {
    title: string,
    members: GamerRoomMemberLogin[],
    messages: string[],
    score: number,
    rounds: number,
}

export type AliasWordPackNid = number; // (\d+).(\d) => (packi, leveli)
export type AliasWordNid = number; // (\d+).(\d)(\d+) => (packi, leveli, wordi)

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


export interface GamerAliasRoomState {
    phase?: GamerAliasRoomStatePhase,
    teams: AliasGameTeam[],
    roundTime: number,
    speaks: number[],
    speakeri?: number,
    startTs?: number,
    words: AliasWordNid[],
    dream: number,
    dicts: number[],
    cor: AliasWordNid[],
    inc: AliasWordNid[],
    fix: AliasWordNid[],
    invert?: Record<AliasWordNid, string[]>,
}

export interface AliasWordInfo {
    word: string,
    weight: number,
    packi: number,
    nid: AliasWordNid,
    max: number,
    plus: number,
    minus: number,
}

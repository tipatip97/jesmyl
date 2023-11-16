import { GamerRoomMemberLogin } from "../gamer.model";


export interface AliasGameTeam {
    title: string,
    members: GamerRoomMemberLogin[],
    messages: string[],
    cor?: AliasWordNid[] | nil,
    inc?: AliasWordNid[] | nil,
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
    words: (string[] | null)[],
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
}

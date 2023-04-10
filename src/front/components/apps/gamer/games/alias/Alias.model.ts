import { GamerRoomMemberLogin } from "../../Gamer.model";

export interface AliasGameTeam {
    title?: string,
    members: GamerRoomMemberLogin[],
    messages: string[],
    cor?: AliasWordNid[] | nil,
    inc?: AliasWordNid[] | nil,
    score: number,
}

export type AliasMemberTid = number;
export type AliasWordPackNid = number; // (\d+).(\d) => (packi, leveli)
export type AliasWordNid = number; // (\d+).(\d)(\d+) => (packi, leveli, wordi)

export enum GamerAliasRoomStatePhase {
    Initial,
    Wait,
    Speech,
    Results,
}

export interface GamerAliasRoomState {
    phase?: GamerAliasRoomStatePhase,
    teams: AliasGameTeam[],
    roundTime: number,
    speakers: AliasMemberTid[],
    speakeri?: number,
    startTs?: number,
    words: AliasWordNid[],
}

export interface AliasWordsPack {
    title: string,
    words: (string[] | null)[],
}

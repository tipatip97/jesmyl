import { GamerRoomMemberLogin } from "../../Gamer.model";

export interface AliasGameTeam {
    title?: string,
    members: GamerRoomMemberLogin[],
    messages: string[],
}

export type AliasMemberTid = number;
export type AliasWordPackNid = number; // (\d+).(\d) => (packi, leveli)
export type AliasWordNid = number; // (\d+).(\d)(\d+) => (packi, leveli, wordi)

export interface GamerAliasRoomState {
    teams: AliasGameTeam[],
    roundTime: number,
    queue: AliasMemberTid[],
    speaker?: number,
    speechTime?: number,
    stack: AliasWordNid[],
}

export interface AliasWordsPack {
    title: string,
    words: (string[] | null)[],
}

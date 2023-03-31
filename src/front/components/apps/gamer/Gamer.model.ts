import { AliasWordsPack } from "./games/alias/Alias.model";
import { OfflineSpyGame } from "./games/spy/offline-room/SpyOfflineRoom.model";

export interface GamerState extends GamerStoraged {
}

export interface GamerStorage extends GamerStoraged {
}

export interface GamerStoraged {
    rooms?: GamerRoom[],
    roomw: number | nil,
    passport?: GamerPassport,
    offlineRooms?: GamerRoom[],
    currentOfflineGameName?: GamerGameName,
    offlineSpyGame?: OfflineSpyGame,

    // spy
    locations?: string[],

    // alias
    aliasWords: AliasWordsPack[],
}

export interface GamerPassport {
    fio: string,
    login: string,
}

const gameNames = ['spy', 'alias'] as const;
export type GamerGameName = typeof gameNames[number];

export type GamerRoomMemberLogin = string;

export interface GamerRoom {
    w: number,
    name: string,
    members: GamerRoomMember[],
    currentGame?: GamerGameName,
    games?: Partial<Record<GamerGameName, unknown>>,
}

export interface GamerRoomMember {
    login: string,
    name: string,
    status: GamerRoomMemberStatus,
    isInactive: boolean,
}

export enum GamerRoomMemberStatus {
    Owner = 'owner',
    Admin = 'admin',
    Member = 'member',
    Requester = 'requester',
}

export interface GamerNavData { }

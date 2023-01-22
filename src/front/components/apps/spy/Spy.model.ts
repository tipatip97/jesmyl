
export interface SpyState extends SpyStoraged {
}

export interface SpyStorage extends SpyStoraged {
}

export interface SpyStoraged {
    locations?: string[];
    rooms?: SpyRoom[];
    roomw: number | nil,
    passport?: SpyPassport,
    offlineRooms?: SpyRoom[],
    offlineGame?: OfflineGame,
}

export interface SpyPassport {
    fio: string,
    login: string,
}

export interface OfflineGame {
    location: string,
    iterations: number,
    reshareData: OfflineGameShare,
}

export type OfflineGameShare = [
    string, // location,
    number, // spiesCount,
    number, // iterations,
    string, // memberStrList
];

export interface SpyRoom {
    w: number;
    name: string;
    members: SpyRoomMember[];
    locations?: string[];
    spiesCount?: number;
    iterations: number;
    roles?: Record<string, string> | null;
    finisher?: SpyRoomMember | nil;
    retired?: string[] | nil;
}

export interface SpyRoomMember {
    login: string;
    name: string;
    status: SpyRoomMemberStatus;
    isInactive: boolean;
}

export enum SpyRoomMemberStatus {
    Owner = 'owner',
    Admin = 'admin',
    Member = 'member',
    Requester = 'requester',
}

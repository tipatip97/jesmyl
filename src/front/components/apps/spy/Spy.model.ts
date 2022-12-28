
export interface SpyState extends SpyStoraged {
}

export interface SpyStorage extends SpyStoraged {
    lastUpdate: number;
}

export interface SpyStoraged {
    cache?: SpyCache;
    roomw: number | nil;
}

export interface SpyRoom {
    w: number;
    name: string;
    members: SpyRoomMember[];
    locations?: string[];
    spiesCount?: number;
    iterations: number;
    roles?: Record<string, string>;
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

export interface SpyCache {
    locations?: string[];
    rooms?: SpyRoom[];
}
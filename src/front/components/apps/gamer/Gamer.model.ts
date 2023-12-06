import { AliasWordsPack } from "./games/alias/Alias.model";
import { OfflineSpyGame } from "./games/spy/offline-room/SpyOfflineRoom.model";

import { GamerRoom, GamerGameName } from "../../../../back/apps/gamer/gamer.model";
export * from "../../../../back/apps/gamer/gamer.model";

export interface GamerState extends GamerStoraged {
}

export interface GamerStorage extends GamerStoraged {
}

export interface GamerStoraged {
    rooms?: GamerRoom[],
    roomw?: number | nil,
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
    nick?: string,
    login: string,
}


export interface GamerNavData {
    'spy.ofr': [string, number, number | und, string],
    passport: [string, string],
}

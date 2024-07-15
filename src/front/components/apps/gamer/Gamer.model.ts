import { GamerGameName, GamerRoom } from './Gamer.back-model';
import { OfflineSpyGame } from './games/spy/offline-room/SpyOfflineRoom.model';

import { offlineRoomShareDataKey } from './games/spy/offline-room/hooks/share-game';
export * from './Gamer.back-model';

export interface GamerStoraged {
  rooms?: GamerRoom[];
  roomw?: number | nil;
  passport?: GamerPassport | nil;
  offlineRooms?: GamerRoom[];
  currentOfflineGameName?: GamerGameName;
  offlineSpyGame?: OfflineSpyGame | nil;
}

export interface GamerPassport {
  fio: string;
  nick?: string;
  login: string;
}

export interface GamerNavData {
  [offlineRoomShareDataKey]: [string, number, number | und, string];
  passport: [string, string];
}

import { GamerRoomMember } from '../../Gamer.model';

export interface SpyRoomState {
  iterations: number;
  startMs?: number;
  roundTm?: number;
  spiesCount?: number;
  roles?: Record<string, string> | null;
  finisher?: GamerRoomMember | nil;
  retired?: string[] | nil;
  locations: string[];
}

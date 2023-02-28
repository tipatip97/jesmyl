import { GamerRoomMember } from "../../Gamer.model";


export interface SpyRoomState {
    iterations: number,
    spiesCount?: number,
    roles?: Record<string, string> | null,
    finisher?: GamerRoomMember | nil,
    retired?: string[] | nil,
    locations: string[],
}

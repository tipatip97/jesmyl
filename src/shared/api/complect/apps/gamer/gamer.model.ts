const gameNames = ['spy', 'alias'] as const;
export type GamerGameName = (typeof gameNames)[number];

export type GamerRoomMemberLogin = string;

export interface GamerRoom {
  w: number;
  name: string;
  members: GamerRoomMember[];
  currentGame?: GamerGameName;
  games?: Partial<Record<GamerGameName, unknown>>;
}

export interface GamerRoomMember {
  login: string;
  name: string;
  status: GamerRoomMemberStatus;
  isInactive: boolean;
  tgId?: number;
  tgMsgId?: number | null;
}

export enum GamerRoomMemberStatus {
  Owner = 'owner',
  Admin = 'admin',
  Member = 'member',
  Requester = 'requester',
}

import { useMemo } from 'react';
import { GamerRoom, GamerRoomMemberStatus } from '../../../Gamer.model';

export const memberStatusPriority = [
  GamerRoomMemberStatus.Owner,
  GamerRoomMemberStatus.Admin,
  GamerRoomMemberStatus.Member,
  GamerRoomMemberStatus.Requester,
];

export default function useGamerMembersCanPlay(room?: GamerRoom) {
  return useMemo(() => {
    return room?.members
      .filter((member) => member.status !== GamerRoomMemberStatus.Requester)
      .sort((a, b) => memberStatusPriority.indexOf(a.status) - memberStatusPriority.indexOf(b.status));
  }, [room]);
}

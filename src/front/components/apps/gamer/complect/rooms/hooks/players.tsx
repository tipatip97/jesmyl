import { useMemo } from 'react';
import { GamerRoom, GamerRoomMember, GamerRoomMemberStatus } from '../../../Gamer.model';
import { useGamerCurrentRoom } from '../room/hooks/current-room';

const filter = (member: GamerRoomMember) => {
  return !member.isInactive && member.status !== GamerRoomMemberStatus.Requester;
};

export const useGamerPlayersNaked = () => useGamerPlayers(useGamerCurrentRoom());

export const useGamerPlayers = (room: GamerRoom | und) => {
  return useMemo(() => room?.members.filter(filter), [room]);
};

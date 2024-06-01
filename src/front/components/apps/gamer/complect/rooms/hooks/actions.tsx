import { useCallback, useMemo } from 'react';
import { bottomPopupContentPreparer } from '../../../../../../complect/absolute-popup/bottom-popup/item-preparer';
import { IconStarStrokeRounded } from '../../../../../../complect/the-icon/icons/star';
import { GamerGameName, GamerRoomMember } from '../../../Gamer.model';
import { gamerExer } from '../../../Gamer.store';
import { useGamerCurrentRoom } from '../room/hooks/current-room';
import { useGamerUserPossibilities, useMyPossibilitiesCurrentRoom } from '../room/hooks/possibilities';

export const useGamerRoomActions = (member?: GamerRoomMember) => {
  const memberPossibilities = useGamerUserPossibilities();
  const myPossibilities = useMyPossibilitiesCurrentRoom();
  const currentRoom = useGamerCurrentRoom();
  const nameNode = useMemo(() => member && <span className="color--3">{member.name}</span>, [member]);

  const toggleAdminStatus = useCallback(
    (login: string) => {
      const isAdmin = memberPossibilities(currentRoom, login).isAdmin;

      return gamerExer.send({
        action: isAdmin ? 'riseDownToUser' : 'riseUpToAdmin',
        method: 'set',
        args: {
          roomw: currentRoom?.w,
          login,
        },
      });
    },
    [currentRoom, memberPossibilities],
  );

  const moreButtons = useCallback(
    (member: GamerRoomMember, possibilities: ReturnType<typeof memberPossibilities>) => {
      if (possibilities.isOwner) return <>Владелец комнаты</>;

      return bottomPopupContentPreparer({
        items: [
          myPossibilities.isOwner && {
            titleNode: possibilities.isAdmin ? (
              <>Упростить {nameNode} до пользователя</>
            ) : (
              <>Сделать {nameNode} админом</>
            ),
            Icon: IconStarStrokeRounded,
            onClick: () => toggleAdminStatus(member.login),
          },
        ],
      });
    },
    [myPossibilities.isOwner, nameNode, toggleAdminStatus],
  );

  return useMemo(
    () => ({
      nameNode,
      moreButtons,
      createRoom: (name: string) =>
        gamerExer.send({
          action: 'addNewRoom',
          method: 'push',
          args: { name },
        }),
      removeRoom: (roomw: number) =>
        gamerExer.send({
          action: 'removeRoom',
          method: 'remove',
          args: { roomw },
        }),
      acceptMemberToCurrentRoom: (login: string) =>
        gamerExer.send({
          action: 'acceptMemberToRoom',
          method: 'set',
          args: {
            roomw: currentRoom?.w,
            login,
          },
        }),
      banCurrentRoomMember: (login: string) =>
        gamerExer.send({
          action: 'banCurrentRoomMember',
          method: 'set',
          args: {
            roomw: currentRoom?.w,
            login,
          },
        }),
      unbanCurrentRoomMember: (login: string) =>
        gamerExer.send({
          action: 'unbanCurrentRoomMember',
          method: 'set',
          args: {
            roomw: currentRoom?.w,
            login,
          },
        }),

      setCurrentGame: (value: GamerGameName) => {
        gamerExer.send({
          action: 'setCurrentGameName',
          method: 'set',
          args: {
            value,
            roomw: currentRoom?.w,
          },
        });
      },
    }),
    [currentRoom?.w, moreButtons, nameNode],
  );
};

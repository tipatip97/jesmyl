import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { GamerRoomMember } from "../../../Gamer.model";
import { gamerExer } from "../../../Gamer.store";
import useGamerRooms from "./useGamerRooms";


export default function useEditableRooms(member?: GamerRoomMember) {
  const { currentRoom, memberPossibilities } = useGamerRooms();
  const nameNode = member && <span className="color--3">{member.name}</span>;
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  const ret = {
    nameNode,
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
    toggleAdminStatus: (login: string) => {
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
    moreButtons: (
      member: GamerRoomMember,
      possibilities: ReturnType<typeof memberPossibilities>
    ) => {
      if (possibilities.isOwner) return <>Владелец комнаты</>;
      const isIOwner = memberPossibilities(currentRoom).isOwner;

      return prepareAbsoluteBottomPopupContent({
        items: [isIOwner && {
          titleNode: possibilities.isAdmin
            ? <>Упростить {nameNode} до пользователя</>
            : <>Сделать {nameNode} админом</>,
          icon: "star-outline",
          onClick: () => ret.toggleAdminStatus(member.login),
        }]
      });
    },
  };
  return ret;
}

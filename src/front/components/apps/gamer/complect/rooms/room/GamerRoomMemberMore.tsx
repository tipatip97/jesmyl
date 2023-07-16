import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { GamerRoomMember } from "../../../Gamer.model";
import useEditableRooms from "./useEditableRooms";
import useGamerRooms from "./useGamerRooms";

export default function GamerRoomMemberMore({ member }: { member: GamerRoomMember }) {
  const {
    acceptMemberToCurrentRoom,
    banCurrentRoomMember,
    unbanCurrentRoomMember,
    moreButtons,
    nameNode,
  } = useEditableRooms(member);
  const { memberPossibilities, auth, currentRoom } = useGamerRooms();
  const possibilities = memberPossibilities(currentRoom, member.login);
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return <>{prepareAbsoluteBottomPopupContent({
    items: [
      possibilities.isRequester && {
        titleNode: <>Принять участника {nameNode}</>,
        icon: "plus",
        onClick: () => acceptMemberToCurrentRoom(member.login),
      },
      !possibilities.isOwner && possibilities.member?.login !== auth.login && {
        titleNode: <>{possibilities.isInactive ? "Разблокировать участника" : "Заблокировать участника"} {nameNode}</>,
        icon: "slash",
        onClick: () =>
          possibilities.isInactive
            ? unbanCurrentRoomMember(member.login)
            : banCurrentRoomMember(member.login),
      }]
  })}
    {moreButtons(member, possibilities)}
  </>;
}

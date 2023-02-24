import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { SpyRoomMember } from "../../../Spy.model";
import useEditableRooms from "./useEditableRooms";
import useSpyRooms from "./useSpyRooms";

export default function SpyRoomMemberMore({ member }: { member: SpyRoomMember }) {
  const {
    acceptMemberToCurrentRoom,
    banCurrentRoomMember,
    unbanCurrentRoomMember,
    moreButtons,
    nameNode,
  } = useEditableRooms(member);
  const { memberPossibilities, currentRoom } = useSpyRooms();
  const possibilities = memberPossibilities(currentRoom, member.login);
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return <>{prepareAbsoluteBottomPopupContent({
    items: [
      possibilities.isRequester && {
        title: `Принять участника ${nameNode}`,
        icon: "plus",
        onClick: () => acceptMemberToCurrentRoom(member.login),
      },
      !possibilities.isOwner && possibilities.member && {
        title: possibilities.isInactive ? "Разблокировать участника " : "Заблокировать участника ",
        icon: "slash",
        onClick: () =>
          possibilities.isInactive
            ? unbanCurrentRoomMember(member.login)
            : banCurrentRoomMember(member.login),
        rightNode: nameNode,
      }]
  })}
    {moreButtons(member, possibilities)}
  </>;
}

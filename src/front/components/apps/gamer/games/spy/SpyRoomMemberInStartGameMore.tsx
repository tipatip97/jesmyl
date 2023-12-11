import { bottomPopupContentPreparer } from "../../../../../complect/absolute-popup/useBottomPopup";
import { GamerRoomMember } from "../../Gamer.model";
import useEditableRooms from "../../complect/rooms/room/useEditableRooms";
import useGamerRooms from "../../complect/rooms/room/useGamerRooms";
import useSpyState from "./useSpyState";

export default function SpyRoomMemberInStartGameMore({
  member,
}: {
  member: GamerRoomMember;
}) {
  const { moreButtons, nameNode } = useEditableRooms(member);
  const { excludeMember } = useSpyState();
  const { memberPossibilities, currentRoom } = useGamerRooms();
  const possibilities = memberPossibilities(currentRoom, member.login);

  return <>{
    bottomPopupContentPreparer({
      items: [{
        titleNode: <>Игорк {nameNode} выбыл из игры</>,
        icon: "person-delete-outline",
        onClick: () => excludeMember(member.login),
      }]
    })}
    {moreButtons(member, possibilities)}
  </>;
}

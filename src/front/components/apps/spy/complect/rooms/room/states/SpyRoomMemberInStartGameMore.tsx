import useAbsoluteBottomPopup from "../../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { SpyRoomMember } from "../../../../Spy.model";
import useEditableRooms from "../useEditableRooms";
import useSpyRooms from "../useSpyRooms";

export default function SpyRoomMemberInStartGameMore({
  member,
}: {
  member: SpyRoomMember;
}) {
  const { excludeMember, moreButtons, nameNode } = useEditableRooms(member);
  const { memberPossibilities, currentRoom } = useSpyRooms();
  const possibilities = memberPossibilities(currentRoom, member.login);
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return <>{
    prepareAbsoluteBottomPopupContent({
      items: [{
        title: `Игорк ${nameNode} выбыл из игры`,
        icon: "person-delete-outline",
        onClick: () => excludeMember(member.login),
      }]
    })}
    {moreButtons(member, possibilities)}
  </>;
}

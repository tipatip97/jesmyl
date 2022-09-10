import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import { SpyRoomMember } from "../Spy.model";
import useEditableRooms from "./useEditableRooms";
import useRooms from "./useRooms";

export default function SpyRoomMemberInStartGameMore({
  member,
}: {
  member: SpyRoomMember;
}) {
  const { excludeMember, moreButtons, nameNode } = useEditableRooms(member);
  const { memberPossibilities, currentRoom } = useRooms();
  const possibilities = memberPossibilities(currentRoom, member.login);

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={() => excludeMember(member.login)}
      >
        <EvaIcon name="person-delete-outline" />
        <div>Игорк {nameNode} выбыл из игры</div>
        <div className="abs-action" />
      </div>
      {moreButtons(member, possibilities)}
    </>
  );
}

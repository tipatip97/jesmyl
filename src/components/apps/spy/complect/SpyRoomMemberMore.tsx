import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import { SpyRoomMember } from "../Spy.model";
import useEditableRooms from "./useEditableRooms";
import useRooms from "./useRooms";

export default function SpyRoomMemberMore({
  member,
}: {
  member: SpyRoomMember;
}) {
  const {
    acceptMemberToCurrentRoom,
    banCurrentRoomMember,
    unbanCurrentRoomMember,
    moreButtons,
    nameNode,
  } = useEditableRooms(member);
  const { memberPossibilities, currentRoom } = useRooms();
  const possibilities = memberPossibilities(currentRoom, member.login);

  return (
    <>
      {possibilities.isRequester && (
        <div
          className="abs-item pointer"
          onClick={() => acceptMemberToCurrentRoom(member.login)}
        >
          <EvaIcon name="plus" />
          <div>Принять участника {nameNode}</div>
          <div className="abs-action" />
        </div>
      )}
      {!possibilities.isOwner &&possibilities.member && (
        <div
          className="abs-item pointer"
          onClick={() =>
            possibilities.isInactive
              ? unbanCurrentRoomMember(member.login)
              : banCurrentRoomMember(member.login)
          }
        >
          <EvaIcon name="slash" />
          <div>
            {possibilities.isInactive ? "Разблокировать" : "Заблокировать"}{" "}
            участника {nameNode}
          </div>
          <div className="abs-action" />
        </div>
      )}
      {moreButtons(member, possibilities)}
    </>
  );
}

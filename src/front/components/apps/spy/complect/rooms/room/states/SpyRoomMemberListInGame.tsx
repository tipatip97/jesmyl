import useAbsoluteBottomPopup from "../../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { SpyRoomMember } from "../../../../Spy.model";
import RoomMemberFace from "../../../RoomMemberFace";
import SpyRoomMemberMore from "../SpyRoomMemberMore";

export default function SpyRoomMemberListInGame({
  members,
  amIManager,
}: {
  members?: SpyRoomMember[],
  amIManager?: boolean,
}) {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <>
      <h2>Участники</h2>
      {members?.map((member, memberi) => {
        return (
          <RoomMemberFace
            key={`m ${memberi}`}
            member={member}
            isClickable={amIManager}
            onClick={() =>
              amIManager &&
              openAbsoluteBottomPopup(
                <SpyRoomMemberMore member={member} />
              )
            }
          />
        );
      })}
    </>
  );
}

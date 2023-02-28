import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { GamerRoomMember } from "../Gamer.model";
import RoomMemberFace from "./GamerRoomMemberFace";
import GamerRoomMemberMore from "./rooms/room/GamerRoomMemberMore";

export default function GamerRoomMemberList({
  members,
  amIManager,
}: {
  members?: GamerRoomMember[],
  amIManager?: boolean,
}) {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return <>
    <h2>Участники</h2>
    {members?.map((member, memberi) => {
      return <RoomMemberFace
        key={`m ${memberi}`}
        member={member}
        isClickable={amIManager}
        onClick={() =>
          amIManager &&
          openAbsoluteBottomPopup(
            <GamerRoomMemberMore member={member} />
          )
        }
      />;
    })}
  </>;
}

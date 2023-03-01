import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import RoomMemberFace from "./GamerRoomMemberFace";
import GamerRoomMemberMore from "./rooms/room/GamerRoomMemberMore";
import useGamerRooms from "./rooms/room/useGamerRooms";

export default function GamerRoomMemberList() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { currentRoom, memberPossibilities } = useGamerRooms();
  const amIManager = memberPossibilities().isManager;

  return <>
    <h2>Участники</h2>
    {currentRoom?.members?.map((member, memberi) => {
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

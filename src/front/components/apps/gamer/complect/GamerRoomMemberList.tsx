import { useBottomPopup } from "../../../../complect/absolute-popup/useBottomPopup";
import { GamerRoomMember } from "../Gamer.model";
import RoomMemberFace from "./GamerRoomMemberFace";
import GamerRoomMemberMore from "./rooms/room/GamerRoomMemberMore";
import useGamerRooms from "./rooms/room/useGamerRooms";

export default function GamerRoomMemberList() {
  const [popupNode, , openPopup] = useBottomPopup<GamerRoomMember>((_, __, member) => <GamerRoomMemberMore member={member} />);
  const { currentRoom, memberPossibilities } = useGamerRooms();
  const amIManager = memberPossibilities().isManager;

  return <>
    {popupNode}
    <h2>Участники</h2>
    {currentRoom?.members?.map((member) => {
      return <RoomMemberFace
        key={member.login}
        member={member}
        isClickable={amIManager}
        onClick={amIManager && (() => openPopup(member))}
      />;
    })}
  </>;
}

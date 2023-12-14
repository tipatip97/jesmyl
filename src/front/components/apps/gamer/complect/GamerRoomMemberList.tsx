import { useBottomPopup } from "../../../../complect/absolute-popup/useBottomPopup";
import { GamerRoomMember } from "../Gamer.model";
import RoomMemberFace from "./GamerRoomMemberFace";
import {GamerRoomMemberMore} from "./rooms/room/GamerRoomMemberMore";
import { useGamerCurrentRoom } from "./rooms/room/hooks/current-room";
import { useMyPossibilitiesCurrentRoom } from "./rooms/room/hooks/possibilities";

export default function GamerRoomMemberList() {
  const [popupNode, , openPopup] = useBottomPopup<GamerRoomMember>((_, __, member) => <GamerRoomMemberMore member={member} />);
  const amIManager = useMyPossibilitiesCurrentRoom().isManager;
  const currentRoom = useGamerCurrentRoom();

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

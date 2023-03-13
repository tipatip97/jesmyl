import GamerRoomMemberList from "../../complect/GamerRoomMemberList";
import useGamerRooms from "../../complect/rooms/room/useGamerRooms";
import AliasRoomInitialManagerContent from "./AliasRoomInitialManagerContent";

export default function AliasRoomContent() {
    const { memberPossibilities } = useGamerRooms();
    const myPossibilities = memberPossibilities();

    return <>
        <GamerRoomMemberList />
        {myPossibilities.isManager && <AliasRoomInitialManagerContent />}
    </>;
}
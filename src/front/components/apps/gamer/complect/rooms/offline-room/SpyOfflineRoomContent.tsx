import SpyOfflineRoomReadyToStart from "../../../games/spy/offline-room/SpyOfflineRoomReadyToStart";
import SpyOfflineRoomStartedGame from "../../../games/spy/offline-room/SpyOfflineRoomStartedGame";
import useSpyOfflineRoomState from "../../../games/spy/offline-room/useSpyOfflineRoomState";

export default function SpyOfflineRoomContent() {
    const { state } = useSpyOfflineRoomState();
    return <>
        {state?.roles
            ? <SpyOfflineRoomStartedGame />
            : <SpyOfflineRoomReadyToStart />}
    </>;
}
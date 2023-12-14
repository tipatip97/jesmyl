import SpyOfflineRoomReadyToStart from "../../../games/spy/offline-room/SpyOfflineRoomReadyToStart";
import SpyOfflineRoomStartedGame from "../../../games/spy/offline-room/SpyOfflineRoomStartedGame";
import { useSpyOfflineCurrentRoomState } from "../../../games/spy/offline-room/hooks/state";

export default function SpyOfflineRoomContent() {
    return <>
        {useSpyOfflineCurrentRoomState()?.roles
            ? <SpyOfflineRoomStartedGame />
            : <SpyOfflineRoomReadyToStart />}
    </>;
}
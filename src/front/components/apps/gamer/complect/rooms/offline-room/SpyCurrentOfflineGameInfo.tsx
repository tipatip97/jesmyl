import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useSpyOfflineRoomState from "../../../games/spy/offline-room/useSpyOfflineRoomState";
import SpyShowMyRole from "../../../games/spy/SpyShowMyRole";

export default function SpyCurrentOfflineGameInfo() {
    const { offlineGame, reshareGameData } = useSpyOfflineRoomState();

    return <>
        {offlineGame && <>
            <div className="offline-game">
                <h3 className="flex center">Игра #{offlineGame.iterations}</h3>
                <div
                    className="flex center flex-gap pointer"
                    onClick={() => reshareGameData()}
                >Поделиться <EvaIcon name="qr-code" /></div>
                <SpyShowMyRole role={offlineGame.location} />
            </div>
        </>}
    </>
}

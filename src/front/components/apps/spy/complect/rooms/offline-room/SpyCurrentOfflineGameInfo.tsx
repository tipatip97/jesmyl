import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import SpyShowMyRole from "../SpyShowMyRole";
import useSpyOfflineRooms from "./useSpyOfflineRooms";

export default function SpyCurrentOfflineGameInfo() {
    const { offlineGame, reshareGameData } = useSpyOfflineRooms();

    return <>
        {offlineGame && <div className="offline-game">
            <h3 className="flex center">Игра #{offlineGame.iterations}</h3>
            <div
                className="flex center flex-gap pointer"
                onClick={() => reshareGameData()}
            >Поделиться <EvaIcon name="qr-code" /></div>
            <SpyShowMyRole role={offlineGame.location} />
        </div>}
    </>
}

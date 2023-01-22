import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import PhaseSpyContainer from "../../PhaseSpyContainer";
import SpyRoomMore from "../room/SpyRoomMore";
import SpyOfflineRoomReadyToStart from "./SpyOfflineRoomReadyToStart";
import SpyOfflineRoomStartedGame from "./SpyOfflineRoomStartedGame";
import useSpyOfflineRooms from "./useSpyOfflineRooms";

export default function SpyOfflineRoom() {
  const { currentOfflineRoom, removeOfflineGame } = useSpyOfflineRooms();
  const {openAbsoluteBottomPopup} = useAbsoluteBottomPopup();

  return (
    <PhaseSpyContainer
      topClass="spy-room"
      headTitle={`Оф.Комната ${currentOfflineRoom?.name ? ` - ${currentOfflineRoom.name}` : ""}`}
      headClass="flex between"
      head={
        <EvaIcon
          name="more-vertical"
          className="margin-gap"
          onClick={() => openAbsoluteBottomPopup(<SpyRoomMore
            onRemove={removeOfflineGame}
            room={currentOfflineRoom}
          />)}
        />
      }
      content={<>
        {currentOfflineRoom?.roles
          ? <SpyOfflineRoomStartedGame />
          : <SpyOfflineRoomReadyToStart />}
      </>}
    />
  );
}

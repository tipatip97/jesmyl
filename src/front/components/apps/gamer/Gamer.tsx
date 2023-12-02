import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import GamerMore from "./complect/GamerMore";
import PhaseGamerContainer from "./complect/PhaseGamerContainer";
import GamerOfflineRoomList from "./complect/rooms/offline-room/GamerOfflineRoomList";
import GamerRoomList from "./complect/rooms/room/GamerRoomList";

export default function Gamer() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseGamerContainer
      className="spy-locations"
      withoutBackButton
      headTitle="Комнаты"
      onMoreClick={() => openAbsoluteBottomPopup(<GamerMore />)}
      content={
        <>
          <GamerRoomList />
          <GamerOfflineRoomList />
        </>
      }
    />
  );
}

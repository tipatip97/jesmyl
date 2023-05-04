import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import "./Gamer.scss";
import GamerMore from "./complect/GamerMore";
import PhaseGamerContainer from "./complect/PhaseGamerContainer";
import GamerOfflineRoomList from "./complect/rooms/offline-room/GamerOfflineRoomList";
import GamerRoomList from "./complect/rooms/room/GamerRoomList";

export default function Gamer() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseGamerContainer
      topClass="spy-locations"
      withoutBackButton
      headTitle="Комнаты"
      headClass="flex between"
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

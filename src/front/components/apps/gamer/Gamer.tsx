import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import PhaseGamerContainer from "./complect/PhaseGamerContainer";
import GamerOfflineRoomList from "./complect/rooms/offline-room/GamerOfflineRoomList";
import GamerRoomList from "./complect/rooms/room/GamerRoomList";
import GamerMore from "./complect/GamerMore";
import "./Gamer.scss";

export default function Gamer() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseGamerContainer
      topClass="spy-locations"
      withoutBackButton
      headTitle="Комнаты"
      headClass="flex between"
      head={
        <EvaIcon
          name="more-vertical"
          className="margin-gap"
          onClick={() => openAbsoluteBottomPopup(<GamerMore />)}
        />
      }
      content={
        <>
          <GamerRoomList />
          <GamerOfflineRoomList />
        </>
      }
    />
  );
}

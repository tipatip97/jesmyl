import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import PhaseSpyContainer from "./complect/PhaseSpyContainer";
import SpyOfflineRoomList from "./complect/rooms/offline-room/SpyOfflineRoomList";
import SpyRoomList from "./complect/rooms/room/SpyRoomList";
import SpyMore from "./complect/SpyMore";
import "./Spy.scss";

export default function SpyLocations() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseSpyContainer
      topClass="spy-locations"
      withoutBackButton
      headTitle="Комнаты"
      headClass="flex between"
      head={
        <EvaIcon
          name="more-vertical"
          className="margin-gap"
          onClick={() => openAbsoluteBottomPopup(<SpyMore />)}
        />
      }
      content={
        <>
          <SpyRoomList />
          <SpyOfflineRoomList />
        </>
      }
    />
  );
}

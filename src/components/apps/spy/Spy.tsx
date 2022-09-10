import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import PhaseSpyContainer from "./complect/PhaseSpyContainer";
import SpyMore from "./complect/SpyMore";
import useRooms from "./complect/useRooms";
import "./Spy.scss";

export default function SpyLocations() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { cache, goToRoom, memberPossibilities } = useRooms();

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
          {cache?.rooms?.map((room, roomi) => {
            const possibilities = memberPossibilities(room);

            return (
              <div
                key={`roomi ${roomi}`}
                className="face-item"
                onClick={() => goToRoom(room.w)}
              >
                <EvaIcon
                  name={
                    possibilities.isRequester
                      ? "clock-outline"
                      : possibilities.isInvalid
                      ? "close"
                      : room?.roles
                      ? room.finisher
                        ? "pause-circle-outline"
                        : "play-circle-outline"
                      : "cube-outline"
                  }
                  className="face-logo"
                />
                <div className="face-title">{room.name}</div>
              </div>
            );
          })}
        </>
      }
    />
  );
}

import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import PhaseSpyContainer from "./complect/PhaseSpyContainer";
import SpyMore from "./complect/SpyMore";
import useRooms from "./complect/useRooms";
import "./Spy.scss";

export default function SpyLocations() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { cache, goToRoom, memberPossibilities, auth } = useRooms();

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
            const iconPostfix = possibilities.isOwner ? '' : '-outline';

            return (
              <div
                key={`roomi ${roomi}`}
                className="face-item"
                onClick={() => goToRoom(room.w)}
              >
                <div
                  className="face-logo">
                  <EvaIcon
                    name={
                      possibilities.isRequester
                        ? `clock${iconPostfix}`
                        : possibilities.isInactive
                          ? `person-delete${iconPostfix}`
                          : possibilities.isInvalid
                            ? `lock${iconPostfix}`
                            : auth?.login && room.retired?.includes(auth.login)
                              ? `person-remove${iconPostfix}`
                              : room?.roles
                                ? room.finisher
                                  ? `pause-circle${iconPostfix}`
                                  : `play-circle${iconPostfix}`
                                : `cube${iconPostfix}`
                    }
                  />
                </div>
                <div className="face-title">{room.name}</div>
              </div>
            );
          })}
        </>
      }
    />
  );
}

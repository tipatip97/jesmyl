import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useSpyRooms from "./useSpyRooms";

export default function SpyRoomList() {
  const { rooms, memberPossibilities, goToRoom, auth } = useSpyRooms();

  return (
    <>
      {rooms?.map((room) => {
        const possibilities = memberPossibilities(room);
        const iconPostfix = possibilities.isOwner ? '' : '-outline';

        return (
          <div
            key={`room ${room.w}`}
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
  );
}

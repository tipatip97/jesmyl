import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useGamerRooms from "./useGamerRooms";

export default function GamerRoomList() {
  const { rooms, memberPossibilities, goToRoom } = useGamerRooms();

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

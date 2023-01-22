import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import SpyCurrentOfflineGameInfo from "./SpyCurrentOfflineGameInfo";
import useSpyOfflineRooms from "./useSpyOfflineRooms";

export default function SpyOfflineRoomList() {
  const { readMyRole, offlineRooms, goToOfflineRoom, offlineGame } = useSpyOfflineRooms();

  return (
    <>
      <h2>Оффлайн комнаты</h2>
      <span className="flex flex-gap margin-gap pointer" onClick={() => readMyRole()}>
        {offlineGame ? 'Перечитать' : 'Присоединиться'}
        <EvaIcon name="qr-code" />
      </span>
      <SpyCurrentOfflineGameInfo />
      {offlineRooms?.map((room) => (
        <div
          key={`room ${room.w}`}
          className="face-item"
          onClick={() => goToOfflineRoom(room.w)}
        >
          <div className="face-logo">
            <EvaIcon name="cube" />
          </div>
          <div className="face-title">{room.name}</div>
        </div>
      ))}
    </>
  );
}

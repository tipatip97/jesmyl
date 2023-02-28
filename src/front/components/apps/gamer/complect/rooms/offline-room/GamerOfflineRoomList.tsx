import { useSelector } from "react-redux";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../../shared/store";
import { gamerOfflineRoomGames } from "../../../useGamerNav";
import useGamerOfflineRooms from "./useGamerOfflineRooms";

const currentOfflineGameNameSelector = (state: RootState) => state.gamer.currentOfflineGameName;

export default function GamerOfflineRoomList() {
  const { joinByQrCode, offlineRooms, goToOfflineRoom } = useGamerOfflineRooms();
  const currentOfflineGameName = useSelector(currentOfflineGameNameSelector);
  const currentContent = currentOfflineGameName && gamerOfflineRoomGames
    .find(({ phase: [gameName] }) => gameName === currentOfflineGameName)?.data?.currentNode;

  return (
    <>
      <h2>Оффлайн комнаты</h2>
      <span className="flex flex-gap margin-gap pointer" onClick={() => joinByQrCode()}>
        {currentContent ? 'Перечитать' : 'Присоединиться'}
        <EvaIcon name="qr-code" />
      </span>
      {currentContent}
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

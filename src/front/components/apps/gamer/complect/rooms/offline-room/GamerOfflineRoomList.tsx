import { useSelector } from "react-redux";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../../shared/store";
import { gamerOfflineRoomGames } from "../../../useGamerNav";
import useGamerOfflineRoomsActions from "./hooks/actions";
import { useGamerOfflineRooms } from "./hooks/rooms";

const currentOfflineGameNameSelector = (state: RootState) => state.gamer.currentOfflineGameName;

export default function GamerOfflineRoomList() {
  const { joinByQrCode, goToOfflineRoom } = useGamerOfflineRoomsActions();
  const offlineRooms = useGamerOfflineRooms();
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
      {offlineRooms?.map((room) => {
        const gameData = gamerOfflineRoomGames.find(({ phase: [gameName] }) => room.currentGame === gameName)?.data;

        return <div
          key={`room ${room.w}`}
          className="face-item"
          onClick={() => goToOfflineRoom(room.w)}
        >
          <div className="face-logo">
            <EvaIcon name={gameData?.icon ? gameData.icon : "cube"} />
          </div>
          <div className="face-title">
            <span className="color--7">{room.name}</span>
            {gameData?.title ? ` ● ${gameData.title}` : ''}
          </div>
        </div>
      })}
    </>
  );
}

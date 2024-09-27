import { FaceItem } from '../../../../../../complect/FaceItem';
import { IconCubeStrokeRounded } from '../../../../../../complect/the-icon/icons/cube';
import { useGamerCurrentOfflineGameName, useGamerOfflineRooms } from '../../../molecules';
import { gamerOfflineRoomGames } from '../../../useGamerNav';
import { GamerOfflineRoomListJoinByQr } from './complect/JoinByQr';
import useGamerOfflineRoomsActions from './hooks/actions';

export default function GamerOfflineRoomList() {
  const { goToOfflineRoom } = useGamerOfflineRoomsActions();
  const [offlineRooms] = useGamerOfflineRooms();
  const currentOfflineGameName = useGamerCurrentOfflineGameName();
  const currentContent =
    currentOfflineGameName &&
    gamerOfflineRoomGames.find(({ phase: [gameName] }) => gameName === currentOfflineGameName)?.data?.currentNode;

  return (
    <>
      <h2>Оффлайн комнаты</h2>
      <GamerOfflineRoomListJoinByQr title={currentContent ? 'Перечитать' : 'Присоединиться'} />
      {currentContent}
      {offlineRooms?.map(room => {
        const gameData = gamerOfflineRoomGames.find(({ phase: [gameName] }) => room.currentGame === gameName)?.data;

        return (
          <FaceItem
            key={`room ${room.w}`}
            onClick={() => goToOfflineRoom(room.w)}
          >
            <div className="face-logo">{gameData?.Icon ? <gameData.Icon /> : <IconCubeStrokeRounded />}</div>
            <div className="face-title">
              <span className="color--7">{room.name}</span>
              {gameData?.title ? ` ● ${gameData.title}` : ''}
            </div>
          </FaceItem>
        );
      })}
    </>
  );
}

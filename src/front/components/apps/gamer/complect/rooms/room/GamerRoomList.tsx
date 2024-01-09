import EvaIcon from '../../../../../../complect/eva-icon/EvaIcon';
import { gamerRoomGames } from '../../../useGamerNav';
import useGamerOfflineRoomsActions from './hooks/go-to-room';
import { useMyPossibilitiesInRoom } from './hooks/possibilities';
import { useGamerRooms } from './hooks/rooms';

export default function GamerRoomList() {
  const rooms = useGamerRooms();
  const [goToRoomNode, goToRoom] = useGamerOfflineRoomsActions();
  const memberPossibilities = useMyPossibilitiesInRoom();

  return (
    <>
      {goToRoomNode}
      {rooms?.map(room => {
        const possibilities = memberPossibilities(room);
        const iconPostfix = possibilities.isOwner ? '' : '-outline';
        const gameData = gamerRoomGames.find(({ phase: [gameName] }) => room.currentGame === gameName)?.data;

        return (
          <div
            key={room.w}
            className="face-item"
            onClick={() => goToRoom(room.w)}
          >
            <div className="face-logo">
              <EvaIcon
                name={
                  possibilities.isUnauthorized
                    ? 'question-mark-circle-outline'
                    : possibilities.isRequester
                      ? `clock${iconPostfix}`
                      : possibilities.isInactive
                        ? `person-delete${iconPostfix}`
                        : possibilities.isInvalid
                          ? `lock${iconPostfix}`
                          : gameData?.icon ?? `cube${iconPostfix}`
                }
              />
            </div>
            <div className="face-title">
              <span className="color--7">{room.name}</span>
              {gameData?.title ? ` ● ${gameData.title}` : ''}
            </div>
          </div>
        );
      })}
    </>
  );
}

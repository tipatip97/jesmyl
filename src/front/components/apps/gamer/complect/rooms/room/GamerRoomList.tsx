import { IconClock01SolidRounded, IconClock01StrokeRounded } from '../../../../../../complect/the-icon/icons/clock-01';
import { IconCubeStrokeRounded } from '../../../../../../complect/the-icon/icons/cube';
import { IconHelpCircleStrokeRounded } from '../../../../../../complect/the-icon/icons/help-circle';
import { IconSquareLock02SolidRounded, IconSquareLock02StrokeRounded } from '../../../../../../complect/the-icon/icons/square-lock-02';
import { IconUserRemove01SolidRounded, IconUserRemove01StrokeRounded } from '../../../../../../complect/the-icon/icons/user-remove-01';
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
        const isOwner = possibilities.isOwner;
        const gameData = gamerRoomGames.find(({ phase: [gameName] }) => room.currentGame === gameName)?.data;
        const Icon = possibilities.isUnauthorized
          ? IconHelpCircleStrokeRounded
          : possibilities.isRequester
            ? isOwner
              ? IconClock01SolidRounded
              : IconClock01StrokeRounded
            : possibilities.isInactive
              ? isOwner
                ? IconUserRemove01SolidRounded
                : IconUserRemove01StrokeRounded
              : possibilities.isInvalid
                ? isOwner
                  ? IconSquareLock02SolidRounded
                  : IconSquareLock02StrokeRounded
                : gameData?.Icon ?? IconCubeStrokeRounded;

        return (
          <div
            key={room.w}
            className="face-item"
            onClick={() => goToRoom(room.w)}
          >
            <div className="face-logo">
              <Icon />
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

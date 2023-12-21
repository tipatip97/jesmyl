import { useState } from 'react';
import TheButton from '../../../../../../complect/Button';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import KeyboardInput from '../../../../../../complect/keyboard/KeyboardInput';
import RoomMemberFace from '../../../complect/GamerRoomMemberFace';
import useGamerOfflineRoomsActions from '../../../complect/rooms/offline-room/hooks/actions';
import { useGamerOfflineRoom } from '../../../complect/rooms/offline-room/hooks/current-room';
import { useGamerOfflineRoomsPlayers } from '../../../complect/rooms/offline-room/hooks/players';
import { useSpyActualLocations, useSpyLocations, useSpyStrikedLocationsNaked } from '../hooks/locations';
import useSpyOfflineRoomStateUpdaters from './hooks/updaters';

export default function SpyOfflineRoomReadyToStart() {
  const [isOpenLocations, setIsOpenLocations] = useState(false);
  const [spiesCount, setSpiesCount] = useState(1);

  const currentOfflineRoom = useGamerOfflineRoom();
  const players = useGamerOfflineRoomsPlayers();

  const locations = useSpyLocations();
  const strikedLocations = useSpyStrikedLocationsNaked();
  const actualLocations = useSpyActualLocations(locations, strikedLocations);

  const { switchMemberInactive, addNewMember } = useGamerOfflineRoomsActions();

  const { startOfflineGame, switchLocation } = useSpyOfflineRoomStateUpdaters();

  return (
    <>
      <h2 className="flex">
        Участники
        <EvaButton name="plus-circle-outline" className="margin-gap-h" onClick={() => addNewMember()} />
      </h2>
      {currentOfflineRoom?.members.map((member) => {
        return (
          <RoomMemberFace
            key={`m ${member.login}`}
            member={member}
            className={member.isInactive ? 'text-strike' : ''}
            onClick={() => switchMemberInactive(member.login)}
          />
        );
      })}
      <h2 className="flex flex-gap pointer" onClick={() => setIsOpenLocations(!isOpenLocations)}>
        Локации
        <EvaButton name={isOpenLocations ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline'} />
      </h2>
      {isOpenLocations &&
        locations?.map((location) => {
          return (
            <div key={location} className="margin-gap">
              <span
                className={`pointer ${strikedLocations.indexOf(location) > -1 ? 'text-strike' : ''}`}
                onClick={() => switchLocation(location)}
              >
                {location}
              </span>
            </div>
          );
        })}
      {!actualLocations?.length ? (
        <div className="flex center error-message">Нет свободных локаций</div>
      ) : (
        <>
          <span>Количество шпионов:</span>
          <KeyboardInput
            value={'' + spiesCount}
            type="number"
            maxLength={2}
            onInput={(value) => setSpiesCount(+value)}
          />
          <div className="flex center margin-gap">
            <TheButton onClick={() => startOfflineGame(spiesCount)} disabled={!players?.length}>
              Начать игру
            </TheButton>
          </div>
        </>
      )}
    </>
  );
}

import { useState } from "react";
import TheButton from "../../../../../../complect/Button";
import EvaButton from "../../../../../../complect/eva-icon/EvaButton";
import KeyboardInput from "../../../../../../complect/keyboard/KeyboardInput";
import RoomMemberFace from "../../../complect/GamerRoomMemberFace";
import useSpyLocations from "../useSpyLocations";
import useGamerOfflineRooms from "../../../complect/rooms/offline-room/useGamerOfflineRooms";
import useSpyOfflineRoomState from "./useSpyOfflineRoomState";

export default function SpyOfflineRoomReadyToStart() {
  const {
    currentOfflineRoom,
    switchMemberInactive,
    addNewMember,
    players,
  } = useGamerOfflineRooms();
  const {
    startOfflineGame,
    strikedLocations,
    switchLocation,
  } = useSpyOfflineRoomState();
  const [isOpenLocations, setIsOpenLocations] = useState(false);
  const [spiesCount, setSpiesCount] = useState(1);
  const { locations, actualLocations } = useSpyLocations(strikedLocations);

  return (<>
    <h2 className="flex">
      Участники
      <EvaButton
        name="plus-circle-outline"
        className="margin-gap-h"
        onClick={() => addNewMember()}
      />
    </h2>
    {currentOfflineRoom?.members.map((member) => {
      return <RoomMemberFace
        key={`m ${member.login}`}
        member={member}
        className={member.isInactive ? 'text-strike' : ''}
        onClick={() => switchMemberInactive(member.login)} />
    })}
    <h2
      className="flex flex-gap pointer"
      onClick={() => setIsOpenLocations(!isOpenLocations)}
    >
      Локации
      <EvaButton
        name={
          isOpenLocations
            ? "arrow-ios-upward-outline"
            : "arrow-ios-downward-outline"
        }
      />
    </h2>
    {isOpenLocations && locations?.map((location) => {
      return <div
        key={location}
        className="margin-gap"
      >
        <span
          className={`pointer ${strikedLocations.indexOf(location) > -1 ? "text-strike" : ""}`}
          onClick={() => switchLocation(location)}
        >
          {location}
        </span>
      </div>;
    })}
    {
      !actualLocations?.length
        ? <div className="flex center error-message">Нет свободных локаций</div>
        : <>
          <span>Количество шпионов:</span>
          <KeyboardInput
            value={'' + spiesCount}
            type="number"
            maxLength={2}
            onInput={(value) => setSpiesCount(+value)}
          />
          <div className="flex center margin-gap">
            <TheButton
              onClick={() => startOfflineGame(spiesCount)}
              disabled={!players?.length}
            >Начать игру</TheButton>
          </div>
        </>
    }
  </>);
}

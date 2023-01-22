import { useState } from "react";
import TheButton from "../../../../../../complect/Button";
import EvaButton from "../../../../../../complect/eva-icon/EvaButton";
import useKeyboard from "../../../../../../complect/keyboard/useKeyboard";
import RoomMemberFace from "../../RoomMemberFace";
import useSpyLocations from "../../useSpyLocations";
import useSpyOfflineRooms from "./useSpyOfflineRooms";

export default function SpyOfflineRoomReadyToStart() {
  const {
    currentOfflineRoom,
    switchLocation,
    switchMemberInactive,
    addNewMember,
    startOfflineGame,
    strikedLocations,
    players,
  } = useSpyOfflineRooms();
  const [isOpenLocations, setIsOpenLocations] = useState(false);
  const [spiesCount, setSpiesCount] = useState(1);
  const spyCountInput = useKeyboard()('SpyOfflineRoom', {
    theValue: '' + spiesCount,
    type: 'number',
    onInput: (value) => setSpiesCount(+value),
  });
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
          {spyCountInput.node}
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

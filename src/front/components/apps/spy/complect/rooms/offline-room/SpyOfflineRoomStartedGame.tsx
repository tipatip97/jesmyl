import { useMemo } from "react";
import TheButton from "../../../../../../complect/Button";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../../../complect/modal/Modal.service";
import RoomMemberFace from "../../RoomMemberFace";
import { unsecretSpyRole } from "../../useSpyLocations";
import SpyShowMyRole from "../SpyShowMyRole";
import useSpyOfflineRooms from "./useSpyOfflineRooms";

export default function SpyOfflineRoomStartedGame() {
  const {
    currentOfflineRoom,
    excludeMember,
    spies,
    shareGameData,
    finishGame,
    players,
    passport,
  } = useSpyOfflineRooms();
  const myCleanRole = useMemo(() => {
    const myLogin = passport?.login;
    const myRole = myLogin && currentOfflineRoom?.roles?.[myLogin];
    return myRole ? unsecretSpyRole(myRole) : null
  },
    [currentOfflineRoom, passport]
  );

  return <>{
    currentOfflineRoom && <>
      <h2 className="flex center">Игра #{currentOfflineRoom.iterations}</h2>
      <div
        className="flex center flex-gap"
        onClick={() => shareGameData()} >
        <EvaIcon name="qr-code" />
        Оповестить
      </div>
      <div className="flex center margin-big-gap">
        {myCleanRole
          ? <SpyShowMyRole role={myCleanRole} />
          : 'Ты не в игре'}
      </div>

      <h2 className="flex">Участники</h2>
      {players?.map((member) => {
        return <RoomMemberFace
          key={`m ${member.login}`}
          member={member}
          className={member.isInactive ? 'text-strike' : ''}
          descriptionPlus={
            currentOfflineRoom.retired &&
              currentOfflineRoom.retired.indexOf(member.login) > -1
              ? spies && spies.indexOf(member.login) < 0
                ? "Выбыл"
                : "Шпион"
              : ""
          }
          onClick={() => {
            modalService.confirm('Участник выбыл?', 'Выбыл', 'Да', 'Отмена').then((isRetire) => {
              if (isRetire) excludeMember(member.login);
            })
          }} />
      })}
      <div className="flex center">
        <TheButton
          className="margin-gap"
          onClick={() => finishGame()}
          confirm
        >Закончить игру</TheButton>
      </div>
    </>
  }</>;
}

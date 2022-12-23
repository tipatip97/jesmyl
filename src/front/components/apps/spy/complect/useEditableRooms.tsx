import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import mylib from "../../../../complect/my-lib/MyLib";
import { SpyRoomMember } from "../Spy.model";
import { spyExer } from "../Spy.store";
import useRooms, { getSpyRandomSymbol, secretSpyRole, wordSpyParts } from "./useRooms";



export default function useEditableRooms(member?: SpyRoomMember) {
  const { currentRoom, players, cache, memberPossibilities } = useRooms();
  const nameNode = member && <span className="color--3">{member.name}</span>;
  const strikedLocations = currentRoom?.locations || [];
  const actualLocations =
    cache?.locations?.filter(
      (location) => strikedLocations.indexOf(location) < 0
    ) || [];


  const ret = {
    nameNode,
    strikedLocations,
    actualLocations,
    createRoom: (name: string) =>
      spyExer.send({
        action: 'addNewRoom',
        method: 'push',
        args: { name },
      }),
    removeRoom: (roomw: number) =>
      spyExer.send({
        action: 'removeRoom',
        method: 'remove',
        args: { roomw },
      }),
    acceptMemberToCurrentRoom: (login: string) =>
      spyExer.send({
        action: 'acceptMemberToRoom',
        method: 'set',
        args: {
          roomw: currentRoom?.w,
          login,
        },
      }),
    banCurrentRoomMember: (login: string) =>
      spyExer.send({
        action: 'banCurrentRoomMember',
        method: 'set',
        args: {
          roomw: currentRoom?.w,
          login,
        },
      }),
    unbanCurrentRoomMember: (login: string) =>
      spyExer.send({
        action: 'unbanCurrentRoomMember',
        method: 'set',
        args: {
          roomw: currentRoom?.w,
          login,
        },
      }),
    excludeMember: (login: string) =>
      spyExer.send({
        action: 'excludeMember',
        method: 'push',
        args: {
          roomw: currentRoom?.w,
          login,
        },
      }),
    toggleLocation: (value: string) => {
      const isDel = currentRoom?.locations?.some((loc) => loc === value);
      spyExer.send({
        action: isDel ? 'unstrikeLocation' : 'strikeLocation',
        method: isDel ? 'remove_each' : 'push',
        args: {
          roomw: currentRoom?.w,
          value,
        },
      });
      return isDel ? 'del' : 'add';
    },
    finishGame: () => {
      return spyExer.send({
        action: 'finishGame',
        method: 'set',
        args: {
          roomw: currentRoom?.w,
        },
      });
    },
    resetResults: () => {
      return spyExer.send({
        action: 'resetResults',
        method: 'set',
        args: {
          roomw: currentRoom?.w,
        },
      });
    },
    toggleAdminStatus: (login: string) => {
      const isAdmin = memberPossibilities(currentRoom, login).isAdmin;

      return spyExer.send({
        action: isAdmin ? 'riseDownToUser' : 'riseUpToAdmin',
        method: 'set',
        args: {
          roomw: currentRoom?.w,
          login,
        },
      });
    },
    startGame: (spiesCount: number) => {
      const roles: Record<string, string> = {};
      const location =
        actualLocations[mylib.randomOf(0, actualLocations.length - 1)].split('');
      const spies: string[] = [];

      while (players && spies.length < spiesCount) {
        const player = players[mylib.randomOf(0, players.length - 1)];
        if (spies.indexOf(player.login) < 0) spies.push(player.login);
      }

      players?.forEach((player) => {
        roles[player.login] = secretSpyRole(spies.indexOf(player.login) < 0
          ? location
          : "ШПИОН".split(""));
      });

      return spyExer.send({
        action: "startGame",
        method: "set",
        args: {
          roomw: currentRoom?.w,
          roles,
          location: secretSpyRole(location),
          spiesCount,
          name: new Array(4).fill(1).map(() => getSpyRandomSymbol(wordSpyParts))
        },
      });
    },
    moreButtons: (
      member: SpyRoomMember,
      possibilities: ReturnType<typeof memberPossibilities>
    ) => {
      if (possibilities.isOwner) return <>Владелец комнаты</>;
      const isIOwner = memberPossibilities(currentRoom).isOwner;

      return (
        <>
          {isIOwner && (
            <div
              className="abs-item pointer"
              onClick={() => ret.toggleAdminStatus(member.login)}
            >
              <EvaIcon name="star-outline" />
              <div>
                {possibilities.isAdmin ? (
                  <>Упростить {nameNode} до пользователя</>
                ) : (
                  <>Сделать {nameNode} админом</>
                )}
              </div>
              <div className="abs-action" />
            </div>
          )}
        </>
      );
    },
  };
  return ret;
}

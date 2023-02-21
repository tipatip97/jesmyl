import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import modalService from "../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { qrCodeMaster } from "../../../../../../complect/qr-code/QRCodeMaster";
import useQRMaster from "../../../../../../complect/qr-code/useQRMaster";
import { RootState } from "../../../../../../shared/store";
import useAuth from "../../../../../index/useAuth";
import { OfflineGameShare, SpyRoom, SpyRoomMember, SpyRoomMemberStatus } from "../../../Spy.model";
import { setSpyCurrentRoomw, updateSpyOfflineGame, updateSpyOfflineRooms } from "../../../Spy.store";
import spyStorage from "../../../spyStorage";
import useSpyNav from "../../../useSpyNav";
import useSpyLocations, { secretSpyRole, SPY_ROLE, unsecretSpyRole } from "../../useSpyLocations";

const offlineRoomsSelector = (state: RootState) => state.spy.offlineRooms;
const offlineGameSelector = (state: RootState) => state.spy.offlineGame;
const roomwSelector = (state: RootState) => state.spy.roomw;
const passportSelector = (state: RootState) => state.spy.passport;
const roomKey = 'offlineRoom';

export default function useSpyOfflineRooms() {
  const dispatch = useDispatch();
  const { goTo } = useSpyNav();
  const roomw = useSelector(roomwSelector);
  const offlineGame = useSelector(offlineGameSelector);
  const passportData = useSelector(passportSelector);
  const offlineRooms = useSelector(offlineRoomsSelector);
  const { auth: authData } = useAuth();
  const currentOfflineRoom = offlineRooms?.find(({ w }) => w === roomw);
  const { readQR } = useQRMaster();
  const strikedLocations = useMemo(() => {
    return (currentOfflineRoom?.locations || [])
      .map((location) => unsecretSpyRole(location))
      .filter((location) => location) as string[];
  }, [currentOfflineRoom?.locations]);
  const { actualLocations } = useSpyLocations(strikedLocations);

  const players = useMemo(
    () =>
      currentOfflineRoom?.members
        .filter((member) => !member.isInactive && member.status !== SpyRoomMemberStatus.Requester),
    [currentOfflineRoom]
  );
  const spies = useMemo(() => {
    return players?.filter((player) => unsecretSpyRole((currentOfflineRoom?.roles && currentOfflineRoom.roles[player.login]) || '') === SPY_ROLE).map(({ login }) => login);
  }, [players, currentOfflineRoom?.roles])

  const updateCurrentOfflineRoom = (updater: (room: SpyRoom) => SpyRoom | void | nil) => {
    if (!currentOfflineRoom) return;
    const newRoom = updater(currentOfflineRoom);
    if (newRoom && newRoom !== currentOfflineRoom) {
      const rooms = [...offlineRooms ?? []];
      const roomw = newRoom.w;
      const roomi = rooms.findIndex(({ w }) => w === roomw);
      if (roomi > -1) {
        rooms[roomi] = newRoom;
        dispatch(updateSpyOfflineRooms(rooms));
      }
    }
  };

  const ret = {
    passport: passportData ?? authData,
    authData,
    passportData,
    currentOfflineRoom,
    offlineRooms,
    players,
    spies,
    strikedLocations,
    offlineGame,
    goToOfflineRoom: (roomWid: number) => {
      spyStorage.set('roomw', roomWid);
      dispatch(setSpyCurrentRoomw(roomWid));
      goTo('offlineRoom');
    },
    reshareGameData: () => {
      qrCodeMaster.shareData('spy', roomKey, offlineGame?.reshareData);
    },
    shareGameData: () => {
      if (!currentOfflineRoom) return;
      const newSpies = mylib.randomSort([...spies || []]);
      const newPlayers = mylib.randomSort([...players || []])
        .filter(({ login }) => !newSpies.includes(login))
        .map(({ login }) => login);
      const myLogin = ret.passport?.login;
      const md5s = [...newSpies, ...newPlayers]
        .map(login => login === myLogin ? null : login)
        .map((login) => login === null ? '.' : mylib.md5(login))
        .join('');
      const location = currentOfflineRoom.roles?.[newPlayers[0] || ''] || '';

      qrCodeMaster.shareData('spy', roomKey, [location, newSpies.length, currentOfflineRoom.iterations, md5s]);
    },
    readMyRole: () => {
      readQR((data) => {
        if (!ret.passport?.login) {
          modalService.alert('Не авторизован');
          return;
        }
        if (data.appName === 'spy' && data.key === roomKey) {
          const [location, spiesCount, iterations, memberStrList] = data.value as OfflineGameShare || [];
          const members = memberStrList.match(/\.|.{0,32}/g);
          if (!members) return;
          const md5passport = mylib.md5(ret.passport.login);
          const memberi = members.indexOf(md5passport);
          if (memberi < 0) {
            modalService.alert('Ты не в игре');
            return;
          } else {
            const newMembers = [...members];
            newMembers[memberi] = '.';

            dispatch(updateSpyOfflineGame({
              iterations,
              location: memberi < spiesCount ? SPY_ROLE : unsecretSpyRole(location),
              reshareData: [location, spiesCount, iterations, newMembers.join('')],
            }));
          }
        }
      });
    },
    finishGame: () => {
      updateCurrentOfflineRoom((topRoom) => {
        return { ...topRoom, retired: null, roles: null }
      });
    },
    startOfflineGame: (spiesCount: number) => {
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

      updateCurrentOfflineRoom((topRoom) => ({
        ...topRoom,
        roles,
        locations: [...topRoom.locations || [], secretSpyRole(location)],
        iterations: topRoom.iterations + 1
      }));
    },
    excludeMember: (memberLogin: string) => {
      updateCurrentOfflineRoom((topRoom) => {
        return { ...topRoom, retired: [...topRoom.retired || [], memberLogin] }
      });
    },
    addNewMember: () => {
      const addMember = (member: SpyRoomMember) => {
        updateCurrentOfflineRoom((topRoom) => {
          const room = { ...topRoom, members: [...topRoom.members] };
          const memberi = room.members.findIndex(({ login }) => login === member.login);
          if (memberi < 0)
            room.members.push(member);
          else
            room.members[memberi] = member;

          return room;
        });
      };

      readQR((data) => {
        if (data.appName === 'spy' && data.key === 'passport') {
          addMember({
            login: data.value[0],
            name: data.value[1],
            isInactive: false,
            status: SpyRoomMemberStatus.Member
          });
        }
      });
    },
    switchMemberInactive: (memberLogin: string) => {
      updateCurrentOfflineRoom((topRoom) => {
        const members = [...topRoom.members];
        const memberi = members.findIndex(({ login }) => login === memberLogin);
        const member = { ...members[memberi] };
        members[memberi] = member;
        member.isInactive = !member.isInactive;
        return { ...topRoom, members };
      });
    },
    switchLocation: (location: string) => {
      updateCurrentOfflineRoom((room) => {
        const newRoom = { ...room };
        if (room.locations && room.locations?.some((loc) => unsecretSpyRole(loc) === location))
          newRoom.locations = newRoom.locations?.filter((loc) => unsecretSpyRole(loc) !== location);
        else newRoom.locations = (newRoom.locations || []).concat(secretSpyRole(location.split('')));
        return newRoom;
      });
    },
    addOfflineRoom: (name: string) => {
      const { login, fio } = ret.passport || {};

      if (!login || !fio) return;

      dispatch(updateSpyOfflineRooms(
        [
          ...offlineRooms || [],
          {
            w: Date.now(),
            name,
            iterations: 0,
            members: [{
              login,
              name: fio,
              isInactive: false,
              status: SpyRoomMemberStatus.Member,
            }],
          }
        ]));
    },
    removeOfflineGame: async (roomw: number) => {
      dispatch(updateSpyOfflineRooms((offlineRooms || []).filter(({ w }) => w !== roomw)));
    },
  };
  return ret;
}

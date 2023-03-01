import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import modalService from "../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../complect/my-lib/MyLib";
import useQRMaster from "../../../../../../complect/qr-code/useQRMaster";
import { RootState } from "../../../../../../shared/store";
import useAuth from "../../../../../index/useAuth";
import { GamerGameName, GamerRoom, GamerRoomMember, GamerRoomMemberStatus } from "../../../Gamer.model";
import { setGamerCurrentRoomw, updateGamerOfflineRooms } from "../../../Gamer.store";
import gamerStorage from "../../../gamerStorage";
import useGamerNav, { gamerOfflineRoomGames } from "../../../useGamerNav";

const offlineRoomsSelector = (state: RootState) => state.gamer.offlineRooms;
const roomwSelector = (state: RootState) => state.gamer.roomw;
const passportSelector = (state: RootState) => state.gamer.passport;

export default function useGamerOfflineRooms() {
  const dispatch = useDispatch();
  const { goTo } = useGamerNav();
  const roomw = useSelector(roomwSelector);
  const passportData = useSelector(passportSelector);
  const offlineRooms = useSelector(offlineRoomsSelector);
  const { auth: authData } = useAuth();
  const currentOfflineRoom = offlineRooms?.find(({ w }) => w === roomw);
  const { readQR } = useQRMaster();

  const players = useMemo(
    () =>
      currentOfflineRoom?.members
        .filter((member) => !member.isInactive && member.status !== GamerRoomMemberStatus.Requester),
    [currentOfflineRoom]
  );

  const updateCurrentOfflineRoom = (updater: (room: GamerRoom) => GamerRoom | void | nil) => {
    if (!currentOfflineRoom) return;
    const newRoom = updater(currentOfflineRoom);
    if (newRoom && newRoom !== currentOfflineRoom) {
      const rooms = [...offlineRooms ?? []];
      const roomw = newRoom.w;
      const roomi = rooms.findIndex(({ w }) => w === roomw);
      if (roomi > -1) {
        rooms[roomi] = newRoom;
        dispatch(updateGamerOfflineRooms(rooms));
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
    updateCurrentOfflineRoom,
    joinByQrCode: () => {
      if (!ret.passport?.login) {
        modalService.alert('Не авторизован');
        return;
      }
      readQR((data) => {
        if (!ret.passport?.login) return;
        if (data.appName === 'gamer' && mylib.isStr(data.key)) {
          const [gameName] = (data.key as string).split('.');
          const offSkelet = gamerOfflineRoomGames.find(({phase: [phase]}) => phase === gameName);
          if (offSkelet) {
            offSkelet.data?.qrDataCatcher(dispatch, ret.passport, data);
          }
        }
      });
    },
    goToOfflineRoom: (roomWid: number) => {
      gamerStorage.set('roomw', roomWid);
      dispatch(setGamerCurrentRoomw(roomWid));
      goTo('offlineRoom');
    },
    setRoomGame: (currentGame: GamerGameName) => {
      updateCurrentOfflineRoom((room) => ({
        ...room,
        currentGame
      }));
    },
    addNewMember: () => {
      const addMember = (member: GamerRoomMember) => {
        updateCurrentOfflineRoom((room) => {
          const newRoom = { ...room, members: [...room.members] };
          const memberi = newRoom.members.findIndex(({ login }) => login === member.login);
          if (memberi < 0)
            newRoom.members.push(member);
          else
            newRoom.members[memberi] = member;

          return newRoom;
        });
      };

      readQR((data) => {
        if (data.appName === 'gamer' && data.key === 'passport') {
          addMember({
            login: data.value[0],
            name: data.value[1],
            isInactive: false,
            status: GamerRoomMemberStatus.Member
          });
        }
      });
    },
    switchMemberInactive: (memberLogin: string) => {
      updateCurrentOfflineRoom((room) => {
        const members = [...room.members];
        const memberi = members.findIndex(({ login }) => login === memberLogin);
        const member = { ...members[memberi] };
        members[memberi] = member;
        member.isInactive = !member.isInactive;
        return { ...room, members };
      });
    },
    addOfflineRoom: (name: string) => {
      const { login, fio } = ret.passport || {};

      if (!login || !fio) return;

      dispatch(updateGamerOfflineRooms(
        [
          ...offlineRooms || [],
          {
            w: Date.now(),
            name,
            members: [{
              login,
              name: fio,
              isInactive: false,
              status: GamerRoomMemberStatus.Owner,
            }],
            games: {
              spy: {}
            }
          }
        ]));
    },
    removeOfflineGame: async (roomw: number) => {
      dispatch(updateGamerOfflineRooms((offlineRooms || []).filter(({ w }) => w !== roomw)));
    },
  };
  return ret;
}

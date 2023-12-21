import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import modalService from '../../../../../../../complect/modal/Modal.service';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { GamerGameName, GamerRoom, GamerRoomMember, GamerRoomMemberStatus } from '../../../../Gamer.model';
import di from '../../../../Gamer.store';
import gamerStorage from '../../../../gamerStorage';
import useGamerNav, { gamerOfflineRoomGames } from '../../../../useGamerNav';
import { useGamerOfflineRoomsContext } from './context';
import { useGamerOfflineRoom } from './current-room';
import { useGamerOfflineRoomsPassport } from './passport';
import { useGamerOfflineRooms } from './rooms';

export default function useGamerOfflineRoomsActions() {
  const dispatch = useDispatch();
  const { goTo } = useGamerNav();
  const offlineRooms = useGamerOfflineRooms();
  const { readQR } = useGamerOfflineRoomsContext();
  const passport = useGamerOfflineRoomsPassport();

  const updateCurrentOfflineRoom = useCurrentOfflineRoomUpdater();

  const joinByQrCode = useCallback(() => {
    if (!passport?.login) {
      modalService.alert('Не авторизован');
      return;
    }
    readQR((data) => {
      if (!passport?.login) return;
      if (data.appName === 'gamer' && mylib.isStr(data.key)) {
        const [gameName] = (data.key as string).split('.');
        const offSkelet = gamerOfflineRoomGames.find(({ phase: [phase] }) => phase === gameName);
        if (offSkelet) {
          offSkelet.data?.qrDataCatcher(dispatch, passport, data);
        }
      }
    });
  }, [dispatch, readQR, passport]);

  const goToOfflineRoom = useCallback(
    (roomWid: number) => {
      gamerStorage.set('roomw', roomWid);
      dispatch(di.roomw(roomWid));
      goTo('offlineRoom');
    },
    [dispatch, goTo],
  );

  const setRoomGame = useCallback(
    (currentGame: GamerGameName) => {
      updateCurrentOfflineRoom((room) => ({
        ...room,
        currentGame,
      }));
    },
    [updateCurrentOfflineRoom],
  );

  const addNewMember = useCallback(() => {
    const addMember = (member: GamerRoomMember) => {
      updateCurrentOfflineRoom((room) => {
        const newRoom = { ...room, members: [...room.members] };
        const memberi = newRoom.members.findIndex(({ login }) => login === member.login);
        if (memberi < 0) newRoom.members.push(member);
        else newRoom.members[memberi] = member;

        return newRoom;
      });
    };

    readQR((data) => {
      if (data.appName === 'gamer' && data.key === 'passport') {
        addMember({
          login: data.value[0],
          name: data.value[1],
          isInactive: false,
          status: GamerRoomMemberStatus.Member,
        });
      }
    });
  }, [readQR, updateCurrentOfflineRoom]);

  const switchMemberInactive = useCallback(
    (memberLogin: string) => {
      updateCurrentOfflineRoom((room) => {
        const members = [...room.members];
        const memberi = members.findIndex(({ login }) => login === memberLogin);
        const member = { ...members[memberi] };
        members[memberi] = member;
        member.isInactive = !member.isInactive;
        return { ...room, members };
      });
    },
    [updateCurrentOfflineRoom],
  );

  const addOfflineRoom = useCallback(
    (name: string) => {
      const { login, fio } = passport || {};

      if (!login || !fio) return;

      dispatch(
        di.offlineRooms([
          ...(offlineRooms || []),
          {
            w: Date.now(),
            name,
            members: [
              {
                login,
                name: fio,
                isInactive: false,
                status: GamerRoomMemberStatus.Owner,
              },
            ],
            games: {
              spy: {},
            },
          },
        ]),
      );
    },
    [dispatch, offlineRooms, passport],
  );

  const removeOfflineGame = useCallback(
    async (roomw: number) => {
      dispatch(di.offlineRooms((offlineRooms || []).filter(({ w }) => w !== roomw)));
    },
    [dispatch, offlineRooms],
  );

  return {
    joinByQrCode,
    goToOfflineRoom,
    setRoomGame,
    addNewMember,
    switchMemberInactive,
    addOfflineRoom,
    removeOfflineGame,
  };
}

export const useCurrentOfflineRoomUpdater = () => useOfflineRoomUpdater(useGamerOfflineRoom());

export const useOfflineRoomUpdater = (room: GamerRoom | und) => {
  const offlineRooms = useGamerOfflineRooms();
  const dispatch = useDispatch();

  return useCallback(
    (updater: (room: GamerRoom) => GamerRoom | void | nil) => {
      if (!room) return;
      const newRoom = updater(room);
      if (newRoom && newRoom !== room) {
        const rooms = [...(offlineRooms ?? [])];
        const roomw = newRoom.w;
        const roomi = rooms.findIndex(({ w }) => w === roomw);
        if (roomi > -1) {
          rooms[roomi] = newRoom;
          dispatch(di.offlineRooms(rooms));
        }
      }
    },
    [room, dispatch, offlineRooms],
  );
};

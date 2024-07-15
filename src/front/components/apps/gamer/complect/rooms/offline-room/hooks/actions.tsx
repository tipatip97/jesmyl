import { useCallback } from 'react';
import { GamerGameName, GamerRoom, GamerRoomMember, GamerRoomMemberStatus } from '../../../../Gamer.model';
import gamerStorage from '../../../../gamerStorage';
import { useGamerOfflineRooms, useGamerRoomwSetter } from '../../../../molecules';
import useGamerNav from '../../../../useGamerNav';
import { useGamerOfflineRoomsContext } from './context';
import { useGamerOfflineRoom } from './current-room';
import { useGamerOfflineRoomsPassport } from './passport';

export default function useGamerOfflineRoomsActions() {
  const { goTo } = useGamerNav();
  const { readQR } = useGamerOfflineRoomsContext();
  const passport = useGamerOfflineRoomsPassport();
  const setRoomw = useGamerRoomwSetter();
  const [offlineRooms, setOfflineRooms] = useGamerOfflineRooms();

  const updateCurrentOfflineRoom = useCurrentOfflineRoomUpdater();

  const goToOfflineRoom = useCallback(
    (roomWid: number) => {
      gamerStorage.set('roomw', roomWid);
      setRoomw(roomWid);
      goTo('offlineRoom');
    },
    [goTo, setRoomw],
  );

  const setRoomGame = useCallback(
    (currentGame: GamerGameName) => {
      updateCurrentOfflineRoom(room => ({
        ...room,
        currentGame,
      }));
    },
    [updateCurrentOfflineRoom],
  );

  const addNewMember = useCallback(() => {
    const addMember = (member: GamerRoomMember) => {
      updateCurrentOfflineRoom(room => {
        const newRoom = { ...room, members: [...room.members] };
        const memberi = newRoom.members.findIndex(({ login }) => login === member.login);
        if (memberi < 0) newRoom.members.push(member);
        else newRoom.members[memberi] = member;

        return newRoom;
      });
    };

    readQR(data => {
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
      updateCurrentOfflineRoom(room => {
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

      setOfflineRooms([
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
      ]);
    },
    [offlineRooms, passport, setOfflineRooms],
  );

  const removeOfflineGame = useCallback(
    async (roomw: number) => {
      setOfflineRooms((offlineRooms || []).filter(({ w }) => w !== roomw));
    },
    [offlineRooms, setOfflineRooms],
  );

  return {
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
  const [offlineRooms, setOfflineRooms] = useGamerOfflineRooms();

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
          setOfflineRooms(rooms);
        }
      }
    },
    [room, offlineRooms, setOfflineRooms],
  );
};

import { mylib } from 'front/utils';
import { useCallback } from 'react';
import { useGamerOfflineRoomsContext } from '../../../../complect/rooms/offline-room/hooks/context';
import { useGamerOfflineRoom } from '../../../../complect/rooms/offline-room/hooks/current-room';
import { useGamerOfflineRoomsPassport } from '../../../../complect/rooms/offline-room/hooks/passport';
import { useGamerOfflineRoomsPlayers } from '../../../../complect/rooms/offline-room/hooks/players';
import { useJoinedOfflineGame } from '../../../../molecules';
import useGamerNav from '../../../../useGamerNav';
import { useGamerOfflineCurrentRoomSpies } from './spies';
import { useSpyOfflineRoomState } from './state';

export const offlineRoomShareDataKey = 'spy.ofr';

export const useSpyOfflineRoomShareGameData = () => {
  const players = useGamerOfflineRoomsPlayers();
  const passport = useGamerOfflineRoomsPassport();
  const { nav } = useGamerNav();
  const { shareQrData } = useGamerOfflineRoomsContext();
  const currentOfflineRoom = useGamerOfflineRoom();
  const state = useSpyOfflineRoomState(currentOfflineRoom);
  const spies = useGamerOfflineCurrentRoomSpies(state, players);

  return useCallback(() => {
    if (!currentOfflineRoom) return;
    const newSpies = mylib.toRandomSorted([...(spies || [])]);
    const newPlayers = mylib
      .toRandomSorted([...(players || [])])
      .filter(({ login }) => !newSpies.includes(login))
      .map(({ login }) => login);
    const myLogin = passport?.login;
    const md5s = [...newSpies, ...newPlayers]
      .map(login => (login === myLogin ? null : login))
      .map(login => (login === null ? '.' : mylib.md5(login)))
      .join('');
    const location = state?.roles?.[newPlayers[0] || ''] || '';

    shareQrData(nav, offlineRoomShareDataKey, [location, newSpies.length, state?.iterations, md5s]);
  }, [currentOfflineRoom, nav, passport?.login, players, shareQrData, spies, state?.iterations, state?.roles]);
};

export const useSpyOfflineRoomReshareGameData = () => {
  const joinGame = useJoinedOfflineGame();
  const { nav } = useGamerNav();
  const { shareQrData } = useGamerOfflineRoomsContext();

  return useCallback(() => {
    if (joinGame) shareQrData(nav, offlineRoomShareDataKey, joinGame.reshareData);
  }, [joinGame, nav, shareQrData]);
};

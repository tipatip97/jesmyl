import { useMemo } from "react";
import { useSelector } from "react-redux";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../../shared/store";
import useGamerOfflineRooms from "../../../complect/rooms/offline-room/useGamerOfflineRooms";
import useGamerNav from "../../../useGamerNav";
import { SpyRoomState } from "../Spy.model";
import useSpyLocations, { SPY_ROLE, secretSpyRole, unsecretSpyRole } from "../useSpyLocations";

const offlineRoomShareDataKey = 'spy.ofr';
const offlineRoomsSelector = (state: RootState) => state.gamer.offlineRooms;
const roomwSelector = (state: RootState) => state.gamer.roomw;
const offlineGameSelector = (state: RootState) => state.gamer.offlineSpyGame;

export default function useSpyOfflineRoomState() {
  const { players, passport, updateCurrentOfflineRoom } = useGamerOfflineRooms();
  const offlineRooms = useSelector(offlineRoomsSelector);
  const offlineGame = useSelector(offlineGameSelector);
  const { nav } = useGamerNav();

  const roomw = useSelector(roomwSelector);
  const currentOfflineRoom = offlineRooms?.find(({ w }) => w === roomw);
  const state = currentOfflineRoom?.games?.spy as SpyRoomState | und;

  const strikedLocations = useMemo(() => {
    return (state?.locations || [])
      .map((location) => unsecretSpyRole(location))
      .filter((location) => location) as string[];
  }, [state?.locations]);

  const { actualLocations } = useSpyLocations(strikedLocations);

  const spies = useMemo(() => {
    return players?.filter((player) => unsecretSpyRole((state?.roles && state.roles[player.login]) || '') === SPY_ROLE).map(({ login }) => login);
  }, [players, state?.roles]);

  const updateCurrentState = (updater: (state: SpyRoomState) => SpyRoomState | void | nil) => {
    if (!state) return;
    const newState = updater(state);

    updateCurrentOfflineRoom((room) => ({
      ...room,
      games: {
        ...room.games,
        spy: { ...state, ...newState }
      }
    }));
  };

  const ret = {
    spies,
    state,
    strikedLocations,
    offlineGame,
    finishGame: () => {
      updateCurrentState((state) => {
        return {
          ...state,
          retired: null,
          roles: null
        };
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

      updateCurrentOfflineRoom((room) => ({
        ...room,
        games: {
          ...room.games,
          spy: {
            ...state,
            iterations: (state?.iterations || 0) + 1,
            roles,
            locations: [...state?.locations || [], secretSpyRole(location)],
          }
        }
      }));
    },
    excludeMember: (memberLogin: string) => {
      updateCurrentState((state) => {
        return { ...state, retired: [...state.retired || [], memberLogin] }
      });
    },
    switchLocation: (location: string) => {
      state &&
        updateCurrentState(() => {
          return {
            ...state,
            locations: state.locations && state.locations?.some((loc) => unsecretSpyRole(loc) === location)
              ? state.locations?.filter((loc) => unsecretSpyRole(loc) !== location)
              : (state.locations || []).concat(secretSpyRole(location.split('')))
          };
        });
    },
    shareGameData: () => {
      if (!currentOfflineRoom) return;
      const newSpies = mylib.randomSort([...spies || []]);
      const newPlayers = mylib.randomSort([...players || []])
        .filter(({ login }) => !newSpies.includes(login))
        .map(({ login }) => login);
      const myLogin = passport?.login;
      const md5s = [...newSpies, ...newPlayers]
        .map(login => login === myLogin ? null : login)
        .map((login) => login === null ? '.' : mylib.md5(login))
        .join('');
      const location = state?.roles?.[newPlayers[0] || ''] || '';

      nav.shareDataByQr(offlineRoomShareDataKey, [location, newSpies.length, state?.iterations, md5s]);
    },
    reshareGameData: () => {
      if (offlineGame)
        nav.shareDataByQr(offlineRoomShareDataKey, offlineGame.reshareData);
    },
  };
  return ret;
}
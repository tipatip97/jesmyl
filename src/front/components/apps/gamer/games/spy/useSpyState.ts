import { useMemo } from "react";
import mylib from "../../../../../complect/my-lib/MyLib";
import useGamerRooms from "../../complect/rooms/room/useGamerRooms";
import { gamerExer } from "../../Gamer.store";
import { SpyRoomState } from "./Spy.model";
import useSpyLocations, { getSpyRandomSymbol, secretSpyRole, SPY_ROLE, unsecretSpyRole, wordSpyParts } from "./useSpyLocations";

export default function useSpyState() {
    const { players, currentRoom, auth, memberPossibilities } = useGamerRooms();
    const state = currentRoom?.games?.spy as SpyRoomState | und;

    const strikedLocations = state?.locations || [];
    const { actualLocations, locations } = useSpyLocations(strikedLocations);
    const cleanLocations = useMemo(() =>
        state?.locations?.map(location => [unsecretSpyRole(location), location]),
        [state?.locations]);

    const ret = {
        currentRoom,
        state,
        auth,
        players,
        memberPossibilities,
        strikedLocations,
        actualLocations,
        cleanLocations,
        locations,
        spies: useMemo(() => {
            return players?.filter((player) => unsecretSpyRole((state?.roles && state.roles[player.login]) || '') === SPY_ROLE).map(({ login }) => login);
        }, [players, state]),
        currentLocation: useMemo(() => {
            return players?.map((player) => unsecretSpyRole((state?.roles?.[player.login]) || '')).find(loc => loc);
        }, [players, state]),
        getMyRoleName: () => {
            return state?.roles && auth.login && unsecretSpyRole(state.roles[auth.login]);
        },
        finishGame: () => {
            return gamerExer.send({
                action: 'finishSpyGame',
                method: 'set',
                args: {
                    roomw: currentRoom?.w,
                },
            });
        },
        resetResults: () => {
            return gamerExer.send({
                action: 'resetSpyResults',
                method: 'set',
                args: {
                    roomw: currentRoom?.w,
                },
            });
        },
        toggleLocation: (secretLocation: string) => {
            const cleanLocation = unsecretSpyRole(secretLocation);

            if (cleanLocations?.some(([loc]) => loc === cleanLocation)) {
                gamerExer.send({
                    action: 'unstrikeSpyLocation',
                    method: 'remove_each',
                    args: {
                        roomw: currentRoom?.w,
                        value: secretLocation,
                    },
                });
                return 'del';
            } else {
                gamerExer.send({
                    action: 'strikeSpyLocation',
                    method: 'push',
                    args: {
                        roomw: currentRoom?.w,
                        value: secretSpyRole(cleanLocation.split('')),
                    },
                });
                return 'add';
            }
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

            return gamerExer.send({
                action: "startSpyGame",
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
        excludeMember: (login: string) =>
          gamerExer.send({
            action: 'excludeSpyMember',
            method: 'push',
            args: {
              roomw: currentRoom?.w,
              login,
            },
          }),
    };
    return ret;
}
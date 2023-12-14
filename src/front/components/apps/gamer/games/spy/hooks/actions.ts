import { useCallback } from "react";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { gamerExer } from "../../../Gamer.store";
import { useGamerPlayers } from "../../../complect/rooms/hooks/players";
import { useGamerCurrentRoom } from "../../../complect/rooms/room/hooks/current-room";
import { getSpyRandomSymbol, secretSpyRole, unsecretSpyRole, useSpyActualLocationsNaked, useSpyCleanLocationsNaked, wordSpyParts } from "./locations";


export const useSpyResetResults = () => {
    const currentRoom = useGamerCurrentRoom();

    return useCallback(() => {
        return gamerExer.send({
            action: 'resetSpyResults',
            method: 'set',
            args: {
                roomw: currentRoom?.w,
            },
        });
    }, [currentRoom]);
};

const splittedSPY = 'ШПИОН'.split('');

export const useSpyFinishGame = () => {
    const currentRoom = useGamerCurrentRoom();

    return useCallback(() => {
        return gamerExer.send({
            action: 'finishSpyGame',
            method: 'set',
            args: {
                roomw: currentRoom?.w,
            },
        });
    }, [currentRoom]);
};

export const useSpyStartGame = () => {
    const currentRoom = useGamerCurrentRoom();
    const players = useGamerPlayers(currentRoom);
    const actualLocations = useSpyActualLocationsNaked();

    return useCallback((spiesCount: number) => {
        if (!currentRoom || !players) return;

        const roles: Record<string, string> = {};
        const location = mylib.randomItem(actualLocations).split('');
        const spies: string[] = [];

        while (spies.length < spiesCount) {
            const player = mylib.randomItem(players);
            if (!spies.includes(player.login))
                spies.push(player.login);
        }

        players.forEach((player) => {
            roles[player.login] = secretSpyRole(spies.includes(player.login)
                ? splittedSPY
                : location);
        });

        return gamerExer.send({
            action: 'startSpyGame',
            method: 'set',
            args: {
                roomw: currentRoom.w,
                roles,
                location: secretSpyRole(location),
                spiesCount,
                name: new Array(4).fill(1).map(() => getSpyRandomSymbol(wordSpyParts))
            },
        });
    }, [actualLocations, currentRoom, players]);
};

export const useSpyExcludeMember = () => {
    const currentRoom = useGamerCurrentRoom();

    return useCallback((login: string) =>
        gamerExer.send({
            action: 'excludeSpyMember',
            method: 'push',
            args: {
                roomw: currentRoom?.w,
                login,
            },
        }), [currentRoom?.w]);
};

export const useSpyToggleLocation = () => {
    const cleanLocations = useSpyCleanLocationsNaked();
    const currentRoom = useGamerCurrentRoom();

    return useCallback((secretLocation: string) => {
        const cleanLocation = unsecretSpyRole(secretLocation);

        if (cleanLocations?.some(([loc]) => loc === cleanLocation)) {
            return gamerExer.send({
                action: 'unstrikeSpyLocation',
                method: 'remove_each',
                args: {
                    roomw: currentRoom?.w,
                    value: secretLocation,
                },
            });
        } else {
            return gamerExer.send({
                action: 'strikeSpyLocation',
                method: 'push',
                args: {
                    roomw: currentRoom?.w,
                    value: secretSpyRole(cleanLocation.split('')),
                },
            });
        }
    }, [cleanLocations, currentRoom?.w]);
};

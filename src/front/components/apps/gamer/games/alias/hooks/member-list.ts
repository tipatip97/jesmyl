import { useMemo } from "react";
import { useAliasRoomState } from "./state";


const initialMemberList: string[] = [];

export const useAliasMemberList = () => {
    const state = useAliasRoomState();

    return useMemo(() => {
        return state?.teams.reduce((list, team) => list.concat(team.members), initialMemberList);
    }, [state?.teams]);
};

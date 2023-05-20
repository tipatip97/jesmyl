import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ClientExecutionDict } from "../../../../../complect/exer/Exer.model";
import { RootState } from "../../../../../shared/store";
import { leaderExer } from "../../Leader.store";
import useLeaderNav from "../../useLeaderNav";
import { LeaderGroupImportable } from "../groups/Groups.model";
import { HumanImportable } from "../people/People.model";
import { LeaderContextCreatable } from "./Contexts.model";

const contextsSelector = (state: RootState) => state.leader.contexts;
const humansSelector = (state: RootState) => state.leader.people?.humans;

export default function useLeaderContexts() {
    const contexts = useSelector(contextsSelector);
    const { appRouteData: { contextw } } = useLeaderNav();
    const humans = useSelector(humansSelector);

    const ccontext = contexts?.list?.find(({ w }) => w === contextw);

    const contextMembers = useMemo(() => {
        return (humans && ccontext?.members && extractWidable(humans, ccontext.members)) || [];
    }, [ccontext?.members, humans]);

    const ret = {
        ccontext,
        contexts,
        contextMembers,
        humans,
        add_removeHumans,
        getMembersInGroups,
        publicateNewContext,
        extractWidable,
        membersReadyToPlay,
    };

    return ret;
}

////////////////////////////////////////////////////////////////////////////////


const membersReadyToPlay = (members: HumanImportable[]) => {
    return members.filter(member => member.isInactive && member.ufp1 + member.ufp2);
}

const extractWidable = <T extends { w: number }[]>(widables: T, list: number[]): T => {
    return (widables
        ? list.map((memberId) => widables.find((human) => human.w === memberId))
            .filter((member) => member) as T
        : []) as T;
}

const add_removeHumans = (contextw: number, addList: number[], delList: number[], listn: 'mentors' | 'members') => {
    const execs: ClientExecutionDict[] = [];
    if (addList.length)
        execs.push({
            action: "addHumansToContext",
            method: "concat",
            args: {
                contextw,
                listn,
                list: addList,
            }
        });
    if (delList.length)
        execs.push({
            action: "removeHumansFromContext",
            method: "remove",
            args: {
                contextw,
                listn,
                list: delList,
            }
        });
    leaderExer.send(execs);
};

const getMembersInGroups = (members: HumanImportable[], wids: number[], groups: LeaderGroupImportable[] | und): { member: HumanImportable, group: LeaderGroupImportable }[] => {
    return groups?.map(
        (group) =>
            group.members
                .map((memberw) => {
                    const member = members.find(({ w }) => w === memberw);
                    return !member?.isInactive && wids.includes(member?.w || -1) ? { member, group } : null
                })
                .filter((human) => human) as never)
        .flat() || [];
};



const publicateNewContext = (context: LeaderContextCreatable) => {
    leaderExer.send({
        action: 'addContext',
        method: 'push',
        args: context,
    });
};

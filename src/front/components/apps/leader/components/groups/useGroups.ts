import { useMemo } from "react";
import SourceBased from "../../../../../complect/SourceBased";
import { ClientExecutionDict } from "../../../../../complect/exer/Exer.model";
import { leaderExer } from "../../Leader.store";
import useLeaderNav from "../../useLeaderNav";
import { LeaderContextImportable } from "../contexts/Contexts.model";
import useLeaderContexts from "../contexts/useContexts";
import { LeaderGroupChangable, LeaderGroupCreatable, LeaderGroupExportable, LeaderGroupImportable } from "./Groups.model";


export default function useLeaderGroups() {
    const { ccontext, humans, extractWidable } = useLeaderContexts();
    const { goTo, appRouteData: { groupw } } = useLeaderNav();

    const cgroup = ccontext?.groups?.find(({ w }) => w === groupw);

    const cgroupMembers = useMemo(() => {
        return (humans && cgroup?.members && extractWidable(humans, cgroup.members)) || [];
    }, [cgroup?.members, extractWidable, humans]);

    const cgroupMentors = useMemo(() => {
        return (humans && cgroup?.mentors && extractWidable(humans, cgroup.mentors)) || [];
    }, [cgroup?.mentors, extractWidable, humans]);

    const ret = {
        cgroup,
        humans,
        extractWidable,
        cgroupMembers,
        cgroupMentors,
        goToGroup: (groupw: number) => {
            goTo({ place: 'group', data: { groupw } });
        },
        sendChanges,
        replaceMemberToGroup,
        makeHumansToGroupExecDict,
        getChangesStack,
        publicateNew,
        getFieldValues,
    };
    return ret;
}



/////////////////////////////////////////////////////////////////////////////



const getFieldValues = (context: LeaderContextImportable | und, groupFields: Record<string, string> | und): Record<string, string> => {
    const values: Record<string, any> = {};
    const fields = groupFields || {};

    context?.blanks?.forEach(({ key, def, value }) => {
        if (value) values[key] = value;
        else if (def && !fields[key]) values[key] ||= def;
    });

    return {
        ...groupFields,
        ...values,
    };
};

const publicateNew = (group: LeaderGroupCreatable) => {
    return leaderExer.send({
        action: 'addContextGroup',
        method: 'push',
        args: {
            ...group,
            ts: SourceBased.makeNewTs()
        } as LeaderGroupExportable
    });
}

const getChangesStack = (groupw: number, groupName: string, changes: LeaderGroupChangable) => {
    const stack: ClientExecutionDict<unknown>[] = [];
    const generals = {
        contextw: changes.contextw,
        groupw,
    };

    if (changes.name && changes.name !== groupName) {
        stack.push({
            action: 'setContextGroupName',
            method: 'set',
            args: {
                ...generals,
                value: changes.name,
            },
        });
    }

    if (changes.addMembers?.length) {
        stack.push(makeHumansToGroupExecDict(changes.addMembers, generals, 'members', 'add'));
    }

    if (changes.delMembers?.length) {
        stack.push(makeHumansToGroupExecDict(changes.delMembers, generals, 'members', 'del'));
    }

    if (changes.delMentors?.length) {
        stack.push(makeHumansToGroupExecDict(changes.delMentors, generals, 'mentors', 'del'));
    }

    if (changes.addMentors?.length) {
        stack.push(makeHumansToGroupExecDict(changes.addMentors, generals, 'mentors', 'add'));
    }

    return stack;
}

const makeHumansToGroupExecDict = (value: number[], generals: { contextw: number; groupw: number }, fieldn: 'mentors' | 'members', type: 'add' | 'del'): ClientExecutionDict => {
    return {
        action: `${type}ContextGroupHumans`,
        method: type === 'add' ? 'concat' : 'remove_each',
        args: {
            ...generals,
            value,
            fieldn
        },
    }
}

const replaceMemberToGroup = (groupw: number, contextw: number, humanw: number, excludeGroups: LeaderGroupImportable[]) => {
    leaderExer.clear();
    const stack: ClientExecutionDict<unknown>[] = [];

    stack.push(makeHumansToGroupExecDict([humanw], { contextw, groupw }, 'members', 'add'));

    excludeGroups.forEach((group) => {
        stack.push(makeHumansToGroupExecDict([humanw], { contextw, groupw: group.w }, 'members', 'del'));
    });

    return leaderExer.send(stack);
}

const sendChanges = (groupw: number, groupName: string, changes: LeaderGroupChangable) => {
    leaderExer.clear();
    return leaderExer.send(getChangesStack(groupw, groupName, changes));
}

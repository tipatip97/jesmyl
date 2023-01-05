import { ClientExecutionDict } from "../../../../../complect/exer/Exer.model";
import SourceBased from "../../../../../complect/SourceBased";
import { leaderExer } from "../../Leader.store";
import LeaderGroup from "../groups/Group";
import Human from "../people/Human";
import { LeaderContextImportable } from "./Contexts.model";

export default class LeaderContext extends SourceBased<LeaderContextImportable> {
    private humans?: Human[];
    members: Human[];
    mentors: Human[];
    groups?: LeaderGroup[];

    constructor(top: LeaderContextImportable, humans: Human[]) {
        super(top);
        this.humans = humans;
        this.members = this.takeHumans(this.getBasic('members'));
        this.mentors = this.takeHumans(this.getBasic('mentors'));
        this.groups = this.getBasic('groups')?.map((group) => new LeaderGroup(group, humans, this));
    }

    get wid() { return this.getBasic('w'); }
    get name() { return this.getBasic('name'); }
    get blanks() { return this.getBasic('blanks'); }

    private takeHumans(list: number[]) {
        const humans = this.humans || [];

        return this.humans ? list
            .map((memberId) => {
                const member = humans.find((human) => human.wid === memberId);
                return member && new Human(member.top);
            })
            .filter((member) => member) as Human[] : [];
    }

    membersReadyToPlay() {
        return this.members.filter(human => human.isCanPlayGame());
    }

    execArgs() {
        return {
            contextw: this.wid
        };
    }

    add_removeHumans(addList: number[], delList: number[], listn: 'mentors' | 'members') {
        const execs: ClientExecutionDict[] = [];
        if (addList.length)
            execs.push({
                action: "addHumansToContext",
                method: "concat",
                args: {
                    ...this.execArgs(),
                    listn,
                    list: addList,
                }
            });
        if (delList.length)
            execs.push({
                action: "removeHumansFromContext",
                method: "remove",
                args: {
                    ...this.execArgs(),
                    listn,
                    list: delList,
                }
            });
        leaderExer.send(execs);
    }

    getMembersInGroups(wids: number[]) {
        return this.groups?.map(
            (group) =>
                group.members
                    .map((member) =>
                        !member.isInactive && wids.indexOf(member.wid) > -1 ? { member, group } : null
                    )
                    .filter((human) => human) as {
                        member: Human;
                        group: LeaderGroup;
                    }[]
        )
            .flat() || [];
    }
}
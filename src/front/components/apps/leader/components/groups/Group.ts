import { ClientExecutionDict } from "../../../../../complect/exer/Exer.model";
import SourceBased from "../../../../../complect/SourceBased";
import { leaderExer } from "../../Leader.store";
import LeaderContext from "../contexts/Context";
import Human from "../people/Human";
import { LeaderGroupChangable, LeaderGroupCreatable, LeaderGroupExportable, LeaderGroupImportable } from "./Groups.model";

export default class LeaderGroup extends SourceBased<LeaderGroupImportable> {
    members: Human[];
    mentors: Human[];
    context: LeaderContext;

    constructor(top: LeaderGroupImportable, humans: Human[], context: LeaderContext) {
        super(top);
        this.context = context;

        this.members = this.getBasic('members')
            .map((id) => humans.find((human) => human.wid === id))
            .filter((human) => human) as Human[];

        this.mentors = this.getBasic('mentors')
            .map((id) => humans.find((human) => human.wid === id))
            .filter((human) => human) as Human[];
    }

    get wid() { return this.getBasic('w'); }
    get ts() { return this.getBasic('ts'); }
    get fields() { return this.getBasic('fields'); }

    set name(val) { this.setExportable('name', val); }
    get name() { return this.getBasic('name'); }

    get isInactive() { return this.getBasic('isInactive'); }

    getFieldValue(key: string,) {
        const field = this.fields?.[key];
        if (field) return field;
        else {
            const blank = this.context.blanks?.find((blank) => blank.key === key);
            return blank?.def || blank?.value;
        }
    }

    getFieldValues() {
        const values: Record<string, any> = {};
        const fields = this.fields || {};

        this.context.blanks?.forEach(({ key, def, value }) => {
            if (value) values[key] = value;
            else if (def && !fields[key]) values[key] ||= def;
        });

        return {
            ...this.fields,
            ...values,
        };
    }

    static publicateNew(group: LeaderGroupCreatable) {
        return new Promise((res, rej) => {
            leaderExer.send({
                action: 'addContextGroup',
                method: 'push',
                args: {
                    ...group,
                    ts: LeaderGroup.makeNewTs()
                } as LeaderGroupExportable
            }).then(res).catch(rej);
        });
    }

    getChangesStack(changes: LeaderGroupChangable) {
        const stack: ClientExecutionDict<unknown>[] = [];
        const generals = {
            contextw: changes.contextw,
            groupw: this.wid,
        };

        if (changes.name && changes.name !== this.name) {
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
            stack.push(this.makeHumansToGroupExecDict(changes.addMembers, generals, 'members', 'add'));
        }

        if (changes.delMembers?.length) {
            stack.push(this.makeHumansToGroupExecDict(changes.delMembers, generals, 'members', 'del'));
        }

        if (changes.delMentors?.length) {
            stack.push(this.makeHumansToGroupExecDict(changes.delMentors, generals, 'mentors', 'del'));
        }

        if (changes.addMentors?.length) {
            stack.push(this.makeHumansToGroupExecDict(changes.addMentors, generals, 'mentors', 'add'));
        }

        return stack;
    }

    makeHumansToGroupExecDict(value: number[], generals: { contextw: number; groupw: number }, fieldn: 'mentors' | 'members', type: 'add' | 'del'): ClientExecutionDict {
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

    replaceMemberToGroup(contextw: number, humanw: number, excludeGroups: LeaderGroup[]) {
        leaderExer.clear();
        const stack: ClientExecutionDict<unknown>[] = [];

        stack.push(this.makeHumansToGroupExecDict([humanw], { contextw, groupw: this.wid }, 'members', 'add'));

        excludeGroups.forEach((group) => {
            stack.push(this.makeHumansToGroupExecDict([humanw], { contextw, groupw: group.wid }, 'members', 'del'));
        });

        return leaderExer.send(stack);
    }

    sendChanges(changes: LeaderGroupChangable) {
        leaderExer.clear();
        return new Promise((res, rej) => leaderExer.send(this.getChangesStack(changes)).then(res).catch(rej));
    }
}
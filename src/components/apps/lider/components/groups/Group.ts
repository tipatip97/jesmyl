import { ExecDict, FreeExecDict } from "../../../../../complect/exer/Exer.model";
import SourceBased from "../../../../../complect/SourceBased";
import { liderExer } from "../../Lider.store";
import Human from "../people/Human";
import { LeaderGroupChangable, LeaderGroupCreatable, LeaderGroupExportable, LeaderGroupImportable } from "./Groups.model";

export default class LeaderGroup extends SourceBased<LeaderGroupImportable> {
    members: Human[];
    mentors: Human[];

    constructor(top: LeaderGroupImportable, humans: Human[]) {
        super(top);

        this.members = this.getBasic('members')
            .map((id) => humans.find((human) => human.wid === id))
            .filter((human) => human) as Human[];

        this.mentors = this.getBasic('mentors')
            .map((id) => humans.find((human) => human.wid === id))
            .filter((human) => human) as Human[];
    }

    get wid() { return this.getBasic('w'); }
    get ts() { return this.getBasic('ts'); }

    set name(val) { this.setExportable('name', val); }
    get name() { return this.getBasic('name'); }

    get isInactive() { return this.getBasic('isInactive'); }

    static publicateNew(group: LeaderGroupCreatable) {
        return new Promise((res, rej) => {
            liderExer.send({
                action: 'addContextGroup',
                method: 'push',
                args: {
                    ...group,
                    ts: LeaderGroup.makeNewTs()
                } as LeaderGroupExportable
            }, res, rej);
        });
    }

    getChangesStack(changes: LeaderGroupChangable) {
        const stack: ExecDict<unknown>[] = [];
        const generals = {
            contextw: changes.contextw,
            groupw: this.wid,
        };

        if (changes.name && changes.name !== this.name) {
            stack.push({
                action: 'setContextGroupName',
                method: 'other',
                args: {
                    ...generals,
                    value: changes.name,
                },
            });
        }

        if (changes.addMembers?.length) {
            stack.push({
                action: 'addContextGroupMembers',
                method: 'other',
                args: {
                    ...generals,
                    value: changes.addMembers,
                },
            });
        }

        if (changes.delMembers?.length) {
            stack.push({
                action: 'delContextGroupMembers',
                method: 'other',
                args: {
                    ...generals,
                    value: changes.delMembers,
                },
            });
        }

        if (changes.delMentors?.length) {
            stack.push({
                action: 'delContextGroupMentors',
                method: 'other',
                args: {
                    ...generals,
                    value: changes.delMentors,
                },
            });
        }

        if (changes.addMentors?.length) {
            stack.push({
                action: 'addContextGroupMentors',
                method: 'other',
                args: {
                    ...generals,
                    value: changes.addMentors,
                },
            });
        }

        return stack;
    }

    sendChanges(changes: LeaderGroupChangable) {
        liderExer.clear();
        return new Promise((res, rej) => liderExer.send(this.getChangesStack(changes), res, rej, null, true));
    }
}
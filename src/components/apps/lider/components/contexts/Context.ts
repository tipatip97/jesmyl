import { ExecDict } from "../../../../../complect/exer/Exer.model";
import SourceBased from "../../../../../complect/SourceBased";
import { liderExer } from "../../Lider.store";
import Human from "../people/Human";
import { HumanImportable } from "../people/People.model";
import { LeaderContextImportable } from "./Contexts.model";

export default class LeaderContext extends SourceBased<LeaderContextImportable> {
    private humans?: HumanImportable[];
    members: Human[];
    mentors: Human[];

    constructor(top: LeaderContextImportable, humans?: HumanImportable[]) {
        super(top);
        this.humans = humans;
        this.members = this.takeHumans(this.getBasic('members'));
        this.mentors = this.takeHumans(this.getBasic('mentors'));
    }

    private takeHumans(list: number[]) {
        const humans = this.humans || [];

        return this.humans ? list
            .map((memberId) => {
                const member = humans.find((human) => human.w === memberId);
                return member && new Human(member);
            })
            .filter((member) => member) as Human[] : [];
    }
    get wid() { return this.getBasic('w'); }
    get name() { return this.getBasic('name'); }

    membersReadyToPlay() {
        return this.members.filter(human => human.isCanPlayGame());
    }

    execArgs() {
        return {
            w: this.wid
        };
    }

    add_removeHumans(addList: Human[], delList: Human[], listn: 'mentors' | 'members') {
        const execs: ExecDict[] = [];
        if (addList.length)
            execs.push({
                action: "addHumansToContext",
                method: "concat",
                args: {
                    ...this.execArgs(),
                    listn,
                    list: addList.map(({ wid }) => wid),
                }
            });
        if (delList.length)
            execs.push({
                action: "removeHumansFromContext",
                method: "remove",
                args: {
                    ...this.execArgs(),
                    listn,
                    list: delList.map(({ wid }) => wid),
                }
            });
        liderExer.send(execs);
    }
}
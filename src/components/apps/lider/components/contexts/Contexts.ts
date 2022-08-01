import SourceBased from "../../../../../complect/SourceBased";
import Human from "../people/Human";
import { HumanImportable } from "../people/People.model";
import LeaderContext from "./Context";
import { LeaderContextsImportable } from "./Contexts.model";

export default class LeaderContexts extends SourceBased<LeaderContextsImportable> {
    list: LeaderContext[];

    constructor(top: LeaderContextsImportable, humans: Human[]) {
        super(top);
        this.list = this.getBasic('list')?.map((context) => new LeaderContext(context, humans)) || [];
    }
}
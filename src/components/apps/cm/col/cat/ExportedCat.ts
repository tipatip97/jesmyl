import mylib from "../../../../../complect/my-lib/MyLib";
import { Com } from "../com/Com";
import { EditableCol } from "../EditableCol";
import { ComWrap, IExportableCat } from "./Cat.model";


export class ExportedCat extends EditableCol<IExportableCat> {
    index: number = -1;
    term?: string;
    topComs: Com[];
    coms: Com[] = [];
    wraps: ComWrap[] = [];
    t?: string[] | null;

    constructor(obj: IExportableCat, coms: Com[]) {
        super(obj);

        this.track = mylib.def(obj.t, null);
        this.topComs = coms;
    }

    get stack() { return this.getOrBase('s', []); }

    get track(): string[] | undefined | null { return this.t; }
    set track(val: string[] | undefined | null) { this.t = val; }
}


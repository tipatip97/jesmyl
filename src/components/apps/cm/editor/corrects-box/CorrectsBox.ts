import { ICorrectsBox, ICorrectsBoxes } from "./CorrectsBox.model";

export class CorrectsBox {
    errors: ICorrectsBox[] | null;
    warnings: ICorrectsBox[] | null;
    unknowns: ICorrectsBox[] | null;
    collection: ICorrectsBox[] | null = null;
    incorrectType?: string | boolean;

    constructor(errors?: ICorrectsBox[], warnings?: ICorrectsBox[], unknowns?: ICorrectsBox[]) {
        this.errors = Array.isArray(errors) && errors.length ? errors : null;
        this.warnings = Array.isArray(warnings) && warnings.length ? warnings : null;
        this.unknowns = Array.isArray(unknowns) && unknowns.length ? unknowns : null;
    }

    setIncorrectType(message: string) {
        this.incorrectType = message || true;
        return this;
    }

    collect(...args: (keyof ICorrectsBoxes)[]) {
        this.collection = [];

        args.forEach((arg: keyof ICorrectsBoxes) => {
            if (['errors', 'warnings', 'unknowns'].indexOf(arg) > -1 && Array.isArray(this[arg])) {
                this.collection = this.collection?.concat(this[arg] || []) ?? [];
            }
        });

        if (!this.collection.length) this.collection = null;

        return this;
    }

    map(cb: ArrayMapCb<ICorrectsBox>) {
        if (!Array.isArray(this.collection)) return this;
        this.collection = this.collection.map(cb);

        return this;
    }

    filter(cb: ArrayCb<ICorrectsBox> = e => e) {
        if (!Array.isArray(this.collection)) return this;
        this.collection = this.collection.filter(cb);

        return this;
    }

    merge(...args: Partial<ICorrectsBoxes>[]) {
        const merge = <Name extends keyof ICorrectsBoxes>(arg: Partial<ICorrectsBoxes>, name: Name) => {
            const target = this[name];
            const source = arg[name];

            if (Array.isArray(target)) {
                if (Array.isArray(source))
                    source.forEach(src => target.push(src));
            } else if (Array.isArray(source))
                this[name] = ([] as ICorrectsBox[]).concat(source);
        };

        args.forEach(arg => {
            if (arg == null) return;
            merge(arg, 'errors');
            merge(arg, 'warnings');
            merge(arg, 'unknowns');
        });

        return this;
    }
}
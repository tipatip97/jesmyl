var md5 = require('md5');

const constants = {
    REMOVE: ['remove']
}

export class MyLib {
    c = constants;

    isObj(obj: any) { return obj instanceof Object && !(obj instanceof Array) }
    isobj(obj: any) { return typeof obj === 'object' && obj != null }
    isArr(obj: any) { return obj instanceof Array }
    isNum(obj: any) { return typeof obj === 'number' && !isNaN(obj) }
    isnum(obj: any | string) { return parseFloat(obj) == obj }
    isStr(obj: any) { return typeof obj === 'string' }
    isFunc(obj: any) { return typeof obj === 'function' }
    isAFunc(obj: any) { return this.isFunc(obj) && obj[Symbol.toStringTag] === 'AsyncFunction' }
    isUnd(obj: any) { return obj === undefined }
    isBool(obj: any) { return typeof obj === 'boolean' }
    isNull(obj: any) { return obj === null }
    isNan(obj: any) { return isNaN(obj) }

    func(...funcs: any[]) {
        const self = this;
        const call = (...args: any[]) => {
            const func = funcs.find(this.isFunc);
            return func && func.apply(this, args);
        };

        return {
            call(...args: any[]) { return call(args); },
            invoke(func: Function) { return call([].concat(self.isFunc(func) ? func() : [])); }
        };
    }

    overlap<T>(...args: any[]): T {
        if (args.length === 0) return null as never;
        const zero = this.def(args[0], {});

        args.forEach(arg => arg == null ? null : Object.keys(arg).forEach(arn => zero[arn] = arg[arn]));
        return zero;
    }

    def<T>(...args: T[]) {
        const res = args.find(some => some != null);
        return res == null ? args[args.length - 1] : res;
    }

    md5(content: string) {
        return md5(content);
    }


    isEq(base: any, source: any) {
        if (base == null && base == source) return true;
        if (base == null || source == null) return false;

        const baseType = this.typeOf(base);
        const srcType = this.typeOf(source);

        if (baseType !== srcType) return false;
        if (typeof base === 'object') {
            const bKeys = Object.keys(base);

            if (bKeys.length !== Object.keys(source).length
                || bKeys.some(bKey => !this.isEq(source[bKey], base[bKey]))
            ) return false;
        } else if (base !== source) return false;

        return true;
    }

    typeOf(obj: any): string | null { return (['isStr', 'isNum', 'isBool', 'isArr', 'isNull', 'isUnd', 'isFunc', 'isObj', 'isNan'] as (keyof MyLib)[]).find((type: keyof MyLib) => (this[type] as Function)(obj)) || null; }

    findLastIndex(arr: [], cb: Function) {
        if (!this.isArr(arr)) return null;
        if (!this.isFunc(cb)) return arr.length - 1;

        for (let i = arr.length - 1; i >= 0; i--)
            if (cb(arr[i], i, arr))
                return i;

        return -1;
    }
}


const mylib = new MyLib();
export default mylib;





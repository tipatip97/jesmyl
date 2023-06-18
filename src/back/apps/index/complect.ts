type nil = null | undefined;

const zeroEndTrimReg = /0+$/;

type StandardEnum<T> = {
    [id: string]: T | string;
    [nu: number]: string;
}

export class ScheduleWidgetRights<Enum extends StandardEnum<unknown>, Right extends number> {
    rightsEnum: Enum;
    textList: { id: Right, title: string }[];
    enumOrder: Right[];

    constructor(rightsEnum: Enum, enumList: { id: Right, title: string }[], enumOrder?: Right[]) {
        this.rightsEnum = rightsEnum;
        if (enumOrder === undefined) enumOrder = enumList.map(({ id }) => id)
        this.enumOrder = enumOrder;

        this.textList = [
            {
                id: enumList.length + 30,
                title: '',
            } as never
        ].concat(enumList as never).sort((a, b) => this.enumOrder.indexOf(a) - this.enumOrder.indexOf(b));
    }

    getAllRights = () => {
        return parseInt(Array(this.textList.length).fill('1').join(''), 2);
    };

    checkIsHasIndividualRights = (R: number | null | undefined, rightKey: Right) => {
        if (R === undefined || R === null || R === 0) return false;
        return R.toString(2)[rightKey] === '1';
    };

    checkIsHasRights = (R: number | null | undefined, rightKey: Right) => {
        if (R === undefined || R === null || R === 0) return false;
        const rstr = R.toString(2);
        const ind = this.enumOrder.indexOf(rightKey);

        for (let i = 0; i <= ind; i++) {
            if (rstr[this.enumOrder[i] as never] !== '1') return false;
        }

        return true;
    };

    switchRights = (R: number | null | undefined, rightKey: Right, set?: '1' | '0' | nil) => {
        let arr = (R || 1).toString(2).split('');

        if (set == null) arr[rightKey as never] = '' + +!+arr[rightKey as never];
        else arr[rightKey as never] = set;

        const bin = this.textList.map((_, i) => arr[i] === '1' ? '1' : '0').join('').replace(zeroEndTrimReg, '');

        return parseInt(bin || '1', 2);
    };
}

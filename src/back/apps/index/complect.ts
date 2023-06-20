type nil = null | undefined;

const zeroEndTrimReg = /0+$/;

type StandardEnum<T> = {
    [id: string]: T | string;
    [nu: number]: string;
}

export interface ScheduleWidgetRightTexts<Right> {
    id: Right,
    title: string,
    description?: string,
    always?: boolean,
    hidden?: boolean,
}

export class ScheduleWidgetRights<Enum extends StandardEnum<unknown> = StandardEnum<unknown>, Right extends number = number> {
    rightsEnum: Enum;
    texts: ScheduleWidgetRightTexts<Right>[];
    enumOrder: Right[];

    constructor(rightsEnum: Enum, texts: ScheduleWidgetRightTexts<Right>[], enumOrder?: Right[]) {
        this.rightsEnum = rightsEnum;
        if (enumOrder === undefined) enumOrder = texts.map(({ id }) => id)
        this.enumOrder = enumOrder;

        this.texts = [
            {
                id: texts.length + 30,
                title: '',
                hidden: true,
            } as never
        ].concat(texts as never).sort((a, b) => this.enumOrder.indexOf(a) - this.enumOrder.indexOf(b));
    }

    getAllRights = () => {
        return parseInt(Array(this.texts.length).fill('1').join(''), 2);
    };

    rightsBalance = (R: number | null | undefined): number => {
        if (R === undefined || R === null || R === 0) return -1;
        const rstr = R.toString(2);

        for (let i = 0; i < this.enumOrder.length; i++) {
            if (rstr[this.enumOrder[i] as never] !== '1') return i;
        }

        return this.enumOrder.length;
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

        const bin = this.texts.map((_, i) => arr[i] === '1' ? '1' : '0').join('').replace(zeroEndTrimReg, '');

        return parseInt(bin || '1', 2);
    };
}


const zeroEndTrimReg = /0+$/;

type nil = undefined | null;

export interface ScheduleWidgetRightTexts<Right> {
    id: Right,
    title: string,
    description?: [string, string?],
    always?: boolean,
    hidden?: boolean,
}

export class ScheduleWidgetRightsCtrl<Right extends number = number> {
    texts: ScheduleWidgetRightTexts<Right>[];
    enumOrder: Right[];

    constructor(texts: ScheduleWidgetRightTexts<Right>[], enumOrder?: Right[]) {
        if (enumOrder === undefined) enumOrder = texts.map(({ id }) => id)
        this.enumOrder = enumOrder;

        this.texts = [
            {
                id: texts.length + 30,
                title: '',
                hidden: true,
            } as ScheduleWidgetRightTexts<Right>
        ].concat(texts).sort((a, b) => this.enumOrder.indexOf(a.id) - this.enumOrder.indexOf(b.id));
    }

    getAllRights = () => {
        return parseInt(Array(this.texts.length).fill('1').join(''), 2);
    };

    rightLevel = (rightKey: Right) => this.enumOrder.indexOf(rightKey);

    collectRights = (...args: Right[]) => {
        let R = 1;
        args.forEach(right => R = this.switchRights(R, right, '1'));
        return R;
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
        if (R === undefined || R === null || R === 0 || R === 1) return false;
        const rstr = R.toString(2);
        const ind = this.enumOrder.indexOf(rightKey);

        for (let i = 0; i <= ind; i++) {
            if (rstr[this.enumOrder[i]] !== '1') return false;
        }

        return true;
    };

    switchRights = (R: number | null | undefined, rightKey: Right, set?: '1' | '0' | nil) => {
        let arr = (R || 1).toString(2).split('');

        if (set == null) arr[rightKey] = '' + +!+arr[rightKey];
        else arr[rightKey] = set;

        const bin = this.texts.map((_, i) => arr[i] === '1' ? '1' : '0').join('').replace(zeroEndTrimReg, '');
        return parseInt(bin || '1', 2);
    };


    static switchRights = (R: number | null | undefined, rightKey: number, len: number) => {
        let arr = (R || 1).toString(2).split('');

        arr[rightKey + 1] = '' + +!+arr[rightKey + 1];

        const bin = Array(len + 1).fill('').map((_, i) => arr[i] === '1' ? '1' : '0').join('').replace(zeroEndTrimReg, '');

        return parseInt(bin || '1', 2);
    };

    static checkIsHasIndividualRights = (R: number | null | undefined, rightKey: number) => {
        if (R === undefined || R === null || R === 0) return false;
        return R.toString(2)[rightKey + 1] === '1';
    };
}

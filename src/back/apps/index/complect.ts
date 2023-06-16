type nil = null | undefined;

export enum ScheduleWidgetUserRoleRight {
    TotalRedact = 1,
    Read,
    Redact,
    ReadTitles,
    ReadSpecials,
}

const zeroEndTrimReg = /0+$/;

const rightsOrder = [
    ScheduleWidgetUserRoleRight.Read,
    ScheduleWidgetUserRoleRight.ReadTitles,
    ScheduleWidgetUserRoleRight.ReadSpecials,
    ScheduleWidgetUserRoleRight.Redact,
    ScheduleWidgetUserRoleRight.TotalRedact,
];

export class ScheduleWidgetRights {
    static rights = ScheduleWidgetUserRoleRight;

    static getAllRights = () => {
        return parseInt(Array(this.textList.length).fill('1').join(''), 2);
    };

    static textList = [
        {  // must be first in this array
            id: 10000,
        }, // must be first in this array
        {
            id: ScheduleWidgetUserRoleRight.Read,
            title: 'Чтение',
        },
        {
            id: ScheduleWidgetUserRoleRight.ReadTitles,
            title: 'Чтение текстов',
        },
        {
            id: ScheduleWidgetUserRoleRight.ReadSpecials,
            title: 'Чтение спец. событий',
        },
        {
            id: ScheduleWidgetUserRoleRight.Redact,
            title: 'Редактирование',
        },
        {
            id: ScheduleWidgetUserRoleRight.TotalRedact,
            title: 'Полный доступ',
        },
    ].sort((a, b) => rightsOrder.indexOf(a.id) - rightsOrder.indexOf(b.id));

    static checkIsHasRights = (R: number | null | undefined, rightKey: ScheduleWidgetUserRoleRight) => {
        if (R === undefined || R === null || R === 0) return false;
        const rstr = R.toString(2);
        const ind = rightsOrder.indexOf(rightKey);

        for (let i = 0; i <= ind; i++) {
            if (rstr[rightsOrder[i]] !== '1') return false;
        }

        return true;
    };

    static switchRights = (R: number | null | undefined, rightKey: ScheduleWidgetUserRoleRight, set?: '1' | '0' | nil) => {
        let arr = (R || 1).toString(2).split('');

        if (set == null) arr[rightKey] = '' + +!+arr[rightKey];
        else arr[rightKey] = set;

        const bin = this.textList.map((_, i) => arr[i] === '1' ? '1' : '0').join('').replace(zeroEndTrimReg, '');

        return parseInt(bin || '1', 2);
    };
}

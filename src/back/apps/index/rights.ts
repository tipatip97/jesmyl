import { ScheduleWidgetRights } from "./complect";


export enum ScheduleWidgetUserRoleRight {
    TotalRedact = 1,
    Read,
    Redact,
    ReadTitles,
    ReadSpecials,
}

const rightsOrder = [
    ScheduleWidgetUserRoleRight.Read,
    ScheduleWidgetUserRoleRight.ReadTitles,
    ScheduleWidgetUserRoleRight.ReadSpecials,
    ScheduleWidgetUserRoleRight.Redact,
    ScheduleWidgetUserRoleRight.TotalRedact,
];

const textList = [
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
];

export const scheduleWidgetRights = new ScheduleWidgetRights<typeof ScheduleWidgetUserRoleRight, ScheduleWidgetUserRoleRight>(ScheduleWidgetUserRoleRight, textList, rightsOrder);


///////////////////////////////


export enum CustomAttUseRights {
    Titles = 1,
    Checkboxes,
    Roles,
}

export const customAttUseRightsTitles: { id: CustomAttUseRights, title: string }[] = [
    {
        id: CustomAttUseRights.Roles,
        title: 'роли',
    },
    {
        id: CustomAttUseRights.Checkboxes,
        title: 'чекбоксы',
    },
    {
        id: CustomAttUseRights.Titles,
        title: 'заголовки',
    },
];

export const customAttUseRights = new ScheduleWidgetRights(CustomAttUseRights, customAttUseRightsTitles);

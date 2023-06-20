import { ScheduleWidgetRightTexts, ScheduleWidgetRights } from "./complect";


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

const textList: ScheduleWidgetRightTexts<ScheduleWidgetUserRoleRight>[] = [
    {
        id: ScheduleWidgetUserRoleRight.Read,
        title: 'Чтение',
        description: 'Базовый доступ',
    },
    {
        id: ScheduleWidgetUserRoleRight.ReadTitles,
        title: 'Чтение текстов',
        description: 'Доступ к темам и описаниям',
    },
    {
        id: ScheduleWidgetUserRoleRight.ReadSpecials,
        title: 'Спец. события',
        description: 'Доступ к специальным событиям',
    },
    {
        id: ScheduleWidgetUserRoleRight.Redact,
        title: 'Редактирование',
        description: 'Редактирование чего-либо',
    },
    {
        id: ScheduleWidgetUserRoleRight.TotalRedact,
        title: 'Полный доступ',
        description: 'Выдача прав, просмотр спец. информации',
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

///////////////////////////////


export enum ScheduleWidgrtRegType {
    QRCode,
    Free = 1,
    FreeRead,
}

export const scheduleWidgrtRegTypeOrder = [
    ScheduleWidgrtRegType.Free,
    ScheduleWidgrtRegType.FreeRead,
];

export const scheduleWidgetRegTypeTitles: { id: ScheduleWidgrtRegType, title: string, description: string, always?: true }[] = [
    {
        id: ScheduleWidgrtRegType.QRCode,
        title: 'QR-добавление',
        description: 'Список участников пополняется модераторами при считывании JesmyL-паспортов',
        always: true,
    },
    {
        id: ScheduleWidgrtRegType.Free,
        title: 'Свободная',
        description: 'Участники могут регистрироваться самостоятельно, не видят содержание до выдачи прав',
    },
    {
        id: ScheduleWidgrtRegType.FreeRead,
        title: 'Открытая',
        description: 'Регистрируюясь, участники могут сразу просматривать содержание',
    },
];

export const scheduleWidgetRegTypeRights = new ScheduleWidgetRights(ScheduleWidgrtRegType, scheduleWidgetRegTypeTitles, scheduleWidgrtRegTypeOrder);

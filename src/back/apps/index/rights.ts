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
        description: ['Базовый доступ'],
    },
    {
        id: ScheduleWidgetUserRoleRight.ReadTitles,
        title: 'Чтение текстов',
        description: ['Доступ к темам и описаниям'],
    },
    {
        id: ScheduleWidgetUserRoleRight.ReadSpecials,
        title: 'Спец. события',
        description: ['Доступ к специальным событиям'],
    },
    {
        id: ScheduleWidgetUserRoleRight.Redact,
        title: 'Редактирование',
        description: ['Редактирование чего-либо'],
    },
    {
        id: ScheduleWidgetUserRoleRight.TotalRedact,
        title: 'Полный доступ',
        description: ['Выдача прав, просмотр спец. информации'],
    },
];

export const scheduleWidgetRights = new ScheduleWidgetRights<typeof ScheduleWidgetUserRoleRight, ScheduleWidgetUserRoleRight>(ScheduleWidgetUserRoleRight, textList, rightsOrder);


///////////////////////////////

export enum CustomAttUseTaleId {
    Roles,
    Lists = .1,
}

export enum CustomAttUseRights {
    Titles = 1,
    Checkboxes,
    Roles,
    Lists,
}

export const customAttUseRightsTitles: ScheduleWidgetRightTexts<CustomAttUseRights>[] = [
    {
        id: CustomAttUseRights.Checkboxes,
        title: 'вып. пункты',
    },
    {
        id: CustomAttUseRights.Roles,
        title: 'роли',
    },
    {
        id: CustomAttUseRights.Lists,
        title: 'список',
    },
    {
        id: CustomAttUseRights.Titles,
        title: 'заголовки',
    },
];

export const customAttUseRights = new ScheduleWidgetRights(CustomAttUseRights, customAttUseRightsTitles);

///////////////////////////////


export enum ScheduleWidgetRegType {
    Public = 1,
    BeforeRegistration,
    HideContent,
}

export const scheduleWidgetRegTypeTitles: ScheduleWidgetRightTexts<ScheduleWidgetRegType>[] = [
    {
        id: ScheduleWidgetRegType.Public,
        title: 'Публичное мероприятие',
        description: [
            'Мероприятие доступно всем',
            'Уполномоченные добавляют участников считыванием JesmyL-паспортов (QR-код)',
        ],
    },
    {
        id: ScheduleWidgetRegType.BeforeRegistration,
        title: 'Предварительная регистрация',
        description: [
            'Участники могут регистрироваться сами',
            'Любой пользователь сможет иметь доступ к содержимому',
        ],
    },
    {
        id: ScheduleWidgetRegType.HideContent,
        title: 'Скрывать содержимое',
        description: [
            'Для просмотра содержимого зарегистрированному участнику необходимо выдать соответствующие права',
            'Зарегистрированные участники могут сразу просматривать содержимое',
        ],
    },
];

export const scheduleWidgetRegTypeRights = new ScheduleWidgetRights(ScheduleWidgetRegType, scheduleWidgetRegTypeTitles);

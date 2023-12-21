import { ScheduleWidgetRightTexts, ScheduleWidgetRightsCtrl } from './complect';

export enum ScheduleWidgetUserRoleRight {
  Free = 0,
  TotalRedact = 1,
  Read,
  Redact,
  ReadTitles,
  ReadSpecials,
  RedactUsers,
}

const rightsOrder = [
  ScheduleWidgetUserRoleRight.Read,
  ScheduleWidgetUserRoleRight.ReadTitles,
  ScheduleWidgetUserRoleRight.ReadSpecials,
  ScheduleWidgetUserRoleRight.Redact,
  ScheduleWidgetUserRoleRight.RedactUsers,
  ScheduleWidgetUserRoleRight.TotalRedact,
];

const textList: ScheduleWidgetRightTexts<ScheduleWidgetUserRoleRight>[] = [
  {
    id: ScheduleWidgetUserRoleRight.Read,
    title: 'Чтение',
    role: ['Наблюдатель', 'Наблюдателя'],
    description: ['Базовый доступ'],
  },
  {
    id: ScheduleWidgetUserRoleRight.ReadTitles,
    title: 'Чтение текстов',
    role: ['Участник', 'Участника'],
    description: ['Доступ к темам и описаниям'],
  },
  {
    id: ScheduleWidgetUserRoleRight.ReadSpecials,
    title: 'Спец. события',
    role: ['Суперучастник', 'Суперучастника'],
    description: ['Доступ к специальным событиям'],
  },
  {
    id: ScheduleWidgetUserRoleRight.Redact,
    title: 'Редактирование',
    role: ['Редактор', 'Редактора'],
    description: ['Редактирование чего-либо'],
  },
  {
    id: ScheduleWidgetUserRoleRight.RedactUsers,
    title: 'Редактирование участников',
    role: ['Администратор', 'Администратора'],
    description: ['Добавление, выдача прав'],
  },
  {
    id: ScheduleWidgetUserRoleRight.TotalRedact,
    title: 'Полный доступ',
    role: ['Управляющий', 'Управляющего'],
    description: ['Выдача прав, просмотр спец. информации'],
  },
];

export const scheduleWidgetUserRights = new ScheduleWidgetRightsCtrl(textList, rightsOrder);

///////////////////////////////

export enum CustomAttUseTaleId {
  Roles,
  Lists = 0.1,
  Users = 0.2,
}

export enum CustomAttUseRights {
  Titles = 1,
  Checkboxes,
  Roles,
  Lists,
  CheckTitles,
  Users,
  CheckUsers,
}

export const customAttUseRightsTitles: (ScheduleWidgetRightTexts<CustomAttUseRights> & {
  top?: CustomAttUseRights;
})[] = [
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
    id: CustomAttUseRights.Users,
    title: 'участников',
  },
  {
    id: CustomAttUseRights.CheckUsers,
    title: 'вып. участники',
    top: CustomAttUseRights.Users,
  },
  {
    id: CustomAttUseRights.Titles,
    title: 'заголовки',
  },
  {
    id: CustomAttUseRights.CheckTitles,
    title: 'вып. заголовки',
    top: CustomAttUseRights.Titles,
  },
];

export const customAttUseRights = new ScheduleWidgetRightsCtrl(customAttUseRightsTitles);

///////////////////////////////

export enum ScheduleWidgetRegType {
  Private = 0,
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
    description: ['Участники могут регистрироваться сами', 'Любой пользователь сможет иметь доступ к содержимому'],
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

export const scheduleWidgetRegTypeRights = new ScheduleWidgetRightsCtrl(scheduleWidgetRegTypeTitles);

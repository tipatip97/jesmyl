import { ScheduleWidgetRights } from "./complect";

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

import { IScheduleWidget, IScheduleWidgetUser, ScheduleWidgetPhotoKey } from 'shared/api';
import { JStorage } from '../JStorage';
import { NavigationStorage } from '../nav-configurer/Navigation.model';

type Photos = Record<ScheduleWidgetPhotoKey, string>;

export const scheduleWidgetPhotosStorage = new JStorage<NavigationStorage<Photos>>('scheduleWidgetPhotos');

export const getScheduleWidgetUserPhotoStorageKey = (
  user: IScheduleWidgetUser,
  schedule: IScheduleWidget,
): ScheduleWidgetPhotoKey => `${schedule.w}/mi:${user.mi}`;

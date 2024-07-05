import { ScheduleWidgetPhotoKey } from '../../models';
import { JStorage } from '../JStorage';
import { NavigationStorage } from '../nav-configurer/Navigation.model';
import { IScheduleWidget, IScheduleWidgetUser } from './ScheduleWidget.model';

type Photos = Record<ScheduleWidgetPhotoKey, string>;

export const scheduleWidgetPhotosStorage = new JStorage<NavigationStorage<Photos>, Photos>('scheduleWidgetPhotos');

export const getScheduleWidgetUserPhotoStorageKey = (
  user: IScheduleWidgetUser,
  schedule: IScheduleWidget,
): ScheduleWidgetPhotoKey => `${schedule.w}/mi:${user.mi}`;

import {
  IScheduleWidgetUserLogin,
  IScheduleWidgetUserMi,
  IScheduleWidgetUserTgId,
  IScheduleWidgetWid,
} from '../../models';
import { JStorage } from '../JStorage';
import { NavigationStorage } from '../nav-configurer/Navigation.model';
import { IScheduleWidget, IScheduleWidgetUser } from './ScheduleWidget.model';

type Key =
  | `${IScheduleWidgetWid}/mi:${IScheduleWidgetUserMi}`
  | `tg.${IScheduleWidgetUserTgId}`
  | `login.${IScheduleWidgetUserLogin}`;

type Photos = Record<Key, string>;

export const scheduleWidgetPhotosStorage = new JStorage<NavigationStorage<Photos>, Photos>('scheduleWidgetPhotos');

export const getScheduleWidgetUserPhotoStorageKey = (user: IScheduleWidgetUser, schedule: IScheduleWidget): Key =>
  user.login ? `login.${user.login}` : user.tgId ? `tg.${user.tgId}` : `${schedule.w}/mi:${user.mi}`;

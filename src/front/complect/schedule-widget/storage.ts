import { IScheduleWidgetUserMi, IScheduleWidgetUserTgId, IScheduleWidgetWid } from '../../models';
import { JStorage } from '../JStorage';
import { NavigationStorage } from '../nav-configurer/Navigation.model';

type Photos = Record<`${IScheduleWidgetWid}/mi:${IScheduleWidgetUserMi}` | `tg.${IScheduleWidgetUserTgId}`, string>;

export const scheduleWidgetPhotosStorage = new JStorage<NavigationStorage<Photos>, Photos>('scheduleWidgetPhotos');

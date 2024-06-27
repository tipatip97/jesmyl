import { IScheduleWidgetUserMi, IScheduleWidgetUserTgId, IScheduleWidgetWid } from '../../models';
import { JStorage } from '../JStorage';
import { NavigationStorage } from '../nav-configurer/Navigation.model';

type Photos = Record<`${IScheduleWidgetWid}/${IScheduleWidgetUserMi}` | `${IScheduleWidgetUserTgId}`, string>;

export const scheduleWidgetPhotosStorage = new JStorage<NavigationStorage<Photos>, Photos>('scheduleWidgetPhotos');

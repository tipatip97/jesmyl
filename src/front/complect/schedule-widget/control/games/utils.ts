import { scheduleWidgetUserRights, ScheduleWidgetUserRoleRight } from '../../../../models';
import { IScheduleWidgetUser } from '../../ScheduleWidget.model';

export const checkIsUserPhotoable = (user: IScheduleWidgetUser) =>
  scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.Read) &&
  !scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.ReadTitles);

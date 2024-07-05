import { ScheduleWidgetPhotoKey } from '../../../front/models';

export enum SokiSharedKey {
  ScheduleWidgetPhotos = 'ScheduleWidgetPhotos',
}

export type SokiSharedValueType = {
  [SokiSharedKey.ScheduleWidgetPhotos]: Record<ScheduleWidgetPhotoKey, string>;
};

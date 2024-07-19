import { ScheduleWidgetPhotoKey } from '../../apps/index/models/ScheduleWidget.model';

export enum SokiSharedKey {
  ScheduleWidgetPhotos = 'ScheduleWidgetPhotos',
}

export type SokiSharedValueType = {
  [SokiSharedKey.ScheduleWidgetPhotos]: Record<ScheduleWidgetPhotoKey, string>;
};

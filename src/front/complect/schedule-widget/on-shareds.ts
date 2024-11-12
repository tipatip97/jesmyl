import { MyLib } from 'front/utils';
import { SokiSharedDataValuesBox, SokiSharedKey } from 'shared/api';
import { scheduleWidgetPhotosStorage } from './storage';

export const onGetSharedScheduleWidgetData: SokiSharedDataValuesBox = {
  [SokiSharedKey.ScheduleWidgetPhotos]: (value => {
    MyLib.entries(value).forEach(([key, val]) => scheduleWidgetPhotosStorage.set(key, val));
  })!,
};

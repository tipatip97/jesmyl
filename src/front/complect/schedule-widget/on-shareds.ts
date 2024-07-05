import { SokiSharedKey } from '../../../back/complect/soki/values';
import { SokiSharedDataValuesBox } from '../../models';
import { MyLib } from '../my-lib/MyLib';
import { scheduleWidgetPhotosStorage } from './storage';

export const onGetSharedScheduleWidgetData: SokiSharedDataValuesBox = {
  [SokiSharedKey.ScheduleWidgetPhotos]: (value => {
    MyLib.entries(value).forEach(([key, val]) => scheduleWidgetPhotosStorage.set(key, val));
  })!,
};

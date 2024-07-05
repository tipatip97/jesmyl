import { SokiSharedKey } from '../../../../../back/complect/soki/values';
import { ScheduleWidgetPhotoKey, ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../../../models';
import { soki } from '../../../../soki';
import mylib from '../../../my-lib/MyLib';
import EvaSendButton from '../../../sends/eva-send-button/EvaSendButton';
import { IconCloudDownloadStrokeRounded } from '../../../the-icon/icons/cloud-download';
import { IconCloudUploadStrokeRounded } from '../../../the-icon/icons/cloud-upload';
import { getScheduleWidgetUserPhotoStorageKey, scheduleWidgetPhotosStorage } from '../../storage';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';

interface Props {
  prefix?: React.ReactNode;
}

export const ScheduleWidgetShareButtons = function ShareButtons({ prefix }: Props) {
  const rights = useScheduleWidgetRightsContext();

  return (
    rights.isCanTotalRedact && (
      <div className="flex flex-gap">
        {prefix}
        <EvaSendButton
          Icon={IconCloudUploadStrokeRounded}
          onSend={async () => {
            const value: Partial<Record<ScheduleWidgetPhotoKey, string>> = {};
            const users = rights.schedule.ctrl.users;

            for (const user of users) {
              if (
                !scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.Read) ||
                scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.ReadTitles)
              )
                continue;

              const key = getScheduleWidgetUserPhotoStorageKey(user, rights.schedule);
              const photo = await scheduleWidgetPhotosStorage.get(key);

              if (!photo) continue;

              value[key] = photo;
            }

            if (!mylib.keys(value).length) return;

            soki.send(
              {
                shareData: {
                  key: SokiSharedKey.ScheduleWidgetPhotos,
                  value,
                },
              },
              'index',
            );
          }}
        />
        <EvaSendButton
          Icon={IconCloudDownloadStrokeRounded}
          onSend={() => {
            return new Promise((resolve, reject) =>
              soki
                .send(
                  {
                    getShared: {
                      prefix: '' + rights.schedule.w,
                      key: SokiSharedKey.ScheduleWidgetPhotos,
                    },
                  },
                  'index',
                )
                .on(resolve, reject),
            );
          }}
        />
      </div>
    )
  );
};

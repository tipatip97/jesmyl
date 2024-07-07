import { useState } from 'react';
import { SokiSharedKey } from '../../../../../back/complect/soki/values';
import { ScheduleWidgetPhotoKey, ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../../../models';
import { soki } from '../../../../soki';
import Modal from '../../../modal/Modal/Modal';
import { ModalBody } from '../../../modal/Modal/ModalBody';
import { ModalHeader } from '../../../modal/Modal/ModalHeader';
import mylib from '../../../my-lib/MyLib';
import EvaSendButton from '../../../sends/eva-send-button/EvaSendButton';
import IconButton from '../../../the-icon/IconButton';
import { IconCloudDownloadStrokeRounded } from '../../../the-icon/icons/cloud-download';
import { IconCloudUploadStrokeRounded } from '../../../the-icon/icons/cloud-upload';
import { IconEyeStrokeRounded } from '../../../the-icon/icons/eye';
import { IScheduleWidgetUser } from '../../ScheduleWidget.model';
import { getScheduleWidgetUserPhotoStorageKey, scheduleWidgetPhotosStorage } from '../../storage';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import ScheduleWidgetUserPhoto from '../users/UserPhoto';

interface Props {
  prefix?: React.ReactNode;
}

const checkIsUserPhotoable = (user: IScheduleWidgetUser) =>
  scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.Read) &&
  !scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.ReadTitles);

export const ScheduleWidgetShareButtons = function ShareButtons({ prefix }: Props) {
  const rights = useScheduleWidgetRightsContext();
  const [isOpenGalery, setIsOpenGalery] = useState(false);

  return (
    <div className="flex flex-gap">
      {prefix}
      {isOpenGalery && (
        <Modal onClose={setIsOpenGalery}>
          <ModalHeader>Фотографии (локально)</ModalHeader>
          <ModalBody>
            {rights.schedule.ctrl.users.map(user => {
              if (!checkIsUserPhotoable(user)) return null;

              return (
                <div className="flex center column margin-big-gap-v">
                  <div>{user.fio}</div>
                  <ScheduleWidgetUserPhoto user={user} />
                </div>
              );
            })}
          </ModalBody>
        </Modal>
      )}
      <IconButton
        Icon={IconEyeStrokeRounded}
        onClick={() => setIsOpenGalery(true)}
      />
      <EvaSendButton
        Icon={IconCloudUploadStrokeRounded}
        onSend={async () => {
          const value: Partial<Record<ScheduleWidgetPhotoKey, string>> = {};
          const users = rights.schedule.ctrl.users;

          for (const user of users) {
            if (!checkIsUserPhotoable(user)) continue;

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
  );
};

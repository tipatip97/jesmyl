import { useEffect, useState } from 'react';
import { IScheduleWidgetUser } from '../../ScheduleWidget.model';
import { scheduleWidgetPhotosStorage } from '../../storage';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';

interface Props {
  user: IScheduleWidgetUser;
  justRenderItOnEmpty?: React.ReactNode;
}

export default function ScheduleWidgetUserPhoto({ user, justRenderItOnEmpty }: Props) {
  const rights = useScheduleWidgetRightsContext();
  const [src, setSrc] = useState('');

  useEffect(() => {
    (async () => {
      if (user.tgId) {
        const src = await scheduleWidgetPhotosStorage.get(`${user.tgId}`);
        if (src) setSrc(src);
        return scheduleWidgetPhotosStorage.on(`${user.tgId!}`, setSrc, '');
      }

      const src = await scheduleWidgetPhotosStorage.get(`${rights.schedule.w}/${user.mi}`);

      if (src) setSrc(src);

      return scheduleWidgetPhotosStorage.on(`${rights.schedule.w}/${user.mi}`, setSrc, '');
    })();
  }, [rights.schedule.w, user.mi, user.tgId]);

  if (justRenderItOnEmpty !== undefined) {
    return <>{!src && justRenderItOnEmpty}</>;
  }

  return (
    <>
      {src && (
        <img
          src={src}
          alt=""
        />
      )}
    </>
  );
}

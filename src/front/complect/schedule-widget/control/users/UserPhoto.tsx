import { useEffect, useState } from 'react';
import { IScheduleWidgetUser } from '../../ScheduleWidget.model';
import { getScheduleWidgetUserPhotoStorageKey, scheduleWidgetPhotosStorage } from '../../storage';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';

interface Props {
  user: IScheduleWidgetUser;
  justRenderItOnEmpty?: React.ReactNode;
  or?: React.ReactNode;
  className?: string;
}

export default function ScheduleWidgetUserPhoto({ user, justRenderItOnEmpty, className, or }: Props) {
  const rights = useScheduleWidgetRightsContext();
  const [src, setSrc] = useState('');

  useEffect(() => {
    const key = getScheduleWidgetUserPhotoStorageKey(user, rights.schedule);

    (async () => setSrc((await scheduleWidgetPhotosStorage.get(key)) || ''))();

    return scheduleWidgetPhotosStorage.on(key, setSrc, '');
  }, [rights.schedule, user]);

  if (justRenderItOnEmpty !== undefined) {
    return <>{src === '' && justRenderItOnEmpty}</>;
  }

  return (
    <>
      {src !== '' ? (
        <img
          src={src}
          alt=""
          className={className}
        />
      ) : (
        or
      )}
    </>
  );
}

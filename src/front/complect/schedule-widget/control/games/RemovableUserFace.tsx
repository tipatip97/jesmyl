import { useState } from 'react';
import Modal from '../../../modal/Modal/Modal';
import StrongEvaButton from '../../../strong-control/StrongEvaButton';
import { IconCancel02StrokeRounded } from '../../../the-icon/icons/cancel-02';
import { IconImage02StrokeRounded } from '../../../the-icon/icons/image-02';
import { IconLinkBackwardStrokeRounded } from '../../../the-icon/icons/link-backward';
import { IScheduleWidgetUser } from 'shared/api';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import ScheduleWidgetUserTakePhoto from '../users/TakePhoto';
import ScheduleWidgetUserPhoto from '../users/UserPhoto';
import { useSchWGamesScopeContext } from './games/Games';
import { ModalHeader } from '../../../modal/Modal/ModalHeader';
import IconButton from '../../../the-icon/IconButton';

interface Props {
  user: IScheduleWidgetUser;
  isStriked?: boolean;
  buttons?: React.ReactNode;
}

export default function ScheduleWidgetRemovableUserFace({ user, isStriked, buttons }: Props) {
  const rights = useScheduleWidgetRightsContext();
  const gamesScope = useSchWGamesScopeContext();
  const isUserStriked = isStriked ?? rights.schedule.games?.strikedUsers?.includes(user.mi);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <>
      {isPhotoOpen && (
        <Modal onClose={setIsPhotoOpen}>
          <ModalHeader>{user.fio}</ModalHeader>
          <ScheduleWidgetUserPhoto user={user} />
          <div className="flex center">
            <ScheduleWidgetUserTakePhoto user={user} />
          </div>
        </Modal>
      )}
      <div
        key={user.mi}
        className="flex flex-gap margin-gap-v"
      >
        <span className={isUserStriked ? 'color--ko' : ''}>{user.fio}</span>
        <ScheduleWidgetUserPhoto
          user={user}
          justRenderItOnEmpty={<ScheduleWidgetUserTakePhoto user={user} />}
          or={
            <IconButton
              Icon={IconImage02StrokeRounded}
              className="color--7"
              onClick={() => setIsPhotoOpen(true)}
            />
          }
        />
        {buttons}
        {isUserStriked ? (
          <StrongEvaButton
            scope={gamesScope}
            fieldName="strikedUsers"
            fieldValue={['.', '===', user.mi]}
            cud="D"
            Icon={IconLinkBackwardStrokeRounded}
            className="color--ok"
          />
        ) : (
          <StrongEvaButton
            scope={gamesScope}
            fieldName="strikedUsers"
            fieldValue={user.mi}
            Icon={IconCancel02StrokeRounded}
            className="color--ko"
          />
        )}
      </div>
    </>
  );
}

import { ReactNode } from 'react';
import { IconUserStrokeRounded } from '../../../../complect/the-icon/icons/user';
import { IconUserBlock01StrokeRounded } from '../../../../complect/the-icon/icons/user-block-01';
import { GamerRoomMember, GamerRoomMemberStatus } from '../Gamer.model';

export default function RoomMemberFace({
  member,
  description,
  descriptionPlus,
  onClick,
  isClickable = true,
  className,
}: {
  member: GamerRoomMember;
  description?: ReactNode;
  descriptionPlus?: ReactNode;
  onClick?: () => void;
  isClickable?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`face-item ${isClickable ? '' : 'not-pointer'} ${className || ''} flex between full-width`}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="face-logo">
        {member.isInactive ? <IconUserBlock01StrokeRounded /> : <IconUserStrokeRounded />}
      </div>
      <div className="face-title flex between full-width margin-big-gap">
        <span className="ellipsis">{member.name}</span>
        <span className="color--3 text-right">
          {description ?? (
            <>
              {member.status === GamerRoomMemberStatus.Admin
                ? 'Админ'
                : member.status === GamerRoomMemberStatus.Owner
                  ? 'Владелец'
                  : member.status === GamerRoomMemberStatus.Requester
                    ? 'Ожидает'
                    : ''}
              {descriptionPlus ? <div className="fade-05">{descriptionPlus}</div> : ''}
            </>
          )}
        </span>
      </div>
    </div>
  );
}

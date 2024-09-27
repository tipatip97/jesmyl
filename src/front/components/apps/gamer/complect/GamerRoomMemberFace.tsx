import { ReactNode } from 'react';
import { IconUserStrokeRounded } from '../../../../complect/the-icon/icons/user';
import { IconUserBlock01StrokeRounded } from '../../../../complect/the-icon/icons/user-block-01';
import { GamerRoomMember, GamerRoomMemberStatus } from '../Gamer.model';
import { FaceItem } from '../../../../complect/FaceItem';

interface Props {
  member: GamerRoomMember;
  description?: ReactNode;
  descriptionPlus?: ReactNode;
  onClick?: () => void;
  isClickable?: boolean;
  className?: string;
  icon?: ReactNode;
}

export default function RoomMemberFace({
  member,
  description,
  descriptionPlus,
  onClick,
  isClickable = true,
  className,
  icon,
}: Props) {
  return (
    <FaceItem
      className={`${isClickable ? '' : 'not-pointer'} ${className || ''} flex between full-width`}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="face-logo">
        {icon ? icon : member.isInactive ? <IconUserBlock01StrokeRounded /> : <IconUserStrokeRounded />}
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
    </FaceItem>
  );
}

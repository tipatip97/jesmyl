import { ReactNode } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import { SpyRoomMember, SpyRoomMemberStatus } from "../Spy.model";

export default function RoomMemberFace({
  member,
  description,
  descriptionPlus,
  onClick,
}: {
  member: SpyRoomMember;
  description?: ReactNode;
  descriptionPlus?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="face-item flex between full-width" onClick={onClick}>
      <div className="face-logo">
        <EvaIcon name={member.isInactive ? "slash" : "person-outline"} />
      </div>
      <div className="face-title flex between full-width margin-big-gap">
        <span className="ellipsis">{member.name}</span>
        <span className="color--3 text-right">
          {description ?? (
            <>
              {member.status === SpyRoomMemberStatus.Admin
                ? "Админ"
                : member.status === SpyRoomMemberStatus.Owner
                ? "Владелец"
                : member.status === SpyRoomMemberStatus.Requester
                ? "Ожидает"
                : ""}
              {descriptionPlus ? <div className="fade-05">{descriptionPlus}</div> : ""}
            </>
          )}
        </span>
      </div>
    </div>
  );
}

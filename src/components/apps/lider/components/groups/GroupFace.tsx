import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import LeaderGroup from "./Group";
import useLeaderGroups from "./useGroups";

export default function GroupFace({
  group,
  onMoreClick,
}: {
  group: LeaderGroup;
  onMoreClick?: () => void;
}) {
  const { goToGroup } = useLeaderGroups();

  return (
    <div
      className="face-item flex between"
      onClick={(event) => {
        event.stopPropagation();
        goToGroup(group);
      }}
    >
      <div className="face-wrapper">
        <span className="face-logo">
          <EvaIcon name="people-outline" />
        </span>
        <span className={`face-title ${group.isInactive ? "text-strike" : ""}`}>
          {group.name}
          {" - "}
          <span className="color--3">
            {group.mentors
              .map((mentor) =>
                mentor.name.replace(/([А-ЯЁ])[а-яё]+ (.+)/, "$2 $1")
              )
              .join(", ") || "Лидеров нет"}
          </span>
        </span>
      </div>
      {onMoreClick && (
        <EvaIcon
          name="more-vertical"
          onClick={(event) => {
            event.stopPropagation();
            onMoreClick();
          }}
        />
      )}
    </div>
  );
}

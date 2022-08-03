import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import LeaderGroup from "./Group";
import LeaderGroupMaster from "./GroupMaster";

export default function LeaderGroupMore({ group }: { group: LeaderGroup }) {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <>
      <div
        className="abs-item"
        onClick={() =>
          openFullscreenContent((close) => (
            <LeaderGroupMaster close={close} group={group} />
          ))
        }
      >
        <EvaIcon name="edit-outline" className="abs-icon" />
        <div>Редактировать</div>
        <div className="abs-action" />
      </div>
    </>
  );
}

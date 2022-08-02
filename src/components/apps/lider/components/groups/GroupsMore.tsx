import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import PrintableBottomItem from "../PrintableBottomItem";
import QRQuest from "../templates/QRQuest";
import LeaderGroupMaster from "./GroupMaster";

export default function LeaderGroupsMore() {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={() =>
          openFullscreenContent((close) => <LeaderGroupMaster close={close} />)
        }
      >
        <EvaIcon name="plus-circle-outline" className="abs-icon" />
        <div>Новая группа</div>
        <div className="abs-action" />
      </div>
      <PrintableBottomItem title="QR квест точки" node={<QRQuest />} />
    </>
  );
}

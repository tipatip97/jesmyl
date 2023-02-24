import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import LeaderGroup from "./Group";
import LeaderGroupMaster from "./GroupMaster";

export default function LeaderGroupMore({ group }: { group: LeaderGroup }) {
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Редактировать',
      icon: "edit-outline",
      onClick: () =>
        openFullscreenContent((close) => (
          <LeaderGroupMaster close={close} group={group} />
        )),
    }]
  });
}

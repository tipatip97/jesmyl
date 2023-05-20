import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import LeaderGroupMaster from "./GroupMaster";
import { LeaderGroupImportable } from "./Groups.model";

export default function LeaderGroupMore({ group }: { group: LeaderGroupImportable }) {
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

import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import PrintableBottomItem from "../PrintableBottomItem";
import QRQuest from "../templates/QRQuest";
import LeaderGroupMaster from "./GroupMaster";

export default function LeaderGroupsMore({ close }: { close: () => void }) {
  const { openFullscreenContent } = useFullscreenContent();

  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return <>{
    prepareAbsoluteBottomPopupContent({
      items: [{
        title: 'Новая группа',
        icon: "plus-circle-outline",
        onClick: () =>
          openFullscreenContent((close) => <LeaderGroupMaster close={close} />),
      }]
    })}
    <PrintableBottomItem
      title="QR квест точки"
      node={<QRQuest />}
      close={close}
    />
  </>;
}

import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import LeaderGameMaster from "./GameMaster";

export default function GamesMore() {
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Новая командная игра',
      icon: "people-outline",
      onClick: () =>
        openFullscreenContent((close) => <LeaderGameMaster close={close} />),
    }]
  });
}

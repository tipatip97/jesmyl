import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../complect/fullscreen-content/useFullscreenContent";
import NewLeaderContextMaster from "./components/contexts/NewContextMaster";
import HumanMaster from "./components/people/HumanMaster";
import { leaderExer } from "./Leader.store";
import useLeaderNav from "./useLeaderNav";

export default function GeneralMore({ close }: { close: () => void }) {
  const { openFullscreenContent } = useFullscreenContent();
  const { setAppRouteData } = useLeaderNav();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [
      {
        title: 'Добавить личность',
        icon: "person-add-outline",
        onClick: () =>
          openFullscreenContent((close) => <HumanMaster close={close} />),
      },
      leaderExer.actionAccessedOrNull("addContext") &&
      {
        title: 'Новый контекст',
        icon: "map-outline",
        onClick: () =>
          openFullscreenContent((close) => (
            <NewLeaderContextMaster close={close} />
          )),
      },
      {
        title: 'Покинуть контекст',
        icon: "map-outline",
        onClick: () => setAppRouteData({ contextw: undefined }),
      }
    ]
  }
  );
}

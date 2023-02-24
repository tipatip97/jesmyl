import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../complect/fullscreen-content/useFullscreenContent";
import modalService from "../../../complect/modal/Modal.service";
import NewLeaderContextMaster from "./components/contexts/NewContextMaster";
import useLeaderContexts from "./components/contexts/useContexts";
import HumanMaster from "./components/people/HumanMaster";
import { leaderExer } from "./Leader.store";

export default function GeneralMore({ close }: { close: () => void }) {
  const { openFullscreenContent } = useFullscreenContent();
  const { contexts, setCurrentContext, ccontext } = useLeaderContexts();
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
        title: 'Сменить контекст',
        icon: "map-outline",
        onClick: () =>
          contexts?.list &&
          modalService.open({
            title: "Выбор контекста",
            inputs: contexts.list.map(({ name, wid }) => {
              return {
                type: "button",
                value: name,
                disabled: ccontext && wid === ccontext.wid,
                onClick: () => setCurrentContext(wid),
              };
            }),
          }),
      }]
  }
  );
}

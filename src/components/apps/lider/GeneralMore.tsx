import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../complect/fullscreen-content/useFullscreenContent";
import modalService from "../../../complect/modal/Modal.service";
import NewLeaderContextMaster from "./components/contexts/NewContextMaster";
import useLeaderContexts from "./components/contexts/useContexts";
import HumanMaster from "./components/people/HumanMaster";
import PrintableBottomItem from "./components/PrintableBottomItem";
import FortBayardPassport from "./components/templates/FortBayardPassport";
import QRQuest from "./components/templates/QRQuest";
import { liderExer } from "./Lider.store";

export default function GeneralMore() {
  const { openFullscreenContent } = useFullscreenContent();
  const { contexts, setCurrentContext, ccontext } = useLeaderContexts();

  return (
    <>
      <div
        className="abs-item"
        onClick={() =>
          openFullscreenContent((close) => <HumanMaster close={close} />)
        }
      >
        <EvaIcon name="person-add-outline" className="abs-icon" />
        <div>Добавить личность</div>
        <div className="abs-action" />
      </div>
      <PrintableBottomItem
        title="Распечатать Паспорт Форт-Баярда"
        node={<FortBayardPassport />}
      />
      <PrintableBottomItem
        title="Распечатать QR квест-точки"
        node={<QRQuest />}
      />
      {liderExer.actionAccessedOrNull("addContext") && (
        <div
          className="abs-item pointer"
          onClick={() =>
            openFullscreenContent((close) => (
              <NewLeaderContextMaster close={close} />
            ))
          }
        >
          <EvaIcon name="map-outline" className="abs-icon" />
          <div>Новый контекст</div>
          <div className="abs-action"></div>
        </div>
      )}
      <div
        className="abs-item pointer"
        onClick={() =>
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
          })
        }
      >
        <EvaIcon name="map-outline" className="abs-icon" />
        <div>Сменить контекст</div>
        <div className="abs-action"></div>
      </div>
    </>
  );
}

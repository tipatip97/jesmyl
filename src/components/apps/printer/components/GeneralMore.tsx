import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import PrintableBottomItem from "./PrintableBottomItem";
import HumanMaster from "./RedactHuman";
import "./Styles.scss";
import AdaptationQRs from "./templates/AdaptationQRs";
import FortBayardPassport from "./templates/FortBayardPassport";

export default function GeneralMore() {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <>
      <div
        className="abs-item"
        onClick={() =>
          openFullscreenContent((close) => <HumanMaster close={close} />)
        }
      >
        <EvaIcon name="edit-outline" className="abs-icon" />
        <div>Добавить участника</div>
        <div className="abs-action" />
      </div>
      <PrintableBottomItem
        title="Распечатать Паспорт Форт-Баярда"
        node={<FortBayardPassport />}
      />
      <PrintableBottomItem
        title="Распечатать QR Адаптации"
        node={<AdaptationQRs />}
      />
    </>
  );
}

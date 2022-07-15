import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import { Human } from "../Printer.model";
import PrintableBottomItem from "./PrintableBottomItem";
import HumanMaster from "./RedactHuman";
import "./Styles.scss";
import AdaptationPage from "./templates/AdaptationPage";

export default function HumanMore({ human }: { human: Human }) {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <>
      <div
        className="abs-item"
        onClick={() =>
          openFullscreenContent((close) => (
            <HumanMaster close={close} human={human} />
          ))
        }
      >
        <EvaIcon name="edit-outline" className="abs-icon" />
        <div>Редактировать</div>
        <div className="abs-action" />
      </div>
      <PrintableBottomItem
        title="Распечатать Адаптацию"
        node={<AdaptationPage bag={human} />}
      />
    </>
  );
}

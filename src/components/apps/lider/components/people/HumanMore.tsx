import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import PrintableBottomItem from "../PrintableBottomItem";
import AdaptationPage from "../templates/AdaptationPage";
import Human from "./Human";
import HumanMaster from "./HumanMaster";

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
        title="Распечатать Допуск к путешествию"
        node={<AdaptationPage human={human} />}
      />
    </>
  );
}

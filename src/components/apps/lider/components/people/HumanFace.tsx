import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import Human from "./Human";
import HumanMore from "./HumanMore";

export default function HumanFace({ human }: { human: Human }) {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <div
      className="face-item"
      onClick={(event) => {
        event.stopPropagation();
        openAbsoluteBottomPopup(<HumanMore human={human} />);
      }}
    >
      <span className="face-logo">
        <EvaIcon name={`${human.isMan ? "car" : "gift"}-outline`} />
      </span>
      <span className={`face-title ${human.isInactive ? "text-strike" : ""}`}>
        {`${human.name}${human.ufp ? `, ${human.ufp}` : ""}`}
      </span>
    </div>
  );
}

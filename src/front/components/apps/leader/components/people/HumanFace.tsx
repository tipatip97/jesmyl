import { ReactNode } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useLeaderContexts from "../contexts/useContexts";
import Human from "./Human";
import HumanMore from "./HumanMore";

export default function HumanFace({
  human,
  onMoreClick,
  asMore,
  humanMoreAdditions,
}: {
  human: Human;
  onMoreClick?: () => void;
  asMore?: (human: Human) => ReactNode;
  humanMoreAdditions?: (human: Human) => ReactNode;
}) {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { ccontext } = useLeaderContexts();
  const groups = ccontext?.groups?.filter((group) =>
    group.members.some(({ wid }) => wid === human.wid)
  );
  const groupTitles = groups?.length
    ? `; ${groups.map((group) => group.name).join(", ")}`
    : "";

  return (
    <div
      className="face-item flex between"
      onClick={(event) => {
        event.stopPropagation();
        openAbsoluteBottomPopup(
          <HumanMore human={human} humanMoreAdditions={humanMoreAdditions} />
        );
      }}
    >
      <div className="face-wrapper">
        <span className="face-logo">
          <EvaIcon name={`${human.isMan ? "car" : "gift"}-outline`} />
        </span>
        <span className={`face-title ${human.isInactive ? "text-strike" : ""}`}>
          <span className="color--3">{human.name}</span>
          {`${groupTitles}${human.ufp ? `; ${human.ufp}` : ""}`}
        </span>
      </div>
      {asMore?.(human) ||
        (onMoreClick && (
          <EvaIcon
            name="more-vertical"
            onClick={(event) => {
              event.stopPropagation();
              onMoreClick();
            }}
          />
        ))}
    </div>
  );
}

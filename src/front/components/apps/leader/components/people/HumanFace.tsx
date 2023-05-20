import { ReactNode } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useLeaderContexts from "../contexts/useContexts";
import HumanMore from "./HumanMore";
import { HumanImportable } from "./People.model";

export default function HumanFace({
  human,
  onMoreClick,
  asMore,
  humanMoreAdditions,
}: {
  human: HumanImportable;
  onMoreClick?: () => void;
  asMore?: (human: HumanImportable) => ReactNode;
  humanMoreAdditions?: (human: HumanImportable) => ReactNode;
}) {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { ccontext } = useLeaderContexts();
  const groups = ccontext?.groups?.filter((group) =>
    group.members.some(memberw => memberw === human.w)
  );
  const groupTitles = groups?.length
    ? `; ${groups.map(group => group.name).join(", ")}`
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
          {`${groupTitles}${human.ufp1 + human.ufp2 ? `; ${(human.ufp1 + human.ufp2) / 2}` : ""}`}
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

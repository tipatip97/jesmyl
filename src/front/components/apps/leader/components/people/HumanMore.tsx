import { ReactNode } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import Human from "./Human";
import HumanMaster from "./HumanMaster";

export default function HumanMore({
  human,
  humanMoreAdditions,
}: {
  human: Human;
  humanMoreAdditions?: (human: Human) => ReactNode;
}) {
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return <>{prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Редактировать',
      icon: "edit-outline",
      onClick: () =>
        openFullscreenContent((close) => (
          <HumanMaster close={close} human={human} />
        )),
    }]
  })}
    {typeof humanMoreAdditions === "function"
      ? humanMoreAdditions(human)
      : humanMoreAdditions}
  </>;
}

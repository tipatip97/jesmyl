import { ReactNode } from "react";
import { renderComponentInNewWindow } from "../../../../..";
import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";

export default function PrintableBottomItem({
  node,
  title,
  close,
}: {
  node: ReactNode;
  title: string;
  close: () => void;
}) {
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return prepareAbsoluteBottomPopupContent({
    items: [{
      title,
      icon: "printer-outline",
      onClick: () => renderComponentInNewWindow(node),
      rightNode: <EvaIcon
        name="eye-outline"
        onClick={(event) => {
          event.stopPropagation();
          openFullscreenContent(node, true);
          close();
        }}
      />
    }]
  });
}

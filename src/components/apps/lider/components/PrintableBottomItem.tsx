import { ReactNode } from "react";
import { renderComponentInNewWindow } from "../../../..";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";

export default function PrintableBottomItem({
  node,
  title,
}: {
  node: ReactNode;
  title: string;
}) {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <div
      className="abs-item pointer"
      onClick={() => renderComponentInNewWindow(node)}
    >
      <EvaIcon name="printer-outline" className="abs-icon" />
      <div>{title}</div>
      <div className="abs-action">
        <EvaIcon
          name="eye-outline"
          onClick={(event) => {
            event.stopPropagation();
            openFullscreenContent(node, true);
          }}
        />
      </div>
    </div>
  );
}

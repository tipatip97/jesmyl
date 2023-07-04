import { ReactNode } from "react";
import { renderComponentInNewWindow } from "../../../../..";
import { BottomPopupContenterPreparer } from "../../../../complect/absolute-popup/useBottomPopup";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullContent from "../../../../complect/fullscreen-content/useFullContent";

export default function PrintableBottomItem({
  node,
  title,
  close,
  prepare,
}: {
  node: ReactNode,
  title: string,
  close: () => void,
  prepare: BottomPopupContenterPreparer,
}) {
  const [printerNode, openFullscreenContent] = useFullContent(() => node);

  return <>
    {printerNode}
    {prepare({
      items: [{
        title,
        icon: "printer-outline",
        onClick: () => renderComponentInNewWindow(node),
        rightNode: <EvaIcon
          name="eye-outline"
          onClick={(event) => {
            event.stopPropagation();
            openFullscreenContent();
            close();
          }}
        />
      }]
    })}
  </>;
}

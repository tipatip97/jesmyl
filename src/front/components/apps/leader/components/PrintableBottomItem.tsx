import { ReactNode } from 'react';
import { renderComponentInNewWindow } from '../../../../..';
import { BottomPopupContenterPreparer } from '../../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../../complect/fullscreen-content/useFullContent';
import { IconEyeStrokeRounded } from '@icons/eye';
import { IconPrinterStrokeRounded } from '@icons/printer';

export default function PrintableBottomItem({
  node,
  title,
  close,
  prepare,
}: {
  node: ReactNode;
  title: string;
  close: () => void;
  prepare: BottomPopupContenterPreparer;
}) {
  const [printerNode, openFullscreenContent] = useFullContent(() => node);

  return (
    <>
      {printerNode}
      {prepare({
        items: [
          {
            title,
            Icon: IconPrinterStrokeRounded,
            onClick: () => renderComponentInNewWindow(node),
            rightNode: (
              <IconEyeStrokeRounded
                onClick={event => {
                  event.stopPropagation();
                  openFullscreenContent();
                  close();
                }}
              />
            ),
          },
        ],
      })}
    </>
  );
}

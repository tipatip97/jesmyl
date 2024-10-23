import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { IconLink02StrokeRounded } from '../../../../../../../../../complect/the-icon/icons/link-02';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsAnchor = ({ ccom, ord, onClose }: OrdersRedactorOrderToolsProps) => {
  const exec = useExerExec();

  return (
    <>
      <BottomPopupItem
        Icon={IconLink02StrokeRounded}
        title={`Ссылка на ${ord.me.header()}`}
        onClick={() => {
          exec(ccom.addOrderAnchor(ord));
          onClose(false);
        }}
      />
    </>
  );
};

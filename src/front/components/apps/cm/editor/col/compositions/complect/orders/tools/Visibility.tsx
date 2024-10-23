import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { IconViewStrokeRounded } from '../../../../../../../../../complect/the-icon/icons/view';
import { IconViewOffStrokeRounded } from '../../../../../../../../../complect/the-icon/icons/view-off';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsVisibility = ({ onClose, ord, blockHeader }: OrdersRedactorOrderToolsProps) => {
  const exec = useExerExec();

  return (
    <BottomPopupItem
      Icon={ord.isVisible ? IconViewOffStrokeRounded : IconViewStrokeRounded}
      title={ord.isVisible ? 'Скрыть блок' : 'Показать блок'}
      onClick={async () => {
        onClose(false);
        exec(
          ord.setField('v', ord.antiIsVisible, {
            b: blockHeader,
            def: 1,
          }),
        );
      }}
    />
  );
};

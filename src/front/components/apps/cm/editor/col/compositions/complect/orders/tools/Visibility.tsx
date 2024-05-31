import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import IconButton from '../../../../../../../../../complect/the-icon/IconButton';
import { IconViewStrokeRounded } from '@icons/view';
import { IconViewOffStrokeRounded } from '@icons/view-off';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsVisibility = ({
  props: { ccom, ord, blockHeader },
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
  const exec = useExerExec();

  return (
    <IconButton
      Icon={ord.isVisible ? IconViewOffStrokeRounded : IconViewStrokeRounded}
      postfix={ord.isVisible ? 'Скрыть блок' : 'Показать блок'}
      onClick={async () => {
        closePopup();
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

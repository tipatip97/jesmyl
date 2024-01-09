import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
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
    <EvaButton
      name={`eye${ord.isVisible ? '-off' : ''}-outline`}
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

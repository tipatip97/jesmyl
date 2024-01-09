import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import useExer from '../../../../../../../../../complect/exer/useExer';
import { cmExer } from '../../../../../../Cm.store';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsVisibility = ({
  props: { ccom, ord, blockHeader },
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
  const { exec } = useExer(cmExer);

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

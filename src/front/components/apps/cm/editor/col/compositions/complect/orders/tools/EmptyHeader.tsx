import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import useExer from '../../../../../../../../../complect/exer/useExer';
import { cmExer } from '../../../../../../Cm.store';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsEmptyHeader = ({
  props,
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
  const { exec } = useExer(cmExer);

  return (
    <>
      <EvaButton
        name="message-square-outline"
        postfix={`${props.ord.isEmptyHeader ? 'Вернуть' : 'Убрать'} название блока`}
        onClick={() => {
          exec(
            props.ord.setField('e', props.ord.isEmptyHeader ? 0 : 1, {
              def: 0,
            }),
          );
          closePopup();
        }}
      />
    </>
  );
};

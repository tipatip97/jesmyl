import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsEmptyHeader = ({
  props,
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
  const exec = useExerExec();

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

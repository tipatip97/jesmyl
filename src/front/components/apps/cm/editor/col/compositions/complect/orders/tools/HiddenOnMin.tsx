import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsHiddenOnMin = ({
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
        name="link-outline"
        postfix={`${props.ord.isOpened ? 'Скрывать' : 'Показывать'} в свёрнутом режиме`}
        onClick={() => {
          exec(
            props.ord.setField('o', props.ord.isOpened ? 0 : 1, {
              def: 0,
            }),
          );
          closePopup();
        }}
      />
    </>
  );
};

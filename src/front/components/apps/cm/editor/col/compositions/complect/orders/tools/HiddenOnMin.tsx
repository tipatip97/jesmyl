import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import useExer from '../../../../../../../../../complect/exer/useExer';
import { cmExer } from '../../../../../../Cm.store';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsHiddenOnMin = ({
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

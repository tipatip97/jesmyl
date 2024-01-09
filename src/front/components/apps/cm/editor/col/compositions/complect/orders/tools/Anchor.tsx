import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import useExer from '../../../../../../../../../complect/exer/useExer';
import { cmExer } from '../../../../../../Cm.store';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsAnchor = ({
  props: { ccom, ord },
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
        postfix={`Ссылка на ${ord.top.header?.()}`}
        onClick={() => {
          exec(ccom.addOrderAnchor(ord));
          closePopup();
        }}
      />
    </>
  );
};

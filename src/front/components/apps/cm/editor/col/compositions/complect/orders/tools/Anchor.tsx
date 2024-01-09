import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsAnchor = ({
  props: { ccom, ord },
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
        postfix={`Ссылка на ${ord.top.header?.()}`}
        onClick={() => {
          exec(ccom.addOrderAnchor(ord));
          closePopup();
        }}
      />
    </>
  );
};

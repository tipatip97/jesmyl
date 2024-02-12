import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { useConfirm } from '../../../../../../../../../complect/modal/confirm/useConfirm';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsAnchorDelete = ({
  props: { ccom, ord, blockHeader },
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
  const exec = useExerExec();
  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      {confirmNode}
      <EvaButton
        name="trash-outline"
        className="color--ko"
        postfix={`Удалить ${ord.isAnchor ? 'ссылку на ' : ''} ${blockHeader}`}
        onClick={async () => {
          if (
            await confirm(
              `Удалить ${blockHeader}?${
                (ord.positions || []).length
                  ? ' Данное действие повлечёт за собой уничтожение аппликатуры в данном блоке.'
                  : ''
              }`,
            )
          ) {
            exec(ccom.removeOrderBlock(ord));
            closePopup();
          }
        }}
      />
    </>
  );
};

import IconButton from '../../../../../../../../../complect/the-icon/IconButton';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { useConfirm } from '../../../../../../../../../complect/modal/confirm/useConfirm';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';
import { IconDelete02StrokeRounded } from '@icons/delete-02';

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
      <IconButton
        Icon={IconDelete02StrokeRounded}
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

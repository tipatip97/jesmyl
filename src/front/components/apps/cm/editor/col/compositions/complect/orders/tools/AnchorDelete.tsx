import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { useConfirm } from '../../../../../../../../../complect/modal/confirm/useConfirm';
import { IconDelete02StrokeRounded } from '../../../../../../../../../complect/the-icon/icons/delete-02';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsAnchorDelete = ({
  ccom,
  ord,
  blockHeader,
  onClose,
}: OrdersRedactorOrderToolsProps) => {
  const exec = useExerExec();
  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      {confirmNode}
      <BottomPopupItem
        Icon={IconDelete02StrokeRounded}
        className="color--ko"
        title={`Удалить ${ord.isAnchor ? 'ссылку на ' : ''} ${blockHeader}`}
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
            onClose(false);
          }
        }}
      />
    </>
  );
};

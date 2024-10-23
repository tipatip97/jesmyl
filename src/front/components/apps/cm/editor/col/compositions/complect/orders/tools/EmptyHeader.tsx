import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { IconMessage01StrokeRounded } from '../../../../../../../../../complect/the-icon/icons/message-01';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsEmptyHeader = (props: OrdersRedactorOrderToolsProps) => {
  const exec = useExerExec();

  return (
    <>
      <BottomPopupItem
        Icon={IconMessage01StrokeRounded}
        title={`${props.ord.isEmptyHeader ? 'Вернуть' : 'Убрать'} название блока`}
        onClick={() => {
          exec(
            props.ord.setField('e', props.ord.isEmptyHeader ? 0 : 1, {
              def: 0,
            }),
          );
          props.onClose(false);
        }}
      />
    </>
  );
};

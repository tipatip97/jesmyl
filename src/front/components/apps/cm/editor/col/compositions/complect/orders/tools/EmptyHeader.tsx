import IconButton from '../../../../../../../../../complect/the-icon/IconButton';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { IconMessage01StrokeRounded } from '../../../../../../../../../complect/the-icon/icons/message-01';
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
      <IconButton
        Icon={IconMessage01StrokeRounded}
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

import IconButton from '../../../../../../../../../complect/the-icon/IconButton';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';
import { IconLink02StrokeRounded } from '@icons/link-02';

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
      <IconButton
        Icon={IconLink02StrokeRounded}
        postfix={`Ссылка на ${ord.top.header?.()}`}
        onClick={() => {
          exec(ccom.addOrderAnchor(ord));
          closePopup();
        }}
      />
    </>
  );
};

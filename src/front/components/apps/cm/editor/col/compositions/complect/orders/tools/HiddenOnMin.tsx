import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import IconButton from '../../../../../../../../../complect/the-icon/IconButton';
import { IconLink02StrokeRounded } from '../../../../../../../../../complect/the-icon/icons/link-02';
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
      <IconButton
        Icon={IconLink02StrokeRounded}
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

import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import { IconLink02StrokeRounded } from '../../../../../../../../../complect/the-icon/icons/link-02';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsHiddenOnMin = (props: OrdersRedactorOrderToolsProps) => {
  const exec = useExerExec();

  return (
    <>
      <BottomPopupItem
        Icon={IconLink02StrokeRounded}
        title={`${props.ord.isOpened ? 'Скрывать' : 'Показывать'} в свёрнутом режиме`}
        onClick={() => {
          exec(
            props.ord.setField('o', props.ord.isOpened ? 0 : 1, {
              def: 0,
            }),
          );
          props.onClose(false);
        }}
      />
    </>
  );
};

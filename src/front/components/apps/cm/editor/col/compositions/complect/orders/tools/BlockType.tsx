import IconButton from '../../../../../../../../../complect/the-icon/IconButton';
import IconCheckbox from '../../../../../../../../../complect/the-icon/IconCheckbox';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import useModal from '../../../../../../../../../complect/modal/useModal';
import { ChordVisibleVariant } from '../../../../../../Cm.model';
import { blockStyles } from '../../../../../../col/com/block-styles/BlockStyles';
import TheOrder from '../../../../../../col/com/order/TheOrder';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';
import { IconCubeStrokeRounded } from '../../../../../../../../../complect/the-icon/icons/cube';

export const OrdersRedactorOrderToolsBlockType = ({
  props: { ccom, ord, ordi },
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
  const exec = useExerExec();

  const [modalNode, openModal] = useModal(({ header, body }, close) => {
    return (
      <>
        {header(<>Тип блока</>)}
        {body(
          <>
            <TheOrder
              orderUnit={ord}
              orderUniti={ordi}
              chordVisibleVariant={ChordVisibleVariant.Maximal}
              com={ccom}
            />
            {blockStyles?.styles.map(styleBlock => {
              if ((ordi === 0 || ord.top.isTarget) && styleBlock.isInherit) return null;

              const newBlockn = styleBlock.title[ccom.langi || 0];
              return (
                <IconCheckbox
                  key={styleBlock.key}
                  checked={styleBlock.key === ord.type}
                  disabled={styleBlock.key === ord.type}
                  className="margin-gap-t"
                  onChange={() => {
                    exec(ord.setField('s', styleBlock.key, { newBlockn }, exec));
                    close();
                    closePopup();
                  }}
                  postfix={newBlockn}
                />
              );
            })}
          </>,
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={IconCubeStrokeRounded}
        postfix="Тип блока"
        onClick={openModal}
      />
    </>
  );
};

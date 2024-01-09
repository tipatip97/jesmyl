import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import EvaCheckbox from '../../../../../../../../../complect/eva-icon/EvaCheckbox';
import useExer from '../../../../../../../../../complect/exer/useExer';
import useModal from '../../../../../../../../../complect/modal/useModal';
import { ChordVisibleVariant } from '../../../../../../Cm.model';
import { cmExer } from '../../../../../../Cm.store';
import { blockStyles } from '../../../../../../col/com/block-styles/BlockStyles';
import TheOrder from '../../../../../../col/com/order/TheOrder';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsBlockType = ({
  props: { ccom, ord, ordi },
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
  const { exec } = useExer(cmExer);

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
                <EvaCheckbox
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
      <EvaButton
        name="cube-outline"
        postfix="Тип блока"
        onClick={openModal}
      />
    </>
  );
};

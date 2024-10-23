import { useState } from 'react';
import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import Modal from '../../../../../../../../../complect/modal/Modal/Modal';
import { ModalBody } from '../../../../../../../../../complect/modal/Modal/ModalBody';
import { ModalHeader } from '../../../../../../../../../complect/modal/Modal/ModalHeader';
import IconCheckbox from '../../../../../../../../../complect/the-icon/IconCheckbox';
import { IconCubeStrokeRounded } from '../../../../../../../../../complect/the-icon/icons/cube';
import { ChordVisibleVariant } from '../../../../../../Cm.model';
import { blockStyles } from '../../../../../../col/com/block-styles/BlockStyles';
import TheOrder from '../../../../../../col/com/order/TheOrder';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsBlockType = ({ ccom, ord, ordi, onClose }: OrdersRedactorOrderToolsProps) => {
  const exec = useExerExec();
  const [isModalOpen, setIsModalOpen] = useState<unknown>(false);

  return (
    <>
      <BottomPopupItem
        Icon={IconCubeStrokeRounded}
        title="Тип блока"
        onClick={setIsModalOpen}
      />
      {isModalOpen && (
        <Modal onClose={setIsModalOpen}>
          <ModalHeader>Тип блока</ModalHeader>
          <ModalBody>
            <TheOrder
              orderUnit={ord}
              orderUniti={ordi}
              chordVisibleVariant={ChordVisibleVariant.Maximal}
              com={ccom}
            />
            {blockStyles?.styles.map(styleBlock => {
              if ((ordi === 0 || ord.me.isTarget) && styleBlock.isInherit) return null;

              const newBlockn = styleBlock.title[ccom.langi || 0];
              return (
                <IconCheckbox
                  key={styleBlock.key}
                  checked={styleBlock.key === ord.type}
                  disabled={styleBlock.key === ord.type}
                  className="margin-gap-t"
                  onChange={() => {
                    exec(ord.setField('s', styleBlock.key, { newBlockn }, exec));
                    setIsModalOpen(false);
                    onClose(false);
                  }}
                  postfix={newBlockn}
                />
              );
            })}
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

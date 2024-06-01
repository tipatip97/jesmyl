import { useState } from 'react';
import { useExerExec } from '../../../../../../../../complect/exer/hooks/useExer';
import useModal from '../../../../../../../../complect/modal/useModal';
import mylib from '../../../../../../../../complect/my-lib/MyLib';
import IconButton from '../../../../../../../../complect/the-icon/IconButton';
import IconCheckbox from '../../../../../../../../complect/the-icon/IconCheckbox';
import { IconCancel01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/cancel-01';
import { IconCheckmarkCircle02StrokeRounded } from '../../../../../../../../complect/the-icon/icons/checkmark-circle-02';
import { IconNotification01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/notification-01';
import { ChordVisibleVariant } from '../../../../../Cm.model';
import ComOrders from '../../../../../col/com/orders/ComOrders';
import { EditableCom } from '../../EditableCom';

const dotts = '.'
  .repeat(12)
  .split('')
  .map((_, i) => i)
  .reverse();

export const EditableCompositionMainTon = ({ ccom }: { ccom: EditableCom }) => {
  const exec = useExerExec();
  const [initialPosition] = useState(ccom.transPosition);

  const [modalNode, openModal] = useModal(({ header, body, footer }, close) => {
    return (
      <>
        {header(<>Тональность песни</>)}
        {body(
          <>
            <ComOrders
              com={ccom}
              chordVisibleVariant={ChordVisibleVariant.Maximal}
            />
            {dotts.map(position => {
              return (
                <IconCheckbox
                  key={position}
                  checked={position === ccom.transPosition}
                  disabled={position === ccom.transPosition}
                  className={'margin-gap-t ' + (position === initialPosition ? ' text-bold' : '')}
                  onChange={() => exec(ccom.setTransPosition(position))}
                  postfix={`На ${position} ${mylib.declension(
                    position,
                    'полутон',
                    'полутона',
                    'полутонов',
                  )} от базовой`}
                />
              );
            })}
          </>,
        )}
        <>
          {footer(
            <div className="flex flex-big-gap">
              <IconButton
                Icon={IconCheckmarkCircle02StrokeRounded}
                postfix="Подтвердить"
                onClick={close}
              />
              <IconButton
                Icon={IconCancel01StrokeRounded}
                postfix="Отмена"
                className="color--ko"
                onClick={() => {
                  exec(ccom.setTransPosition(initialPosition));
                  close();
                }}
              />
            </div>,
          )}
        </>
      </>
    );
  });

  return (
    <div
      className="flex full-width between margin-gap-v pointer"
      onClick={openModal}
    >
      {modalNode}
      <IconNotification01StrokeRounded />
      <div className="title half-width text-center">Изменить тональность</div>
      <div className="half-width text-center">{ccom.firstChord}</div>
    </div>
  );
};

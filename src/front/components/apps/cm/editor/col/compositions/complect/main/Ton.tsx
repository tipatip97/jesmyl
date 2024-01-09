import { useState } from 'react';
import EvaButton from '../../../../../../../../complect/eva-icon/EvaButton';
import EvaCheckbox from '../../../../../../../../complect/eva-icon/EvaCheckbox';
import EvaIcon from '../../../../../../../../complect/eva-icon/EvaIcon';
import useExer from '../../../../../../../../complect/exer/useExer';
import useModal from '../../../../../../../../complect/modal/useModal';
import mylib from '../../../../../../../../complect/my-lib/MyLib';
import { ChordVisibleVariant } from '../../../../../Cm.model';
import { cmExer } from '../../../../../Cm.store';
import ComOrders from '../../../../../col/com/orders/ComOrders';
import { EditableCom } from '../../EditableCom';

const dotts = '.'
  .repeat(12)
  .split('')
  .map((_, i) => i)
  .reverse();

export const EditableCompositionMainTon = ({ ccom }: { ccom: EditableCom }) => {
  const { exec } = useExer(cmExer);
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
                <EvaCheckbox
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
              <EvaButton
                name="checkmark-circle"
                postfix="Подтвердить"
                onClick={close}
              />
              <EvaButton
                name="close"
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
      <EvaIcon name="bell-outline" />
      <div className="title half-width text-center">Изменить тональность</div>
      <div className="half-width text-center">{ccom.firstChord}</div>
    </div>
  );
};

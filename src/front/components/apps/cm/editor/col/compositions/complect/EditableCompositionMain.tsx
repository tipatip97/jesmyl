import EvaIcon from '../../../../../../../complect/eva-icon/EvaIcon';
import useExer from '../../../../../../../complect/exer/useExer';
import KeyboardInput from '../../../../../../../complect/keyboard/KeyboardInput';
import modalService from '../../../../../../../complect/modal/Modal.service';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import useAuth from '../../../../../../index/useAuth';
import { ChordVisibleVariant } from '../../../../Cm.model';
import { cmExer } from '../../../../Cm.store';
import ComOrders from '../../../../col/com/orders/ComOrders';
import TheCom from '../../../../col/com/TheCom';
import EditContainerCorrectsInformer from '../../../edit-container-corrects-informer/EditContainerCorrectsInformer';
import { useEditableCcom } from '../useEditableCcom';

export default function EditableCompositionMain() {
  const ccom = useEditableCcom();
  const { exec } = useExer(cmExer);
  const auth = useAuth();

  if (!ccom) return null;

  return (
    <>
      {
        <EditContainerCorrectsInformer corrects={ccom?.corrects.name} className="flex">
          <div className="margin-gap-h">Название</div>
          <KeyboardInput
            value={ccom?.name}
            className="full-width"
            onChange={(value) => exec(ccom?.rename(value, exec))}
          />
        </EditContainerCorrectsInformer>
      }
      <div
        className="flex full-width between margin-gap-v pointer"
        onClick={(event) => {
          event.stopPropagation();
          ccom.switchLang();
          exec();
        }}
      >
        <EvaIcon name="flag-outline" />
        <div className="title half-width text-center">Язык</div>
        <div className="half-width text-center">{ccom.langn}</div>
      </div>
      <div
        className="flex full-width between margin-gap-v pointer"
        onClick={async () => {
          const dotts = '.'
            .repeat(12)
            .split('')
            .map((_, i) => i)
            .reverse();
          const first = ccom.transPosition;
          let pos = ccom.transPosition;
          const prev = pos;

          modalService.open({
            title: 'Тональность песни',
            description: () => <ComOrders com={ccom} chordVisibleVariant={ChordVisibleVariant.Maximal} />,
            inputs: dotts.map((position) => {
              return {
                type: 'button',
                closable: false,
                value: `${position === first ? '* ' : ''}На ${position} ${mylib.declension(
                  position,
                  'полутон',
                  'полутона',
                  'полутонов',
                )} от базовой`,
                style: () => ({
                  fontWeight: position === pos ? 'bold' : undefined,
                }),
                onClick: () => ccom.setTransPosition((pos = position)),
              };
            }),
            onCloseAcion: () => exec(),
            buttons: [
              'Подтвердить',
              {
                title: 'Отменить',
                onClick: () => exec(ccom.setTransPosition(prev)),
              },
            ],
          });
        }}
      >
        <EvaIcon name="bell-outline" />
        <div className="title half-width text-center">Изменить тональность</div>
        <div className="half-width text-center">{ccom.firstChord}</div>
      </div>
      <div
        className="flex full-width between margin-gap-v pointer"
        onClick={() => {
          exec(ccom.setField('b', ccom.isBemoled === 1 ? 0 : 1, 0));
        }}
      >
        <EvaIcon name="hash-outline" />
        <div className="title half-width  text-center">Сделать {ccom.isBemoled ? 'диезным' : 'бемольным'}</div>
        <div className="half-width" />
      </div>
      {cmExer.actionAccessedOrNull('canWatch', auth) && (
        <div
          className="flex full-width between error-message margin-gap-v pointer"
          onClick={() => {
            modalService.confirm(`Удалить песню "${ccom.name}"?`).then((isRemove) => isRemove && exec(ccom.remove()));
          }}
        >
          <EvaIcon name="trash-2-outline" />
          <div className="title half-width text-center">Удалить песню</div>
          <div className="half-width" />
        </div>
      )}

      <TheCom com={ccom} chordVisibleVariant={ChordVisibleVariant.Maximal} isMiniAnchor={false} />
    </>
  );
}

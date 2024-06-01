import { useCheckIsAccessed } from '../../../../../../../../complect/exer/hooks/check-is-accessed';
import { useExerExec } from '../../../../../../../../complect/exer/hooks/useExer';
import KeyboardInput from '../../../../../../../../complect/keyboard/KeyboardInput';
import { useConfirm } from '../../../../../../../../complect/modal/confirm/useConfirm';
import TheIcon from '../../../../../../../../complect/the-icon/TheIcon';
import { IconDashboardSpeed02StrokeRounded } from '../../../../../../../../complect/the-icon/icons/dashboard-speed-02';
import { IconDelete01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/delete-01';
import { IconFlag03StrokeRounded } from '../../../../../../../../complect/the-icon/icons/flag-03';
import { IconGridStrokeRounded } from '../../../../../../../../complect/the-icon/icons/grid';
import { IconSchoolReportCardStrokeRounded } from '../../../../../../../../complect/the-icon/icons/school-report-card';
import useAuth from '../../../../../../../index/useAuth';
import { ChordVisibleVariant } from '../../../../../Cm.model';
import TheCom from '../../../../../col/com/TheCom';
import EditContainerCorrectsInformer from '../../../../edit-container-corrects-informer/EditContainerCorrectsInformer';
import { useEditableCcom } from '../../useEditableCcom';
import { EditableCompositionMainTon } from './Ton';

export default function EditableCompositionMain() {
  const ccom = useEditableCcom();
  const exec = useExerExec();
  const auth = useAuth();
  const checkIsAccessed = useCheckIsAccessed(auth);
  const [confirmNode, confirm] = useConfirm();

  if (!ccom) return null;

  return (
    <>
      {confirmNode}
      <EditContainerCorrectsInformer
        corrects={ccom?.corrects.name}
        className="flex"
      >
        <IconSchoolReportCardStrokeRounded />
        <div className="margin-gap-h">Название</div>
        <KeyboardInput
          value={ccom?.name}
          className="full-width"
          onChange={value => exec(ccom?.rename(value, exec))}
        />
      </EditContainerCorrectsInformer>
      <div className="flex full-width between margin-gap-v">
        <IconDashboardSpeed02StrokeRounded />
        <div className="margin-gap-h nowrap">Ударов в минуту</div>
        <KeyboardInput
          value={'' + (ccom?.beatsPerMinute ?? '')}
          // className="full-width"
          onChange={value => exec(ccom.setField('bpm', +value, 0))}
        />
      </div>
      <div
        className="flex full-width between margin-gap-v pointer"
        onClick={event => {
          event.stopPropagation();
          ccom.switchLang();
          exec();
        }}
      >
        <IconFlag03StrokeRounded />
        <div className="title half-width text-center">Язык</div>
        <div className="half-width text-center">{ccom.langn}</div>
      </div>
      <EditableCompositionMainTon ccom={ccom} />
      <div
        className="flex full-width between margin-gap-v pointer"
        onClick={() => {
          exec(ccom.setField('b', ccom.isBemoled === 1 ? 0 : 1, 0));
        }}
      >
        <IconGridStrokeRounded />
        <div className="title half-width  text-center">Сделать {ccom.isBemoled ? 'диезным' : 'бемольным'}</div>
        <div className="half-width" />
      </div>
      {checkIsAccessed(100) && (
        <div
          className="flex full-width between error-message margin-gap-v pointer"
          onClick={() => {
            confirm(`Удалить песню "${ccom.name}"?`).then(isRemove => isRemove && exec(ccom.remove()));
          }}
        >
          <IconDelete01StrokeRounded />
          <div className="title half-width text-center">Удалить песню</div>
          <div className="half-width" />
        </div>
      )}

      <TheCom
        com={ccom}
        chordVisibleVariant={ChordVisibleVariant.Maximal}
        isMiniAnchor={false}
      />
    </>
  );
}

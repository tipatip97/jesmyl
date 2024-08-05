import { useConfirm } from '../../../../../../complect/modal/confirm/useConfirm';
import IconButton from '../../../../../../complect/the-icon/IconButton';
import { IconCheckmarkCircle02StrokeRounded } from '../../../../../../complect/the-icon/icons/checkmark-circle-02';
import { IconHelpCircleStrokeRounded } from '../../../../../../complect/the-icon/icons/help-circle';
import { IconMinusSignCircleStrokeRounded } from '../../../../../../complect/the-icon/icons/minus-sign-circle';
import { IconStarSolidRounded, IconStarStrokeRounded } from '../../../../../../complect/the-icon/icons/star';
import useSelectedComs from '../../../base/useSelectedComs';
import ComFaceContextMenuEditorItems from '../../../editor/col/compositions/ComFaceContextMenuEditorItems';
import { useMarks } from '../../../lists/marks/useMarks';
import './ComFace.scss';

export default function ComFaceContextMenu({ onClick, comWid }: { onClick: () => void; comWid: number }) {
  const { isMarked, toggleMarked } = useMarks();
  const isComMarked = isMarked(comWid);
  const { clearSelectedComws, selectedComws, selectedComPosition: isSelected, toggleSelectedCom } = useSelectedComs();
  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      {confirmNode}
      <IconButton
        Icon={isComMarked ? IconStarStrokeRounded : IconStarSolidRounded}
        postfix={isComMarked ? 'Удалить из Избранного' : 'Добавить в Избранное'}
        onClick={() => {
          onClick();
          toggleMarked(comWid);
        }}
      />
      <IconButton
        Icon={isSelected(comWid) ? IconMinusSignCircleStrokeRounded : IconCheckmarkCircle02StrokeRounded}
        postfix={isSelected(comWid) ? 'Отменить выбор' : 'Выбрать'}
        onClick={() => toggleSelectedCom(comWid)}
      />
      {!selectedComws.length || (
        <IconButton
          Icon={IconHelpCircleStrokeRounded}
          postfix="Очистить выбранные"
          onClick={() => {
            confirm('Очистить список выбранных?').then(isClear => isClear && clearSelectedComws());
          }}
        />
      )}
      <ComFaceContextMenuEditorItems onClick={onClick} />
    </>
  );
}

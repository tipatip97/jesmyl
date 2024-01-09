import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import { useConfirm } from '../../../../../../complect/modal/confirm/useConfirm';
import useSelectedComs from '../../../base/useSelectedComs';
import ComFaceContextMenuEditorItems from '../../../editor/col/compositions/ComFaceContextMenuEditorItems';
import { useMarks } from '../../../lists/marks/useMarks';
import { Com } from '../Com';
import './ComFace.scss';

export default function ComFaceContextMenu({ onClick, com }: { onClick: () => void; com: Com }) {
  const { isMarked, toggleMarked } = useMarks();
  const isComMarked = isMarked(com.wid);
  const { clearSelectedComws, selectedComws, selectedComPosition: isSelected, toggleSelectedCom } = useSelectedComs();
  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      {confirmNode}
      <EvaButton
        name={isComMarked ? 'star-outline' : 'star'}
        postfix={isComMarked ? 'Удалить из Избранного' : 'Добавить в Избранное'}
        onClick={() => {
          onClick();
          toggleMarked(com.wid);
        }}
      />
      <EvaButton
        name={isSelected(com) ? 'minus-circle-outline' : 'checkmark-circle-2-outline'}
        postfix={isSelected(com) ? 'Отменить выбор' : 'Выбрать'}
        onClick={() => toggleSelectedCom(com)}
      />
      {!selectedComws.length || (
        <EvaButton
          name="close-circle-outline"
          postfix="Очистить выбранные"
          onClick={() => {
            confirm('Очистить список выбранных?').then(isClear => isClear && clearSelectedComws());
          }}
        />
      )}
      <ComFaceContextMenuEditorItems />
    </>
  );
}

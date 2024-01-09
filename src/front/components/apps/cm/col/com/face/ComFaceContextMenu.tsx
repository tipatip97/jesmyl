import { bottomPopupContentPreparer } from '../../../../../../complect/absolute-popup/bottom-popup/item-preparer';
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
      {bottomPopupContentPreparer({
        items: [
          {
            onClick: () => {
              onClick();
              toggleMarked(com.wid);
            },
            icon: isComMarked ? 'star-outline' : 'star',
            title: isComMarked ? 'Удалить из Избранного' : 'Добавить в Избранное',
          },
          {
            icon: isSelected(com) ? 'minus-circle-outline' : 'checkmark-circle-2-outline',
            title: isSelected(com) ? 'Отменить выбор' : 'Выбрать',
            onClick: () => toggleSelectedCom(com),
          },
          selectedComws.length
            ? [
                {
                  onClick: () => {
                    confirm('Очистить список выбранных?').then(isClear => isClear && clearSelectedComws());
                  },
                  icon: 'close-circle-outline',
                  title: 'Очистить выбранные',
                },
              ]
            : null,
        ],
      })}
      <ComFaceContextMenuEditorItems />
    </>
  );
}

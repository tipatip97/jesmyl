import styled from 'styled-components';
import { useConfirm } from '../../../../../../complect/modal/confirm/useConfirm';
import IconButton from '../../../../../../complect/the-icon/IconButton';
import { IconAddCircleHalfDotStrokeRounded } from '../../../../../../complect/the-icon/icons/add-circle-half-dot';
import { IconCancelCircleHalfDotStrokeRounded } from '../../../../../../complect/the-icon/icons/cancel-circle-half-dot';
import { IconRemoveCircleHalfDotStrokeRounded } from '../../../../../../complect/the-icon/icons/remove-circle-half-dot';
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
    <StyledMenu>
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
        Icon={isSelected(comWid) ? IconRemoveCircleHalfDotStrokeRounded : IconAddCircleHalfDotStrokeRounded}
        postfix={isSelected(comWid) ? 'Отменить выбор' : 'Выбрать'}
        onClick={() => toggleSelectedCom(comWid)}
      />
      {!selectedComws.length || (
        <IconButton
          Icon={IconCancelCircleHalfDotStrokeRounded}
          postfix="Очистить выбранные"
          onClick={() => {
            confirm('Очистить список выбранных?').then(isClear => isClear && clearSelectedComws());
          }}
        />
      )}
      <ComFaceContextMenuEditorItems onClick={onClick} />
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  > * {
    margin: 20px 10px;
  }

  > :first-child,
  > :last-child {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

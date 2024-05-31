import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../shared/store';
import IconButton from '../../../the-icon/IconButton';
import { IconCancel01StrokeRounded } from '@icons/cancel-01';
import { ClipboardStoreItem } from '../../Strong.model';
import di from '../../Strong.store';
import StrongEditableFieldMultiline from '../StrongEditableFieldMultiline';

const clipboardSelector = (state: RootState) => state.strong.clipboard;

export default function StrongClipboardItem({
  id,
  onDragStart,
  item,
  ...props
}: React.DOMAttributes<HTMLDivElement> & {
  item: ClipboardStoreItem;
  id: string;
}) {
  const clipboard = useSelector(clipboardSelector);
  const dispatch = useDispatch();

  return (
    <div
      {...props}
      className="StrongClipboardItem relative text-italic margin-gap-v pointer"
      draggable
      onDragStart={event => {
        event.dataTransfer.setData('text/plain', item.text);
        onDragStart?.(event);
      }}
    >
      <IconButton
        Icon={IconCancel01StrokeRounded}
        className="absolute pos-top pos-right"
        confirm="Удалить запись?"
        onClick={event => {
          event.stopPropagation();
          const items = {
            ...clipboard.items,
          };

          delete items[id];

          dispatch(
            di.clipboard({
              ...clipboard,
              items,
            }),
          );
        }}
      />
      <StrongEditableFieldMultiline value={item.text} />
    </div>
  );
}

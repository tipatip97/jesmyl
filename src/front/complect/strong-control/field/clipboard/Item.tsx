import { IconCancel01StrokeRounded } from '../../../../complect/the-icon/icons/cancel-01';
import IconButton from '../../../the-icon/IconButton';
import { ClipboardStoreItem } from '../../Strong.model';
import { useStrongClipboard } from '../../atoms';
import StrongEditableFieldMultiline from '../StrongEditableFieldMultiline';

export default function StrongClipboardItem({
  id,
  onDragStart,
  item,
  ...props
}: React.DOMAttributes<HTMLDivElement> & {
  item: ClipboardStoreItem;
  id: string;
}) {
  const [clipboard, setClipboard] = useStrongClipboard();

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

          setClipboard({
            ...clipboard,
            items,
          });
        }}
      />
      <StrongEditableFieldMultiline value={item.text} />
    </div>
  );
}

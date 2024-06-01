import { ReactNode } from 'react';
import useModal from './modal/useModal';
import useToast from './modal/useToast';
import IconButton from './the-icon/IconButton';
import { IconCopy01StrokeRounded } from '../complect/the-icon/icons/copy-01';

export default function CopyTextButton({
  text,
  disabled,
  description,
  className,
  message,
}: {
  text: string | (() => string | nil);
  disabled?: boolean;
  description?: ReactNode;
  className?: string;
  message?: ReactNode;
}) {
  const [toastNode, toast] = useToast();
  const [modalNode, modal] = useModal();

  return (
    <>
      {modalNode}
      {toastNode}
      <span
        className={(className || '') + ' flex flex-gap pointer'}
        onClick={event => {
          event.stopPropagation();
          const textToWrite = typeof text === 'string' ? text : text();

          try {
            if (textToWrite == null) return;
            navigator.clipboard.writeText(textToWrite);
            toast(message ?? 'Текст скопирован');
          } catch (e) {
            modal(event, ({ header, body }) => {
              return (
                <>
                  {header(<>Не удалось скопировать текст:</>)}
                  {body(<div className="user-select-all">{textToWrite}</div>)}
                </>
              );
            });
          }
        }}
      >
        {description}
        <IconButton
          Icon={IconCopy01StrokeRounded}
          disabled={disabled}
        />
      </span>
    </>
  );
}

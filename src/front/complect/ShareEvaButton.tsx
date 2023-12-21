import { ReactNode } from 'react';
import EvaButton from './eva-icon/EvaButton';
import useModal from './modal/useModal';
import mylib from './my-lib/MyLib';

type PrepareResult = {
  url?: string;
  title?: string;
  text?: string | (() => string | und);
};

export default function ShareEvaButton({
  text,
  disabled,
  description,
  className,
  url,
  title,
  prepare,
}: PrepareResult & {
  disabled?: boolean;
  description?: ReactNode;
  className?: string;
  prepare?: () => und | PrepareResult;
}) {
  const [modalNode, modal] = useModal();

  return (
    <>
      {modalNode}
      <EvaButton
        name="share-outline"
        disabled={disabled}
        prefix={description}
        className={className}
        onClick={event => {
          event.stopPropagation();
          const textToWrite = mylib.isStr(text) ? text : text?.();
          if (!textToWrite && prepare === undefined) return null;

          const prepared =
            prepare === undefined
              ? {
                  url,
                  title,
                  text: textToWrite,
                }
              : prepare();

          if (prepared === undefined) return null;

          try {
            navigator.share({
              ...prepared,
              text: mylib.isStr(prepared.text) ? prepared.text : prepared.text?.(),
            });
          } catch (e) {
            modal(event, ({ header, body }) => {
              return (
                <>
                  {header(<>Не удалось поделиться:</>)}
                  {body(
                    <div className="user-select-all">
                      {(prepared.title || '') +
                        (prepared.text ? '\n\n' + prepared.text : '') +
                        (prepared.url ? '\n\n' + prepared.url : '')}
                    </div>,
                  )}
                </>
              );
            });
          }
        }}
      />
    </>
  );
}

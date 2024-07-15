import React, { useEffect, useState } from 'react';
import { IconTask01StrokeRounded } from '../../../../complect/the-icon/icons/task-01';
import { KeyboardInputEvent } from '../../../keyboard/Keyboard.model';
import { useConfirm } from '../../../modal/confirm/useConfirm';
import useModal from '../../../modal/useModal';
import { MyLib } from '../../../my-lib/MyLib';
import IconButton from '../../../the-icon/IconButton';
import { useStrongClipboard } from '../../atoms';
import './Clipboard.scss';
import StrongClipboardItem from './Item';

let clipboardFocusedElem: (EventTarget & HTMLTextAreaElement) | nil = null;
let updates = 0;
let update = (_: number) => {};
let isCanBlur = true;

const onClipboardMouseDown = () => (isCanBlur = false);

const getParentAttr = (elem: EventTarget & HTMLTextAreaElement, attrName: string): string | null => {
  if (elem.hasAttribute(attrName)) return elem.getAttribute(attrName);

  if (elem.parentNode) return getParentAttr(elem.parentNode as never, attrName);

  return null;
};

export const onStrongFieldDragStart: (event: DragEvent) => void = event => {
  event.dataTransfer?.setData('text/plain', getParentAttr(event.currentTarget as never, 'attr-text') ?? '');
  clipboardFocusedElem = event.currentTarget as never;
};

export const onStrongFieldFocus: (event: KeyboardInputEvent) => void = event => {
  if (event.realEvent) {
    clipboardFocusedElem = event.realEvent.currentTarget;
    update(++updates);
  }
};

export const onStrongFieldBlur = () => {
  setTimeout(() => {
    if (isCanBlur) {
      clipboardFocusedElem = null;
      update(++updates);
    }
  });
};

export default function StrongClipboardPicker() {
  const [clipboard, setClipboard] = useStrongClipboard();
  const [isOpenModal, setIsOpenModal] = useState<boolean | und>();
  const [isCanOpenModal, setIsCanOpenModal] = useState(true);
  const [confirmNode, confirm] = useConfirm();

  useEffect(() => {
    const onPast = () => {
      setIsCanOpenModal(false);
      setIsOpenModal(false);
    };
    window.addEventListener('drop', onPast);
    return () => window.removeEventListener('drop', onPast);
  }, []);

  const [modalNode, screen] = useModal(
    ({ header, body }, closeModal) => {
      let addButton = null;

      if (clipboardFocusedElem) {
        let head = null;
        let rememberText = null;
        const text = getParentAttr(clipboardFocusedElem, 'attr-text') ?? '';
        const id = getParentAttr(clipboardFocusedElem, 'attr-id') ?? '';

        if (text && text === clipboard.items[id]?.text) {
          head = <div className="color--3">Текст записан</div>;
        } else {
          head = clipboard.items[id] ? (
            <div className="color--7">Перезаписать текст</div>
          ) : (
            <div className="color--7">Запомнить текст</div>
          );

          rememberText = <div className="text-italic">{text.length > 50 ? text.slice(0, 55) + '...' : text}</div>;
        }

        addButton = clipboardFocusedElem && text && (
          <div
            className="bgcolor--1 padding-gap border-radius pointer"
            onClick={() => {
              setClipboard({
                ...clipboard,
                items: {
                  ...clipboard.items,
                  [id]: { text },
                },
              });
            }}
          >
            {head}
            {rememberText}
          </div>
        );
      }

      return (
        <>
          {header('Буфер обмена')}
          {body(
            <>
              {addButton}
              {MyLib.entries(clipboard.items).map(([id, item], itemi) => {
                return (
                  <React.Fragment key={id}>
                    {itemi ? <div className="horizontal-separator" /> : null}
                    <StrongClipboardItem
                      item={item}
                      id={id}
                      onDragStart={() => {
                        setIsOpenModal(false);
                      }}
                      onDragEnd={() =>
                        setTimeout(() => {
                          if (isCanOpenModal) {
                            setIsOpenModal(isCanOpenModal);
                          } else {
                            closeModal();
                            setIsOpenModal(undefined);
                          }
                        })
                      }
                    />
                  </React.Fragment>
                );
              })}
            </>,
          )}
        </>
      );
    },
    is => {
      if (is) return;
      isCanBlur = true;
      setIsOpenModal(false);
      clipboardFocusedElem?.focus?.();
    },
    isOpenModal,
  );
  update = useState(0)[1];

  return (
    <>
      {modalNode}
      {confirmNode}
      <span
        onDrop={async () => {
          if (clipboardFocusedElem) {
            const text = getParentAttr(clipboardFocusedElem, 'attr-text') ?? '';
            const id = getParentAttr(clipboardFocusedElem, 'attr-id') ?? '';
            let confirmText = 'Запомнить текст?';

            if (id in clipboard.items) {
              if (clipboard.items[id]?.text !== text) {
                confirmText = 'Перезаписать текст?';
              }
            }

            if (
              await confirm(
                <>
                  <span className="color--7">{confirmText}</span>
                  <pre>{text}</pre>
                </>,
              )
            ) {
              setClipboard({
                ...clipboard,
                items: {
                  ...clipboard.items,
                  [id]: { text },
                },
              });
            }
          }
        }}
        onDragOver={event => event.preventDefault()}
      >
        <IconButton
          Icon={IconTask01StrokeRounded}
          className={'pointer' + (clipboardFocusedElem === null ? '' : ' color--7')}
          onPointerDown={onClipboardMouseDown}
          onClick={() => {
            setIsOpenModal(true);
            screen();
          }}
        />
      </span>
    </>
  );
}

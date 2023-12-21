import { ReactNode, useEffect, useRef, useState } from 'react';
import useModal from './useModal';
import { ThrowEvent } from '../eventer/ThrowEvent';

export const useConfirm = <Content extends ReactNode, ConfirmProps extends any>(
  onConfirm: (event: React.MouseEvent<unknown> | KeyboardEvent, props: ConfirmProps) => void,
  header?: ReactNode,
) => {
  const [bodyContent, setBodyContent] = useState<Content>();
  const [headerContent, setHeaderContent] = useState(header);
  const [confirmProps, setConfirmProps] = useState<ConfirmProps>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onConfirmRef = useRef(onConfirm);
  onConfirmRef.current = onConfirm;

  useEffect(() => {
    if (isModalOpen)
      return ThrowEvent.listenKeyDown('Enter', event => {
        onConfirmRef.current(event, confirmProps!);
        setIsModalOpen(false);
      });
  }, [confirmProps, isModalOpen]);

  const [modalNode] = useModal(
    ({ header, body, footer }, closeModal) => {
      return (
        <>
          {header(headerContent ?? <>Подтверди</>)}
          {body(bodyContent)}
          {footer(
            <span className="flex flex-gap">
              <span
                className="pointer"
                onClick={event => {
                  onConfirm(event, confirmProps!);
                  closeModal();
                }}
              >
                Да
              </span>
              <span
                className="pointer"
                onClick={() => closeModal()}
              >
                Нет
              </span>
            </span>,
          )}
        </>
      );
    },
    is => !is && setIsModalOpen(false),
    isModalOpen,
  );

  return [
    modalNode,
    (content: Content, props?: ConfirmProps, header?: ReactNode) => {
      setBodyContent(content);
      setHeaderContent(header);
      setConfirmProps(props);
      setIsModalOpen(true);
    },
  ] as const;
};

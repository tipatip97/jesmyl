import { ReactNode, useEffect, useRef, useState } from 'react';
import { ThrowEvent } from '../../eventer/ThrowEvent';
import useModal from '../useModal';

const isFunc = (_is: boolean) => {};

export const useConfirm = () => {
  const [bodyContent, setBodyContent] = useState<ReactNode>();
  const [headerContent, setHeaderContent] = useState<ReactNode>('Подтверди');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onResolveRef = useRef(isFunc);

  useEffect(() => {
    if (isModalOpen)
      return ThrowEvent.listenKeyDown('Enter', event => {
        event.stopPropagation();
        onResolveRef.current(true);
        setIsModalOpen(false);
      });
  }, [isModalOpen]);

  const [modalNode] = useModal(
    ({ header, body, footer }, closeModal) => {
      return (
        <>
          {header(headerContent)}
          {body(bodyContent)}
          {footer(
            <span className="flex flex-big-gap">
              <span
                className="pointer"
                onClick={event => {
                  event.stopPropagation();
                  onResolveRef.current(true);
                  closeModal();
                }}
              >
                Да
              </span>
              <span
                className="pointer"
                onClick={() => {
                  onResolveRef.current(false);
                  closeModal();
                }}
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
    (content: ReactNode, header?: ReactNode) => {
      const confirmResolver = new Promise<boolean>(res => {
        onResolveRef.current = res;
      });
      if (header !== undefined) setHeaderContent(header);
      setBodyContent(content);
      setIsModalOpen(true);

      return confirmResolver;
    },
  ] as const;
};

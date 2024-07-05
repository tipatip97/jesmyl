import { ReactNode, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Eventer, { EventerListeners } from '../../../back/complect/Eventer';
import { backSwipableContainerMaker } from '../backSwipableContainerMaker';
import { ThrowEvent } from '../eventer/ThrowEvent';
import Portal from '../popups/[complect]/Portal';
import IconButton from '../the-icon/IconButton';
import { IconCancel01StrokeRounded } from '../the-icon/icons/cancel-01';

const swipeEvents: EventerListeners<void> = [];

const swiper = backSwipableContainerMaker(() => Eventer.invoke(swipeEvents, undefined));

export type FullContentOpenMode = null | 'open' | 'closable';
export type FullContentValue<PassValue = unknown> = (close: () => void, passValue?: PassValue) => ReactNode;

interface Props {
  onClose: (isOpen: false) => void;
  closable?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function FullContent({ onClose, closable, children, className }: Props) {
  const close = useCallback(() => onClose(false), [onClose]);

  useEffect(() => {
    const close: CallbackStopper = event => {
      event.stopPropagation();
      onClose(false);
    };

    const swipeClose = Eventer.listen(swipeEvents, close);
    const escape = ThrowEvent.listenKeyDown('Escape', close);

    return () => {
      swipeClose();
      escape();
    };
  }, [onClose]);

  return (
    <Portal>
      <ContainerWrapper
        {...swiper}
        onClick={closable ? close : undefined}
        className={className}
      >
        {closable ? null : (
          <StyledCloseButton
            Icon={IconCancel01StrokeRounded}
            className="close-button"
            onClick={close}
          />
        )}
        <Container className="padding-big-gap">{children}</Container>
      </ContainerWrapper>
    </Portal>
  );
}

const StyledCloseButton = styled(IconButton)``;

const ContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100%;

  > ${StyledCloseButton} {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 100;
    cursor: pointer;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--current-bg);
  width: 100vw;
  height: calc(100% - var(--keyboard-flash-height));
  overflow-y: auto;
`;

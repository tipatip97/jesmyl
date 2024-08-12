import { HTMLAttributes, ReactNode, useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Eventer, { EventerListeners } from '../../../back/complect/Eventer';
import { useSetAppRootAnchorNodesContext } from '../../app/AppComponent';
import { backSwipableContainerMaker } from '../backSwipableContainerMaker';
import { ThrowEvent } from '../eventer/ThrowEvent';
import mylib from '../my-lib/MyLib';
import Portal from '../popups/[complect]/Portal';
import IconButton from '../the-icon/IconButton';
import { IconCancel01StrokeRounded } from '../the-icon/icons/cancel-01';
import { useActualRef } from '../useActualRef';
import { useWid } from '../useWid';

const swipeEvents: EventerListeners<void> = [];

const swiper = backSwipableContainerMaker(() => Eventer.invoke(swipeEvents, undefined));

export type FullContentOpenMode = null | 'open' | 'closable';
export type FullContentValue<PassValue = unknown> = (close: () => void, passValue?: PassValue) => ReactNode;

interface Props {
  onClose?: (isOpen: false) => void;
  closable?: boolean;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  asRootAnchor?: (close: () => void) => React.ReactNode;
}

const emptyFunc = () => {};

export function FullContent({ onClose, closable, children, className, asRootAnchor, containerClassName }: Props) {
  const actualChildrenRef = useActualRef(children);
  const actualAsRootAnchorRef = useActualRef(asRootAnchor);
  const subClose = useMemo(() => ({ current: emptyFunc }), []);

  const close = useCallback(() => {
    if (asRootAnchor) {
      subClose.current();
      return;
    }

    onClose?.(false);
  }, [asRootAnchor, onClose, subClose]);

  const node = useCallback(
    (wid?: string) => {
      return (
        <Swiped
          key={wid}
          close={close}
          onClick={closable ? close : undefined}
          className={className}
        >
          {closable || (
            <StyledCloseButton
              Icon={IconCancel01StrokeRounded}
              className="close-button"
              onClick={close}
            />
          )}
          <Container className={containerClassName ?? 'padding-big-gap'}>
            {mylib.isFunc(actualAsRootAnchorRef.current)
              ? actualAsRootAnchorRef.current(subClose.current)
              : actualChildrenRef.current}
          </Container>
        </Swiped>
      );
    },
    [actualAsRootAnchorRef, actualChildrenRef, className, closable, close, containerClassName, subClose],
  );

  if (asRootAnchor)
    return (
      <RootAnchor
        node={node}
        subClose={subClose}
      />
    );

  return <Portal>{node()}</Portal>;
}

const Swiped = ({ close, ...props }: { close: () => void } & HTMLAttributes<HTMLDivElement>) => {
  useEffect(() => {
    const closeAction: CallbackStopper = event => {
      event.stopPropagation();
      close();
    };

    return hookEffectLine().effect(
      Eventer.listen(swipeEvents, closeAction),
      ThrowEvent.listenKeyDown('Escape', closeAction),
    );
  }, [close]);

  return (
    <StyledContainerWrapper
      {...props}
      {...swiper}
    />
  );
};

const RootAnchor = ({
  node,
  subClose,
}: {
  node: (wid: string) => React.ReactNode;
  subClose: { current: () => void };
}) => {
  const addNode = useSetAppRootAnchorNodesContext();
  const wid = useWid();

  subClose.current = () => addNode(prev => ({ ...prev, [wid]: null }));

  useEffect(() => addNode(prev => ({ ...prev, [wid]: node(wid) })), [addNode, node, wid]);

  return <></>;
};

const StyledCloseButton = styled(IconButton)``;

const StyledContainerWrapper = styled.div`
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

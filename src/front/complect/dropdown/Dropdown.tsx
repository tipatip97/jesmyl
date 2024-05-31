import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import useToast from '../modal/useToast';
import { useOnSendPromiseCallback } from '../sends/useOnSendPromiseCallback';
import { IconAlert01StrokeRounded } from '@icons/alert-01';
import { IconLoading03StrokeRounded } from '@icons/loading-03';
import { DropdownItem, DropdownProps } from './Dropdown.model';

export default function Dropdown<Id, Item extends DropdownItem<Id> = DropdownItem<Id>>(props: DropdownProps<Id, Item>) {
  const [selectedId, setId] = useState(props.id);
  const [isDropped, setDropped] = useState(false);
  const selectedItem = useMemo(() => props.items.find(item => item?.id === selectedId), [props.items, selectedId]);
  const isDropClickedRef = useRef(false);

  useEffect(() => setId(props.id), [props.id]);

  useEffect(() => {
    const close = () => {
      if (!isDropClickedRef.current) setDropped(false);
      isDropClickedRef.current = false;
    };
    const onKeydown = (event: KeyboardEvent) => {
      if (isDropped && event.key === 'Escape') close();
    };
    window.addEventListener('click', close);
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('click', close);
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isDropped]);
  const [modalNode, toast] = useToast();
  const [onClick, error, isLoading] = useOnSendPromiseCallback(
    item => {
      return props.onSelect === undefined ? props.onSelectId?.(item.id) : props.onSelect(item);
    },
    isOk => {
      if (!isOk) setId(props.id);
    },
    error => {
      setId(props.id);
      toast(error, { mood: 'ko' });
    },
  );

  return (
    <Selector
      className={
        'dropdown-selector flex between ' +
        (props.className || '') +
        (isDropped ? ' dropped' : '') +
        (props.disabled ? ' disabled' : '')
      }
      onClick={event => {
        if (props.disabled) event.stopPropagation();
        isDropClickedRef.current = true;
        setDropped(!isDropped);
      }}
    >
      {modalNode}
      <div className="selected-item ellipsis full-max-width">
        {selectedItem?.title || (
          <span className="not-selected">{props.undTitle ?? props.nullTitle ?? props.placeholder ?? 'Не выбрано'}</span>
        )}
        <HiddenTitles>{props.items.map((item, itemi) => item && <div key={itemi}>{item.title}</div>)}</HiddenTitles>
      </div>
      <div className="item-list">
        {props.undTitle && (
          <div
            className="list-item"
            onClick={() => onClick({ id: undefined, title: props.undTitle })}
          >
            {props.undTitle}
          </div>
        )}
        {props.nullTitle && (
          <div
            className="list-item"
            onClick={() => onClick({ id: null, title: props.nullTitle })}
          >
            {props.nullTitle}
          </div>
        )}
        {!props.disabled &&
          props.items.map(item => {
            return (
              item && (
                <div
                  key={`dropdown-item ${item.id}`}
                  className={
                    'list-item ' +
                    (item.disabled ? ' disabled ' : '') +
                    (item.color ? ` colored color_${item.color} ` : '')
                  }
                  onClick={event => {
                    event.stopPropagation();
                    setDropped(false);
                    setId(item.id);

                    onClick(item);
                  }}
                >
                  {item.title}
                </div>
              )
            );
          })}
      </div>
      {error ? (
        <IconAlert01StrokeRounded className="color--ko" />
      ) : (
        isLoading && <IconLoading03StrokeRounded className="rotate" />
      )}
    </Selector>
  );
}

const HiddenTitles = styled.div`
  opacity: 0;
  pointer-events: none;
  height: 0;
  overflow: hidden;
`;

const Selector = styled.div`
  --selector-height: 40px;

  position: relative;
  z-index: 300;
  cursor: pointer;
  border-radius: 5px;
  background-color: var(--color--2);
  padding: 10px;
  width: 100%;
  min-width: 50px;
  height: var(--selector-height);
  transition: z-index 0s;

  &.mood-for-2 {
    > .item-list {
      background-color: var(--color--5);
      color: var(--color--3);
    }
  }

  &.dropped {
    position: relative;
    z-index: 500;
    border-radius: 5px 5px 0 0;
    transition: z-index 0.4s;

    > .item-list {
      max-height: 30vh;
    }
  }

  > .item-list {
    position: absolute;
    top: var(--selector-height);
    left: 0;
    transition: max-height 0.2s linear;
    border-radius: 0 0 5px 5px;
    background-color: var(--color--3);
    width: 100%;
    max-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    color: var(--color--1);

    > .list-item {
      padding: 5px;

      &.colored {
        &.color_ko {
          color: var(--color--ko);
        }
      }
    }
  }
`;

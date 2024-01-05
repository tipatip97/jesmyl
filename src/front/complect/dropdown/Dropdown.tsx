import { useEffect, useMemo, useState } from 'react';
import EvaIcon from '../eva-icon/EvaIcon';
import useToast from '../modal/useToast';
import { useOnSendPromiseCallback } from '../sends/useOnSendPromiseCallback';
import { DropdownItem, DropdownProps } from './Dropdown.model';
import './Dropdown.scss';

const undItem = { id: undefined, title: '' };
const nullItem = { id: null, title: '' };

export default function Dropdown<Id, Item extends DropdownItem<Id> = DropdownItem<Id>>(props: DropdownProps<Id, Item>) {
  const [selectedId, setId] = useState(props.id);
  const [isDropped, setDropped] = useState(false);
  const selectedItem = useMemo(() => props.items.find(item => item?.id === selectedId), [props.items, selectedId]);

  useEffect(() => setId(props.id), [props.id]);

  useEffect(() => {
    const close = () => setDropped(false);
    const onKeydown = (event: KeyboardEvent) => {
      if (isDropped && event.key === 'Escape') {
        event.stopPropagation();
        close();
      }
    };
    document.addEventListener('click', close);
    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('click', close);
      document.removeEventListener('keydown', onKeydown);
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
    <div
      className={`dropdown-selector flex between ${isDropped ? 'dropped' : ''} ${props.className || ''}`}
      onClick={event => {
        event.stopPropagation();
        setDropped(!isDropped);
      }}
    >
      {modalNode}
      <div className="selected-item ellipsis full-max-width">
        {selectedItem?.title || (
          <span className="not-selected">{props.undTitle ?? props.nullTitle ?? props.placeholder ?? 'Не выбрано'}</span>
        )}
      </div>
      <div className="item-list">
        {props.undTitle && (
          <div
            className="list-item"
            onClick={() => onClick(undItem)}
          >
            {props.undTitle}
          </div>
        )}
        {props.nullTitle && (
          <div
            className="list-item"
            onClick={() => onClick(nullItem)}
          >
            {props.nullTitle}
          </div>
        )}
        {props.items.map(item => {
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
        <EvaIcon
          name="alert-circle-outline"
          className="color--ko"
        />
      ) : (
        isLoading && (
          <EvaIcon
            name="loader-outline"
            className="rotate"
          />
        )
      )}
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import EvaIcon from '../eva-icon/EvaIcon';
import useToast from '../modal/useToast';
import { DropdownItem, DropdownProps } from './Dropdown.model';
import './Dropdown.scss';

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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalNode, toast] = useToast();

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
        {selectedItem?.title || <span className="not-selected">{props.placeholder ?? 'Не выбрано'}</span>}
      </div>
      <div className="item-list">
        {props.items.map(item => {
          return (
            item && (
              <div
                key={`dropdown-item ${item.id}`}
                className={`list-item ${item.disabled ? 'disabled' : ''} ${
                  item.color ? `colored color_${item.color}` : ''
                }`}
                onClick={event => {
                  event.stopPropagation();
                  setDropped(false);
                  setId(item.id);
                  const selectResult =
                    props.onSelect === undefined ? props.onSelectId?.(item.id) : props.onSelect(item);

                  if (selectResult instanceof Promise) {
                    setIsLoading(true);
                    setIsError(false);

                    selectResult
                      .then(isOk => {
                        setIsLoading(false);
                        if (!isOk) {
                          setId(props.id);
                          setIsError(true);
                          setTimeout(() => setIsError(false), 3000);
                        }
                      })
                      .catch(error => {
                        setId(props.id);
                        setIsLoading(false);
                        setIsError(true);
                        setTimeout(() => setIsError(false), 3000);
                        toast(error, { mood: 'ko' });
                      });
                  }
                }}
              >
                {item.title}
              </div>
            )
          );
        })}
      </div>
      {isError ? (
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

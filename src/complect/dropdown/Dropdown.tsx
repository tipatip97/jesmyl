import { useEffect, useMemo, useState } from "react";
import { DropdownItem, DropdownProps } from "./Dropdown.model";
import "./Dropdown.scss";

export default function Dropdown<
  Id,
  Item extends DropdownItem<Id> = DropdownItem<Id>
>(props: DropdownProps<Id, Item>) {
  const [selectedId, setId] = useState(props.id);
  const [isDropped, setDropped] = useState(false);
  const selectedItem = useMemo(
    () => props.items.find((item) => item.id === selectedId),
    [props.items, selectedId]
  );

  useEffect(() => {
    const close = () => setDropped(false);
    const onKeydown = (event: KeyboardEvent) => {
      if (isDropped && event.key === "Escape") {
        event.stopPropagation();
        close();
      }
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", onKeydown);
    };
  }, [isDropped]);

  return (
    <div
      className={`dropdown-selector ${isDropped ? "dropped" : ""} ${
        props.className || ""
      }`}
      onClick={(event) => {
        event.stopPropagation();
        setDropped(!isDropped);
      }}
    >
      <div className="selected-item">
        {selectedItem?.title || (
          <span className="not-selected">
            {props.placeholder ?? "Не выбрано"}
          </span>
        )}
      </div>
      <div className="item-list">
        {props.items.map((item) => {
          return (
            <div
              key={`dropdown-item ${item.id}`}
              className={`list-item ${item.disabled ? "disabled" : ""} ${
                item.color ? `colored color_${item.color}` : ""
              }`}
              onClick={(event) => {
                event.stopPropagation();
                setDropped(false);
                setId(item.id);
                props.onSelect?.(item);
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

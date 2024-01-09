import { ReactNode } from 'react';
import { isTouchDevice } from '../device-differences';
import EvaIcon, { EvaIconName } from './EvaIcon';
import { ConfirmContent } from '../modal/confirm/ConfirmContent';

export default function EvaButton(props: {
  name: EvaIconName;
  disabled?: boolean;
  confirm?: string;
  prefix?: null | ReactNode;
  postfix?: null | ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLOrSVGElement, MouseEvent> | KeyboardEvent) => void;
  onPointerDown?: (event: React.MouseEvent<HTMLOrSVGElement, MouseEvent> | React.TouchEvent) => void;
}) {
  const isClickable = !props.disabled && props.onClick ? true : undefined;
  const className = `${props.className || ''}${isClickable ? ' pointer' : ''}${props.disabled ? ' disabled' : ''}`;

  return (
    <ConfirmContent
      confirm={props.confirm}
      content={onConfirm => {
        return (
          <>
            {props.prefix === undefined && props.postfix === undefined ? (
              <EvaIcon
                name={props.name}
                className={className}
                onClick={
                  onConfirm &&
                  props.onClick &&
                  (async event => {
                    event.stopPropagation();
                    if (await onConfirm()) props.onClick!(event);
                  })
                }
                onMouseDown={isTouchDevice ? undefined : props.onPointerDown}
                onTouchStart={isTouchDevice ? (props.onPointerDown as never) : undefined}
              />
            ) : (
              <span
                className={`flex flex-gap ${className || 'flex-max'}`}
                onClick={
                  onConfirm &&
                  props.onClick &&
                  (async event => {
                    event.stopPropagation();
                    if (await onConfirm()) props.onClick!(event);
                  })
                }
                onMouseDown={isTouchDevice ? undefined : props.onPointerDown}
                onTouchStart={isTouchDevice ? props.onPointerDown : undefined}
              >
                {props.prefix}
                <EvaIcon name={props.name} />
                {props.postfix}
              </span>
            )}
          </>
        );
      }}
    />
  );
}

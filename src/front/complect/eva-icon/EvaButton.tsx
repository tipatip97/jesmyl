import { ReactNode } from 'react';
import { isTouchDevice } from '../device-differences';
import modalService from '../modal/Modal.service';
import EvaIcon, { EvaIconName } from './EvaIcon';

export default function EvaButton(props: {
  name: EvaIconName;
  alt?: string;
  disabled?: boolean;
  confirm?: string;
  prefix?: null | ReactNode;
  postfix?: null | ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>) => void;
  onPointerDown?: (event: React.MouseEvent<HTMLOrSVGElement, MouseEvent> | React.TouchEvent) => void;
}) {
  const isClickable = !props.disabled && props.onClick ? true : undefined;
  const className = `${props.className || ''}${isClickable ? ' pointer' : ''}${props.disabled ? ' disabled' : ''}`;
  const onClick =
    isClickable &&
    (async (event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>) => {
      if (!props.confirm || (await modalService.confirm(props.confirm))) props.onClick!(event);
    });

  return props.prefix === undefined && props.postfix === undefined ? (
    <EvaIcon
      name={props.name}
      alt={props.alt}
      className={className}
      onClick={onClick}
      onMouseDown={isTouchDevice ? undefined : props.onPointerDown}
      onTouchStart={isTouchDevice ? (props.onPointerDown as never) : undefined}
    />
  ) : (
    <span
      className={`flex flex-gap ${className || 'flex-max'}`}
      onClick={onClick}
      onMouseDown={isTouchDevice ? undefined : props.onPointerDown}
      onTouchStart={isTouchDevice ? props.onPointerDown : undefined}
    >
      {props.prefix}
      <EvaIcon
        name={props.name}
        alt={props.alt}
      />
      {props.postfix}
    </span>
  );
}

import { ReactNode } from 'react';
import { IconCheckmarkSquare04StrokeRounded } from '@icons/checkmark-square-04';
import { IconSquareStrokeRounded } from '@icons/square';

export default function IconCheckbox(props: {
  checked?: boolean;
  onChange?: (is: boolean) => void;
  disabled?: boolean;
  prefix?: null | ReactNode;
  postfix?: null | ReactNode;
  className?: string;
}) {
  const isClickable = !props.disabled ? true : undefined;
  const className = `${props.className || ''}${isClickable ? ' pointer' : ''}${props.disabled ? ' disabled' : ''}`;
  const Icon = props.checked ? IconCheckmarkSquare04StrokeRounded : IconSquareStrokeRounded;

  return props.prefix === undefined && props.postfix === undefined ? (
    <Icon
      className={className}
      onClick={isClickable && props.onChange && (() => props.onChange!(!props.checked))}
    />
  ) : (
    <span
      className={`flex flex-gap ${className || 'flex-max'}`}
      onClick={isClickable && props.onChange && (() => props.onChange!(!props.checked))}
    >
      {props.prefix}
      <Icon />
      {props.postfix}
    </span>
  );
}

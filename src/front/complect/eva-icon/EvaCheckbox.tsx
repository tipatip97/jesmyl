import { ReactNode } from 'react';
import EvaIcon from './EvaIcon';

export default function EvaCheckbox(props: {
  checked?: boolean;
  onChange?: (is: boolean) => void;
  disabled?: boolean;
  prefix?: null | ReactNode;
  postfix?: null | ReactNode;
  className?: string;
}) {
  const isClickable = !props.disabled ? true : undefined;
  const className = `${props.className || ''}${isClickable ? ' pointer' : ''}${props.disabled ? ' disabled' : ''}`;
  const name = props.checked ? 'checkmark-square-2-outline' : 'square-outline';

  return props.prefix === undefined && props.postfix === undefined ? (
    <EvaIcon
      name={name}
      className={className}
      onClick={isClickable && props.onChange && (() => props.onChange!(!props.checked))}
    />
  ) : (
    <span
      className={`flex flex-gap ${className || 'flex-max'}`}
      onClick={isClickable && props.onChange && (() => props.onChange!(!props.checked))}
    >
      {props.prefix}
      <EvaIcon name={name} />
      {props.postfix}
    </span>
  );
}

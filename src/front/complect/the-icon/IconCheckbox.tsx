import { ReactNode, useEffect, useState } from 'react';
import { IconCheckmarkSquare04StrokeRounded } from '../../complect/the-icon/icons/checkmark-square-04';
import { IconSquareStrokeRounded } from '../../complect/the-icon/icons/square';
import { JStorageBooleanVal } from '../JSimpleStorage/exports/Boolean';
import { TheIconType } from './model';

interface Props {
  checked?: boolean;
  onChange?: (is: boolean) => void;
  disabled?: boolean;
  prefix?: null | ReactNode;
  postfix?: null | ReactNode;
  className?: string;
  simpleValuer?: JStorageBooleanVal;
  negativeValue?: boolean;
}

export default function IconCheckbox(props: Props) {
  const isClickable = !props.disabled ? true : undefined;
  const className = `${props.className || ''}${isClickable ? ' pointer' : ''}${props.disabled ? ' disabled' : ''}`;

  const renderNode = (Icon: TheIconType) =>
    props.prefix === undefined && props.postfix === undefined ? (
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

  if (props.simpleValuer !== undefined)
    return (
      <WithSimpleValuer
        simpleValuer={props.simpleValuer}
        negativeValue={props.negativeValue}
      >
        {Icon => renderNode(Icon)}
      </WithSimpleValuer>
    );

  return renderNode(props.checked ? IconCheckmarkSquare04StrokeRounded : IconSquareStrokeRounded);
}

const WithSimpleValuer = (props: {
  children: (Icon: TheIconType) => ReactNode;
  simpleValuer: JStorageBooleanVal;
  negativeValue?: boolean;
}) => {
  const [checked, setChecked] = useState(props.simpleValuer.get());

  useEffect(() => props.simpleValuer.listen(setChecked), [props.simpleValuer]);

  return (
    <>
      {props.children(
        (props.negativeValue ? !checked : checked) ? IconCheckmarkSquare04StrokeRounded : IconSquareStrokeRounded,
      )}
    </>
  );
};

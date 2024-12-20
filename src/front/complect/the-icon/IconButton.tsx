import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { ConfirmContent } from '../modal/confirm/ConfirmContent';
import useToast from '../modal/useToast';
import { mylib } from '../my-lib';
import { StyledLoadingSpinner } from './IconLoading';
import { TheIconType } from './model';

interface Props {
  Icon: TheIconType;
  disabled?: boolean;
  disabledReason?: (() => ReactNode) | ReactNode;
  confirm?: string;
  prefix?: ReactNode;
  postfix?: ReactNode;
  className?: string;
  iconClassName?: string;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLOrSVGElement, MouseEvent> | KeyboardEvent) => void;
}

const IconButton = <P extends Props = Props>(
  props: (P['prefix'] extends nil
    ? P['postfix'] extends nil
      ? OmitOwn<HTMLAttributes<HTMLOrSVGElement>, 'prefix'>
      : OmitOwn<HTMLAttributes<HTMLSpanElement>, 'prefix'>
    : OmitOwn<HTMLAttributes<HTMLSpanElement>, 'prefix'>) &
    P,
) => {
  const isClickable = !props.disabled && props.onClick ? true : undefined;
  const className = `${props.className || ''}${isClickable || props.disabledReason ? ' pointer' : ''}${
    props.disabled ? ' disabled' + (props.disabledReason ? ' clickable' : '') : ''
  }`;

  const Icon = props.isLoading ? StyledLoadingSpinner : props.Icon;

  return (
    <ConfirmContent
      confirm={props.confirm}
      content={onConfirm => {
        return (
          <>
            {props.prefix === undefined && props.postfix === undefined ? (
              <DisabledReasonContained
                Comp={Icon}
                className={className}
                disabledReason={props.disabledReason}
                disabled={props.disabled}
                onClick={
                  onConfirm &&
                  props.onClick &&
                  (async event => {
                    event.stopPropagation();
                    if (await onConfirm()) props.onClick!(event);
                  })
                }
              />
            ) : (
              <DisabledReasonContained
                Comp={Span}
                className={`flex flex-gap ${className || 'flex-max'}`}
                disabledReason={props.disabledReason}
                disabled={props.disabled}
                onClick={
                  onConfirm &&
                  props.onClick &&
                  (async event => {
                    event.stopPropagation();
                    if (await onConfirm()) props.onClick!(event);
                  })
                }
              >
                {props.prefix}
                <Icon className={props.iconClassName} />
                {props.postfix}
              </DisabledReasonContained>
            )}
          </>
        );
      }}
    />
  );
};

const Span = styled.span``;

const DisabledReasonContained = <Node extends HTMLElement>({
  Comp,
  disabledReason,
  disabled,
  ...props
}: {
  Comp: FunctionComponent<HTMLAttributes<Node>>;
  disabledReason?: (() => ReactNode) | ReactNode | und;
  disabled: boolean | und;
} & HTMLAttributes<Node>) => {
  return disabled && disabledReason ? (
    <WithDisabledReason
      Comp={Comp}
      disabledReason={disabledReason}
      disabled
      {...props}
    />
  ) : (
    <Comp {...props} />
  );
};

const WithDisabledReason = <Node extends HTMLElement>({
  Comp,
  disabledReason,
  disabled,
  ...props
}: {
  Comp: FunctionComponent<HTMLAttributes<Node>>;
  disabledReason?: (() => ReactNode) | ReactNode;
  disabled: boolean | und;
} & HTMLAttributes<Node>) => {
  const [toastNode, toast] = useToast();

  return (
    <>
      {toastNode}
      <Comp
        {...props}
        onClick={() => toast(mylib.isFunc(disabledReason) ? disabledReason() : disabledReason, { mood: 'ko' })}
      />
    </>
  );
};

export default IconButton;

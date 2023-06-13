import { ReactNode, useState } from "react";
import modalService from "../modal/Modal.service";
import useModal from "../modal/useModal";
import EvaIcon, { EvaIconName } from "./EvaIcon";

export interface EvaSendButtonProps<Value> {
  name: EvaIconName,
  confirm?: ReactNode | false | null,
  disabled?: boolean,
  onSend?: () => Promise<Value> | void | nil,
  onSuccess?: (val: Value) => void,
  onFailure?: (errorMessage: string) => string | void,
  className?: string,
  prefix?: null | ReactNode,
  postfix?: null | ReactNode,
}

export default function EvaSendButton<Value>(props: EvaSendButtonProps<Value>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { toast, modalNode } = useModal();
  const className = 'pointer '
    + props.className
    + (props.disabled ? ' disabled ' : '')
    + (isError ? ' color--ko ' : '');
  const onClick = async (event: React.MouseEvent<unknown>) => {
    event.stopPropagation();
    if (props.disabled) return;
    if (
      props.confirm != null &&
      !(props.confirm && await modalService.confirm(props.confirm))
    )
      return;

    const promise = props.onSend?.();
    if (promise instanceof Promise) {
      setIsError(false);
      setIsLoading(true);
      promise
        .then((val) => {
          setIsLoading(false);
          props.onSuccess?.(val);
        })
        .catch((errorMessage) => {
          setIsLoading(false);
          setIsError(true);
          setTimeout(setIsError, 3000, false);
          const error = props.onFailure?.(errorMessage);
          if (error) toast(error, { mood: 'ko' });
        });
    }
  };

  const icon = <EvaIcon
    name={isLoading ? 'loader-outline' : props.name}
    className={className + (isLoading ? ' rotate ' : '')}
    onClick={props.prefix === undefined && props.postfix === undefined ? onClick : undefined}
  />;

  return <>
    {modalNode}
    {props.prefix === undefined && props.postfix === undefined
      ? icon
      : <span
        className={'flex flex-gap ' + className}
        onClick={onClick}
      >{props.prefix}{icon}{props.postfix}</span>}
  </>;
}

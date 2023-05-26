import { useState } from "react";
import modalService from "../modal/Modal.service";
import useModal from "../modal/useModal";
import EvaIcon, { EvaIconName } from "./EvaIcon";

export default function EvaSendButton<Value>(
  props: {
    name: EvaIconName,
    confirm?: string | false | null,
    disabled?: boolean,
    onSend?: () => Promise<Value> | void | nil,
    onSuccess?: (val: Value) => void,
    onFailure?: (errorMessage: string) => string | void,
    className?: string,
  }
) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { toast, modalNode } = useModal();

  return <>
    {modalNode}
    <EvaIcon
      name={isLoading ? 'loader-outline' : props.name}
      className={
        'pointer '
        + props.className
        + (props.disabled ? ' disabled ' : '')
        + (isLoading ? ' rotate ' : '')
        + (isError ? ' color--ko ' : '')}
      onClick={async () => {
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
      }}
    />
  </>;
}

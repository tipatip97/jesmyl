import { useState } from "react";
import useToast from "../../modal/useToast";
import { EvaSendButtonBody } from "./Body";
import { EvaSendButtonProps } from "./EvaSendButton.model";
import { EvaSendButtonWithConfirm } from "./WithConfirm";

export default function EvaSendButton<Value>(props: EvaSendButtonProps<Value>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [toastNode, toast] = useToast();

  const sysClassName = (props.disabled ? ' disabled ' : ' pointer ')
    + (isError ? ' color--ko ' : '');

  const onClick = !props.disabled && props.onSend !== undefined
    ? (async (event: React.MouseEvent<unknown> | KeyboardEvent) => {
      event.stopPropagation();

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
    })
    : undefined;

  if (props.confirm != null && onClick !== undefined)
    return <>
      {toastNode}
      <EvaSendButtonWithConfirm<Value>
        {...props}
        isLoading={isLoading}
        onClick={onClick}
        sysClassName={sysClassName}
      />
    </>;

  return <>
    {toastNode}
    <EvaSendButtonBody<Value>
      {...props}
      onClick={onClick}
      isLoading={isLoading}
      sysClassName={sysClassName}
    />
  </>;
}

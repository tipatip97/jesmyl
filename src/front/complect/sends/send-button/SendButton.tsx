import TheButton from "../../Button";
import EvaIcon from "../../eva-icon/EvaIcon";
import useToast from "../../modal/useToast";
import { SendButtonContentMaker } from "../send-button-content-maker/maker";
import { SendButtonProps } from "./SendButton.model";

export default function SendButton<Value>(props: SendButtonProps<Value>) {
  const [toastNode, toast] = useToast();

  return <SendButtonContentMaker
    {...props}
    confirm={props.confirm === true ? props.title : props.confirm}
    anchorNodes={<>
      {toastNode}
    </>}
    onFailure={(error) => {
      props.onFailure?.(error);
      toast(error, { mood: 'ko' });
    }}
    content={(onClick, error, isLoading) => {
      return <TheButton
        className={
          (props.className || '')
          + ' margin-gap'
          + (props.disabled ? ' disabled' : '')
          + (isLoading && !error ? ' pointers-none' : '')
        }
        onClick={props.disabled ? undefined : onClick}
      >
        {props.title}
        <div className="absolute full-height flex center pos-right pos-top margin-big-gap-r">
          {error
            ? <EvaIcon name="alert-circle-outline" className="error-message" />
            : isLoading
              ? <EvaIcon name="loader-outline" className="rotate color--5" />
              : null}
        </div>
      </TheButton>
    }}
  />;
}

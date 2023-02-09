import { useState } from "react";
import TheButton from "./Button";
import EvaIcon from "./eva-icon/EvaIcon";
import modalService from "./modal/Modal.service";

export default function SendButton<Value>({
  title,
  confirm,
  onSend,
  onSuccess,
  onFailure,
  disabled,
}: {
  title: string;
  confirm?: string | boolean | null;
  disabled?: boolean;
  onSend?: () => Promise<Value> | void | nil;
  onSuccess?: (val: Value) => void;
  onFailure?: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <TheButton
      className={`margin-gap ${disabled ? "disabled" : ""} ${
        isLoading && !isError ? "pointers-none" : ""
      }`}
      onClick={async () => {
        if (disabled) return;
        if (
          confirm != null &&
          !(confirm === true
            ? await modalService.confirm(`${title}?`)
            : await modalService.confirm(confirm))
        )
          return;

        const promise = onSend?.();
        if (promise instanceof Promise) {
          setIsError(false);
          setIsLoading(true);
          promise
            .then((val) => {
              setIsLoading(false);
              onSuccess?.(val);
            })
            .catch(() =>
              setTimeout(() => {
                setIsError(true);
                onFailure?.();
              }, 1000)
            );
        }
      }}
    >
      {title}
      {isError ? (
        <EvaIcon name="alert-circle-outline" className="error-message" />
      ) : (
        <EvaIcon
          name="loader-outline"
          className={`rotate ${isLoading ? "" : "fade-00"}`}
        />
      )}
    </TheButton>
  );
}

import { useState } from "react";
import EvaIcon from "./eva-icon/EvaIcon";
import modalService from "./modal/Modal.service";

export default function SendButton({
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
  onSend?: () => Promise<unknown> | void | nil;
  onSuccess?: () => void;
  onFailure?: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div
      className={`the-button margin-gap ${disabled ? "disabled" : ""} ${
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
            .then((isSucc) => {
              setIsLoading(false);
              if (isSucc !== false) onSuccess?.();
              else onFailure?.();
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
    </div>
  );
}

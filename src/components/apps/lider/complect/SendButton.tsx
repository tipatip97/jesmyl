import { useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../complect/modal/Modal.service";

export default function SendButton({
  title,
  confirm,
  onSend,
  onSuccess,
  onFailure,
}: {
  title: string;
  confirm?: string | boolean | null;
  onSend?: () => Promise<unknown> | void | nil;
  onSuccess?: () => void;
  onFailure?: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div
      className={`the-button margin-gap ${
        isLoading && !isError ? "pointers-none" : ""
      }`}
      onClick={async () => {
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

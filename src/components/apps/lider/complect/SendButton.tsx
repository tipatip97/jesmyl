import { HTMLAttributes, useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";

export default function SendButton({
  title,
  onSend,
  onSuccess,
  ...props
}: {
  title: string;
  isLoading?: boolean;
  isError?: boolean;
  onSend?: () => Promise<unknown> | boolean;
  onSuccess?: () => void;
} & Omit<HTMLAttributes<HTMLDivElement>, "onClick">) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div
      {...props}
      className={`the-button margin-gap ${props.className || ""}`}
      onClick={() => {
        const promise = onSend?.();
        if (promise instanceof Promise) {
          setIsError(false);
          setIsLoading(true);
          promise
            .then((isSucc) => {
              setIsLoading(false);
              if (isSucc !== false) onSuccess?.();
            })
            .catch(() => setTimeout(() => setIsError(true), 1000));
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

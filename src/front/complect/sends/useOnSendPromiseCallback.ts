import { useMemo, useRef, useState } from "react";


export const useOnSendPromiseCallback = <Value>(
    onSend?: () => Promise<Value> | void | nil,
    onSuccess?: ((value: Value) => void) | nil,
    onFailure?: ((error: string) => void) | nil,
) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const onSuccessRef = useRef(onSuccess);
    onSuccessRef.current = onSuccess;

    const onFailureRef = useRef(onFailure);
    onFailureRef.current = onFailure;

    return [
        useMemo(() => {
            if (onSend === undefined) return undefined;

            return () => {
                const promise = onSend();
                console.log(promise);

                if (promise instanceof Promise) {
                    setIsLoading(true);
                    promise
                        .then((val) => {
                            setIsLoading(false);
                            onSuccessRef.current?.(val);
                        })
                        .catch((errorMessage) => {
                            setIsLoading(false);
                            setError(errorMessage);
                            onFailureRef.current?.(errorMessage);
                        });
                }
            };
        }, [onSend]),
        error,
        isLoading,
    ] as const;
};

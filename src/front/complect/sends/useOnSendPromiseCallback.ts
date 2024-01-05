import { useMemo, useState } from 'react';
import { useActualRef } from '../useActualRef';

export type CallbackWithDto<Dto = any, Ret = void> = Dto extends never ? () => Ret : (dto: Dto) => Ret;

export const useOnSendPromiseCallback = <Value, Dto = any>(
  onSend?: CallbackWithDto<Dto, Promise<Value> | void | nil>,
  onSuccess?: ((value: Value) => void) | nil,
  onFailure?: ((error: string) => void) | nil,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onSuccessRef = useActualRef(onSuccess);
  const onFailureRef = useActualRef(onFailure);
  const onSendRef = useActualRef(onSend);

  return [
    useMemo((): CallbackWithDto => {
      if (onSendRef.current === undefined) return () => onSuccessRef.current?.(null as Value);
      const onSend = onSendRef.current;

      return dto => {
        const promise = onSend(dto);

        if (promise instanceof Promise) {
          setIsLoading(true);
          promise
            .then(val => {
              setIsLoading(false);
              onSuccessRef.current?.(val);
            })
            .catch(errorMessage => {
              setIsLoading(false);
              setError(errorMessage);
              onFailureRef.current?.(errorMessage);
            });
        }
      };
    }, [onFailureRef, onSendRef, onSuccessRef]),
    error,
    isLoading,
  ] as const;
};

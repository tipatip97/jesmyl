import { useEffect, useState } from 'react';
import EvaIcon from '../../complect/eva-icon/EvaIcon';
import { ThrowEvent } from '../../complect/eventer/ThrowEvent';
import { soki } from '../../soki';

export default function useConnectionState(className?: string) {
  const [isConnected, setIsConnected] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => soki.onAuthorize(setIsConnected), []);
  useEffect(() => ThrowEvent.listenIsOnline(setIsOnline), []);
  useEffect(() => ThrowEvent.listenIsWinFocused(setIsFocused), []);
  useEffect(() => {
    if (isFocused) {
      const to = setTimeout(() => setIsConnected(false), 500);
      soki.ping(() => {
        clearTimeout(to);
        setIsConnected(true);
      });

      return () => clearTimeout(to);
    }
  }, [isFocused]);

  return isOnline ? (
    isConnected ? null : (
      <EvaIcon
        name="loader-outline"
        className={'rotate ' + className}
        onClick={() => soki.ping(() => setIsConnected(true))}
      />
    )
  ) : (
    <EvaIcon
      name="alert-triangle"
      className={'color--ko ' + className}
    />
  );
}

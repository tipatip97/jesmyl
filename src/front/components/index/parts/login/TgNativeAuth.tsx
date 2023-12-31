import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SokiServerEvent, TelegramNativeAuthUserData } from '../../../../models';
import { soki } from '../../../../soki';

export const TgNativeAuth = ({
  onAuthSuccessRef,
  showToastRef,
}: {
  onAuthSuccessRef: { current: (event: SokiServerEvent) => void };
  showToastRef: { current: () => void };
}) => {
  const tgNativeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (tgNativeRef.current === null || tgNativeRef.current.childElementCount !== 0) return;
    const tgAuthIframe = document.querySelector('#telegram-login-jesmylbot');
    (window as any).onTelegramNativeAuth = (user: TelegramNativeAuthUserData) => {
      soki.send({ tgNativeAuthorization: user }, 'index').on(onAuthSuccessRef.current, showToastRef.current);
    };

    if (tgAuthIframe === null) return;
    tgNativeRef.current.appendChild(tgAuthIframe);

    return () => {
      document.body.appendChild(tgAuthIframe);
      delete (window as any).onTelegramNativeAuth;
    };
  }, [onAuthSuccessRef, showToastRef]);

  return (
    <IWrapper
      ref={tgNativeRef}
      className="flex"
    />
  );
};

const IWrapper = styled.div`
  height: 2.2em;
`;

import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconTelegramStrokeRounded } from '../../../../complect/the-icon/icons/telegram';
import JesmylLogo from '../../../../complect/jesmyl-logo/JesmylLogo';
import KeyboardInput from '../../../../complect/keyboard/KeyboardInput';
import useToast from '../../../../complect/modal/useToast';
import mylib from '../../../../complect/my-lib/MyLib';
import SendButton from '../../../../complect/sends/send-button/SendButton';
import { LocalSokiAuth, SokiServerEvent } from '../../../../models';
import { RootState } from '../../../../shared/store';
import { soki } from '../../../../soki';
import di from '../../Index.store';
import useIndexNav from '../../complect/useIndexNav';
import indexStorage from '../../indexStorage';
import { removePullRequisites } from '../../useAuth';
import useConnectionState from '../../useConnectionState';
import { LoginIndex } from './IndexLoginAuth';
import { TgNativeAuth } from './TgNativeAuth';

const errorsSelector = (state: RootState) => state.index.errors;

export default function IndexTelegramAuth({ onLoginAuth }: { onLoginAuth: () => void }) {
  const dispatch = useDispatch();
  const [authCode, setAuthCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSendTgCode, setIsSendTgCode] = useState(false);

  const connectionNode = useConnectionState();
  const errors = useSelector(errorsSelector);
  const { navigate } = useIndexNav();
  const error = (message: string | nil) => message && <div className="login-error-message">{message}</div>;
  const [toastNode, showToast] = useToast({ mood: 'ko' });

  const onAuthSend = (codeStr?: string) => {
    setIsLoading(true);

    return new Promise<SokiServerEvent>((res, rej) =>
      soki
        .send({ tgAuthorization: codeStr === undefined ? +authCode : +codeStr }, 'index')
        .on(res, rej, () => setIsLoading(false)),
    );
  };

  const setAuthData = async (auth: LocalSokiAuth) => {
    if (auth) {
      dispatch(di.auth(auth));
      indexStorage.set('auth', auth);
      dispatch(di.currentApp('cm'));
      removePullRequisites();
    }
  };

  const onAuthSuccess = ({ tgAuthorization }: SokiServerEvent) => {
    if (!tgAuthorization || !tgAuthorization.ok || mylib.isStr(tgAuthorization.value)) return;
    setAuthData(tgAuthorization.value);
    navigate(['other']);
  };

  const onAuthSuccessRef = useRef(onAuthSuccess);
  onAuthSuccessRef.current = onAuthSuccess;

  const showToastRef = useRef(showToast);
  showToastRef.current = showToast;

  return (
    <LoginIndex
      className=""
      headTitle="Авторизация"
      head={connectionNode}
      content={
        <>
          {toastNode}
          <div className="flex around column full-height full-width">
            <div className="logo padding-big-gap-t">
              <div className="logo-container">
                <JesmylLogo />
              </div>
              <div className="text">JesmyL</div>
            </div>

            <div className="relative flex column full-width">
              <div>
                Для авторизации нужно:
                <ol>
                  <li className="children-middle">
                    Запустить бота
                    <span className="margin-gap">
                      <a
                        href="https://t.me/jesmylbot"
                        className="children-middle"
                      >
                        <IconTelegramStrokeRounded />
                        jesmylbot
                      </a>
                    </span>
                  </li>
                  <li>
                    Состоять в канале
                    <span className="margin-gap">
                      <a
                        href="https://t.me/jesmyl_space"
                        className="children-middle"
                      >
                        <IconTelegramStrokeRounded />
                        jesmyl space
                      </a>
                    </span>
                    {isSendTgCode && (
                      <ol type="a">
                        <li>Перейти в него</li>
                        <li>Нажать кнопку "Авторизоваться" в закрепе</li>
                        <li>Ввести код из личного сообщения от бота сюда:</li>
                      </ol>
                    )}
                  </li>
                  {!isSendTgCode && (
                    <li>
                      <div className="flex flex-gap">
                        <TgNativeAuth
                          onAuthSuccessRef={onAuthSuccessRef}
                          showToastRef={showToastRef}
                        />
                        или
                        <span
                          className="color--7 pointer"
                          onClick={() => setIsSendTgCode(true)}
                        >
                          ввести код
                        </span>
                      </div>
                    </li>
                  )}
                </ol>
              </div>
              {isSendTgCode && (
                <>
                  <div className="input-container flex">
                    {error(errors.login)}
                    <div className="input-wrapper">
                      <KeyboardInput
                        onChange={setAuthCode}
                        value={authCode}
                        placeholder="Одноразовый код"
                        onFocus={async event => {
                          try {
                            const codeStr = await navigator.clipboard.readText();
                            if (authCode === codeStr) return;

                            if (/^\d{5,6}$/.test(codeStr)) {
                              setAuthCode(codeStr);
                              onAuthSend(codeStr)
                                .catch(showToast)
                                .then(event => event && onAuthSuccess(event));
                              event.value(codeStr);
                            }
                          } catch (error) {}
                        }}
                      />
                    </div>
                  </div>
                  <SendButton
                    title="Авторизоваться"
                    className="send-button"
                    disabled={isLoading || authCode.length < 3}
                    onSuccess={onAuthSuccess}
                    onFailure={showToast}
                    onSend={onAuthSend}
                  />
                </>
              )}
            </div>
            <div className="flex pointer color--3">
              <span onClick={onLoginAuth}>Ввести логин/пароль</span>
            </div>
          </div>
        </>
      }
    />
  );
}

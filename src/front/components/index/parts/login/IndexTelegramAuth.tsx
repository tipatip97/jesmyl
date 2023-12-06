import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalSokiAuth, SokiServerEvent } from "../../../../../back/complect/soki/soki.model";
import SendButton from "../../../../complect/SendButton";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import JesmylLogo from "../../../../complect/jesmyl-logo/JesmylLogo";
import KeyboardInput from "../../../../complect/keyboard/KeyboardInput";
import useToast from "../../../../complect/modal/useToast";
import mylib from "../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../shared/store";
import { soki } from "../../../../soki";
import di from "../../Index.store";
import useIndexNav from "../../complect/useIndexNav";
import indexStorage from "../../indexStorage";
import { removePullRequisites } from "../../useAuth";
import useConnectionState from "../../useConnectionState";
import { LoginIndex } from "./IndexLoginAuth";

const errorsSelector = (state: RootState) => state.index.errors;

export default function IndexTelegramAuth({ onLoginAuth }: { onLoginAuth: () => void }) {
  const dispatch = useDispatch();
  const [authCode, setAuthCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const connectionNode = useConnectionState();
  const errors = useSelector(errorsSelector);
  const { navigate } = useIndexNav();
  const error = (message: string | nil) =>
    message && <div className="login-error-message">{message}</div>;
  const [toastNode, showToast] = useToast({ mood: 'ko' });

  const onAuthSend = (codeStr?: string) => {
    setIsLoading(true);

    return new Promise<SokiServerEvent>(
      (res, rej) =>
        soki.send({ tgAuthorization: codeStr === undefined ? +authCode : +codeStr }, 'index')
          .on(res, rej, () => setIsLoading(false)));
  };

  const setAuthData = async (auth: LocalSokiAuth) => {
    if (auth) {
      dispatch(di.auth(auth));
      indexStorage.set('auth', auth);
      dispatch(di.currentApp("cm"));
      removePullRequisites();
    }
  };

  const onAuthSuccess = ({ tgAuthorization: authorization }: SokiServerEvent) => {
    if (!authorization || !authorization.ok || mylib.isStr(authorization.value)) return;
    setAuthData(authorization.value);
    navigate(["other"]);
  };

  return (
    <LoginIndex
      className=""
      headTitle="Авторизация"
      head={connectionNode}
      content={
        <div className="flex around column full-height full-width">
          {toastNode}
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
                      <EvaIcon name="telegram" />
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
                      <EvaIcon name="telegram" />
                      jesmyl space
                    </a>
                  </span>
                  <ol type="a">
                    <li>Перейти в него</li>
                    <li>Нажать кнопку "Авторизоваться" в закрепе</li>
                    <li>Ввести код из личного сообщения от бота сюда:</li>
                  </ol>
                </li>
              </ol>
            </div>
            <div className="input-container flex">
              {error(errors.login)}
              <div className="input-wrapper">
                <KeyboardInput
                  onChange={setAuthCode}
                  value={authCode}
                  placeholder="Одноразовый код"
                  onFocus={async (event) => {
                    const codeStr = await navigator.clipboard.readText();
                    if (authCode === codeStr) return;

                    if (/^\d{5,6}$/.test(codeStr)) {
                      setAuthCode(codeStr);
                      onAuthSend(codeStr)
                        .catch(showToast)
                        .then((event) => event && onAuthSuccess(event));
                      event.value(codeStr);
                    }
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
          </div>
          <div className="flex pointer color--3">
            <span onClick={onLoginAuth}>Ввести логин/пароль</span>
          </div>
        </div>
      }
    />
  );
}

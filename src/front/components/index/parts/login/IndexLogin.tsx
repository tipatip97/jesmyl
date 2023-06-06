import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalSokiAuth } from "../../../../../back/complect/soki/soki.model";
import JesmylLogo from "../../../../complect/jesmyl-logo/JesmylLogo";
import KeyboardInput from "../../../../complect/keyboard/KeyboardInput";
import LoadIndicatedContent from "../../../../complect/load-indicated-content/LoadIndicatedContent";
import mylib from "../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../shared/store";
import { soki } from "../../../../soki";
import { Auth, AuthMode, AuthorizationData, AuthorizeInSystem, IndexErrorScope, RegisterData } from "../../Index.model";
import di from "../../Index.store";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import useIndexNav from "../../complect/useIndexNav";
import indexStorage from "../../indexStorage";
import { removePullRequisites } from "../../useAuth";
import useConnectionState from "../../useConnectionState";
import "./IndexLogin.scss";


const errorsSelector = (state: RootState) => state.index.errors;

export default function IndexLogin() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [passw, setPassword] = useState("");
  const [rpassw, setRPassword] = useState("");
  const [isJSONDataLogin, setIsJSONDataLogin] = useState(false);
  const [mode, setMode] = useState<AuthMode>("login");
  const [isInProcess, setIsInProscess] = useState(1);

  const connectionNode = useConnectionState();
  const errors = useSelector(errorsSelector);
  const { navigate } = useIndexNav();
  const error = (message: string | nil) =>
    message && <div className="login-error-message">{message}</div>;


  const setError = (scope: IndexErrorScope, message: string | nil) =>
    dispatch(di.setError({ scope, message }));

  const sendData = <AuthType extends keyof AuthorizeInSystem>(type: AuthType, data: AuthorizeInSystem[typeof type]) => {
    return soki.send({
      authorization: {
        type,
        value: data as never
      }
    });
  };

  const loginInSystem = (state: AuthorizationData) => {
    return sendData('login', {
      login: mylib.md5(state.login.trim()),
      passw: mylib.md5(state.passw),
    });
  };


  const isCorrectLoginJSONData = (json: string) => {
    try {
      const data: Auth = JSON.parse(json);
      return typeof data.login === 'string'
        && typeof data.fio === 'string'
        && (typeof data.level === 'number' || typeof data.level === 'string');
    } catch (e) {
      return false;
    }
  };

  const setAuthData = (login: string | LocalSokiAuth) => {
    let auth;

    if (typeof login === 'string') {
      if (isCorrectLoginJSONData(login)) {
        indexStorage.setString('auth', login);
        auth = indexStorage.get('auth');
      }
    } else auth = login;

    if (auth) {
      dispatch(di.setAuthData(auth));
      indexStorage.set('auth', auth);
      dispatch(di.setCurrentApp("cm"));
      removePullRequisites();
    }
  };

  const registerInSystem = (state: RegisterData) => {
    return sendData('register', {
      login: mylib.md5(state.login.trim()),
      passw: mylib.md5(state.passw),
      fio: state.login.trim(),
      rpassw: mylib.md5(state.rpassw),
    });
  };

  useEffect(() => {
    if (isCorrectLoginJSONData(login)) {
      setIsJSONDataLogin(true);
      setError("login", null);
    } else {
      setIsJSONDataLogin(false);
      setError(
        "login",
        login.length < 3
          ? "Минимум 3 символа"
          : login.length > 20
            ? "Максимум 20 символов"
            : null
      );
    }
  }, [login]);

  useEffect(() => {
    setError(
      "rpassw",
      mode === "register" && rpassw !== passw ? "Пароли не совпадают" : null
    );
  }, [passw, rpassw, mode]);

  return (
    <PhaseIndexContainer
      topClass="index-login login-page"
      headTitle={mode === "register" ? "Создать профиль" : "Вход"}
      head={connectionNode}
      content={
        <LoadIndicatedContent
          className="flex around column full-height full-width"
          isLoading={!isInProcess}
          onLoaded={() => isInProcess !== 2 && navigate(["other"])}
        >
          {mode === "register" ? null : (
            <div className="logo">
              <div className="logo-container">
                <JesmylLogo />
              </div>
              <div className="text">JesmyL</div>
            </div>
          )}
          <div className="relative flex column full-width">
            <div className="input-container flex">
              {error(errors.login)}
              <div className="input-wrapper">
                <KeyboardInput
                  preferLanguage="en"
                  onChange={(value) => setLogin(value)}
                  value={login}
                  placeholder="Логин"
                />
              </div>
            </div>
            <div className="input-container flex">
              {error(errors.passw)}
              <div className="input-wrapper">
                <KeyboardInput
                  preferLanguage="en"
                  type="password"
                  onChange={(value) => setPassword(value)}
                  value={passw}
                  placeholder="Пароль"
                />
              </div>
            </div>
            {mode === "register" ? (
              <>
                <div className="input-container flex">
                  {error(errors.rpassw)}
                  <div className="input-wrapper">
                    <KeyboardInput
                      preferLanguage="en"
                      type="password"
                      onChange={(value) => setRPassword(value)}
                      value={rpassw}
                      placeholder="Подтверди пароль"
                    />
                  </div>
                </div>
              </>
            ) : null}
            <button
              className="send-button"
              disabled={!connectionNode || (!isJSONDataLogin && Object.keys(errors).length > 0)}
              onClick={async () => {
                if (mode === 'check') return;
                if (isJSONDataLogin) {
                  setIsInProscess(0);
                  setTimeout(() => {
                    setAuthData(login);
                    setIsInProscess(1);
                  });
                } else {
                  setIsInProscess(0);
                  (mode === "login"
                    ? loginInSystem({ login, passw })
                    : registerInSystem({ login, passw, rpassw }))
                    .on(
                      ({ authorization }) => {
                        if (authorization && authorization.ok !== false) {
                          setIsInProscess(1);
                          removePullRequisites();
                          setAuthData(authorization.value);
                        } else {
                          setError('login', authorization?.value || 'Неизвестная ошибка');
                          setIsInProscess(2);
                        }
                      },
                      (errorMessage) => {
                        setError('login', errorMessage);
                        setIsInProscess(2);
                      });
                }
              }}
            >
              {mode === "register" ? "Создать профиль" : "Войти"}
            </button>
          </div>
          {mode === "register" ? null : (
            <div className="the-button" onClick={() => setMode("register")}>
              Создать профиль
            </div>
          )}
        </LoadIndicatedContent>
      }
    />
  );
}

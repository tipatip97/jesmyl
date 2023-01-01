import { useEffect, useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import JesmylLogo from "../../../../complect/jesmyl-logo/JesmylLogo";
import useKeyboard from "../../../../complect/keyboard/useKeyboard";
import LoadIndicatedContent from "../../../../complect/load-indicated-content/LoadIndicatedContent";
import { soki } from "../../../../soki";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import useIndexNav from "../../complect/useIndexNav";
import { AuthMode } from "../../Index.model";
import useAuth from "../../useAuth";
import "./IndexLogin.scss";

export default function IndexLogin() {
  const [login, setLogin] = useState("");
  const [passw, setPassword] = useState("");
  const [rpassw, setRPassword] = useState("");
  const [isJSONDataLogin, setIsJSONDataLogin] = useState(false);
  const [mode, setMode] = useState<AuthMode>("login");
  const [isInProcess, setIsInProscess] = useState(1);
  const aboutInput = useKeyboard();

  const {
    loginInSystem,
    registerInSystem,
    setError,
    errors,
    isCorrectLoginJSONData,
    setAuthData,
    isConnected,
    removeLastUpdates,
  } = useAuth();
  const { navigate } = useIndexNav();
  const error = (message: string | nil) =>
    message && <div className="login-error-message">{message}</div>;

  const loginInput = aboutInput("IndexLogin login", {
    preferLanguage: 'en',
    onChange: (value) => setLogin(value),
    initialValue: login,
    placeholder: "Логин",
  });
  const passwInput = aboutInput("IndexLogin passw", {
    preferLanguage: 'en',
    type: "password",
    onChange: (value) => setPassword(value),
    initialValue: passw,
    placeholder: "Пароль",
  });
  const rpasswInput = aboutInput("IndexLogin r-passw", {
    preferLanguage: 'en',
    type: "password",
    onChange: (value) => setRPassword(value),
    initialValue: rpassw,
    placeholder: "Подтверди пароль",
  });

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
      headClass="flex between"
      head={!isConnected && <div className="flex flex-end error-message">
        <div>Нет подключения к серверу</div>
        <EvaIcon
          name="loader-outline"
          className="rotate margin-gap"
        />
      </div>}
      headTitle={mode === "register" ? "Создать профиль" : "Вход"}
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
              <div className="input-wrapper">{loginInput.node}</div>
            </div>
            <div className="input-container flex">
              {error(errors.passw)}
              <div className="input-wrapper">{passwInput.node}</div>
            </div>
            {mode === "register" ? (
              <>
                <div className="input-container flex">
                  {error(errors.rpassw)}
                  <div className="input-wrapper">{rpasswInput.node}</div>
                </div>
              </>
            ) : null}
            <button
              className="send-button"
              disabled={!isConnected || (!isJSONDataLogin && Object.keys(errors).length > 0)}
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
                  mode === "login"
                    ? loginInSystem({ login, passw })
                    : registerInSystem({ login, passw, rpassw });

                  const unsubscribe = soki.watch('authorization')(
                    (resp) => {
                      if (resp && resp.ok !== false) {
                        setIsInProscess(1);
                        removeLastUpdates();
                        setAuthData(resp.value);
                      } else {
                        setError('login', resp?.value || 'Неизвестная ошибка');
                        setIsInProscess(2);
                      }
                      unsubscribe();
                    },
                    (event) => {
                      if (event && event.ok === false) {
                        setError('login', event.value);
                        setIsInProscess(2);
                        unsubscribe();
                      }
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

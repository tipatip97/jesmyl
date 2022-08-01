import { useEffect, useState } from "react";
import JesmylLogo from "../../../../complect/jesmyl-logo/JesmylLogo";
import useKeyboard from "../../../../complect/keyboard/useKeyboard";
import LoadIndicatedContent from "../../../../complect/load-indicated-content/LoadIndicatedContent";
import { indexStorage } from "../../../../shared/jstorages";
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
    setJSONData,
  } = useAuth();
  const { navigate } = useIndexNav();
  const error = (message: string | nil) =>
    message && <div className="login-error-message">{message}</div>;

  const loginInput = aboutInput("IndexLogin login", {
    onChange: (value) => setLogin(value),
    initialValue: login,
    placeholder: "Логин",
  });
  const passwInput = aboutInput("IndexLogin passw", {
    type: "password",
    onChange: (value) => setPassword(value),
    initialValue: passw,
    placeholder: "Пароль",
  });
  const rpasswInput = aboutInput("IndexLogin r-passw", {
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
      head={mode === "register" ? "Создать профиль" : "Вход"}
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
              disabled={!isJSONDataLogin && Object.keys(errors).length > 0}
              onClick={async () => {
                if (isJSONDataLogin) {
                  setIsInProscess(0);
                  setTimeout(() => {
                    setJSONData(login);
                    setIsInProscess(1);
                  });
                } else {
                  setIsInProscess(0);
                  const resp =
                    mode === "login"
                      ? await loginInSystem({ login, passw })
                      : await registerInSystem({ login, passw, rpassw });
                  if (resp.ok) {
                    setIsInProscess(1);
                    indexStorage.rem("lastUpdate");
                  } else setIsInProscess(2);
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

import { useEffect, useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import JesmylLogo from "../../../../complect/jesmyl-logo/JesmylLogo";
import LoadIndicatedContent from "../../../../complect/load-indicated-content/LoadIndicatedContent";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import useIndexNav from "../../complect/useIndexNav";
import { AuthMode } from "../../Index.model";
import useAuth from "../../useAuth";
import "./IndexLogin.scss";

export default function IndexLogin() {
  const [login, setLogin] = useState("");
  const [passw, setPassword] = useState("");
  const [rpassw, setRPassword] = useState("");
  const [mode, setMode] = useState<AuthMode>("login");
  const [isPasswHidden, setIsPasswHidden] = useState(true);
  const [isRPasswHidden, setIsRPasswHidden] = useState(true);
  const [isInProcess, setIsInProscess] = useState(1);

  const { loginInSystem, registerInSystem, setError, errors } = useAuth();
  const { navigate } = useIndexNav();
  const error = (message: string | nil) =>
    message && <div className="login-error-message">{message}</div>;

  useEffect(() => {
    setError("login", login.length < 3 ? "Минимум 3 символа" : null);
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
              <div className="input-wrapper">
                <input
                  onChange={(event) => setLogin(event.target.value)}
                  value={login}
                  autoComplete="off"
                  placeholder="Логин"
                />
              </div>
            </div>
            <div className="input-container flex">
              {error(errors.passw)}
              <div className="input-wrapper">
                <input
                  type={isPasswHidden ? "password" : "text"}
                  onChange={(event) => setPassword(event.target.value)}
                  value={passw}
                  autoComplete="off"
                  placeholder="Пароль"
                />
                <EvaIcon
                  name="eye"
                  onClick={() => setIsPasswHidden(!isPasswHidden)}
                />
              </div>
            </div>
            {mode === "register" ? (
              <>
                <div className="input-container flex">
                  {error(errors.rpassw)}
                  <div className="input-wrapper">
                    <input
                      type={isRPasswHidden ? "password" : "text"}
                      onChange={(event) => setRPassword(event.target.value)}
                      value={rpassw}
                      placeholder="Подтверди пароль"
                    />
                    <EvaIcon
                      name={errors.rpassw ? "alert-circle" : "eye"}
                      onClick={() => setIsRPasswHidden(!isRPasswHidden)}
                    />
                  </div>
                </div>
              </>
            ) : null}
            <button
              className="send-button"
              disabled={Object.keys(errors).length > 0}
              onClick={async () => {
                setIsInProscess(0);
                const resp =
                  mode === "login"
                    ? await loginInSystem({ login, passw })
                    : await registerInSystem({ login, passw, rpassw });
                if (resp.ok) setIsInProscess(1);
                else setIsInProscess(2);
              }}
            >
              {mode === "register" ? "Создать профиль" : "Войти"}
            </button>
          </div>
          {mode === "register" ? null : (
            <div
              className="register-button"
              onClick={() => setMode("register")}
            >
              Создать профиль
            </div>
          )}
        </LoadIndicatedContent>
      }
    />
  );
}

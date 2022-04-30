import { useEffect, useState } from "react";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import useIndexNav from "../../complect/useIndexNav";
import { AuthMode } from "../../Index.model";
import useAuth from "../../useAuth";
import IndexErrorMessage from "../ErrorMessage";
import "./IndexLogin.scss";

export default function IndexLogin() {
  const [login, setLogin] = useState("");
  const [passw, setPassword] = useState("");
  const [rpassw, setRPassword] = useState("");
  const [fio, setFio] = useState("");
  const [mode, setMode] = useState<AuthMode>("login");

  const { loginInSystem, registerInSystem, setAuthError, errorMessage } =
    useAuth();
  const { navigate } = useIndexNav();

  useEffect(() => {
    login.length < 3
      ? setAuthError("Минимум 3 символа", "login")
      : setAuthError("", "login");
  }, [login]);

  useEffect(() => {
    rpassw && rpassw !== passw
      ? setAuthError("Пароли не совпадают", "rpassw")
      : setAuthError("", "rpassw");
  }, [passw, rpassw]);

  return (
    <PhaseIndexContainer
      topClass="index-login login-page"
      head="Вход"
      contentClass="flex center column"
      content={
        <>
          {mode === "register" ? (
            <>
              <div className="input-container flex">
                <div className="title">ФИО</div>
                <input
                  onChange={(event) => setFio(event.target.value)}
                  value={fio}
                />
              </div>
              <IndexErrorMessage scope="fio" />
            </>
          ) : null}
          <div className="input-container flex">
            <div className="title">Логин</div>
            <input
              onChange={(event) => setLogin(event.target.value)}
              value={login}
            />
          </div>
          <IndexErrorMessage scope="login" />
          <div className="input-container flex">
            <div className="title">Пароль</div>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={passw}
            />
          </div>
          <IndexErrorMessage scope="passw" />
          {mode === "register" ? (
            <>
              <div className="input-container flex">
                <div className="title">Пароль2</div>
                <input
                  type="password"
                  onChange={(event) => setRPassword(event.target.value)}
                  value={rpassw}
                />
              </div>
              <IndexErrorMessage scope="rpassw" />
            </>
          ) : null}
          <div className="pointer" onClick={() => setMode("register")}>
            Зарегистрироваться
          </div>
          <button
            className="send-button"
            disabled={!!errorMessage}
            onClick={async () => {
              const resp =
                mode === "login"
                  ? await loginInSystem({ login, passw })
                  : await registerInSystem({ login, fio, passw, rpassw });
              if (resp.ok) navigate(["other"]);
            }}
          >
            Отправить
          </button>
        </>
      }
    />
  );
}

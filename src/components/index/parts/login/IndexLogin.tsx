import { useState } from "react";
import PhaseIndexContainer from "../../complect/phase-container/PhaseIndexContainer";
import { sendLoginData, AuthMode } from "../../Index.source";
import "./IndexLogin.scss";

export default function IndexLogin() {
  const [login, setLogin] = useState("");
  const [passw, setPassword] = useState("");
  const [rpassw, setRPassword] = useState("");
  const [fio, setFio] = useState("");
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <PhaseIndexContainer
      topClass="index-login login-page"
      head="Вход"
      content={
        <>
          {mode === "register" ? (
            <div className="input-container flex">
              <div className="title">ФИО</div>
              <input
                onChange={(event) => setFio(event.target.value)}
                value={fio}
              />
            </div>
          ) : null}
          <div className="input-container flex">
            <div className="title">Логин</div>
            <input
              onChange={(event) => setLogin(event.target.value)}
              value={login}
            />
          </div>
          <div className="input-container flex">
            <div className="title">Пароль</div>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={passw}
            />
          </div>
          {mode === "register" ? (
            <div className="input-container flex">
              <div className="title">Пароль2</div>
              <input
                type="password"
                onChange={(event) => setRPassword(event.target.value)}
                value={rpassw}
              />
            </div>
          ) : null}
          <div className="pointer" onClick={() => setMode("register")}>Зарегистрироваться</div>
          <button
            className="send-button"
            onClick={() =>
              sendLoginData(mode, {
                login,
                fio,
                passw,
                rpassw,
              })
            }
          >
            Отправить
          </button>
        </>
      }
    />
  );
}

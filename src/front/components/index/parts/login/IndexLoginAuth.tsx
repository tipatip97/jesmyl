import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LocalSokiAuth } from "../../../../../back/complect/soki/soki.model";
import TheButton from "../../../../complect/Button";
import JesmylLogo from "../../../../complect/jesmyl-logo/JesmylLogo";
import KeyboardInput from "../../../../complect/keyboard/KeyboardInput";
import LoadIndicatedContent from "../../../../complect/load-indicated-content/LoadIndicatedContent";
import mylib from "../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../shared/store";
import { soki } from "../../../../soki";
import { AuthMode, ClientAuthorizationData, ServerAuthorizeInSystem, ClientRegisterData } from "../../Index.model";
import di from "../../Index.store";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import useIndexNav from "../../complect/useIndexNav";
import indexStorage from "../../indexStorage";
import { removePullRequisites } from "../../useAuth";
import useConnectionState from "../../useConnectionState";


const errorsSelector = (state: RootState) => state.index.errors;

export default function IndexLoginAuth() {
  const dispatch = useDispatch();
  const [nick, setNick] = useState("");
  const [passw, setPassword] = useState("");
  const [rpassw, setRPassword] = useState("");
  const [mode, setMode] = useState<AuthMode>("login");
  const [isInProcess, setIsInProscess] = useState(1);

  const connectionNode = useConnectionState();
  const errors = useSelector(errorsSelector);
  const { navigate } = useIndexNav();
  const error = (message: string | nil) =>
    message && <div className="login-error-message">{message}</div>;

  const sendData = <AuthType extends keyof ServerAuthorizeInSystem>(type: AuthType, data: ServerAuthorizeInSystem[typeof type]) => {
    return soki.send({
      authorization: {
        type,
        value: data as never
      }
    }, 'index');
  };

  const loginInSystem = (state: ClientAuthorizationData) => {
    return sendData('login', {
      login: mylib.md5(state.nick.trim()),
      passw: mylib.md5(state.passw),
    });
  };

  const setAuthData = async (auth: LocalSokiAuth) => {
    dispatch(di.auth(auth));
    indexStorage.set('auth', auth);
    dispatch(di.currentApp("cm"));
    removePullRequisites();
  };

  const registerInSystem = (state: Omit<ClientRegisterData, 'login'>) => {
    const nick = state.nick.trim();

    return sendData('register', {
      login: mylib.md5(nick),
      passw: mylib.md5(state.passw),
      fio: nick,
      nick,
      rpassw: mylib.md5(state.rpassw),
    });
  };

  useEffect(() => {
    dispatch(di.setError({
      scope: 'login',
      message: /[^\w._]/.test(nick)
        ? 'Недопустимые символы'
        : nick.length < 3
          ? 'Минимум 3 символа'
          : nick.length > 20
            ? 'Максимум 20 символов'
            : null
    }));
  }, [nick, dispatch]);

  useEffect(() => {
    dispatch(di.setError({
      scope: 'rpassw',
      message:
        mode === "register" && rpassw !== passw ? "Пароли не совпадают" : null
    }));
  }, [passw, rpassw, mode, dispatch]);

  return (
    <LoginIndex
      className=""
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
                  onChange={(value) => setNick(value)}
                  value={nick}
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
              disabled={Object.keys(errors).length > 0}
              onClick={async () => {
                if (mode === 'check') return;
                setIsInProscess(0);
                (mode === "login"
                  ? loginInSystem({ nick, passw })
                  : registerInSystem({ nick, passw, rpassw, fio: nick }))
                  .on(
                    ({ authorization }) => {
                      if (authorization && authorization.ok !== false) {
                        setIsInProscess(1);
                        removePullRequisites();
                        setAuthData(authorization.value);
                      } else {
                        dispatch(di.setError({
                          scope: 'login',
                          message: authorization?.value || 'Неизвестная ошибка',
                        }));
                        setIsInProscess(2);
                      }
                    },
                    (errorMessage) => {
                      dispatch(di.setError({
                        scope: 'login',
                        message: errorMessage,
                      }));
                      setIsInProscess(2);
                    });
              }}
            >
              {mode === "register" ? "Создать профиль" : "Войти"}
            </button>
          </div>
          {mode === "register" ? null : (
            <TheButton onClick={() => setMode("register")}>
              Создать профиль
            </TheButton>
          )}
        </LoadIndicatedContent>
      }
    />
  );
}

export const LoginIndex = styled(PhaseIndexContainer)`
.logo {
    display: flex;
    align-items: center;
    flex-direction: column;

    >.logo-container {
        background-color: var(--color--3);
        padding: 15px;
        border-radius: 100%;

        >.jesmyl-smile {
            --jesmyl-smile-color: var(--color--2);
        }
    }

    >.text {
        font-size: 2em;
        margin-top: .3em;
    }
}

.input-container {
    --padding-h: .8em;
    position: relative;
    width: 100%;
    max-width: 500px;    
    margin: 5px 0;

    .icon-button-container {
        margin-right: 10px;
    }

    >.input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;

        >.input {
            --input-keyboard-background: var(--color--2);
            --autofill-background-color: var(--color--2);
            --autofill-color: var(--text-color);

            background-color: var(--color--2);
            color: var(--text-color);
            padding: 0.5em var(--padding-h);
            padding-right: 1.5em;
            width: 100%;
            border-radius: 0.7em;
            font-size: 1.5em;
            border: var(--color--2) 2px solid;
            height: 60px;            

            &::placeholder {
                color: var(--text-color);
            }
        }

        >.eva-icon {
            position: absolute;
            right: var(--padding-h);
            cursor: pointer;
        }
    }
}

.send-button {
    background-color: var(--color--3);
    color: var(--color--2);
    padding: .5em 2em;
    font-size: 1.5em;
    border-radius: 0.8em;
    margin: 1.5em 0;
    cursor: pointer;
}

.login-error-message {
    position: absolute;
    color: var(--color--ko);
    bottom: -7px;
    width: 100%;
    text-align: center;

    +.input-wrapper {
        margin-bottom: 1em;

        >input {
            border-color: var(--color--ko);
        }
        >.eva-icon {
            --icon-color: var(--color--ko);
        }
    }
}
`;

import { useDispatch, useSelector } from "react-redux";
import mylib from "../../complect/my-lib/MyLib";
import { refresh } from "../../complect/refresh/Refresher";
import { RootState } from "../../shared/store";
import {
  Auth,
  AuthorizationData,
  AuthResponse,
  IndexErrorScope, RegisterData
} from "./Index.model";
import { indexExer, setAuthData, setError } from "./Index.store";

export default function useAuth() {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.index.auth);
  const errors = useSelector((state: RootState) => state.index.errors);
  const sendData = (body: FormData) => {
    return fetchData(body, (resp) => {
      dispatch(setAuthData(resp));
      refresh.onLogin();
    }, ret.setError);
  };

  const ret = {
    auth,
    errors,
    setError: (scope: IndexErrorScope, message: string | nil) =>
      dispatch(setError({ scope, message })),
    writeToDevelopers: (message: string) => {
      if (auth) indexExer.send({
        action: 'writeToDevelopers',
        method: 'push',
        args: {
          message,
          id: Date.now(),
          login: auth.login,
          fio: auth.fio,
          at: auth.at,
        }
      });
    },
    loginInSystem: (state: AuthorizationData) => {
      const body = new FormData();
      body.append("login", mylib.md5(state.login));
      body.append("passw", mylib.md5(state.passw));

      return sendData(body);
    },
    registerInSystem: (state: RegisterData) => {
      const body = new FormData();
      body.append("login", mylib.md5(state.login));
      body.append("fio", state.login);
      body.append("passw", mylib.md5(state.passw));
      body.append("rpassw", mylib.md5(state.rpassw));

      return sendData(body);
    },
  };
  return ret;
}

const fetchData = (body: FormData, cb: (resp: Auth) => void, err: (scope: IndexErrorScope, message: string | nil) => void) => {
  return fetch(`https://jesmyl.space/auth`, {
    method: "POST",
    body,
  })
    .then((resp) => resp.json())
    .then((resp: AuthResponse) => {
      if (resp.ok && resp.mode !== "check") {
        const { fio, level, login, at } = resp;
        cb({ fio, level: +level, login, at });
      } else err(resp.errorId, resp.errors.join("; "));

      return resp;
    })
    .catch(() => {
      err("passw", "Ошибка отправки данных.");

      return { ok: false };
    });
};

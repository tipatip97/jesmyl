import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalSokiAuth } from "../../../back/complect/soki/soki.model";
import mylib from "../../complect/my-lib/MyLib";
import { RootState } from "../../shared/store";
import { soki } from "../../soki";
import {
  Auth,
  AuthorizationData,
  AuthorizeInSystem, IndexErrorScope, RegisterData
} from "./Index.model";
import { indexExer, setAuthData, setCurrentApp, setError } from "./Index.store";
import indexStorage from "./indexStorage";

const removeLastUpdates = () => indexStorage.rem('lastUpdates');

const authSelector = (state: RootState) => state.index.auth;
const errorsSelector = (state: RootState) => state.index.errors;

export default function useAuth() {
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(true);
  const auth = useSelector(authSelector);
  const errors = useSelector(errorsSelector);
  const sendData = <AuthType extends keyof AuthorizeInSystem>(type: AuthType, data: AuthorizeInSystem[typeof type]) => {
    return soki.send({
      authorization: {
        type,
        value: data as never
      }
    });
  };

  soki.onConnect('useAuth')((isConnected) => setIsConnected(isConnected));

  const ret = {
    auth,
    errors,
    isConnected,
    removeLastUpdates,
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
        }
      });
    },
    isCorrectLoginJSONData: (json: string) => {
      try {
        const data: Auth = JSON.parse(json);
        return typeof data.login === 'string'
          && typeof data.fio === 'string'
          && (typeof data.level === 'number' || typeof data.level === 'string');
      } catch (e) {
        return false;
      }
    },
    logout: () => {
      dispatch(setAuthData(null));
      dispatch(setCurrentApp("cm"));
      removeLastUpdates();
      window.location.reload();
    },
    setAuthData: (login: string | LocalSokiAuth) => {
      let auth;

      if (typeof login === 'string') {
        if (ret.isCorrectLoginJSONData(login)) {
          indexStorage.setString('auth', login);
          auth = indexStorage.get('auth');
        }
      } else auth = login;

      if (auth) {
        dispatch(setAuthData(auth));
        dispatch(setCurrentApp("cm"));
        removeLastUpdates();
      }
    },
    loginInSystem: (state: AuthorizationData) => {
      return sendData('login', {
        login: mylib.md5(state.login),
        passw: mylib.md5(state.passw),
      });
    },
    registerInSystem: (state: RegisterData) => {
      return sendData('register', {
        login: mylib.md5(state.login),
        passw: mylib.md5(state.passw),
        fio: state.login,
        rpassw: mylib.md5(state.rpassw),
      });
    },
  };
  return ret;
}

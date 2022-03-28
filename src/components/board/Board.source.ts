import { Exer } from "../../complect/exer/Exer";
import { JStorage } from "../../complect/JStorage";
import mylib from "../../complect/MyLib";
import { BoardStorage, BorderAuthorization } from "./Board.model";
import { setError, setPhase } from "./boardSlice";


export const boardStorage = new JStorage<BoardStorage>("board");
export const boardExer = new Exer<BoardStorage>(boardStorage, 'index');

export let localAuth = boardStorage.get("auth");

export const sendLoginData = (mode: 'check' | 'login' | 'register', state?: BorderAuthorization) => {
  return fetch(`${localStorage.host}/auth`, {
    method: 'POST',
    body: setAuthBody(mode, state)
  })
    .then(resp => resp.json())
    .then(resp => { 
      if (resp.ok && resp.mode !== 'check') {
        const { login, at, fio, level } = resp;

        localAuth = { login, at, fio, level };
        boardStorage.set("auth", localAuth);
        // resp.mode === 'register'
        //   ? System.showToast('Регистрация и вход прошли успешно!')
        //   : System.showToast('Вход прошёл успешно!');

        setPhase('apps');
      } else setError({ errorMessage: resp.errorMessage, errorScope: resp.errorId });
      return resp;
    })
    .catch(() => setError({ errorMessage: 'Ошибка отправки данных.', errorScope: 'general' }));
};

export const setAuthBody = (mode = 'check', state?: BorderAuthorization) => {
  if (state == null) return null;

  const body = new FormData();

  const fields = ({
    check: ['login', 'at'],
    login: ['login', 'passw'],
    register: ['fio', 'login', 'passw', 'rpassw'],
  }[mode] || ['login', 'at']) as (keyof BorderAuthorization)[];

  fields.forEach(fieldName => {
    const fieldVal = state[fieldName] != null
      ? fieldName === 'fio'
        ? state[fieldName]
        : mylib.md5(state[fieldName] || '')
      : localAuth && localAuth[fieldName];
    if (fieldVal != null) {
      body.append(fieldName, fieldVal);
    }
  });

  return body;
};

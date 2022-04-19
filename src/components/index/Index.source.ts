import mylib from '../../complect/my-lib/MyLib';
import { indexStorage } from '../../shared/jstorages';
import { IndexAuthorization } from './Index.model';
import { setError } from './Index.store';

export let localAuth = indexStorage.getOr('auth', { level: 0 });
export type AuthMode = 'check' | 'login' | 'register';

export const sendLoginData = (mode: AuthMode, state?: IndexAuthorization) => {
  return fetch(`https://jesmyl.space/auth`, {
    method: 'POST',
    body: setAuthBody(mode, state)
  })
    .then(resp => resp.json())
    .then(resp => {
      if (resp.ok && resp.mode !== 'check') {
        const { login, at, fio, level } = resp;

        localAuth = { login, at, fio, level };
        indexStorage.set('auth', localAuth);
        // resp.mode === 'register'
        //   ? System.showToast('Регистрация и вход прошли успешно!')
        //   : System.showToast('Вход прошёл успешно!');

        // setBoardPhase('apps');
      } else setError({ errorMessage: resp.errorMessage, errorScope: resp.errorId });
      return resp;
    })
    .catch(() => setError({ errorMessage: 'Ошибка отправки данных.', errorScope: 'general' }));
};

export const setAuthBody = (mode = 'check', state?: IndexAuthorization) => {
  if (state == null) return null;

  const body = new FormData();

  const fields = ({
    check: ['login', 'at'],
    login: ['login', 'passw'],
    register: ['fio', 'login', 'passw', 'rpassw'],
  }[mode] || ['login', 'at']) as (keyof IndexAuthorization)[];

  fields.forEach(fieldName => {
    const fieldVal = state[fieldName] != null
      ? fieldName === 'fio'
        ? state[fieldName]
        : mylib.md5(state[fieldName] || '')
      : localAuth[fieldName];
    if (fieldVal != null) {
      body.append(fieldName, fieldVal);
    }
  });

  return body;
};

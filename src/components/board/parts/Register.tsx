import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { BorderAuthorization } from '../Board.model';
import { sendLoginData } from '../Board.source';
import { setError, setFieldState, setBoardPhase } from '../Board.store';
import { BoardErrorMessage } from './ErrorMessage';

export function BoardRegister() {
  const authState = useSelector((state: RootState) => state.board.auth);
  const fio = authState?.fio;
  const login = authState?.login;
  const passw = authState?.passw;
  const rpassw = authState?.rpassw;
  const onInputFieldChanger =
    (fieldn: keyof BorderAuthorization) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setFieldState({ fieldn, value: event.target.value });

  return (
    <>
      <div className='phase-name'>Вход</div>
      <div className='system-item'>
        <span className='text' onClick={() => setBoardPhase('settings')}>
          назад
        </span>
      </div>
      <div className='system-item'>
        <input
          className=''
          value={fio}
          placeholder='Псевдоним'
          onInput={onInputFieldChanger('fio')}
        />
      </div>
      <BoardErrorMessage scope='fio' />
      <div className='system-item'>
        <input
          className=''
          value={login}
          placeholder='Логин (+76543210123)'
          onInput={onInputFieldChanger('login')}
        />
      </div>
      <BoardErrorMessage scope='login' />
      <div className='system-item'>
        <input
          className=''
          value={passw}
          placeholder='Пароль'
          type='password'
          onInput={onInputFieldChanger('passw')}
        />
      </div>
      <div className='system-item'>
        <input
          className=''
          value={rpassw}
          placeholder='Повтор пароля'
          type='password'
          onInput={onInputFieldChanger('rpassw')}
        />
      </div>
      <BoardErrorMessage scope='passw' />
      <div className='system-item'>
        <span
          className='text'
          onClick={() => {
            if (!login) {
              setError({
                errorMessage: 'Введи логин (Номер телефона)!',
                errorScope: 'login',
              });
              return;
            }
            if (!passw) {
              setError({
                errorMessage: 'Введи пароль!',
                errorScope: 'passw',
              });
              return;
            }
            if (passw !== rpassw) {
              setError({
                errorMessage: 'Пароли не совпадают!',
                errorScope: 'passw',
              });
              return;
            }
            setError({ errorMessage: '' });
            sendLoginData('register', authState);
          }}
        >
          зарегистрироваться
        </span>
      </div>
      <BoardErrorMessage scope='general' />
    </>
  );
}

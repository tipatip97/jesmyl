import { useDispatch, useSelector } from "react-redux";
import mylib from "../../complect/my-lib/MyLib";
import { RootState } from "../../shared/store";
import { Auth, AuthorizationData, AuthResponse, IndexErrorScope, RegisterData } from "./Index.model";
import { setAuthData, setError } from "./Index.store";


export default function useAuth() {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.index.auth);
    const errorMessage = useSelector((state: RootState) => state.index.errorMessage);

    const ret = {
        auth,
        errorMessage,
        setAuthError: (errorMessage: string, errorScope: IndexErrorScope) => dispatch(setError({ errorMessage, errorScope })),
        loginInSystem: (state: AuthorizationData) => {
            const body = new FormData();
            body.append('login', mylib.md5(state.login));
            body.append('passw', mylib.md5(state.passw));

            return fetchData(body, (resp) => {
                dispatch(setAuthData(resp));
                return resp;
            });
        },
        registerInSystem: (state: RegisterData) => {
            const body = new FormData();
            body.append('login', mylib.md5(state.login));
            body.append('fio', mylib.md5(state.fio));
            body.append('passw', mylib.md5(state.passw));
            body.append('rpassw', mylib.md5(state.rpassw));

            return fetchData(body, (resp) => {
                dispatch(setAuthData(resp));
                return resp;
            });
        },
    };
    return ret;
}

const fetchData = (body: FormData, cb: (resp: Auth) => void) => {
    return fetch(`https://jesmyl.space/auth`, {
        method: 'POST',
        body
    })
        .then(resp => resp.json())
        .then((resp: AuthResponse) => {
            if (resp.ok && resp.mode !== 'check') {
                cb && cb(resp.auth);
            } else setError({ errorMessage: resp.errorMessage, errorScope: resp.errorId });
            return resp;
        })
        .catch(() => {
            setError({ errorMessage: 'Ошибка отправки данных.', errorScope: 'general' });
            return { ok: false };
        });
}

import { filer } from '../../filer/Filer';
import { LocalSokiAuth, SokiAuth, SokiClientEventBody } from '../soki.model';
import smylib from './SMyLib';

export class SokiAuther {
    mtime = 0;

    get authList(): SokiAuth[] | undefined {
        return filer.contents.admin.userList.data;
    }

    isCorrectData(user?: LocalSokiAuth | null) {
        return new Promise((res) => {
            const userLogin = user?.login;
            if (!user || !user.login) {
                res(false);
                return;
            }
            const userPassw = user?.passw;
            const auth = this.authList?.find(({ login }) => userLogin === login);

            if (!auth || (userPassw && smylib.md5(userPassw) !== auth.passw))
                res(false);
            else res(true);
        });
    }

    authenticate(event: SokiClientEventBody['authorization']) {
        return new Promise<SokiAuth>((res, rej) => {
            try {
                if (event) {
                    const eventLogin = event.value.login;
                    const passw = event.value.passw;
                    const secretPassw = smylib.md5(passw);
                    const user = this.authList?.find(({ login }) => eventLogin === login);

                    if (event.type === 'register') {
                        if (user) {
                            rej('Такой логин уже есть!');
                            return;
                        }

                        const auth = {
                            level: 3,
                            fio: event.value.fio,
                            login: eventLogin,
                            passw: secretPassw,
                        };

                        this.authList?.push(auth);

                        filer.saveChanges(['userList'], 'admin')
                            .then(() => res({ ...auth, passw }));
                    } else {
                        if (user?.passw === secretPassw) res({ ...user, passw });
                        else rej('Неверные данные');
                    }

                } else rej('Неизвестная ошибка #9384510');
            } catch (e) {
                rej('Неизвестная ошибка #187265');
            }
        });
    }
}

export const sokiAuther = new SokiAuther();
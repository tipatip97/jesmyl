import fs from 'fs';
import { LocalSokiAuth, rootDirective, SokiAuth, SokiClientEvent } from '../soki.model';
import smylib from './SMyLib';

const bonjourPath = `${rootDirective}/bonjour`;

export class SokiAuther {
    authList: SokiAuth[] = [];
    isReady = false;
    onReadies: ((authList: SokiAuth[]) => void)[] = [];

    constructor() {
        this.getAuthList().then((list) => {
            this.authList = list;
            this.isReady = true;
            this.onReadies.forEach((cb) => cb(list));
        });
    }

    onReady(cb: (authList: SokiAuth[]) => void) {
        if (this.isReady) cb(this.authList);
        else if (this.onReadies.indexOf(cb) < 0) this.onReadies.push(cb);
    }

    getAuthList() {
        return new Promise<SokiAuth[]>((res, rej) => {
            fs.readFile(bonjourPath, 'utf-8', (err, data) => {
                if (err) {
                    fs.writeFile(bonjourPath, '[]', null, (error) => {
                        if (error) rej();
                        else res([]);
                    });
                } else {
                    try {
                        res(JSON.parse(data));
                    } catch (e) {
                        rej();
                    }
                }
            });
        });
    }

    isCorrectData(user?: LocalSokiAuth | null) {
        return new Promise((res, rej) => {
            const userLogin = user?.login;
            if (!user || !user.login) {
                res(false);
                return;
            }
            this.onReady((authList) => {
                const userPassw = user?.passw;
                const auth = authList.find(({ login }) => userLogin === login);

                if (!auth || (userPassw && smylib.md5(userPassw) !== auth.passw))
                    res(false);
                else res(true);
            });
        });
    }

    authenticate(event: SokiClientEvent['body']['authorization']) {
        return new Promise<SokiAuth>((res, rej) => {
            try {
                if (event) {
                    this.onReady((authList) => {
                        const eventLogin = event.value.login;
                        const passw = event.value.passw;
                        const secretPassw = smylib.md5(passw);
                        const user = authList.find(({ login }) => eventLogin === login);

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

                            authList.push(auth);

                            try {
                                const authListText = JSON.stringify(authList);
                                fs.writeFile(bonjourPath, authListText, null, (error) => {
                                    if (error) rej('Неизвестная ошибка');
                                    else res({ ...auth, passw });
                                });
                            } catch (e: any) {
                                rej(e.message);
                            }
                        } else {
                            if (user?.passw === secretPassw) res({ ...user, passw });
                            else rej('Неверные данные');
                        }
                    });

                } else rej('Неизвестная ошибка #9384510');
            } catch (e) {
                rej('Неизвестная ошибка #187265');
            }
        });
    }
}

export const sokiAuther = new SokiAuther();
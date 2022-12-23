import fs from 'fs';
import { rootDirective, SokiAuth, SokiClientEvent } from '../Soki.model';

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

    authenticate(event: SokiClientEvent['body']['authorization']) {
        return new Promise<SokiAuth>((res, rej) => {
            if (event) {
                this.onReady((authList) => {
                    const eventLogin = event.value.login;
                    const user = authList.find(({ login }) => eventLogin === login);

                    if (event.type === 'register') {
                        if (user) {
                            rej('Такой логин уже есть!');
                            return;
                        }

                        const auth = {
                            level: 3,
                            fio: event.value.fio,
                            login: event.value.login,
                            passw: event.value.passw,
                        };

                        authList.push(auth);

                        try {
                            const authListText = JSON.stringify(authList);
                            fs.writeFile(bonjourPath, authListText, null, (error) => {
                                if (error) rej();
                                else res(auth);
                            });
                        } catch (e: any) {
                            rej(e.message);
                        }
                    } else {
                        if (user) res(user);
                        else rej('Неверные данные');
                    }
                });

            } else rej('[No value in response]');
        });
    }
}

export const sokiAuther = new SokiAuther();
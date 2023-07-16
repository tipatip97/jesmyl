import { ExecutionDict } from '../../complect/executer/Executer.model';
import { filer } from '../../complect/filer/Filer';
import sokiServer from '../../complect/soki/SokiServer';
import { SokiServiceCallback } from '../../complect/soki/soki.model';
import { packScheduleWidgetInviteLink } from './complect';
import { ScheduleStorage } from './models/ScheduleWidget.model';

export const indexService: SokiServiceCallback = (key, value, eventData, capsule, client) => {
    return new Promise((resolve, reject) => {
        if (key === 'swInvite') {
            if (!capsule?.auth || eventData.auth == null) {
                reject('Не авторизован');
                return;
            }
            const schedules: ScheduleStorage<string> = filer.contents.index?.schedules?.data;
            let isRejected = false;

            const isSetted = schedules.list.some((schedule) => {
                return schedule.ctrl.users.some((user) => {
                    if (user.login !== undefined) return false;
                    if (packScheduleWidgetInviteLink(schedule.w, user.mi) === value) {
                        if (schedule.ctrl.users.some((u) => u.login === capsule.auth!.login)) {
                            reject(`Вы уже являетесь участником ${schedule.title || 'этого события'}`);
                            isRejected = true;
                            return true;
                        }
                        const execs: ExecutionDict[] = [
                            {
                                action: 'joinUserByLink',
                                args: {
                                    schw: schedule.w,
                                    userMi: user.mi,
                                },
                            }
                        ];
                        sokiServer.execExecs('index', execs, eventData, capsule, client)
                            .then(() => resolve('Успешно добавлен в список участников'));
                        return true;
                    }
                    return false;
                });
            });
            if (!isRejected && !isSetted) reject('Ссылка не действительна');
            return;
        }

        reject('Ошибка 0937126');
    });
}

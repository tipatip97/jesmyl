
type NotifyOptions<Omits extends string = never> = Omit<NotificationOptions, 'icon' | Omits> & { data?: Record<string, unknown> & Record<'key', string> };

const icon = './apple-touch-icon.png';

const openNotifies: { [key: string]: Notification } = {};

export default class Noty {
    static checkPermission = () => Notification.requestPermission();

    static notify = (title: string, options?: NotifyOptions) => {
        const key = options?.data?.key;
        const prevNoty = key ? openNotifies[key] || null : null;
        const silent = options?.silent === true || (prevNoty !== null && options?.silent !== false);
        const delNoty = () => {
            if (key && noty === openNotifies[key]) {
                delete openNotifies[key];
            }
        };

        prevNoty?.close();

        const noty = new Notification(title, {
            ...options,
            icon,
            silent,
        });
        noty.addEventListener('click', () => {
            window.focus();
            delNoty();
        });
        noty.addEventListener('close', delNoty);
        openNotifies[key] = noty;

        return noty;
    };

    static simpleNotify = (title: string, body?: string, options?: NotifyOptions<'body'>) => {
        return this.notify(title, { ...options, body });
    };

    static silentNotify = (title: string, body?: string, options?: NotifyOptions<'body'>) => {
        return this.notify(title, {
            ...options,
            body,
            silent: true,
        });
    };
}

Noty.checkPermission();

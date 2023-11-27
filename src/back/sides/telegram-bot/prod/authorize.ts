import { CallbackQuery, ChatMember, SendMessageOptions } from "node-telegram-bot-api";
import smylib from "../../../complect/soki/complect/SMyLib";
import { JTgBotCallbackQuery } from "../tg-bot";

export const supportTelegramAuthorizations: Record<number, () => CallbackQuery> = {};
const telegramAuthorizationUsers: Record<number, number> = {};
const codeExparingTime = 180000;
let minutesText = '';

if (codeExparingTime / 60000 < 1) {
    const num = (codeExparingTime / 60000) * 60;
    minutesText = `${num} ${smylib.declension(num, 'секунда', 'секунды', 'секунд')}`;
} else {
    const num = codeExparingTime / 60000;
    minutesText = `${num} ${smylib.declension(num, 'минута', 'минуты', 'минут')}`;
}

const unsubscribedAlert = {
    text: 'Необходимо быть подписанным на этот канал @jesmyl_space',
};

export const authorizeTelegramCb: JTgBotCallbackQuery = async (prodBot, query, answer) => {
    const id = query.from.id;

    const sendMessage = async (text: string, options?: SendMessageOptions) => {
        const res = await prodBot.sendMessage(query.from, text, options);
        if (!res.ok) answer({ text: res.value });
        return res;
    };

    let member: ChatMember | und;

    try {
        member = await prodBot.tryIsUserMember(id);
    } catch (err) {
        return unsubscribedAlert;
    }

    let user = member.user;

    const prefix = `\n\n${user.first_name || ''
        } ${user.last_name || ''
        } (${user.username
            ? member.status === 'creator'
                ? `<code>${user.username}</code>`
                : `@${user.username}`
            : `<i>${prodBot.convertLoginFromId(user.id)}</i>`
        }, ${user.id})`;

    if (telegramAuthorizationUsers[id] !== undefined) {
        sendMessage(
            'Повторный запрос кода\n\nЛогин: '
            + (query.from.username || prodBot.convertLoginFromId(query.from.id))
            + `\nКод: <code>${telegramAuthorizationUsers[id]}</code>`);


        prodBot.log(`Повторный запрос кода авторизации${prefix}`);

        return 'Код отправлен повторно';
    }

    let randId: number = -1;

    do randId = smylib.randomOf(10000, 999999);
    while (supportTelegramAuthorizations[randId] !== undefined);

    const timeout = setTimeout(() => {
        delete supportTelegramAuthorizations[randId];
        delete telegramAuthorizationUsers[id];
        sendMessage(`Код ${randId} был упразднён`);
    }, codeExparingTime);

    supportTelegramAuthorizations[randId] = () => {
        delete supportTelegramAuthorizations[randId];
        delete telegramAuthorizationUsers[id];
        clearTimeout(timeout);
        sendMessage(`Код ${randId} был использован`);
        return query;
    };

    telegramAuthorizationUsers[id] = randId;

    try {
        if (
            !(await sendMessage(`Твой одноразовый код: <code>${randId}</code>.\n`
                + 'Логин: '
                + (query.from.username || prodBot.convertLoginFromId(query.from.id))
                + '\n\nЗайди в приложение <a href="https://jesmyl.ru">JesmyL</a>, '
                + 'перейди в раздел Другое - Войти, и введи его в поле ввода.\n\n'
                + `Через ${minutesText} этот код будет упразднён`)).ok
        ) return;
    } catch (error) { }

    prodBot.log(`Запрос кода авторизации${prefix}`);

    return 'Код отправлен';
};

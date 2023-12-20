import { logTelegramBot } from '../sides/telegram-bot/log/log-bot';

process.listeners('uncaughtException').forEach((func) => { process.off('uncaughtException', func) });

export class ErrorCatcher {
    static logAllErrors() {
        process.on('uncaughtException', (err) => {
            console.error(err);
            logTelegramBot.postMessage(`<b>!!!!!!!!! SYSTEM\n\n${err}</b>`);
        });
    }
}

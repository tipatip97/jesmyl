import { tglogger } from '../sides/telegram-bot/log/log-bot';

process.listeners('uncaughtException').forEach(func => {
  process.off('uncaughtException', func);
});

export class ErrorCatcher {
  static logAllErrors() {
    process.on('uncaughtException', err => {
      console.error(err);
      const stack = err.stack || err.cause;
      tglogger.systemError('' + err + (stack ? `\n\n<i>${stack}</i>` : ''));
    });
  }
}

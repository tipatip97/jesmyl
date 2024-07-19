import sokiServer from './complect/soki/SokiServer';
import { supportTelegramBot } from './sides/telegram-bot/support/support-bot';

supportTelegramBot.getAdmins().finally(() => sokiServer.start());

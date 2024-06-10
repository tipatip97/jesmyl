import TelegramBot, { SendMessageOptions } from 'node-telegram-bot-api';
import { SMyLib } from '../../../shared/SMyLib';
import { jesmylTgBot } from '../bot';
import { JesmylTelegramBot } from '../tg-bot';
import { JTgBotCallbackQuery } from '../tg-bot-wrapper';

export const tgBotUrlController = async (tgBot: JesmylTelegramBot, adminBot?: JesmylTelegramBot) => {
  let chat: TelegramBot.Chat | null = null;
  let knownUrls: string[] = [];

  const urlWordParts = '-\\w\\d@_%';
  const domainRegStr = `[${urlWordParts}]+\\.[${urlWordParts}./]{2,}`;
  const urlRegStr = `${domainRegStr}[${urlWordParts}?.#=$&]*`;

  const urlReg = RegExp(`(${urlRegStr})`);
  const domainReg = RegExp(`(${domainRegStr})`, 'g');

  const knownUrlsSet: Set<string> = new Set();
  const makeUrlHyperlink = (url: string) => `<a href="http://${url}">${url}</a>`;

  const message1Separation = `.
Попытка отправить сообщение содержащее следующие неизвестные ссылки в группе `;
  const message2Separation = `
Отправку такого сообщения нужно подтвердить Админу.

`;

  const sendToAdmin = (text: string, altUserId?: number, options?: TelegramBot.SendMessageOptions) => {
    if (adminBot === undefined) {
      if (altUserId !== undefined) {
        tgBot.sendMessage(altUserId, text, options);
        return;
      }

      SMyLib.entries(tgBot.admins).forEach(([_id, member]) => {
        if (!member.user || member.user.is_bot) return;
        try {
          tgBot.sendMessage(member.user.id, text, options);
        } catch (e) {}
      });
      return;
    }

    adminBot.postMessage(text, options);
  };

  tgBot.refreshAdmins();

  const keys: (TelegramBot.InlineKeyboardButton & { cb: JTgBotCallbackQuery })[][] = [
    [
      {
        text: 'Отправить',
        callback_data: 'send-URL-message',
        cb: (_bot, query) => {
          const text = query.message?.text;
          if (!text || query.message === undefined) return;
          const message = `<b>${text.split(message1Separation)[0]}</b>:\n\n${text.split(message2Separation)[1]}`;

          if (adminBot) adminBot.deleteMessage(query.message.message_id);
          else if (query.message.from) jesmylTgBot.bot.deleteMessage(query.message.from.id, query.message.message_id);

          tgBot.postMessage(message);
          sendToAdmin(
            'В чат' +
              (chat === null ? '' : ` <b>${chat.title}</b>`) +
              ` отправлено сообщение\n\n<blockquote expandable>${message}</blockquote>`,
            query.from.id,
          );
        },
      },
      {
        text: 'Отменить',
        callback_data: `delete-URL-message`,
        cb: (_bot, query) => {
          if (!query.message?.text) return;
          const messageText =
            '<b>Отмена отправки сообщения:</b>\n\n<tg-spoiler><b>ТЕКСТ\nОТПРАВЛЕННОГО\nСООБЩЕНИЯ</b>:\n\n' +
            query.message.text.split(message2Separation)[1] +
            '</tg-spoiler>';

          if (adminBot) {
            adminBot.editMessageText(query.message.message_id, messageText);
            return;
          }

          jesmylTgBot.bot.editMessageText(messageText, {
            chat_id: query.from.id,
            message_id: query.message.message_id,
            parse_mode: 'HTML',
          });
        },
      },
    ],
    [
      {
        text: 'Перечитать информацию группы',
        callback_data: 'refresh-dsc',
        cb: async bot => {
          const knowns = await refreshDescription();
          await bot.refreshAdmins();

          sendToAdmin(`Информация группы перечитана. Известные ссылки:\n\n${knowns.join('\n')}`);
        },
      },
    ],
  ];

  const botOptions: SendMessageOptions = (adminBot ?? tgBot).makeSendMessageOptions(keys);

  const refreshDescription = async () => {
    chat = await tgBot.getChat();
    chat.description?.replace(domainReg, (all, address) => {
      knownUrlsSet.add(address);
      return all;
    });

    knownUrls = Array.from(knownUrlsSet);
    return knownUrls;
  };

  refreshDescription();

  tgBot.onChatMessages(async (bot, message) => {
    if (message.from == null || message.text === undefined || message.from.is_bot) return;

    if (bot.admins[message.from.id] != null) return;

    const usedUnknownUrls: string[] = [];
    const urlParts = message.text.split(urlReg);

    for (let i = 0; i < urlParts.length; i += 2) {
      const url = urlParts[i + 1];
      if (url == null || knownUrls.some(knownUrl => url.startsWith(knownUrl))) continue;

      usedUnknownUrls.push(url);
    }

    if (usedUnknownUrls.length === 0) return;
    const messageFrom = message.from;
    bot.deleteMessage(message.message_id);

    const alertMessage = `Сообщения, содержащие неизвестные ссылки (не указанные в описании группы <b>${message.chat.title}</b>), должны пройти модерацию от Админов.\nСообщение, которое вы отправили будет переслано обратно в автоматическом режиме после прохождения модерации.`;

    try {
      await bot.sendMessage(message.from.id, alertMessage);
    } catch (error) {
      const deleteTime = 30;
      const sentMessage = await bot.postMessage(
        `${alertMessage}
  
<b>Это сообщение будет удалено через ${deleteTime} секунд</b>`,
      );

      setTimeout(() => bot.deleteMessage(sentMessage.message_id), deleteTime * 1000);
    }

    sendToAdmin(
      (messageFrom.username ? `@${messageFrom.username}, ` : '') +
        `${messageFrom.first_name || ''}${messageFrom.last_name ? ` ${messageFrom.last_name}` : ''}` +
        message1Separation +
        `<b>${message.chat.title}</b>:\n` +
        usedUnknownUrls.map(makeUrlHyperlink).join('\n') +
        message2Separation +
        '<blockquote expandable>' +
        message.text +
        '</blockquote>',
      undefined,
      botOptions,
    );
  });
};

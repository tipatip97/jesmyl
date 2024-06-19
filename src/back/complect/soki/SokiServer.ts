/* eslint-disable no-throw-literal */
import WebSocket, { WebSocketServer } from 'ws';
import { startTgGamerListener } from '../../sides/telegram-bot/gamer/tg-gamer';
import { supportTelegramBot } from '../../sides/telegram-bot/support/support-bot';
import { ErrorCatcher } from '../ErrorCatcher';
import { setServerPolyfills } from '../polyfills';
import { SokiServerAuthorization } from './parts/100-Authorization';
import { SokiClientEvent, SokiServerDoActionProps } from './soki.model';

setServerPolyfills();
ErrorCatcher.logAllErrors();

export class SokiServer extends SokiServerAuthorization {
  start() {
    new WebSocketServer({ port: 4446 }).on('connection', (client: WebSocket) => {
      this.sendStatistic();

      client.on('message', async (data: WebSocket.RawData) => {
        const eventData: SokiClientEvent = JSON.parse('' + data);

        if (eventData.body.ping === true) {
          this.send({ requestId: eventData.requestId, pong: true, appName: eventData.appName }, client);
          return;
        }

        const doProps: SokiServerDoActionProps = {
          client,
          eventData,
          eventBody: eventData.body,
          appName: eventData.appName,
          requestId: eventData.requestId,
          capsule: this.capsules.get(client),
        };

        if (await this.doOnConnect(doProps)) return;
        if (await this.doOnLiveData(doProps)) return;
        if (await this.doOnAuthorization(doProps)) return;
        if (await this.doOnTelegramAuth(doProps)) return;
        if (await this.doOnPullData(doProps)) return;
        if (await this.doOnServiceActions(doProps)) return;
        if (await this.doOnSubscribes(doProps)) return;
        if (await this.doOnExecs(doProps)) return;
      });

      client.on('close', () => this.onClientDisconnect(client));
    });

    console.info('SokiServer started');
  }
}

const sokiServer = new SokiServer();

supportTelegramBot.getAdmins().finally(() => sokiServer.start());

export default sokiServer;

startTgGamerListener();

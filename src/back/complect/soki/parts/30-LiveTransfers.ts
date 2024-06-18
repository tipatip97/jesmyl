import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerSubscribes } from './20-Subscribes';

export class SokiServerLiveTransfers extends SokiServerSubscribes implements SokiServerDoAction<'LiveData'> {
  async doOnLiveData({ appName, eventBody }: SokiServerDoActionProps) {
    if (eventBody.liveData === undefined || eventBody.subscribeData === undefined) return false;

    if (eventBody.liveData === null) delete this.liveData[eventBody.subscribeData];
    else this.liveData[eventBody.subscribeData] = eventBody.liveData;

    const liveData = { [eventBody.subscribeData]: eventBody.liveData };

    this.subscriptions.liveData.map.forEach((capsule, client) => {
      if (capsule.subscribeData === undefined) {
        this.send({ appName: 'index', liveData: this.liveData }, client);
        return;
      }
      if (capsule.subscribeData !== eventBody.subscribeData) return;
      this.send({ appName, liveData }, client);
    });

    return false;
  }
}

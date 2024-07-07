import cmService from '../../../apps/cm/service';
import { indexService } from '../../../apps/index/service';
import { SokiServerDoAction, SokiServerDoActionProps, SokiServicePack } from '../soki.model';
import { SokiServerConnection } from './70-Connection';

export class SokiServerServices extends SokiServerConnection implements SokiServerDoAction<'ServiceActions'> {
  async doOnServiceActions({ appName, client, eventBody, eventData, requestId }: SokiServerDoActionProps) {
    if (eventBody.service === undefined || !eventData.appName) return false;

    const service = eventBody.service;

    const services: SokiServicePack = {
      cm: cmService,
      index: indexService,
    };

    if (services[eventData.appName] === undefined) {
      this.send(
        {
          requestId,
          service: {
            key: service.key,
            errorMessage: 'У данного приложения нет сервиса',
          },
          appName,
        },
        client,
      );

      return false;
    }

    services[eventData.appName]?.(
      eventBody.service.key,
      eventBody.service.value,
      eventData,
      () => this.capsules.get(client),
      client,
    )
      .then(value => {
        this.send(
          {
            requestId,
            service: {
              key: service.key,
              value,
            },
            appName,
          },
          client,
        );
      })
      .catch(error => {
        this.send(
          {
            requestId,
            service: {
              key: service.key,
              errorMessage: error,
            },
            appName,
          },
          client,
        );
      });

    return false;
  }
}

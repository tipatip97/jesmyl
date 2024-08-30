import { AppName } from '../../app/App.model';
import { soki } from '../../soki';

export default function serviceMaster(appName: AppName) {
  return <ReturnValue, Value = unknown>(key: string, value?: Value) => {
    return new Promise<ReturnValue>((resolve, reject) => {
      soki.send({ service: { key, value } }, appName).on(({ service }) => {
        if (service == null) {
          reject('Ошибка сервиса');
          return;
        }

        if (service.key === key) {
          if (service.errorMessage) reject(service.errorMessage);
          else resolve(service.value);
        }
      }, reject);
    });
  };
}

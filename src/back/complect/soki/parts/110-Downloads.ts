import fs from 'fs';
import { filer } from '../../filer/Filer';
import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerShareds } from './105-Shareds';

export class SokiServerDownloads extends SokiServerShareds implements SokiServerDoAction<'Downloads'> {
  async doOnDownloads({ appName, client, eventBody, requestId }: SokiServerDoActionProps) {
    if (eventBody.download === undefined) return false;
    const capsule = this.capsules.get(client);
    const key = eventBody.download;

    fs.readFile(filer.fileNamePath(appName, key), null, (error, data) => {
      if (error) {
        this.send(
          {
            appName,
            requestId,
            errorMessage: `download error ${error}`,
          },
          (capsule && this.clients.get(capsule.deviceId)) ?? client,
        );
        return;
      }
      this.send(
        {
          appName,
          requestId,
          download: {
            key,
            value: '' + data,
          },
        },
        (capsule && this.clients.get(capsule.deviceId)) ?? client,
      );
    });

    return false;
  }
}

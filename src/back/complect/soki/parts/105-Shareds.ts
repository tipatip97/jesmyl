import { SMyLib } from '../../../shared/SMyLib';
import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiSharedKey } from '../values';
import { SokiServerAuthorization } from './100-Authorization';

export class SokiServerShareds
  extends SokiServerAuthorization
  implements SokiServerDoAction<'ShareData' | 'GetShared'>
{
  sharedValues: Partial<Record<SokiSharedKey, Record<string, unknown>>> = {};

  async doOnShareData({ eventBody }: SokiServerDoActionProps) {
    if (eventBody.shareData === undefined) return false;
    const { key, value } = eventBody.shareData;

    this.sharedValues[key] = { ...this.sharedValues[key], ...value };

    return false;
  }

  async doOnGetShared({ appName, client, eventBody, requestId }: SokiServerDoActionProps) {
    if (eventBody.getShared === undefined) return false;
    const { key, prefix } = eventBody.getShared;
    let value = this.sharedValues[key];

    if (value === undefined) {
      this.send({ appName, requestId }, client);
      return false;
    }

    if (prefix !== undefined) {
      const val: Record<string, unknown> = {};
      let isNoSets = true;

      SMyLib.entries(value).forEach(([key, value]) => {
        if (key.startsWith(prefix)) {
          val[key] = value;
          isNoSets = false;
        }
      });

      if (isNoSets) {
        this.send({ appName, requestId }, client);
        return false;
      }
    }

    this.send({ sharedData: { key, value }, appName, requestId }, client);

    return false;
  }
}

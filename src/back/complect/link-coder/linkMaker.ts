import { SokiAppName } from 'shared/api';
import LinkCoder from './LinkCoder';

interface Attrs {
  appName: SokiAppName;
  key: string;
  value: any;
}

export const makeSharedLink = (url: string) =>
  new LinkCoder<Attrs>(url, 'value', {
    appName: 'a',
    key: 'k',
    value: 'v',
  });

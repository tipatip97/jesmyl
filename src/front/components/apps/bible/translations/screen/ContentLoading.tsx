import { TheIconLoading } from '../../../../../complect/the-icon/IconLoading';
import useConnectionState from '../../../../index/useConnectionState';

export default function BibleTranslationScreenContentLoading() {
  return <>{useConnectionState() ?? <TheIconLoading />}</>;
}

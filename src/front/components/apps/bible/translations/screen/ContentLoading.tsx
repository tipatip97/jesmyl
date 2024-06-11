import { TheIconLoading } from '../../../../../complect/the-icon/IconLoading';
import useConnectionState from '../../../../index/useConnectionState';

export const BibleTranslationScreenContentLoading = () => {
  return <>{useConnectionState() ?? <TheIconLoading />}</>;
};

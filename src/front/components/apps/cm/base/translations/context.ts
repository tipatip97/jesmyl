import { contextCreator } from '../../../../../complect/contextCreator';
import { Com } from '../../col/com/Com';

export const [CmTranslationComListContext, useCmTranslationComListContext] = contextCreator<[Com[] | nil, string]>([
  null,
  '',
]);

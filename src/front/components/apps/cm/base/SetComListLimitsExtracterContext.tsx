import { contextCreator } from 'front/complect/contextCreator';
import { emptyFunc } from 'shared/utils';

export const [SetComListLimitsExtracterContext, useSetComListLimitsExtracterContext] = contextCreator<{
  current: (start: number | nil, finish: number | nil) => void;
}>({ current: emptyFunc });

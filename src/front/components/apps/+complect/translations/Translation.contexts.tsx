import { contextCreator } from '../../../../complect/contextCreator';
import { TranslationViewApp } from './Translations.model';

export const [CurrentForceViweAppContext, useCurrentForceViweAppContext] = contextCreator<TranslationViewApp | und>(
  undefined,
);

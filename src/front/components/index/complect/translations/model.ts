import { ReactNode } from 'react';
import { SokiClientSubData } from '../../../../models';

export interface LiveTranslationAppProps {
  isCantTranslateLive: boolean;
  subscribeData: SokiClientSubData;
  fio: string;
  headTitle: ReactNode;
}

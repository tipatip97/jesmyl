import { ReactNode } from 'react';
import { IScheduleWidget } from 'shared/api';
import { SokiClientSubData } from 'shared/api';

export interface LiveTranslationAppProps {
  isCantTranslateLive: boolean;
  subscribeData: SokiClientSubData;
  fio: string;
  headTitle: ReactNode;
  schedule?: IScheduleWidget | nil;
}

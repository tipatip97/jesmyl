import { ReactNode } from 'react';
import { IScheduleWidget } from '../../../../complect/schedule-widget/ScheduleWidget.model';
import { SokiClientSubData } from '../../../../models';

export interface LiveTranslationAppProps {
  isCantTranslateLive: boolean;
  subscribeData: SokiClientSubData;
  fio: string;
  headTitle: ReactNode;
  schedule?: IScheduleWidget | nil;
}

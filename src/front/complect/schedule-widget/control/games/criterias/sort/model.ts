import { IScheduleWidgetUser } from '../../../../ScheduleWidget.model';

export type HistoryAdder = (
  start: number,
  end: number,
  users: IScheduleWidgetUser[],
  correct: 'left' | 'right',
) => void;

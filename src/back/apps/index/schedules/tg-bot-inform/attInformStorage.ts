import { cmTgAttInform } from '../../../cm/attInformCm';
import { ScheduleWidgetAttKey } from '../../models/ScheduleWidget.model';

export type AttTgInformStorage = Record<ScheduleWidgetAttKey, (value: any) => `${string}\n\n` | null>;

export const attInformStorage: AttTgInformStorage = {
  ...cmTgAttInform,
};

import { ReactNode } from 'react';
import { Back } from '../../models';
import { EvaIconName } from '../eva-icon/EvaIcon';

export type ScheduleWidgetAttRefs = Record<ScheduleWidgetAttKey<AttKey>, ScheduleWidgetAttRef[]>;

export type ScheduleWidgetAppAtts<AttAppName extends AttKey = AttKey, AttValue extends any = any> = Record<
  ScheduleWidgetAttKey<AttAppName>,
  ScheduleWidgetAppAtt<AttValue>
>;

export type ScheduleWidgetAppAttResultItem<AttValue extends any> = (
  mpValue: () => AttValue,
  content: ReactNode,
) => JSX.Element;

export interface ScheduleWidgetAppAtt<AttValue extends any = any> extends ScheduleWidgetAppAttBasic<AttValue> {
  result: (
    value: AttValue,
    scope: string,
    isRedact: boolean,
    switchIsRedact: (isRedact?: boolean) => void,
  ) => ReactNode;
}

export type IScheduleWidget = Back<EvaIconName>['IScheduleWidget'];
export type ScheduleStorage = Back<EvaIconName>['ScheduleStorage'];
export type IScheduleWidgetDay = Back<EvaIconName>['IScheduleWidgetDay'];
export type ScheduleWidgetDayListItemTypeBox = Back<EvaIconName>['ScheduleWidgetDayListItemTypeBox'];
export type ScheduleWidgetAppAttCustomized = Back<EvaIconName>['ScheduleWidgetAppAttCustomized'];
export type ScheduleWidgetAppAttCustomizable = Back<EvaIconName>['ScheduleWidgetAppAttCustomizable'];
export type IScheduleWidgetCtrl = Back<EvaIconName>['IScheduleWidgetCtrl'];
export type IScheduleWidgetDayEvent = Back<EvaIconName>['IScheduleWidgetDayEvent'];
export type ScheduleWidgetDayEventAttValues = Back<EvaIconName>['ScheduleWidgetDayEventAttValues'];
export type ScheduleWidgetAppAttBasic<AttValue extends any = any> = Back<
  EvaIconName,
  AttValue
>['ScheduleWidgetAppAttBasic'];
export type ScheduleWidgetAppAttCustomizableValue = Back<EvaIconName>['ScheduleWidgetAppAttCustomizableValue'];
export type IScheduleWidgetRole = Back<EvaIconName>['IScheduleWidgetRole'];
export type IScheduleWidgetUser = Back<EvaIconName>['IScheduleWidgetUser'];
export type AttKey = Back<EvaIconName>['AttKey'];
export type ScheduleWidgetAttKey<AttAppName extends AttKey = AttKey> = Back<
  EvaIconName,
  AttAppName
>['ScheduleWidgetAttKey'];
export type ScheduleWidgetDayEventAttValue = Back<EvaIconName>['ScheduleWidgetDayEventAttValue'];
export type ScheduleWidgetAttRef = Back<EvaIconName>['ScheduleWidgetAttRef'];
export type IScheduleWidgetLists = Back<EvaIconName>['IScheduleWidgetLists'];
export type IScheduleWidgetListUnit = Back<EvaIconName>['IScheduleWidgetListUnit'];
export type IScheduleWidgetListCat = Back<EvaIconName>['IScheduleWidgetListCat'];

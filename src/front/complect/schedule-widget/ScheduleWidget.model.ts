import { ReactNode } from 'react';
import { Back } from '../../models';
import { TheIconName } from '../the-icon/model';

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
    schedule: IScheduleWidget,
  ) => ReactNode;
}

export type IScheduleWidget = Back<TheIconName>['IScheduleWidget'];
export type ScheduleStorage = Back<TheIconName>['ScheduleStorage'];
export type IScheduleWidgetDay = Back<TheIconName>['IScheduleWidgetDay'];
export type ScheduleWidgetDayListItemTypeBox = Back<TheIconName>['ScheduleWidgetDayListItemTypeBox'];
export type ScheduleWidgetAppAttCustomized = Back<TheIconName>['ScheduleWidgetAppAttCustomized'];
export type ScheduleWidgetAppAttCustomizable = Back<TheIconName>['ScheduleWidgetAppAttCustomizable'];
export type IScheduleWidgetCtrl = Back<TheIconName>['IScheduleWidgetCtrl'];
export type IScheduleWidgetDayEvent = Back<TheIconName>['IScheduleWidgetDayEvent'];
export type ScheduleWidgetDayEventAttValues = Back<TheIconName>['ScheduleWidgetDayEventAttValues'];
export type ScheduleWidgetAppAttBasic<AttValue extends any = any> = Back<
  TheIconName,
  AttValue
>['ScheduleWidgetAppAttBasic'];
export type ScheduleWidgetAppAttCustomizableValue = Back<TheIconName>['ScheduleWidgetAppAttCustomizableValue'];
export type IScheduleWidgetRole = Back<TheIconName>['IScheduleWidgetRole'];
export type IScheduleWidgetUser = Back<TheIconName>['IScheduleWidgetUser'];
export type AttKey = Back<TheIconName>['AttKey'];
export type ScheduleWidgetAttKey<AttAppName extends AttKey = AttKey> = Back<
  TheIconName,
  AttAppName
>['ScheduleWidgetAttKey'];
export type ScheduleWidgetDayEventAttValue = Back<TheIconName>['ScheduleWidgetDayEventAttValue'];
export type ScheduleWidgetAttRef = Back<TheIconName>['ScheduleWidgetAttRef'];
export type IScheduleWidgetLists = Back<TheIconName>['IScheduleWidgetLists'];
export type IScheduleWidgetListUnit = Back<TheIconName>['IScheduleWidgetListUnit'];
export type IScheduleWidgetListCat = Back<TheIconName>['IScheduleWidgetListCat'];

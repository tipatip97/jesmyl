import React, { useCallback, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { appAttsStore } from "../../components/complect/appScheduleAttrsStorage";
import indexStorage from "../../components/index/indexStorage";
import { RootState } from "../../shared/store";
import mylib, { MyLib } from "../my-lib/MyLib";
import { takeStrongScopeMaker } from "../strong-control/useStrongControl";
import { IScheduleWidget, ScheduleWidgetAppAtts, ScheduleWidgetAttRefs } from "./ScheduleWidget.model";
import ScheduleKeyValueListAtt from "./atts/attachments/key-value/ScheduleKeyValueListAtt";
import { scheduleOwnAtts } from "./atts/attachments/scheduleOwnAtts";

const schedulesSelector = (state: RootState) => state.index.schedules;

export const useSchedules = () => useSelector(schedulesSelector);

export default function useScheduleWidget(schedulew?: number) {
    const schedules = useSchedules();

    const ret = {
        schedule: schedulew === undefined
            ? undefined
            : schedules.list.find(({ w }) => w === schedulew),
    };

    return ret;
}

const expandes: string[] = indexStorage.getOr('schExpandes', []);
const isNIs = (is: boolean) => !is;
const clear = (scope: string) => {
    const scopeIndex = expandes.indexOf(scope);
    expandes.splice(scopeIndex, 1);
    indexStorage.set('schExpandes', expandes);
};

export const useIsSchWidgetExpand = (scope: string, isSelfExpandOnly?: boolean): [
    boolean,
    (isExpand?: boolean) => void
] => {
    const [isExpand, setIsExpand] = useState(isSelfExpandOnly ? false : expandes.includes(scope));

    if (isSelfExpandOnly && expandes.includes(scope)) clear(scope);

    return [isExpand, useCallback((isExpand) => {
        if (isSelfExpandOnly) setIsExpand(isExpand ?? isNIs);

        if (expandes.includes(scope)) {
            if (isExpand === undefined || isExpand === false) {
                clear(scope);
                if (!isSelfExpandOnly) setIsExpand(isNIs);
            }
        } else if (!isSelfExpandOnly) {
            if (isExpand === undefined || isExpand === true) {
                expandes.push(scope);
                setIsExpand(isNIs);
                indexStorage.set('schExpandes', expandes);
            }
        }
    }, [isSelfExpandOnly, scope])];
};

export const ScheduleWidgetAppAttsContext = React.createContext<[ScheduleWidgetAppAtts, ScheduleWidgetAttRefs]>([{}, {}]);
export const useScheduleWidgetAppAttsContext = () => useContext(ScheduleWidgetAppAttsContext);

export const ScheduleWidgetAppAttRefsContext = React.createContext<ScheduleWidgetAttRefs>({});
export const useScheduleWidgetAppAttRefsContext = () => useContext(ScheduleWidgetAppAttRefsContext);

export const initialScheduleScope = 'schs';

export const takeScheduleStrongScopeMaker = (schedulew: number) => takeStrongScopeMaker(initialScheduleScope, ` schw/`, schedulew)


export const makeAttStorage = (schedule?: IScheduleWidget): [ScheduleWidgetAppAtts<'SCH'>, ScheduleWidgetAttRefs] => {
    const atts: ScheduleWidgetAppAtts<'SCH'> = {};

    const attRefs: ScheduleWidgetAttRefs = {};

    schedule?.days?.forEach((day) => {
        day.list.forEach((event) => {
            event.atts && MyLib.entries(event.atts).forEach(([attKey, att]) => {
                if (!mylib.isArr(att)) (attRefs[attKey] ??= []).push([day.mi, event.mi]);
            });
        });
    });

    schedule?.atts?.forEach((att) => {
        atts[`[SCH]:custom:${att.mi}`] = {
            ...att,
            isCustomize: true,
            result: (value, scope, isRedact) => <ScheduleKeyValueListAtt isRedact={isRedact} att={att} scope={scope} value={value} />,
        };
    });
    return [{ ...(schedule?.app && appAttsStore[schedule.app as never] as {}), ...scheduleOwnAtts, ...atts }, attRefs];
};

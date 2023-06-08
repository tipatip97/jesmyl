import React, { useCallback, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { appAttsStore } from "../../components/complect/appScheduleAttrsStorage";
import indexStorage from "../../components/index/indexStorage";
import { RootState } from "../../shared/store";
import { takeStrongScopeMaker } from "../strong-control/useStrongControl";
import { IScheduleWidget, ScheduleWidgetAppAtts } from "./ScheduleWidget.model";
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

export const ScheduleWidgetAppAttsContext = React.createContext<ScheduleWidgetAppAtts>({});
export const useScheduleWidgetAppAttsContext = () => useContext(ScheduleWidgetAppAttsContext);

export const initialScheduleScope = 'schs';

export const takeScheduleStrongScopeMaker = (schedulew: number) => takeStrongScopeMaker(initialScheduleScope, ` schw/`, schedulew)


export const makeAttStorage = (schedule?: IScheduleWidget) => {
    const atts: ScheduleWidgetAppAtts<'SCH'> = {};
    schedule?.atts?.forEach((att) => {
        atts[`[SCH]:custom:${att.mi}`] = {
            ...att,
            isCustomize: true,
            result: (value, scope, isRedact) => <ScheduleKeyValueListAtt isRedact={isRedact} att={att} scope={scope} value={value} />,
        };
    });
    return { ...(schedule?.app && appAttsStore[schedule.app as never] as {}), ...scheduleOwnAtts, ...atts };
};

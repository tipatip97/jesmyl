import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import indexStorage from "../../components/index/indexStorage";
import { RootState } from "../../shared/store";
import { ScheduleWidgetAppAtts } from "./ScheduleWidget.model";

const schedulesSelector = (state: RootState) => state.index.schedules;

export default function useScheduleWidget(schedulew?: number) {
    const schedules = useSelector(schedulesSelector);

    const ret = {
        schedule: schedulew === undefined
            ? undefined
            : schedules.list.find(({ w }) => w === schedulew),
    };

    return ret;
}

const expandes: string[] = indexStorage.getOr('schExpandes', []);
const isNIs = (is: boolean) => !is;

export const useIsSchWidgetExpand = (scope: string): [
    boolean,
    (isExpand?: boolean) => void
] => {
    const [isExpand, setIsExpand] = useState(expandes.includes(scope));
    return [isExpand, (isExpand) => {

        if (expandes.includes(scope)) {
            if (isExpand === undefined || isExpand === false) {
                const scopeIndex = expandes.indexOf(scope);
                expandes.splice(scopeIndex, 1);
                setIsExpand(isNIs);
                indexStorage.set('schExpandes', expandes);
            }
        } else {
            if (isExpand === undefined || isExpand === true) {
                expandes.push(scope);
                setIsExpand(isNIs);
                indexStorage.set('schExpandes', expandes);
            }
        }
    }];
};

export const ScheduleWidgetAppAttsContext = React.createContext<ScheduleWidgetAppAtts>({});
export const useScheduleWidgetAppAttsContext = () => useContext(ScheduleWidgetAppAttsContext);

export const initialScheduleScope = 'schs';

import React, { useContext } from "react";
import { useSelector } from "react-redux";
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

export const ScheduleWidgetAppAttsContext = React.createContext<ScheduleWidgetAppAtts>({});
export const useScheduleWidgetAppAttsContext = () => useContext(ScheduleWidgetAppAttsContext);

export const initialScheduleScope = 'schs';

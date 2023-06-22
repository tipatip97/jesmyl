import React, { ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { ScheduleWidgetRegType, ScheduleWidgetUserRoleRight, scheduleWidgetRegTypeRights, scheduleWidgetRights } from "../../../back/apps/index/rights";
import { appAttsStore } from "../../components/complect/appScheduleAttrsStorage";
import indexStorage from "../../components/index/indexStorage";
import useAuth from "../../components/index/useAuth";
import { RootState } from "../../shared/store";
import mylib, { MyLib } from "../my-lib/MyLib";
import { makeStrongScopeMaker } from "../strong-control/useStrongControl";
import { IScheduleWidget, IScheduleWidgetRole, IScheduleWidgetRoleUser, ScheduleWidgetAppAtts, ScheduleWidgetAttRefs } from "./ScheduleWidget.model";
import ScheduleKeyValueListAtt from "./atts/attachments/key-value/KeyValueListAtt";
import { scheduleOwnAtts } from "./atts/attachments/ownAtts";
import EvaIcon from "../eva-icon/EvaIcon";

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

export const ScheduleWidgetAppAttsContext = React.createContext<[ScheduleWidgetAppAtts, ScheduleWidgetAttRefs]>([{}, {}]);
export const useScheduleWidgetAppAttsContext = () => useContext(ScheduleWidgetAppAttsContext);

export interface ScheduleWidgetRights extends ScheduleWidgetUserRights, ScheduleWidgetScheduleWidgetRegType {
    myUser: IScheduleWidgetRoleUser | nil,
    mainRole: IScheduleWidgetRole | nil,
    isMyMainRole: boolean,
}

export type ScheduleWidgetUserRights = Record<`isCan${keyof typeof ScheduleWidgetUserRoleRight}`, boolean>;
export type ScheduleWidgetScheduleWidgetRegType = Record<`isSw${keyof typeof ScheduleWidgetRegType}`, boolean>;

export const defScheduleWidgetUserRights: ScheduleWidgetUserRights = {
    isCanTotalRedact: false,
    isCanRead: false,
    isCanReadSpecials: false,
    isCanReadTitles: false,
    isCanRedact: false,
};

export const ScheduleWidgetRightsContext = React.createContext<ScheduleWidgetRights>({
    ...defScheduleWidgetUserRights,
    mainRole: null,
    myUser: null,
    isMyMainRole: false,
    isSwBeforeRegistration: false,
    isSwHideContent: false,
    isSwPublic: false,
});
export const useScheduleWidgetRightsContext = () => useContext(ScheduleWidgetRightsContext);
export const useScheduleWidgetRights = (schedule: IScheduleWidget | und, rights?: ScheduleWidgetRights) => {
    const auth = useAuth();

    return useMemo((): ScheduleWidgetRights => {
        if (rights !== undefined) return rights;
        const myUser = auth && schedule?.ctrl.users.find(user => user.login === auth.login);
        const mainRole = schedule?.ctrl.roles.find(role => role.mi === 0);
        const isSwPublic = scheduleWidgetRegTypeRights.checkIsHasRights(schedule?.ctrl.type, ScheduleWidgetRegType.Public,);
        const isSwBeforeRegistration = scheduleWidgetRegTypeRights.checkIsHasRights(schedule?.ctrl.type, ScheduleWidgetRegType.BeforeRegistration);
        const isSwHideContent = scheduleWidgetRegTypeRights.checkIsHasRights(schedule?.ctrl.type, ScheduleWidgetRegType.HideContent);

        if (mainRole && mainRole.user === myUser?.mi) {
            return {
                myUser,
                mainRole,
                isCanTotalRedact: true,
                isCanRead: true,
                isCanReadSpecials: true,
                isCanReadTitles: true,
                isCanRedact: true,
                isMyMainRole: true,
                isSwBeforeRegistration,
                isSwHideContent,
                isSwPublic,
            };
        }

        const isCanRead = scheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.Read);
        const isCanReadTitles = (isSwPublic && !isSwBeforeRegistration) || (isCanRead && scheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.ReadTitles));
        const isCanReadSpecials = isCanReadTitles && scheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.ReadSpecials);
        const isCanRedact = isCanReadSpecials && scheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.Redact);
        const isCanTotalRedact = isCanRedact && scheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.TotalRedact);

        return {
            myUser,
            mainRole,
            isCanTotalRedact,
            isCanRead,
            isCanReadSpecials,
            isCanReadTitles,
            isCanRedact,
            isMyMainRole: !!mainRole && mainRole.user === myUser?.mi,
            isSwBeforeRegistration,
            isSwHideContent,
            isSwPublic,
        };
    }, [auth, schedule, rights]);
};

export const ScheduleWidgetSchContext = React.createContext<nil | IScheduleWidget>(null);
export const useScheduleWidgetSchContext = () => useContext(ScheduleWidgetSchContext);

export const ScheduleWidgetAppAttRefsContext = React.createContext<ScheduleWidgetAttRefs>({});
export const useScheduleWidgetAppAttRefsContext = () => useContext(ScheduleWidgetAppAttRefsContext);

export const initialScheduleScope = 'schs';

export type ScheduleWidgetScopePhase = 'schs' | 'schw' | 'typei' | 'attKey' | 'dayMi' | 'eventMi' | 'rateMi' | 'titlei' | 'tattMi' | 'itemi' | 'roleMi' | 'userMi' | 'cati';

export const takeStrongScopeMaker = makeStrongScopeMaker<ScheduleWidgetScopePhase>();
export const takeScheduleStrongScopeMaker = (schedulew: number) => takeStrongScopeMaker(initialScheduleScope, ` schw/`, schedulew);

export const extractScheduleWidgetRole = (schedule: IScheduleWidget, roleMi: number) => {
    return schedule.ctrl.roles.find((role) => role.mi === roleMi);
};

export const extractScheduleWidgetRoleUser = (schedule: IScheduleWidget, roleMi: number, role?: IScheduleWidgetRole | nil) => {
    const roleUserMi = (role ?? extractScheduleWidgetRole(schedule, roleMi))?.user;
    if (roleUserMi === undefined) return null;
    const roleUser = schedule.ctrl.users.find(user => user.mi === roleUserMi);
    if (roleUser === undefined) return null;
    return roleUser;
};

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

    schedule?.tatts?.forEach((att) => {
        atts[`[SCH]:custom:${att.mi}`] = {
            ...att,
            isCustomize: true,
            result: (value, scope, isRedact) => <ScheduleKeyValueListAtt isRedact={isRedact} att={att} scope={scope} value={value} schedule={schedule} />,
        };
    });
    return [{ ...(schedule?.app && appAttsStore[schedule.app as never] as {}), ...scheduleOwnAtts, ...atts }, attRefs];
};

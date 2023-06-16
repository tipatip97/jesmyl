import React, { useCallback, useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { appAttsStore } from "../../components/complect/appScheduleAttrsStorage";
import indexStorage from "../../components/index/indexStorage";
import { RootState } from "../../shared/store";
import mylib, { MyLib } from "../my-lib/MyLib";
import { makeStrongScopeMaker } from "../strong-control/useStrongControl";
import { IScheduleWidget, IScheduleWidgetRole, IScheduleWidgetRoleUser, ScheduleWidgetAppAtts, ScheduleWidgetAttRefs } from "./ScheduleWidget.model";
import ScheduleKeyValueListAtt from "./atts/attachments/key-value/ScheduleKeyValueListAtt";
import { scheduleOwnAtts } from "./atts/attachments/scheduleOwnAtts";
import { ScheduleWidgetRights, ScheduleWidgetUserRoleRight } from "../../../back/apps/index/complect";
import useAuth from "../../components/index/useAuth";

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

export interface ScheduleWidgetRoles extends ScheduleWidgetUserRights {
    myUser: IScheduleWidgetRoleUser | nil,
    mainRole: IScheduleWidgetRole | nil,
    isMyMainRole: boolean,
}

export type ScheduleWidgetUserRights = Record<`isCan${keyof typeof ScheduleWidgetUserRoleRight}`, boolean>;

export const defScheduleWidgetUserRights: ScheduleWidgetUserRights = {
    isCanTotalRedact: false,
    isCanRead: false,
    isCanReadSpecials: false,
    isCanReadTitles: false,
    isCanRedact: false,
};

export const ScheduleWidgetRolesContext = React.createContext<ScheduleWidgetRoles>({
    ...defScheduleWidgetUserRights,
    mainRole: null,
    myUser: null,
    isMyMainRole: false,
});
export const useScheduleWidgetRolesContext = () => useContext(ScheduleWidgetRolesContext);
export const useScheduleWidgetRoles = (schedule: IScheduleWidget | und) => {
    const auth = useAuth();

    return useMemo((): ScheduleWidgetRoles => {
        const myUser = auth && schedule?.roles.users.find(user => user.login === auth.login);
        const mainRole = schedule?.roles.list.find(role => role.mi === 0);

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
            };
        }

        const isCanRead = ScheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.Read);
        const isCanReadTitles = isCanRead && ScheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.ReadTitles);
        const isCanReadSpecials = isCanReadTitles && ScheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.ReadSpecials);
        const isCanRedact = isCanReadSpecials && ScheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.Redact);
        const isCanTotalRedact = isCanRedact && ScheduleWidgetRights.checkIsHasRights(myUser?.R, ScheduleWidgetUserRoleRight.TotalRedact);

        return {
            myUser,
            mainRole,
            isCanTotalRedact,
            isCanRead,
            isCanReadSpecials,
            isCanReadTitles,
            isCanRedact,
            isMyMainRole: !!mainRole && mainRole.user === myUser?.mi,
        };
    }, [auth, schedule?.roles.list, schedule?.roles.users]);
};

export const ScheduleWidgetSchContext = React.createContext<nil | IScheduleWidget>(null);
export const useScheduleWidgetSchContext = () => useContext(ScheduleWidgetSchContext);

export const ScheduleWidgetAppAttRefsContext = React.createContext<ScheduleWidgetAttRefs>({});
export const useScheduleWidgetAppAttRefsContext = () => useContext(ScheduleWidgetAppAttRefsContext);

export const initialScheduleScope = 'schs';

export type ScheduleWidgetScopePhase = 'schs' | 'schw' | 'typei' | 'attKey' | 'dayMi' | 'eventMi' | 'titlei' | 'attMi' | 'itemi' | 'roleMi' | 'userMi' | 'cati';

export const takeStrongScopeMaker = makeStrongScopeMaker<ScheduleWidgetScopePhase>();
export const takeScheduleStrongScopeMaker = (schedulew: number) => takeStrongScopeMaker(initialScheduleScope, ` schw/`, schedulew);

export const extractScheduleWidgetRole = (schedule: IScheduleWidget, roleMi: number) => {
    return schedule.roles.list.find((role) => role.mi === roleMi);
};

export const extractScheduleWidgetRoleUser = (schedule: IScheduleWidget, roleMi: number, role?: IScheduleWidgetRole | nil) => {
    const roleUserMi = (role ?? extractScheduleWidgetRole(schedule, roleMi))?.user;
    if (roleUserMi === undefined) return null;
    const roleUser = schedule.roles.users.find(user => user.mi === roleUserMi);
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

    schedule?.atts?.forEach((att) => {
        atts[`[SCH]:custom:${att.mi}`] = {
            ...att,
            isCustomize: true,
            result: (value, scope, isRedact) => <ScheduleKeyValueListAtt isRedact={isRedact} att={att} scope={scope} value={value} schedule={schedule} />,
        };
    });
    return [{ ...(schedule?.app && appAttsStore[schedule.app as never] as {}), ...scheduleOwnAtts, ...atts }, attRefs];
};

import React, { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { appAttsStore } from '../../components/complect/appScheduleAttrsStorage';
import useAuth from '../../components/index/useAuth';
import {
  LocalSokiAuth,
  ScheduleWidgetRegType,
  ScheduleWidgetUserRoleRight,
  scheduleWidgetRegTypeRights,
  scheduleWidgetUserRights,
} from '../../models';
import { RootState } from '../../shared/store';
import mylib, { MyLib } from '../my-lib/MyLib';
import { strongScopeMakerBuilder } from '../strong-control/useStrongControl';
import {
  IScheduleWidget,
  IScheduleWidgetRole,
  IScheduleWidgetUser,
  ScheduleWidgetAppAtts,
  ScheduleWidgetAttRefs,
} from './ScheduleWidget.model';
import ScheduleKeyValueListAtt from './atts/attachments/key-value/KeyValueListAtt';
import { scheduleOwnAtts } from './atts/attachments/ownAtts';

const schedulesSelector = (state: RootState) => state.index.schedules;

export const useSchedules = () => useSelector(schedulesSelector);

export default function useScheduleWidget(schedulew?: number, schedule?: IScheduleWidget) {
  const schedules = useSchedules();

  const ret = {
    schedule:
      schedule === undefined
        ? schedulew === undefined
          ? undefined
          : schedules.list.find(({ w }) => w === schedulew)
        : schedule,
  };

  return ret;
}

export const ScheduleWidgetAppAttsContext = React.createContext<[ScheduleWidgetAppAtts, ScheduleWidgetAttRefs]>([
  {},
  {},
]);
export const useScheduleWidgetAppAttsContext = () => useContext(ScheduleWidgetAppAttsContext);

export const defaultScheduleWidget: IScheduleWidget = {
  w: 0 as never,
  start: 0,
  title: '',
  topic: '',
  dsc: '',
  days: [],
  tatts: [],
  types: [],
  app: 'index',
  tgInformTime: 5,
  ctrl: {
    cats: [],
    roles: [],
    type: ScheduleWidgetRegType.Private,
    users: [],
    defu: ScheduleWidgetUserRoleRight.Read,
  },
  games: {
    criterias: [],
    list: [],
  },
  lists: {
    cats: [],
    units: [],
  },
};

export interface ScheduleWidgetRights extends ScheduleWidgetUserRights, ScheduleWidgetScheduleWidgetRegType {
  myUser: IScheduleWidgetUser | undefined;
  schedule: IScheduleWidget;
  auth: LocalSokiAuth;
}

export type ScheduleWidgetUserRights = Record<
  `isCan${Exclude<keyof typeof ScheduleWidgetUserRoleRight, 'Free'>}`,
  boolean
>;
export type ScheduleWidgetScheduleWidgetRegType = Record<`isSw${keyof typeof ScheduleWidgetRegType}`, boolean>;

export const defScheduleWidgetUserRights: ScheduleWidgetUserRights = {
  isCanTotalRedact: false,
  isCanRead: false,
  isCanReadSpecials: false,
  isCanReadTitles: false,
  isCanRedact: false,
  isCanRedactUsers: false,
};

export const ScheduleWidgetRightsContext = React.createContext<ScheduleWidgetRights>({
  ...defScheduleWidgetUserRights,
  myUser: undefined,
  isSwPrivate: false,
  isSwBeforeRegistration: false,
  isSwHideContent: false,
  isSwPublic: false,
  auth: { level: 0 },
  schedule: defaultScheduleWidget,
});
export const useScheduleWidgetRightsContext = () => useContext(ScheduleWidgetRightsContext);
export const useScheduleWidgetRights = (schedule: IScheduleWidget | und, rights?: ScheduleWidgetRights) => {
  const auth = useAuth();

  return useMemo((): ScheduleWidgetRights => {
    if (rights !== undefined) return rights;
    if (schedule === undefined)
      return {
        auth,
        isCanRead: false,
        isCanReadSpecials: false,
        isCanReadTitles: false,
        isCanRedact: false,
        isCanRedactUsers: false,
        isCanTotalRedact: false,
        isSwBeforeRegistration: false,
        isSwHideContent: false,
        isSwPublic: false,
        isSwPrivate: false,
        myUser: undefined,
        schedule: defaultScheduleWidget,
      };

    const myUser = schedule.ctrl.users.find(user => user.login === auth.login);
    const isSwPublic = scheduleWidgetRegTypeRights.checkIsHasRights(schedule.ctrl.type, ScheduleWidgetRegType.Public);
    const isSwBeforeRegistration = scheduleWidgetRegTypeRights.checkIsHasRights(
      schedule.ctrl.type,
      ScheduleWidgetRegType.BeforeRegistration,
    );
    const isSwHideContent = scheduleWidgetRegTypeRights.checkIsHasRights(
      schedule.ctrl.type,
      ScheduleWidgetRegType.HideContent,
    );

    const myUserR = myUser?.R ?? schedule.ctrl.defu;

    const isCanRead =
      (isSwPublic && !isSwHideContent) ||
      scheduleWidgetUserRights.checkIsHasRights(myUserR, ScheduleWidgetUserRoleRight.Read);
    const isCanReadTitles =
      (isSwPublic && !isSwBeforeRegistration) ||
      (isCanRead && scheduleWidgetUserRights.checkIsHasRights(myUserR, ScheduleWidgetUserRoleRight.ReadTitles));
    const isCanReadSpecials = scheduleWidgetUserRights.checkIsHasRights(
      myUserR,
      ScheduleWidgetUserRoleRight.ReadSpecials,
    );
    const isCanRedact = scheduleWidgetUserRights.checkIsHasRights(myUserR, ScheduleWidgetUserRoleRight.Redact);
    const isCanRedactUsers = scheduleWidgetUserRights.checkIsHasRights(
      myUserR,
      ScheduleWidgetUserRoleRight.RedactUsers,
    );
    const isCanTotalRedact = scheduleWidgetUserRights.checkIsHasRights(
      myUserR,
      ScheduleWidgetUserRoleRight.TotalRedact,
    );

    return {
      auth,
      myUser,
      isCanTotalRedact,
      isCanRead,
      isCanReadSpecials,
      isCanReadTitles,
      isCanRedact,
      isCanRedactUsers,
      isSwBeforeRegistration,
      isSwHideContent,
      isSwPublic,
      isSwPrivate: !isSwPublic,
      schedule,
    };
  }, [auth, schedule, rights]);
};

export const ScheduleWidgetAppAttRefsContext = React.createContext<ScheduleWidgetAttRefs>({});
export const useScheduleWidgetAppAttRefsContext = () => useContext(ScheduleWidgetAppAttRefsContext);

export const initialScheduleScope = 'schs';

export type ScheduleWidgetScopePhase =
  | 'schs'
  | 'schw'
  | 'typei'
  | 'attKey'
  | 'dayi'
  | 'eventMi'
  | 'rateMi'
  | 'titlei'
  | 'tattMi'
  | 'itemMi'
  | 'roleMi'
  | 'userMi'
  | 'cati'
  | 'criti'
  | 'gameMi'
  | 'unitMi';

export const takeStrongScopeMaker = strongScopeMakerBuilder<ScheduleWidgetScopePhase>();
export const takeScheduleStrongScopeMaker = (schedulew: number) =>
  takeStrongScopeMaker(initialScheduleScope, ` schw/`, schedulew);

export const extractScheduleWidgetRole = (schedule: IScheduleWidget, roleMi: number) => {
  return schedule.ctrl.roles.find(role => role.mi === roleMi);
};

export const extractScheduleWidgetRoleUser = (
  schedule: IScheduleWidget,
  roleMi: number,
  role?: IScheduleWidgetRole | nil,
) => {
  const roleUserMi = (role ?? extractScheduleWidgetRole(schedule, roleMi))?.user;
  if (roleUserMi === undefined) return null;
  const roleUser = schedule.ctrl.users.find(user => user.mi === roleUserMi);
  if (roleUser === undefined) return null;
  return roleUser;
};

export const makeAttStorage = (schedule?: IScheduleWidget): [ScheduleWidgetAppAtts<'SCH'>, ScheduleWidgetAttRefs] => {
  const atts: ScheduleWidgetAppAtts<'SCH'> = {};

  const attRefs: ScheduleWidgetAttRefs = {};

  schedule?.days.forEach(day => {
    day.list.forEach(event => {
      event.atts &&
        MyLib.entries(event.atts).forEach(([attKey, att]) => {
          if (!mylib.isArr(att)) (attRefs[attKey] ??= []).push([day.mi, event.mi]);
        });
    });
  });

  schedule?.tatts.forEach(att => {
    atts[`[SCH]:custom:${att.mi}`] = {
      ...att,
      isCustomize: true,
      result: (value, scope, isRedact) => (
        <ScheduleKeyValueListAtt
          isRedact={isRedact}
          att={att}
          scope={scope}
          value={value}
        />
      ),
    };
  });
  return [{ ...appAttsStore, ...scheduleOwnAtts, ...atts }, attRefs];
};

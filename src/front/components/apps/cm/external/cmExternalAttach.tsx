import React, { Suspense } from 'react';
import { Link, Route } from 'react-router-dom';
import { ScheduleWidgetAppAtts } from '../../../../complect/schedule-widget/ScheduleWidget.model';
import { getObjectFromScope } from '../../../../complect/strong-control/useStrongControl';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconLinkSquare01SolidRounded } from '../../../../complect/the-icon/icons/link-square-01';
import { CmComBindAttach, scheduleWidgetUserRights, ScheduleWidgetUserRoleRight } from '../../../../models';
import CmExternalComListAtt from './complect/CmExternalComListAtt';

const TgDayEventComList = React.lazy(() => import('./complect/TgDayEventComList'));

export const cmOwnAppAtts: ScheduleWidgetAppAtts<'cm', CmComBindAttach> = {
  '[cm]:coms': {
    icon: 'Playlist02',
    title: 'Песни',
    description: 'Список известных песен',
    initVal: {},
    R: ScheduleWidgetUserRoleRight.Free,
    U: scheduleWidgetUserRights.includeRights(ScheduleWidgetUserRoleRight.Redact),
    result: (value, scope, isRedact, switchIsRedact) => {
      const { dayi, eventMi } = getObjectFromScope(scope);

      return (
        <>
          <Link to={`${dayi}/${eventMi}/com-list`}>
            <IconButton
              Icon={IconLinkSquare01SolidRounded}
              postfix="Открыть список"
              className="margin-big-gap"
            />
          </Link>
          <CmExternalComListAtt
            switchIsRedact={switchIsRedact}
            isRedact={isRedact}
            scope={scope}
            value={value}
          />
        </>
      );
    },
    routes: (
      <>
        <Route
          path=":dayi/:eventMi/com-list/*"
          element={
            <Suspense>
              <TgDayEventComList />
            </Suspense>
          }
        />
      </>
    ),
  },
};

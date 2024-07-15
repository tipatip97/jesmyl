import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useIndexNav from '../../../components/index/complect/useIndexNav';
import { removePullRequisites, useAuthState, useIndexSchedules } from '../../../components/index/molecules';
import { soki } from '../../../soki';
import mylib from '../../my-lib/MyLib';
import serviceMaster from '../../service/serviceMaster';
import { TelegramWebApp } from '../../tg-app/model';
import { TelegramWebAppApiOr } from '../../tg-app/getTgApi';
import { TheIconLoading } from '../../the-icon/IconLoading';
import ScheduleWidgetAlarmContent from '../alarm/AlarmContent';
import { IScheduleWidget } from '../ScheduleWidget.model';

export const ScheduleWidgetTgDayViewOr = ({ children }: { children: React.ReactNode }) => {
  return (
    <TelegramWebAppApiOr>
      {(api: TelegramWebApp | nil, isLoading: boolean) =>
        !api?.initData ? (
          children
        ) : (
          <Child
            api={api}
            isLoading={isLoading}
          />
        )
      }
    </TelegramWebAppApiOr>
  );
};

type Props = {
  api: TelegramWebApp | nil;
  isLoading: boolean;
};

const Child = ({ api, isLoading }: Props) => {
  const schedules = useIndexSchedules();
  const [schedule, setSchedule] = useState<IScheduleWidget | null>(null);
  const [auth, setAuth] = useAuthState();
  const { navigate } = useIndexNav();

  api?.disableVerticalSwipes();

  useEffect(() => {
    if (api == null) return;

    const schedule = schedules.list.find(sch => sch.tgChatReqs?.endsWith(api.initDataUnsafe.chat_instance));

    if (schedule !== undefined) {
      setSchedule(schedule);
      return;
    }

    (async () => {
      try {
        setSchedule(await serviceMaster('index')('takeDaySchedule', api.initDataUnsafe.chat_instance));
      } catch (error) {}
    })();
  }, [api, schedules.list]);

  useEffect(() => {
    return hookEffectLine()
      .setTimeout(() => {
        if (api == null || auth.level) return;

        soki.send({ tgNativeAuthorization: api.initDataUnsafe.user }, 'index').on(({ tgAuthorization }) => {
          if (!tgAuthorization || !tgAuthorization.ok || mylib.isStr(tgAuthorization.value)) return;

          setAuth(tgAuthorization.value);
          removePullRequisites();
          soki.onConnect();
          navigate(['other']);
        });
      }, 300)
      .effect();
  }, [api, auth.level, navigate, setAuth]);

  return (
    <StyledBox>
      {schedule ? (
        <ScheduleWidgetAlarmContent
          onGoTo={() => {}}
          schedule={schedule}
          isJustShowAllDay
        />
      ) : (
        <div className="full-size flex center">
          {isLoading ? <TheIconLoading /> : <span className="color--ko">Ошибка</span>}
        </div>
      )}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  overflow: auto;
  height: 100vh;
  width: 100vw;
  padding-left: 10px;
  padding-bottom: 30px;
`;

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { removePullRequisites, useAuthState, useIndexSchedules } from '../../../components/index/molecules';
import { soki } from '../../../soki';
import mylib from '../../my-lib/MyLib';
import serviceMaster from '../../service/serviceMaster';
import { TelegramWebAppApiOr } from '../../tg-app/getTgApi';
import { TelegramWebApp, TelegramWebAppInitData } from '../../tg-app/model';
import { TheIconLoading } from '../../the-icon/IconLoading';
import ScheduleWidgetAlarmContent from '../alarm/AlarmContent';
import { IScheduleWidget } from '../ScheduleWidget.model';

const hashParamName = 'tgWebAppData';
const url = new URL(window.location.href);
let initData: TelegramWebAppInitData | null = null;

if (url.hash.startsWith(`#${hashParamName}`)) {
  const data: Record<string, string> = {};

  url.search = url.hash.slice(1);
  url.search = url.searchParams.get(hashParamName) || '';

  Array.from(url.searchParams.entries()).forEach(([key, value]) => (data[key] = value));

  initData = { ...data, user: JSON.parse(data.user) } as TelegramWebAppInitData;
}

export const ScheduleWidgetTgDayViewOr = ({ children }: { children: React.ReactNode }) => {
  return (
    <TelegramWebAppApiOr>
      {(api, isLoading) =>
        initData === null || !api?.initData ? (
          children
        ) : (
          <Child
            api={api}
            isLoading={isLoading}
            initData={initData}
          />
        )
      }
    </TelegramWebAppApiOr>
  );
};

type Props = {
  api: TelegramWebApp | nil;
  isLoading: boolean;
  initData: TelegramWebAppInitData;
};

const Child = ({ api, isLoading, initData }: Props) => {
  const schedules = useIndexSchedules();
  const [schedule, setSchedule] = useState<IScheduleWidget | null>(null);
  const [auth, setAuth] = useAuthState();

  useEffect(() => api?.disableVerticalSwipes(), [api]);

  useEffect(() => {
    const schedule = schedules.list.find(sch => sch.tgChatReqs?.endsWith(initData.chat_instance));

    if (schedule !== undefined) {
      setSchedule(schedule);
      return;
    }

    (async () => {
      try {
        setSchedule(await serviceMaster('index')('takeDaySchedule', initData.chat_instance));
      } catch (error) {}
    })();
  }, [initData.chat_instance, schedules.list]);

  useEffect(() => {
    return hookEffectLine()
      .setTimeout(() => {
        if (auth.level) return;

        soki.send({ tgNativeAuthorization: initData.user }, 'index').on(({ tgAuthorization }) => {
          if (!tgAuthorization || !tgAuthorization.ok || mylib.isStr(tgAuthorization.value)) return;

          setAuth(tgAuthorization.value);
          removePullRequisites();
          soki.onConnect();
        });
      }, 300)
      .effect();
  }, [auth.level, initData.user, setAuth]);

  return (
    <StyledBox>
      {schedule ? (
        <ScheduleWidgetAlarmContent
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

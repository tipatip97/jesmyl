import React, { Suspense } from "react";
import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import { UseNavAction } from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import Index from "../Index";
import { IndexNavData, IndexStorage } from "../Index.model";
import IndexSettings from "../parts/Settings";
import IndexLogin from "../parts/login/IndexLogin";
import ScheduleWidgetAlarmScheduleList from "../../../complect/schedule-widget/alarm/schedules/AlarmScheduleList";

const Main = React.lazy(() => import("../parts/main/IndexMain"));

const actions: UseNavAction[] = [];
const navigate = new NavigationConfig<IndexStorage, IndexNavData>('index', {
  root: (content) => <Index content={content} />,
  rootPhase: null,
  routes: [
    {
      phase: ["other"],
      title: "Другое",
      icon: "arrow-circle-right",
      node: (
        <Suspense fallback={<></>}>
          <Main />
        </Suspense>
      ),
      next: [
        {
          phase: ["settings"],
          node: <IndexSettings />,
        },
        {
          phase: ["login"],
          node: <IndexLogin />,
        },
        {
          phase: ["schedules"],
          node: <ScheduleWidgetAlarmScheduleList />,
        },
      ],
    },
  ],
});

export default function useIndexNav() {
  return useNavConfigurer<IndexStorage, IndexNavData>('index', actions, navigate);
}

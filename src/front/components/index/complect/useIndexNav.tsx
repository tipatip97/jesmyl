import React, { Suspense } from "react";
import modalService from "../../../complect/modal/Modal.service";
import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import { UseNavAction } from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import serviceMaster from "../../../complect/service/serviceMaster";
import { Index } from "../Index";
import { IndexNavData, IndexStorage } from "../Index.model";
import IndexSettings from "../parts/Settings";
import IndexLogin from "../parts/login/IndexLogin";
import ScheduleWidgetAlarmScheduleList from "./AlarmScheduleList";

const Main = React.lazy(() => import("../parts/main/IndexMain"));

const actions: UseNavAction[] = [];
const navigate = new NavigationConfig<IndexStorage, IndexNavData>('index', {
  title: 'Index',
  root: (content) => <Index content={content} />,
  rootPhase: null,
  jumpByLink: {
    swInvite: (value, key, alt) => {
      serviceMaster('index')<string>(key, value)
        .then((text) => modalService.alert(text, 'Успех'))
        .catch((errorMessage) => modalService.alert(errorMessage))

      return alt.Reject;
    },
    schw: schw => ({ data: { schw }, path: ['other', 'schedules'] })
  },
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

import React, { Suspense } from "react";
import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import {
  NavigationStorage,
  UseNavAction,
} from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import { indexStorage } from "../../../shared/jstorages";
import { RootState } from "../../../shared/store";
import Index from "../Index";
import { IndexStorage } from "../Index.model";
import { setIndexRoute } from "../Index.store";
import IndexLogin from "../parts/login/IndexLogin";
import IndexSettings from "../parts/Settings";

const Main = React.lazy(() => import("../parts/main/IndexMain"));

const actions: UseNavAction[] = [];
const navigate = new NavigationConfig<
  IndexStorage,
  NavigationStorage<IndexStorage>
>({
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
      ],
    },
  ],
});

export default function useIndexNav() {
  return useIndexNavConfigurer();
}

const useIndexNavConfigurer = () =>
  useNavConfigurer<IndexStorage, NavigationStorage<IndexStorage>>(
    actions,
    setIndexRoute,
    navigate,
    indexStorage,
    (state: RootState) => state.index.route
  );
export { useIndexNavConfigurer };

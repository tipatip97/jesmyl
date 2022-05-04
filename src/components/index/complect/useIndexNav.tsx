import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import { UseNavAction } from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import { indexStorage } from "../../../shared/jstorages";
import { RootState } from "../../../shared/store";
import Index from "../Index";
import { setIndexRoute } from "../Index.store";
import IndexLogin from "../parts/login/IndexLogin";
import IndexMain from "../parts/main/IndexMain";
import IndexSettings from "../parts/Settings";

const actions: UseNavAction[] = [];
const navigate = new NavigationConfig({
  root: (content) => <Index content={content} />,
  rootPhase: null,
  routes: [
    {
      phase: ["other"],
      title: "Другое",
      icon: "arrow-circle-right",
      node: <IndexMain />,
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
  useNavConfigurer(
    actions,
    setIndexRoute,
    navigate,
    indexStorage,
    (state: RootState) => state.index.route
  );
export { useIndexNavConfigurer };

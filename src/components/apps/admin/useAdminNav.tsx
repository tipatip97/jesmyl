import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import {
  NavigationStorage,
  UseNavAction,
} from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import { adminStorage } from "../../../shared/jstorages";
import { RootState } from "../../../shared/store";
import Admin from "./Admin";
import { AdminStorage } from "./Admin.model";
import { setAdminRoute } from "./Admin.store";
import AdminApp from "./AdminApp";
import TheUser from "./complect/users/TheUser";

const adminNavigation = new NavigationConfig<
  AdminStorage,
  NavigationStorage<AdminStorage>
>({
  root: (content) => <AdminApp content={content} />,
  rootPhase: "admin",
  routes: [
    {
      phase: ["admin"],
      icon: "twitter",
      title: "Админ",
      node: <Admin />,
      next: [
        {
          phase: ["user"],
          node: <TheUser />,
        },
      ],
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useAdminNav() {
  return useAdminNavConfigurer();
}

const useAdminNavConfigurer = () =>
  useNavConfigurer<AdminStorage, NavigationStorage<AdminStorage>>(
    actions,
    setAdminRoute,
    adminNavigation,
    adminStorage,
    (state: RootState) => state.admin.route
  );
export { useAdminNavConfigurer };

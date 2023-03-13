import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import {
  NavigationStorage,
  UseNavAction
} from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import TheTuner from "./TheTuner";
import { TunerStorage } from "./Tuner.model";

const tunerNavigation = new NavigationConfig<
  TunerStorage,
  NavigationStorage<TunerStorage>
>({
  root: (content) => <>{content}</>,
  rootPhase: "tuner",
  logo: "music",
  routes: [
    {
      phase: ["tuner"],
      icon: "music",
      title: "Тюнер",
      node: <TheTuner />,
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useTunerNav() {
  return useNavConfigurer<TunerStorage, NavigationStorage<TunerStorage>>(
    'tuner',
    actions,
    tunerNavigation,
  );
}

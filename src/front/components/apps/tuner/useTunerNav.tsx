import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import { UseNavAction } from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import TheTuner from "./TheTuner";
import { TunerStorage } from "./Tuner.model";

const tunerNavigation = new NavigationConfig<TunerStorage>('tuner', {
  title: 'Тюнер',
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
  return useNavConfigurer<TunerStorage>('tuner', actions, tunerNavigation);
}

import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import { NavigationStorage, UseNavAction } from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import { tunerStorage } from "../../../shared/jstorages";
import { RootState } from "../../../shared/store";
import TheTuner from "./TheTuner";
import { TunerStorage } from "./Tuner.model";
import { setTunerPhase } from "./Tuner.store";

const tunerNavigation = new NavigationConfig<TunerStorage, NavigationStorage<TunerStorage>>({
  root: (content) => <>{content}</>,
  rootPhase: "tuner",
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
  return useTunerNavConfigurer();
}

const useTunerNavConfigurer = () =>
  useNavConfigurer<TunerStorage, NavigationStorage<TunerStorage>>(
    actions,
    setTunerPhase,
    tunerNavigation,
    tunerStorage,
    (state: RootState) => state.tuner.route
  );
export { useTunerNavConfigurer };

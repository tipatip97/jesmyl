import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import {
  NavigationStorage,
  UseNavAction
} from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import SpyLocations from "./complect/SpyLocations";
import SpyRoom from "./complect/SpyRoom";
import Spy from "./Spy";
import { SpyStorage } from "./Spy.model";
import SpyApp from "./SpyApp";

const spyNavigation = new NavigationConfig<
  SpyStorage,
  NavigationStorage<SpyStorage>
>({
  root: (content) => <SpyApp content={content} />,
  rootPhase: "spy",
  logo: "search",
  routes: [
    {
      phase: ["spy"],
      icon: "search",
      title: "Шпион 1.0",
      node: <Spy />,
      next: [
        {
          phase: ["room"],
          node: <SpyRoom />,
        },
      ],
    },
    {
      phase: ["locs"],
      icon: "pin",
      title: "Локации",
      node: <SpyLocations />,
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useSpyNav() {
  return useSpyNavConfigurer();
}

const useSpyNavConfigurer = () =>
  useNavConfigurer<SpyStorage, NavigationStorage<SpyStorage>>(
    'spy',
    actions,
    spyNavigation,
  );
export { useSpyNavConfigurer };

import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import {
  NavigationStorage,
  UseNavAction
} from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import GameList from "./components/games/GameList";
import TheGame from "./components/games/TheGame";
import GroupList from "./components/groups/GroupList";
import TheLeaderGroup from "./components/groups/TheGroup";
import HumanList from "./components/people/HumanList";
import MemberList from "./components/people/MemberList";
import MentorList from "./components/people/MentorList";
import GeneralPage from "./GeneralPage";
import LiderApplication from "./Lider";
import { LiderNavData, LiderStoraged } from "./Lider.model";
import { liderExer } from "./Lider.store";

const navigation: NavigationConfig<
  LiderStoraged,
  NavigationStorage<LiderStoraged>,
  LiderNavData
> = new NavigationConfig({
  root: (content) => <LiderApplication content={content} />,
  rootPhase: "all",
  logo: "navigation-2",
  exer: liderExer,
  routes: [
    {
      icon: "navigation-2",
      phase: ["all"],
      title: "Лидер",
      node: <GeneralPage />,
      next: [
        {
          phase: ["humanList"],
          node: <HumanList isAsPage />,
        },
        {
          phase: ["leaderList"],
          node: <MentorList isAsPage />,
        },
        {
          phase: ["memberList"],
          node: <MemberList isAsPage />,
        },
        {
          phase: ["groupList"],
          node: <GroupList />,
          next: [
            {
              phase: ["group"],
              node: <TheLeaderGroup />,
            },
          ],
        },
        {
          phase: ["games"],
          node: <GameList />,
          next: [
            {
              phase: ["game"],
              node: <TheGame />,
            },
          ],
        },
      ],
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useLiderNav() {
  return useLiderNavConfigurer();
}

const useLiderNavConfigurer = () =>
  useNavConfigurer<
    LiderStoraged,
    NavigationStorage<LiderStoraged>,
    LiderNavData
  >(
    'lider',
    actions,
    navigation,
  );
export { useLiderNavConfigurer };

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
import LeaderApplication from "./Leader";
import { LeaderNavData, LeaderStoraged } from "./Leader.model";
import { leaderExer } from "./Leader.store";

const navigation: NavigationConfig<
  LeaderStoraged,
  NavigationStorage<LeaderStoraged>,
  LeaderNavData
> = new NavigationConfig({
  root: (content) => <LeaderApplication content={content} />,
  rootPhase: "all",
  logo: "navigation-2",
  exer: leaderExer,
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

export default function useLeaderNav() {
  return useLeaderNavConfigurer();
}

const useLeaderNavConfigurer = () =>
  useNavConfigurer<
    LeaderStoraged,
    NavigationStorage<LeaderStoraged>,
    LeaderNavData
  >(
    'leader',
    actions,
    navigation,
  );
export { useLeaderNavConfigurer };

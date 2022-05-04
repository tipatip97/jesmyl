import { NavigationConfig } from "../../../../complect/nav-configurer/Navigation";
import { INavigationRouteChildItem, UseNavAction } from "../../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../../complect/nav-configurer/useNavConfigurer";
import { cmStorage } from "../../../../shared/jstorages";
import { RootState } from "../../../../shared/store";
import CmApplication from "../Cm";
import { setCmRoute } from "../Cm.store";
import TheCat from "../col/cat/TheCat";
import TheCom from "../col/com/TheCom";
import { editorNav } from "../editor/editorNav";
import Lists from "../lists/Lists";
import Marks from "../lists/marks/Marks";
import TheMeeting from "../lists/meetings/TheMeeting";
import TheMeetings from "../lists/meetings/TheMeetings";
import Translations from "../translation/Translation";

const translationNav: INavigationRouteChildItem = {
  phase: ["translation"],
  node: <Translations />,
};

const comNav: INavigationRouteChildItem = {
  phase: ["com"],
  node: <TheCom />,
  next: [translationNav],
};

const comNext = [comNav, translationNav];

const navigation = new NavigationConfig({
  root: (content) => <CmApplication content={content} />,
  rootPhase: "all",
  routes: [
    {
      icon: "list",
      phase: ["all"],
      title: "Все",
      node: <TheCat all />,
      next: [comNav],
    },
    {
      icon: "folder",
      phase: ["lists"],
      title: "Списки",
      node: <Lists />,
      next: [
        {
          phase: ["cat"],
          node: <TheCat />,
          next: [...comNext],
        },
        {
          phase: ["marks"],
          node: <Marks />,
          next: [...comNext],
        },
        {
          phase: ["meetings"],
          node: <TheMeetings />,
          next: [
            {
              phase: ["meeting"],
              node: <TheMeeting />,
              next: [...comNext],
            },
          ],
        },
      ],
    },
    editorNav,
  ],
});

const actions: UseNavAction[] = [];

export default function useCmNav() {
  return useCmNavConfigurer();
}

const useCmNavConfigurer = () =>
  useNavConfigurer(
    actions,
    setCmRoute,
    navigation,
    cmStorage,
    (state: RootState) => state.cm.route
  );
export { useCmNavConfigurer };

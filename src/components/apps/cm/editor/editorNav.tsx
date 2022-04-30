import { INavigationRouteRootItem } from "../../../../complect/nav-configurer/Navigation.model";
import EditCategories from "./col/categories/EditCategories";
import EditCategory from "./col/categories/EditCategory";
import CategoryBinds from "./col/compositions/complect/category-binds/CategoryBinds";
import EditableCompositionMain from "./col/compositions/complect/main/EditableCompositionMain";
import EditComposition from "./col/compositions/EditComposition";
import EditCompositions from "./col/compositions/EditCompositions";
import Editor from "./Editor";

export const editorNav: INavigationRouteRootItem = {
  phase: "editor",
  node: <Editor />,
  title: "Редактор",
  icon: "edit",
  accessRule: "canRedact",
  next: [
    {
      phase: "cats",
      node: <EditCategories />,
      next: [
        {
          phase: "cat",
          node: <EditCategory />,
        },
      ],
    },
    {
      phase: "coms",
      node: <EditCompositions />,
      next: [
        {
          phase: "com",
          node: (props) => <EditComposition {...props} />,
          next: [
            {
              phase: "main",
              node: <EditableCompositionMain />,
            },
            {
              phase: "catBinds",
              node: <CategoryBinds />,
            },
          ],
        },
      ],
    },
  ],
};

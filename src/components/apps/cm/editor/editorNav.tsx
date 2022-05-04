import { EvaIconName } from "../../../../complect/eva-icon/EvaIcon";
import {
  INavigationRouteChildItem,
  INavigationRouteRootItem,
} from "../../../../complect/nav-configurer/Navigation.model";
import EditCategories from "./col/categories/EditCategories";
import EditCategory from "./col/categories/EditCategory";
import CategoryBinds from "./col/compositions/complect/category-binds/CategoryBinds";
import EditableCompositionMain from "./col/compositions/complect/main/EditableCompositionMain";
import TextsChordsRedactor from "./col/compositions/complect/texts_chords-redactor/TextsChordsRedactor";
import EditComposition from "./col/compositions/EditComposition";
import EditCompositions from "./col/compositions/EditCompositions";
import Editor from "./Editor";

export const editCompositionNavs: INavigationRouteChildItem<{
  icon: EvaIconName;
}>[] = [
  {
    phase: ["main"],
    node: <EditableCompositionMain />,
    data: {
      icon: "credit-card",
    },
  },
  {
    phase: ["texts"],
    node: <TextsChordsRedactor />,
    data: {
      icon: "text",
    },
  },
  {
    phase: ["catBinds"],
    node: <CategoryBinds />,
    data: {
      icon: "book-open",
    },
  },
];

export const editorNav: INavigationRouteRootItem = {
  phase: ["editor"],
  node: <Editor />,
  title: "Редактор",
  icon: "edit",
  accessRule: "canRedact",
  next: [
    {
      phase: ["cats"],
      node: <EditCategories />,
      next: [
        {
          phase: ["cat"],
          node: <EditCategory />,
        },
      ],
    },
    {
      phase: ["coms"],
      node: <EditCompositions />,
      next: [
        {
          phase: ["com"],
          node: (props) => <EditComposition {...props} />,
          defaultChild: "main",
          next: editCompositionNavs,
        },
      ],
    },
  ],
};

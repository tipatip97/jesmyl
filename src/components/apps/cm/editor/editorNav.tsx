import { EvaIconName } from "../../../../complect/eva-icon/EvaIcon";
import {
  INavigationRouteChildItem,
  INavigationRouteRootItem,
} from "../../../../complect/nav-configurer/Navigation.model";
import EditCategories from "./col/categories/EditCategories";
import EditCategory from "./col/categories/EditCategory";
import CategoryBinds from "./col/compositions/complect/category-binds/CategoryBinds";
import ChordApplicationsRedactor from "./col/compositions/complect/chord-applications/ChordApplicationsRedactor";
import EditableCompositionMain from "./col/compositions/complect/main/EditableCompositionMain";
import OrdersRedactor from "./col/compositions/complect/orders/OrdersRedactor";
import TextsChordsRedactor from "./col/compositions/complect/texts_chords-redactor/TextsChordsRedactor";
import ComOnTranslations from "./col/compositions/complect/translations/ComOnTranslations";
import EditComposition from "./col/compositions/EditComposition";
import EditCompositions from "./col/compositions/EditCompositions";
import ComRepeats from "./col/compositions/repeats/ComRepeats";
import Editor from "./Editor";

export const editCompositionNavs: INavigationRouteChildItem<{
  icon?: EvaIconName;
  iconText?: string;
}>[] = [
  {
    phase: ["main"],
    node: <EditableCompositionMain />,
    data: {
      icon: "credit-card",
    },
  },
  {
    phase: ["applications"],
    node: <ChordApplicationsRedactor />,
    data: {
      icon: "umbrella",
    },
  },
  {
    phase: ["orders"],
    node: <OrdersRedactor />,
    data: {
      icon: "list",
    },
  },
  {
    phase: ["texts"],
    node: <TextsChordsRedactor ccoln="texts" />,
    data: {
      icon: "text",
    },
  },
  {
    phase: ["chords"],
    node: <TextsChordsRedactor ccoln="chords" />,
    data: {
      icon: "music",
    },
  },
  {
    phase: ["catBinds"],
    node: <CategoryBinds />,
    data: {
      icon: "book-open",
    },
  },
  {
    phase: ["repeats"],
    node: <ComRepeats />,
    accessRule: 'canWatch',
    data: {
      iconText: "//",
    },
  },
  {
    phase: ["translations"],
    node: <ComOnTranslations />,
    data: {
      icon: "monitor",
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

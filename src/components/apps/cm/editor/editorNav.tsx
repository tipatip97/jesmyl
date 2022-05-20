import { EvaIconName } from "../../../../complect/eva-icon/EvaIcon";
import {
  INavigationRouteChildItem,
  INavigationRouteRootItem,
  NavPhasePoint,
} from "../../../../complect/nav-configurer/Navigation.model";
import TheComposition from "../col/com/TheComposition";
import Translations from "../translation/Translation";
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
import EERules from "./ee-rules/EERules";
import EditMeetings from "./meetings/EditMeetings";
import EditMeetingsEvent from "./meetings/EditMeetingsEvent";

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

export const editComNavPhasePoint: NavPhasePoint = ["com"];

export const editorRouteItems: INavigationRouteChildItem<{
  title: string;
  icon: EvaIconName;
}>[] = [
  {
    phase: ["cats"],
    node: <EditCategories />,
    accessRule: "canWatch",
    data: {
      title: "Категории",
      icon: "book-open-outline",
    },
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
    data: {
      title: "Песни",
      icon: "headphones-outline",
    },
    next: [
      {
        phase: editComNavPhasePoint,
        node: (props) => <EditComposition {...props} />,
        defaultChild: "main",
        next: editCompositionNavs,
      },
    ],
  },
  {
    phase: ["meetings"],
    node: <EditMeetings />,
    data: {
      title: "События",
      icon: "calendar-outline",
    },
    next: [
      {
        phase: ["event"],
        node: <EditMeetingsEvent />,
        next: [
          {
            phase: ["com"],
            node: <TheComposition />,
            next: [
              {
                phase: ["translation"],
                node: <Translations />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: ["e-e"],
    node: <EERules />,
    accessRule: "canWatch",
    data: {
      title: "Ё-Е правила",
      icon: "text-outline",
    },
  },
];

export const editorNav: INavigationRouteRootItem = {
  phase: ["editor"],
  node: <Editor />,
  title: "Редактор",
  icon: "edit",
  accessRule: "canRedact",
  next: editorRouteItems,
};

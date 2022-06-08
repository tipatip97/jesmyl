import { EvaIconName } from "../../../../complect/eva-icon/EvaIcon";
import {
  INavigationRouteChildItem,
  INavigationRouteRootItem,
  NavPhasePoint,
} from "../../../../complect/nav-configurer/Navigation.model";
import { CmNavData } from "../Cm.model";
import TheComposition from "../col/com/TheComposition";
import Translations from "../translation/Translation";
import EditCategories from "./col/categories/EditCategories";
import EditCategory from "./col/categories/EditCategory";
import CategoryBinds from "./col/compositions/complect/CategoryBinds";
import ChordApplicationsRedactor from "./col/compositions/complect/chord-applications/ChordApplicationsRedactor";
import EditableCompositionMain from "./col/compositions/complect/EditableCompositionMain";
import OrdersRedactor from "./col/compositions/complect/orders/OrdersRedactor";
import TextsChordsRedactor from "./col/compositions/complect/texts_chords-redactor/TextsChordsRedactor";
import ComOnTranslations from "./col/compositions/complect/ComOnTranslations";
import EditableCompositionWatch from "./col/compositions/complect/Watch";
import EditComposition from "./col/compositions/EditComposition";
import EditCompositions from "./col/compositions/EditCompositions";
import ComRepeats from "./col/compositions/repeats/ComRepeats";
import Editor from "./Editor";
import EERules from "./ee-rules/EERules";
import EditMeetings from "./meetings/EditMeetings";
import EditMeetingsEvent from "./meetings/EditMeetingsEvent";
import ExecsVisor from "./execs/ExecsVisor";

export const editCompositionNavs: INavigationRouteChildItem<CmNavData, {
  icon?: EvaIconName;
  iconText?: string;
}>[] = [
  {
    phase: ["watch"],
    node: <EditableCompositionWatch />,
    data: {
      icon: "eye",
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
      icon: "grid",
    },
  },
  {
    phase: ["texts"],
    node: <TextsChordsRedactor ccoln="texts" />,
    data: {
      icon: "file-text",
    },
  },
  {
    phase: ["chords"],
    node: <TextsChordsRedactor ccoln="chords" />,
    data: {
      icon: "options-2",
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
      icon: "layers",
    },
  },
  {
    phase: ["translations"],
    node: <ComOnTranslations />,
    data: {
      icon: "monitor",
    },
  },
  {
    phase: ["main"],
    node: <EditableCompositionMain />,
    data: {
      icon: "credit-card",
    },
  },
];

export const editComNavPhasePoint: NavPhasePoint = ["com"];
export const editEventNavPhasePoint: NavPhasePoint = ["event"];

export const editorRouteItems: INavigationRouteChildItem<CmNavData, {
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
        phase: editEventNavPhasePoint,
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
  {
    phase: ["execs"],
    node: <ExecsVisor />,
    accessRule: "canWatch",
    data: {
      title: "Изменения",
      icon: "pantone-outline",
    },
  },
];

export const editorNav: INavigationRouteRootItem<CmNavData> = {
  phase: ["editor"],
  node: <Editor />,
  title: "Редактор",
  icon: "edit",
  accessRule: "canRedact",
  next: editorRouteItems,
};

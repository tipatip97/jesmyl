import { ReactNode } from "react";
import modalService from "../../../complect/modal/Modal.service";
import mylib from "../../../complect/my-lib/MyLib";
import { cmStorage, indexStorage } from "../../../store/jstorages";
import { BoardApplication, BoardAuth } from "../../board/Board.model";
import { CmAction, CmAppVariables, CmPhase, FooterItem } from "./Cm.model";
import TheCat from "./col/cat/TheCat";
import TheCom from "./col/com/TheCom";
import { setts } from "./complect/settings/Setts";
import { StyleProp } from "./complect/settings/StyleProp";
import Editor from "./editor/Editor";
import Favorites from "./favorites/Favorites";
import Lists from "./lists/Lists";
import TheMeeting from "./meetings/TheMeeting";
import TheMeetings from "./meetings/TheMeetings";
import Other from "./other/Other";
import Translations from "./translation/Translation";

let rules: Record<string, true | null> = {};
export let actions: CmAction[] | nil;
let localAuth: BoardAuth;

const update = () => {
  localAuth = indexStorage.getOr("auth", { level: 0 });
  const app: BoardApplication<CmAppVariables> = indexStorage
    .get("apps")
    ?.find((app) => app.name === "cm") as BoardApplication<CmAppVariables>;

  actions =
    cmStorage.get("actions")?.concat(
      Object.entries(app?.variables || {}).map(([action, level]) => ({
        action,
        level: level as number,
      }))
    ) ?? [];
};
update();

const name = "actions-updater";
indexStorage.listen("apps", name, () => {
  rules = {};
  update();
});
indexStorage.listen("auth", name, () => {
  rules = {};
  update();
});
cmStorage.listen("actions", name, () => {
  rules = {};
  update();
});

export const isAccessed = (action: string): true | null => {
  if (rules[action] !== undefined) return rules[action] || null;
  if (!actions?.length) return null;

  const level = localAuth.level;
  const right = actions.find((right) => right.action === action) as CmAction;
  if (!right)
    modalService.alert(
      `Зарегистрировано правило на неизвестное действие ${action}`
    );

  return (rules[action] = right ? (right.level <= level ? true : null) : true);
};

export const phaseJumps: Record<CmPhase, CmPhase | null> = {
  // если значение - null, то переход на предыдущую фазу
  all: null,
  // cats: null,
  com: null,
  cat: null,
  editor: "com",
  // news: null,
  translations: "com",
  lists: "all",
  other: null,
  favorite_com: "favorites",
  thematic_com: null,
  meeting_com: null,
  favorites: "lists",
  meetings: "lists",
  meeting: "meetings",
  "": null,
};

export const Comps: Record<CmPhase, () => ReactNode> = {
  all: () => <TheCat allMode />,
  // cats: () => <TheCats />,
  cat: () => <TheCat />,
  com: () => <TheCom />,
  thematic_com: () => <TheCom />,
  favorite_com: () => <TheCom />,
  meeting_com: () => <TheCom />,
  editor: () => <Editor />,
  translations: () => <Translations />,
  lists: () => <Lists />,
  favorites: () => <Favorites />,
  meetings: () => <TheMeetings />,
  meeting: () => <TheMeeting />,
  other: () => <Other />,
  "": () => null,
};

export const inlinePhases = [
  ["all", "com", "translations"],
  [
    "lists",
    "cat",
    "favorites",
    "favorite_com",
    "meetings",
    "meeting",
    "thematic_com",
    "meeting_com",
  ],
  ["other", "editor", ""],
] as const;

const [allPhases, listsPhases, otherPhases] = inlinePhases;

export const footerItems: FooterItem[] = [
  {
    icon: "list",
    title: "Все",
    phases: allPhases as never,
  },
  {
    icon: "folder",
    title: "Списки",
    phases: listsPhases as never,
  },
  {
    icon: "arrow-circle-right",
    title: "Другое",
    phases: otherPhases as never,
  },
];

const styleProps = [
  {
    n: "fontStyle",
    title: "Курсив",
    type: "p",
    on: "italic",
  },
  {
    n: "fontWeight",
    title: "Жирный",
    type: "p",
    on: "bold",
  },
  {
    n: "textDecoration",
    title: "Подчёркнутый",
    type: "p",
    on: "underline",
  },
  {
    n: "marginTop",
    title: "-Отступ сверху-",
    type: "p",
    on: "0",
  },
  {
    n: "fontSize",
    title: "Размер",
    type: "g",
    variants: [
      {
        title: "S",
        n: "S",
        val: ".5em",
      },
      {
        title: "M",
        n: "M",
        val: ".7em",
      },
      {
        title: "N",
        n: "N",
        val: "1em",
      },
    ],
    def: "N",
  },
  {
    n: "marginLeft",
    title: "Отступ",
    type: "g",
    variants: [
      {
        title: "Z",
        n: "Z",
        val: "0",
      },
      {
        title: "S",
        n: "S",
        val: ".5em",
      },
      {
        title: "M",
        n: "M",
        val: "1em",
      },
      {
        title: "L",
        n: "L",
        val: "1.5em",
      },
    ],
    def: "Z",
  },
];

const putStyles = () => {
  const topStyles: any = {};
  const newStyles: any = (topStyles[".app-container.cm .com-ord-list "] = {});

  (["headerProps", "textProps"] as (keyof StyleProp)[]).forEach(
    (styleCol: keyof StyleProp) => {
      setts.styles.forEach((styleBlock) => {
        const block: any = (newStyles[
          setts.query(
            styleBlock.name,
            styleCol,
            ".",
            styleBlock.isInherit ? styleBlock.name : ""
          )
        ] = {});
        const sBlock = styleBlock[styleCol];

        Object.keys(sBlock).forEach((bProp) => {
          const prop: any = styleProps.find((sProp) => sProp.n === bProp);
          block[bProp] =
            prop.type === "p"
              ? sBlock[bProp]
              : (
                  prop.variants.find(
                    (variant: any) => variant.n === sBlock[bProp]
                  ) || {}
                ).val;
        });
      });
    }
  );

  mylib.useElement("style", "cm-styles", (style) => {
    style.innerText = mylib.stringifyCss(topStyles);
  });
};

putStyles();

cmStorage.listen("settings", "styles.listen", () => putStyles());

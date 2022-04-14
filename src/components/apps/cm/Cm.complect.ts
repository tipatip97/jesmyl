import modalService from "../../../complect/modal/Modal.service";
import mylib from "../../../complect/my-lib/MyLib";
import { cmStorage, indexStorage } from "../../../store/jstorages";
import { BoardApplication, BoardAuth } from "../../board/Board.model";
import {
  CmAction,
  CmAppVariables,
  CmPhase,
  CmSpecialPhase,
  FooterItem,
  SetPhasePayload,
} from "./Cm.model";
import { setts } from "./base/settings/Setts";
import { StyleProp } from "./base/settings/StyleProp";

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

export const getNewPhase = (
  phase: CmPhase,
  specialPhase: CmSpecialPhase,
  prevPhase: CmPhase | nil
): SetPhasePayload => {
  const newPhase = phase === "com"
    ? specialPhase === "marked"
      ? "marks"
      : specialPhase === "thematic"
        ? "cat"
        : specialPhase === "meeting"
          ? "meeting"
          : "all"
    : phase === "translation"
      ? "com"
      : phase === "cat"
        ? "lists"
        : phase === "lists" || phase === "other"
          ? "all"
          : phase === "meeting"
            ? "meetings"
            : phase === "meetings" || phase === "marks"
              ? "lists"
              : prevPhase ?? 'all';

  return newPhase === 'all' ? [newPhase, null] : newPhase;
};

export const specialPhases = ["marked", "thematic", "meeting"] as const;

export const inlinePhases = [
  ["all", "com", "translation"],
  ["lists", "cat", "marks", "meetings", "meeting"],
  ["other", "editor"],
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
    activeWithSpecialPhases: true,
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
      setts?.styles.forEach((styleBlock) => {
        if (!setts) return;
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

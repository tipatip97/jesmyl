import mylib from "../../../complect/my-lib/MyLib";
import { cmStorage, indexStorage } from "../../../shared/jstorages";
import { Auth, IndexApplication } from "../../index/Index.model";
import { setts } from "./base/settings/Setts";
import { StyleProp } from "./base/settings/StyleProp";
import {
  CmAction,
  CmAppVariables
} from "./Cm.model";

let rules: Record<string, true | null> = {};
export let actions: CmAction[] | nil;
let localAuth: Auth;

const update = () => {
  localAuth = indexStorage.getOr("auth", { level: 0 });
  const app: IndexApplication<CmAppVariables> = indexStorage
    .get("apps")
    ?.find((app) => app.name === "cm") as IndexApplication<CmAppVariables>;

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

export const putCmCompositionsStyles = () => {
  const topStyles: any = {};
  const newStyles: any = (topStyles["#root .com-ord-list "] = {});

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

        (Object.keys(sBlock) as (keyof StyleProp)[]).forEach((bProp) => {
          const prop: any = styleProps.find((sProp) => sProp.n === bProp);
          block[bProp] =
            prop.type === "p"
              ? sBlock[bProp as never]
              : (
                prop.variants.find(
                  (variant: any) => variant.n === sBlock[bProp as never]
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

cmStorage.listen("settings", "styles.listen", () => putCmCompositionsStyles());

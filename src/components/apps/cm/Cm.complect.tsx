import { ReactNode } from "react";
import modalService from "../../../complect/modal/Modal.service";
import { cmStorage, indexStorage } from "../../../store/jstorages";
import { BoardApplication, BoardAuth } from "../../board/Board.model";
import { TheCats } from "./cats/Cats";
import { CmAction, CmAppVariables, CmPhase } from "./Cm.model";
import { TheCat } from "./col/cat/TheCat";
import { TheCom } from "./col/com/TheCom";
import { TheEditor } from "./editor/TheEditor";

let rules: Record<string, true | null> = {};
let actions: CmAction[] = [];
let localAuth: BoardAuth;

const update = () => {
  console.log("updated");
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
indexStorage.listen(name, (key) => {
  if (key === "apps" || key === "auth") {
    rules = {};
    update();
  }
});
cmStorage.listen(name, (key) => {
  if (key === "actions") {
    rules = {};
    update();
  }
});

export const isAccessed = (action: string): true | null => {
  if (rules[action] !== undefined) return rules[action] || null;

  const level = localAuth.level;
  const right = actions.find((right) => right.action === action) as CmAction;
  if (!right)
    modalService.alert(
      `Зарегистрировано правило на неизвестное действие ${action}`
    );

  return (rules[action] = right ? (right.level <= level ? true : null) : true);
};

export const Comps: Record<CmPhase, () => ReactNode> = {
  cats: () => <TheCats />,
  cat: () => <TheCat />,
  com: () => <TheCom />,
  editor: () => <TheEditor />,
};

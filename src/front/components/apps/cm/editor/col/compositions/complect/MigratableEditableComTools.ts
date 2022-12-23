import { useCmNavConfigurer } from "../../../../base/useCmNav";
import { cmExer } from "../../../../Cm.store";
import { MigratableComTool, MigratableComToolName } from "../../../../col/com/Com.model";
import { editComNavPhasePoint } from "../../../editorNav";
import { MigratableEditableComToolName } from "../EditableCom.model";

export const migratableEditableComToolNameList = ["edit-com"] as const;

export const concatMigratableEditableComToolNameList = (toolList: MigratableComToolName[]) => cmExer.actionAccessedOrNull("canRedact")
  ? toolList.concat(migratableEditableComToolNameList)
  : toolList;

export const spliceMigratableEditableComToolNameList = (toolList: MigratableComToolName[]) => cmExer.actionAccessedOrNull("canRedact")
  ? toolList
  : toolList.filter(tool => migratableEditableComToolNameList.indexOf(tool as never) < 0);


export const getMigratableEditableComTool = (
  tool: MigratableEditableComToolName,
  { jumpTo }: ReturnType<typeof useCmNavConfigurer>
): MigratableComTool | nil => {
  switch (tool) {
    case "edit-com":
      return {
        tool,
        title: "Редактировать",
        icon: "edit-outline",
        onClick: () => jumpTo(editComNavPhasePoint),
      };
  }
};

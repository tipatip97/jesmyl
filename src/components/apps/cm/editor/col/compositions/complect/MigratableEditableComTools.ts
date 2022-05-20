import { useCmNavConfigurer } from "../../../../base/useCmNav";
import { MigratableComTool } from "../../../../col/com/Com.model";
import { MigratableEditableComToolName } from "../EditableCom.model";

export const migratableEditableComToolNameList: MigratableEditableComToolName[] =
  ["edit-com"];

export const getMigratableEditableComTool = (
  tool: MigratableEditableComToolName,
  { navigate }: ReturnType<typeof useCmNavConfigurer>
): MigratableComTool | nil => {
  switch (tool) {
    case "edit-com":
      return {
        tool,
        title: "Редактировать",
        icon: "edit-outline",
        onClick: () => navigate(['editor', 'coms', 'com']),
      };
  }
};

import { Auth } from '../../../../../../index/Index.model';
import useCmNav from '../../../../base/useCmNav';
import { cmExer } from '../../../../Cm.store';
import { MigratableComTool, MigratableComToolName } from '../../../../col/com/Com.model';
import { editComNavPhasePoint } from '../../../editorNav';
import { MigratableEditableComToolName } from '../EditableCom.model';

export const migratableEditableComToolNameList = ['edit-com'] as const;

export const concatMigratableEditableComToolNameList = (toolList: MigratableComToolName[], auth: Auth) =>
  cmExer.actionAccessedOrNull('canRedact', auth) ? toolList.concat(migratableEditableComToolNameList) : toolList;

export const spliceMigratableEditableComToolNameList = (toolList: MigratableComToolName[], auth: Auth) =>
  cmExer.actionAccessedOrNull('canRedact', auth)
    ? toolList
    : toolList.filter(tool => migratableEditableComToolNameList.indexOf(tool as never) < 0);

export const getMigratableEditableComTool = (
  tool: MigratableEditableComToolName,
  { jumpTo }: ReturnType<typeof useCmNav>,
): MigratableComTool | nil => {
  switch (tool) {
    case 'edit-com':
      return {
        tool,
        title: 'Редактировать',
        icon: 'edit-outline',
        onClick: () => jumpTo(editComNavPhasePoint),
      };
  }
};

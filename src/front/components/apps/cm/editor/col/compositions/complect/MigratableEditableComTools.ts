import { IconPencilEdit02StrokeRounded } from '@icons/pencil-edit-02';
import { Auth } from '../../../../../../index/Index.model';
import useCmNav from '../../../../base/useCmNav';
import { cmExer } from '../../../../Cm.store';
import { MigratableComTool, MigratableComToolName } from '../../../../col/com/Com.model';
import { editComNavPhasePoint } from '../../../editorNav';
import { MigratableEditableComToolName } from '../EditableCom.model';

export const migratableEditableComToolNameList = ['edit-com'] as const;

export const concatMigratableEditableComToolNameList = (toolList: MigratableComToolName[], auth: Auth) =>
  cmExer.levelAccessedOrNull(50, auth) ? toolList.concat(migratableEditableComToolNameList) : toolList;

export const spliceMigratableEditableComToolNameList = (toolList: MigratableComToolName[], auth: Auth) =>
  cmExer.levelAccessedOrNull(50, auth)
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
        Icon: IconPencilEdit02StrokeRounded,
        onClick: () => jumpTo(editComNavPhasePoint),
      };
  }
};

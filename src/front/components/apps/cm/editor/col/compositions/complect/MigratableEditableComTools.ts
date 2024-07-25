import { IconPencilEdit02StrokeRounded } from '../../../../../../../complect/the-icon/icons/pencil-edit-02';
import { Auth } from '../../../../../../index/Index.model';
import { cmExer } from '../../../../CmExer';
import { Com } from '../../../../col/com/Com';
import { MigratableComTool, MigratableComToolName } from '../../../../col/com/Com.model';
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
  com: Com | und,
): MigratableComTool | nil => {
  switch (tool) {
    case 'edit-com':
      return {
        tool,
        title: 'Редактировать',
        Icon: IconPencilEdit02StrokeRounded,
        path: com && `/cm/edit/coms/${com.wid}`,
      };
  }
};

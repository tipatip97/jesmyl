import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import useAuth from '../../../index/useAuth';
import useCmNav from '../base/useCmNav';
import { cmExer } from '../Cm.store';
import './Editor.scss';
import { editorRouteItems } from './editorNav';
import PhaseCmEditorContainer from './phase-editor-container/PhaseCmEditorContainer';

export default function Editor() {
  const { goTo } = useCmNav();
  const auth = useAuth();

  return (
    <PhaseCmEditorContainer
      className="cm-editor"
      withoutBackButton
      headTitle="Редактор"
      content={
        <>
          {editorRouteItems.map(({ data: { icon, title } = {}, phase, accessRule }) => {
            return (
              (!accessRule || cmExer.actionAccessedOrNull(accessRule, auth)) && (
                <BrutalItem
                  key={`${icon} ${phase}`}
                  icon={icon || 'question-mark-circle'}
                  title={title || ''}
                  onClick={() => goTo(phase)}
                />
              )
            );
          })}
        </>
      }
    />
  );
}

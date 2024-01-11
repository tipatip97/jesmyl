import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import { useCheckIsAccessed } from '../../../../complect/exer/hooks/check-is-accessed';
import useAuth from '../../../index/useAuth';
import useCmNav from '../base/useCmNav';
import './Editor.scss';
import { editorRouteItems } from './editorNav';
import PhaseCmEditorContainer from './phase-editor-container/PhaseCmEditorContainer';

export default function Editor() {
  const { goTo } = useCmNav();
  const auth = useAuth();
  const checkIsAccessed = useCheckIsAccessed(auth);

  return (
    <PhaseCmEditorContainer
      className="cm-editor"
      withoutBackButton
      headTitle="Редактор"
      content={
        <>
          {editorRouteItems.map(({ data: { icon, title } = {}, phase, accessLevel }) => {
            return (
              (accessLevel == null || checkIsAccessed(accessLevel)) && (
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

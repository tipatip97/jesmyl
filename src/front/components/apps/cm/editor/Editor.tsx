import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import { useCheckIsAccessed } from '../../../../complect/exer/hooks/check-is-accessed';
import { useAuth } from '../../../index/molecules';
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
          {editorRouteItems.map(({ data: { iconSelfPack, title } = {}, phase, accessLevel }) => {
            return (
              (accessLevel == null || checkIsAccessed(accessLevel)) &&
              iconSelfPack && (
                <BrutalItem
                  key={`${iconSelfPack.name} ${phase}`}
                  icon={<iconSelfPack.TwotoneRounded />}
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

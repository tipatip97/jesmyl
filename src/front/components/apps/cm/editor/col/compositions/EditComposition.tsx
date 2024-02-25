import { useState } from 'react';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import EvaIcon from '../../../../../../complect/eva-icon/EvaIcon';
import { useCheckIsAccessed } from '../../../../../../complect/exer/hooks/check-is-accessed';
import { useExerExec } from '../../../../../../complect/exer/hooks/useExer';
import { NavigationThrowNodeProps } from '../../../../../../complect/nav-configurer/Navigation.model';
import useAuth from '../../../../../index/useAuth';
import useConnectionState from '../../../../../index/useConnectionState';
import { CmNavData } from '../../../Cm.model';
import useCmNav from '../../../base/useCmNav';
import ComPlayer from '../../../col/com/player/ComPlayer';
import { editCompositionNavs } from '../../editorNav';
import PhaseCmEditorContainer from '../../phase-editor-container/PhaseCmEditorContainer';
import './EditComposition.scss';
import { useEditableCcom } from './useEditableCcom';

export default function EditComposition({
  outletContent,
  relativePoint,
  currentChildPhase,
}: NavigationThrowNodeProps<CmNavData>) {
  const ccom = useEditableCcom();
  const { goTo } = useCmNav();
  const exec = useExerExec();
  const [isOpenPlayer, setIsOpenPlayer] = useState(false);
  const auth = useAuth();
  const checkIsAccessed = useCheckIsAccessed(auth);
  const connectionNode = useConnectionState('margin-gap');

  if (!ccom) return null;

  return (
    <PhaseCmEditorContainer
      className="edit-composition"
      headTitle={`#${ccom.number} ${ccom.initialName || ccom.name}`}
      head={
        <>
          {connectionNode}
          <EvaButton
            name={isOpenPlayer ? 'music' : 'music-outline'}
            className="margin-gap"
            onClick={() => setIsOpenPlayer(!isOpenPlayer)}
          />
        </>
      }
      content={
        ccom.col.removed ? (
          <div className="flex column">
            <h2 className="error-message">Песня удалена</h2>
            <div
              className="pointer"
              onClick={() => exec(ccom.comeBack())}
            >
              Восстановить
            </div>
          </div>
        ) : (
          <>
            <div className="flex around sticky nav-panel">
              {editCompositionNavs.map(({ data: { icon, iconText } = {}, phase: [phase], accessLevel }) => {
                if (accessLevel != null && !checkIsAccessed(accessLevel)) return null;
                return (
                  <span
                    key={phase}
                    className="pointer"
                    onClick={() => goTo(phase, relativePoint, ccom.isCreated)}
                  >
                    {icon ? (
                      <EvaIcon name={`${icon}${phase === currentChildPhase ? '' : '-outline'}` as never} />
                    ) : (
                      iconText
                    )}
                  </span>
                );
              })}
            </div>
            {isOpenPlayer && ccom.audio && (
              <div className="sticky com-player">
                <ComPlayer
                  src={ccom.audio}
                  split
                />
              </div>
            )}
            {outletContent}
          </>
        )
      }
    />
  );
}

import { useState } from 'react';
import { useCheckIsAccessed } from '../../../../../../complect/exer/hooks/check-is-accessed';
import { useExerExec } from '../../../../../../complect/exer/hooks/useExer';
import { NavigationThrowNodeProps } from '../../../../../../complect/nav-configurer/Navigation.model';
import IconButton from '../../../../../../complect/the-icon/IconButton';
import { IconMusicNote03SolidRounded, IconMusicNote03StrokeRounded } from '@icons/music-note-03';
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
          <IconButton
            Icon={isOpenPlayer ? IconMusicNote03SolidRounded : IconMusicNote03StrokeRounded}
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
              {editCompositionNavs.map(({ data: { Icon, iconText } = {}, phase: [phase], accessLevel }) => {
                if (accessLevel != null && !checkIsAccessed(accessLevel)) return null;
                return (
                  <span
                    key={phase}
                    className="pointer"
                    onClick={() => goTo(phase, relativePoint, ccom.isCreated)}
                  >
                    {Icon ? <Icon /> : iconText}
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

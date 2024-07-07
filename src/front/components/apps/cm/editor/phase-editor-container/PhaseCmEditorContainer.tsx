import { useShowExerLookIcon } from '../../../../../complect/exer/hooks/look-icon';
import { PhaseContainerProps } from '../../../../../complect/phase-container/PhaseContainerConfigurer.model';
import { cmExer } from '../../CmExer';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import './PhaseCmEditorContainer.scss';

export default function PhaseCmEditorContainer(props: PhaseContainerProps) {
  return (
    <PhaseCmContainer
      {...props}
      className={`phase-cm-editor-container ${props.className || ''}`}
      head={
        <>
          {props.head}
          {useShowExerLookIcon(cmExer)}
        </>
      }
    />
  );
}

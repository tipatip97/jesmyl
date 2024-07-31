import { useShowExerLookIcon } from '../../../../../complect/exer/hooks/look-icon';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { PhaseContainerProps } from '../../../../../complect/phase-container/PhaseContainerConfigurer.model';
import { cmExer } from '../../CmExer';
import './PhaseCmEditorContainer.scss';

export default function PhaseCmEditorContainer(props: PhaseContainerProps) {
  return (
    <PhaseContainerConfigurer
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

import styled from 'styled-components';
import { useShowExerLookIcon } from '../../../../../complect/exer/hooks/look-icon';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { PhaseContainerProps } from '../../../../../complect/phase-container/PhaseContainerConfigurer.model';
import { cmExer } from '../../CmExer';

export default function PhaseCmEditorContainer(props: PhaseContainerProps) {
  return (
    <StyledContainer
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

const StyledContainer = styled(PhaseContainerConfigurer)`
  .composition-block {
    &.invisible {
      *,
      ::after,
      ::before {
        text-decoration: line-through;
      }
    }
  }
`;

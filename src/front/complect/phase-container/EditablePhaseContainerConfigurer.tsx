import { Exer } from '../exer/Exer';
import { useShowExerLookIcon } from '../exer/hooks/look-icon';
import { NavigationStorage } from '../nav-configurer/Navigation.model';
import PhaseContainerConfigurer from './PhaseContainerConfigurer';
import { PhaseContainerConfigurerProps, PhaseContainerProps } from './PhaseContainerConfigurer.model';

export default function EditablePhaseContainerConfigurer<Storaged>({
  head,
  exer,
  ...props
}: PhaseContainerProps & PhaseContainerConfigurerProps & { exer: Exer<NavigationStorage<Storaged>> }) {
  return (
    <PhaseContainerConfigurer
      {...props}
      head={
        <>
          {head}
          {useShowExerLookIcon(exer)}
        </>
      }
    />
  );
}

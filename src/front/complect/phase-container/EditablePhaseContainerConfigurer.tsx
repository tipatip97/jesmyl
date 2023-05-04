import { Exer } from "../exer/Exer";
import useExer from "../exer/useExer";
import { NavigationStorage } from "../nav-configurer/Navigation.model";
import PhaseContainerConfigurer from "./PhaseContainerConfigurer";
import { PhaseContainerConfigurerProps, PhaseContainerProps } from "./PhaseContainerConfigurer.model";

export default function EditablePhaseContainerConfigurer<Storaged>({
  topClass,
  headClass,
  head,
  exer,
  ...props
}: PhaseContainerProps &
  PhaseContainerConfigurerProps & {
    exer: Exer<NavigationStorage<Storaged>>
  }) {
  const { lookIcon } = useExer(exer);

  return (
    <PhaseContainerConfigurer
      {...props}
      topClass={`${topClass || ""} ${lookIcon ? "with-changes" : ""}`}
      headClass={headClass || "flex between"}
      head={
        <div className={`flex ${headClass || ""}`}>
          {head}
          {lookIcon}
        </div>
      }
    />
  );
}

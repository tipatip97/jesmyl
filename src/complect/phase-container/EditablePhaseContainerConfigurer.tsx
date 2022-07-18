import EvaIcon from "../eva-icon/EvaIcon";
import { Exer } from "../exer/Exer";
import useExer from "../exer/useExer";
import { NavigationStorage } from "../nav-configurer/Navigation.model";
import PhaseContainerConfigurer from "./PhaseContainerConfigurer";
import {
  EditablePhaseContainerProps,
  PhaseContainerConfigurerProps,
} from "./PhaseContainerConfigurer.model";

export default function EditablePhaseContainerConfigurer<Storaged>(
  props: EditablePhaseContainerProps &
    PhaseContainerConfigurerProps & {
      onMoreClick?: () => void;
      exer: Exer<NavigationStorage<Storaged>>;
    }
) {
  const { lookIcon } = useExer(props.exer);

  return (
    <PhaseContainerConfigurer
      {...props}
      topClass={`${props.topClass} ${lookIcon ? "with-changes" : ""}`}
      head={
        <div className={`flex ${props.headClass || ""}`}>
          {props.head}
          {lookIcon}
          {props.onMoreClick ? (
            <EvaIcon
              name="more-vertical-outline"
              className="action-button"
              onClick={props.onMoreClick}
            />
          ) : null}
        </div>
      }
    />
  );
}

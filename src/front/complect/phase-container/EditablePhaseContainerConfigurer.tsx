import EvaIcon from "../eva-icon/EvaIcon";
import { Exer } from "../exer/Exer";
import useExer from "../exer/useExer";
import { NavigationStorage } from "../nav-configurer/Navigation.model";
import PhaseContainerConfigurer from "./PhaseContainerConfigurer";
import {
  EditablePhaseContainerProps,
  PhaseContainerConfigurerProps,
} from "./PhaseContainerConfigurer.model";

export default function EditablePhaseContainerConfigurer<Storaged>({
  isWithoutLookButton,
  topClass,
  headClass,
  onMoreClick,
  head,
  exer,
  ...props
}: EditablePhaseContainerProps &
  PhaseContainerConfigurerProps & {
    onMoreClick?: () => void;
    exer: Exer<NavigationStorage<Storaged>>;
    isWithoutLookButton?: boolean;
  }) {
  const { lookIcon } = useExer(exer);

  return (
    <PhaseContainerConfigurer
      {...props}
      topClass={`${topClass || ""} ${
        !isWithoutLookButton && lookIcon ? "with-changes" : ""
      }`}
      headClass={headClass || "flex between"}
      head={
        <div className={`flex ${headClass || ""}`}>
          {head}
          {!isWithoutLookButton && lookIcon}
          {onMoreClick ? (
            <EvaIcon
              name="more-vertical-outline"
              className="action-button"
              onClick={onMoreClick}
            />
          ) : null}
        </div>
      }
    />
  );
}

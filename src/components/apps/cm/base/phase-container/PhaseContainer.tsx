import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useNav from "../useNav";
import { PhaseContainerProps } from "./PhaseContainer.model";

export default function PhaseContainer(props: PhaseContainerProps) {
  const {
    topClass,
    head,
    content,
    withoutBackButton,
    reference,
    headClass,
    contentClass,
  } = props;
  const { goBack } = useNav();
  const backButton = (
    <EvaIcon
      name="arrow-back"
      className="action-button"
      onClick={() => goBack()}
    />
  );

  return (
    <div className={`${topClass} ${props.className || ""}`} ref={reference}>
      <div className={`header-content ${headClass || "flex"}`}>
        {typeof head === "function" ? (
          head(backButton)
        ) : head == null ? (
          withoutBackButton ? null : (
            backButton
          )
        ) : withoutBackButton ? (
          head
        ) : (
          <>
            {backButton}
            {typeof head === "string" ? (
              <span className="pointer" onClick={() => goBack()}>{head}</span>
            ) : (
              head
            )}
          </>
        )}
      </div>
      <div className={`content-container ${contentClass || ""}`}>{content}</div>
    </div>
  );
}
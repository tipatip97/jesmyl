import EvaIcon from "../eva-icon";
import useNav from "../../components/apps/cm/base/useNav";
import { PhaseContainerProps } from ".";

export default function PhaseContainer(props: PhaseContainerProps) {
  const {
    topClass,
    head,
    noHead,
    content,
    withoutBackButton,
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
    <div className={`${topClass} ${props.className || ""}`}>
      {noHead ? null : (
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
                <span className="pointer" onClick={() => goBack()}>
                  {head}
                </span>
              ) : (
                head
              )}
            </>
          )}
        </div>
      )}
      <div className={`content-container ${contentClass || ""}`}>{content}</div>
    </div>
  );
}

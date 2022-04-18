import EvaIcon from "../eva-icon";
import useCmNav from "../../components/apps/cm/base/useCmNav";
import { PhaseContainerProps } from ".";

export default function PhaseContainer(props: PhaseContainerProps) {
  const {
    topClass,
    head,
    noHead,
    content,
    contentRef,
    withoutBackButton,
    headClass,
    contentClass,
  } = props;
  const { goBack } = useCmNav();
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
      <div
        className={`content-container ${contentClass || ""}`}
        ref={contentRef}
      >
        {content}
      </div>
    </div>
  );
}

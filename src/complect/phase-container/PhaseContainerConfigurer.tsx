import navConfigurers from "../../shared/navConfigurers";
import EvaIcon from "../eva-icon";
import { PhaseContainerConfigurerProps } from "./PhaseContainerConfigurer.model";
import './PhaseContainerConfigurer.scss';

export default function PhaseContainerConfigurer(
  props: PhaseContainerConfigurerProps
) {
  const {
    topClass,
    head,
    noHead,
    content,
    contentRef,
    withoutBackButton,
    headClass,
    contentClass,
    appName,
  } = props;

  const { goBack } = navConfigurers[appName]();
  const backButton = (
    <EvaIcon
      name="arrow-back"
      className="action-button"
      onClick={() => goBack()}
    />
  );

  return (
    <div className={`phase-container ${topClass} ${props.className || ""}`}>
      {noHead ? null : (
        <div className={`header ${headClass || "flex"}`}>
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
        className={`content ${contentClass || ""}`}
        ref={contentRef}
      >
        {content}
      </div>
    </div>
  );
}

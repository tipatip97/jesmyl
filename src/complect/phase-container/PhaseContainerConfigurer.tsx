import EvaIcon from "../eva-icon/EvaIcon";
import { PhaseContainerConfigurerProps } from "./PhaseContainerConfigurer.model";
import "./PhaseContainerConfigurer.scss";

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
    headTitle,
    contentClass,
    goBack,
  } = props;

  const backButton = (
    <EvaIcon
      name="arrow-back"
      className="action-button"
      onClick={() => goBack()}
    />
  );

  const title = headTitle && (
    <span className={withoutBackButton ? 'margin-big-gap-h' : 'pointer'} onClick={() => !withoutBackButton && goBack()}>
      {headTitle}
    </span>
  );
  const titled = () => {
    return title ? (
      <div className="flex between">
        {backButton}
        {title}
      </div>
    ) : (
      backButton
    );
  };

  return (
    <div className={`phase-container ${topClass} ${props.className || ""}`}>
      {noHead ? null : (
        <div className={`header ${headClass || "flex"}`}>
          {typeof head === "function" ? (
            <>{head(backButton, title)}</>
          ) : head == null ? (
            withoutBackButton ? (
              title
            ) : (
              titled()
            )
          ) : withoutBackButton ? (
            <>
              {title}
              {head}
            </>
          ) : (
            <>
              {titled()}
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
      <div className={`content ${contentClass || ""}`} ref={contentRef}>
        {content}
      </div>
    </div>
  );
}

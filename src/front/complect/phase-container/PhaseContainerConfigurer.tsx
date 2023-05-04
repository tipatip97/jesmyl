import EvaIcon from "../eva-icon/EvaIcon";
import { PhaseContainerConfigurerProps } from "./PhaseContainerConfigurer.model";
import "./PhaseContainerConfigurer.scss";

export default function PhaseContainerConfigurer(
  props: PhaseContainerConfigurerProps
) {
  const {
    topClass,
    head,
    content,
    contentRef,
    withoutBackButton,
    headClass,
    headTitle,
    contentClass,
    goBack,
    onMoreClick,
  } = props;

  const backButton = <EvaIcon
    name="arrow-back"
    className="action-button"
    onClick={() => goBack(true)}
  />;

  const title = headTitle && (
    <span
      className={withoutBackButton ? "margin-big-gap-h" : "pointer"}
      onClick={() => !withoutBackButton && goBack(true)}
    >
      {headTitle}
    </span>
  );

  const titled = () => {
    return title
      ? <div className="flex between">
        {backButton}
        {title}
      </div>
      : backButton;
  };

  const headNode = typeof head === "function"
    ? <>{head(backButton, title)}</>
    : head == null
      ? withoutBackButton
        ? title
        : titled()
      : withoutBackButton
        ? <>{title}{head}</>
        : <>
          {titled()}
          {typeof head === "string"
            ? <span className="pointer" onClick={() => goBack(true)}>{head}</span>
            : head}
        </>

  return (
    <div className={`phase-container ${topClass}`}>
      <div className="header flex between full-width">
        {onMoreClick
          ? <>
            <span className={headClass || "flex"}>{headNode}</span>
            <EvaIcon
              className="action-button"
              name="more-vertical"
              onClick={onMoreClick}
            />
          </>
          : headNode}
      </div>
      <div className={`content ${contentClass || ""}`} ref={contentRef}>
        {content}
      </div>
    </div>
  );
}

import EvaIcon from "../eva-icon/EvaIcon";
import { PhaseContainerConfigurerProps } from "./PhaseContainerConfigurer.model";
import "./PhaseContainerConfigurer.scss";

export default function PhaseContainerConfigurer(props: PhaseContainerConfigurerProps) {
  return <div className={`phase-container ${props.topClass || ''}`}>
    <div className="header flex between full-width">
      {(!props.withoutBackButton || props.headTitle) && <span
        className={'flex ' + (props.withoutBackButton ? 'margin-big-gap-h' : 'pointer')}
        onClick={props.withoutBackButton ? undefined : (() => props.goBack(true))}
      >
        {!props.withoutBackButton && <EvaIcon
          name="arrow-back"
          className="action-button"
        />}
        {props.headTitle}
      </span>}
      <div className={`head ${props.headClass || 'flex between'}`}>
        {props.head}
        {props.onMoreClick && <EvaIcon
          className="action-button"
          name="more-vertical"
          onClick={props.onMoreClick}
        />}
      </div>
    </div>
    <div className={`content ${props.contentClass || ''}`} ref={props.contentRef}>
      {props.content}
    </div>
  </div>;
}

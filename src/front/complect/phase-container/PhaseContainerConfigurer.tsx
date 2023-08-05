import { backSwipableContainerMaker } from "../backSwipableContainerMaker";
import EvaIcon from "../eva-icon/EvaIcon";
import { PhaseContainerConfigurerProps } from "./PhaseContainerConfigurer.model";
import "./PhaseContainerConfigurer.scss";

let goBack: (isForceBack?: boolean | undefined) => void;
const swiper = backSwipableContainerMaker(() => goBack(true));

export default function PhaseContainerConfigurer(props: PhaseContainerConfigurerProps) {
  goBack = props.goBack;

  const content = <>
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
  </>;

  return props.withoutBackButton || props.withoutBackSwipe
    ? <div className={`phase-container relative ${props.topClass || ''}`}>{content}</div>
    : <div
      {...swiper}
      className={`phase-container relative ${props.topClass || ''}`}
    >
      {content}
    </div>;
}

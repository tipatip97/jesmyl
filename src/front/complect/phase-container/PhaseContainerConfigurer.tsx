import styled from 'styled-components';
import { backSwipableContainerMaker } from '../backSwipableContainerMaker';
import EvaIcon from '../eva-icon/EvaIcon';
import { PhaseContainerConfigurerProps } from './PhaseContainerConfigurer.model';

let goBack: (isForceBack?: boolean | undefined) => void;
const swiper = backSwipableContainerMaker(() => goBack(true));

export default function PhaseContainerConfigurer(props: PhaseContainerConfigurerProps) {
  goBack = props.goBack;

  const content = (
    <>
      <div className="header flex between full-width">
        {(!props.withoutBackButton || props.headTitle) && (
          <span
            className={'flex ' + (props.withoutBackButton ? 'margin-big-gap-h' : 'pointer')}
            onClick={props.withoutBackButton ? undefined : () => props.goBack(true)}
          >
            {!props.withoutBackButton && <EvaIcon name="arrow-back" className="action-button" />}
            {props.headTitle}
          </span>
        )}
        <div className={`head ${props.headClass || 'flex between'}`}>
          {props.head}
          {props.onMoreClick && <EvaIcon className="action-button" name="more-vertical" onClick={props.onMoreClick} />}
        </div>
      </div>
      <div className={`content ${props.contentClass || ''}`} ref={props.contentRef}>
        {props.content}
      </div>
    </>
  );

  return props.withoutBackButton || props.withoutBackSwipe ? (
    <ContainerPhase className={`phase-container relative ${props.className || ''}`}>{content}</ContainerPhase>
  ) : (
    <ContainerPhase {...swiper} className={`phase-container relative ${props.className || ''}`}>
      {content}
    </ContainerPhase>
  );
}

const ContainerPhase = styled.div`
  > .header {
    width: 100vw;
    background-color: var(--color--1);
    height: var(--header-height);
    padding: var(--header-padding);
    transition: var(--fullscreen-transition);
    margin-top: var(--header-top);

    .action-button {
      padding: var(--main-gap);
      cursor: pointer;
    }
  }

  > .content {
    position: static;
    width: 100vw;
    background-color: var(--color--5);
    overflow-x: hidden;
    overflow-y: auto;
    transition: var(--fullscreen-transition);
    height: var(--content-height);
    padding: var(--main-gap);

    &.no-padding-top {
      padding-top: 0;
    }

    > .phase-content {
      height: 100%;
    }
  }
`;

import { NavigateFunction, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IconArrowLeft02StrokeRounded } from '../../complect/the-icon/icons/arrow-left-02';
import { IconMoreVerticalCircle01StrokeRounded } from '../../complect/the-icon/icons/more-vertical-circle-01';
import { backSwipableContainerMaker } from '../backSwipableContainerMaker';
import { LinkWithSearchRemember } from './LinkWithSearchRemember';
import { PhaseContainerConfigurerProps } from './PhaseContainerConfigurer.model';

let navigate: NavigateFunction = () => {};
const swiper = backSwipableContainerMaker(() => navigate('..'));

export default function PhaseContainerConfigurer(props: PhaseContainerConfigurerProps) {
  navigate = useNavigate();

  const content = (
    <>
      <div className="header flex between full-width">
        {props.withoutBackButton ? (
          props.headTitle && <span className="margin-big-gap-h">{props.headTitle}</span>
        ) : (
          <LinkWithSearchRemember
            to=".."
            rememberProps={props.rememberProps}
            className="flex"
          >
            <IconArrowLeft02StrokeRounded className="action-button" />
            {props.headTitle}
          </LinkWithSearchRemember>
        )}
        <div className={`head ${props.headClass || 'flex between'}`}>
          {props.head}
          {props.onMoreClick && (
            <IconMoreVerticalCircle01StrokeRounded
              className="action-button"
              onClick={props.onMoreClick}
            />
          )}
        </div>
      </div>
      <div
        className={`content ${props.contentClass || ''}`}
        ref={props.contentRef}
      >
        {props.content}
      </div>
    </>
  );

  return props.withoutBackButton || props.withoutBackSwipe ? (
    <ContainerPhase className={`phase-container relative ${props.className || ''}`}>{content}</ContainerPhase>
  ) : (
    <ContainerPhase
      {...swiper}
      className={`phase-container relative ${props.className || ''}`}
    >
      {content}
    </ContainerPhase>
  );
}

const ContainerPhase = styled.div`
  > .header {
    transition: var(--fullscreen-transition);
    margin-top: var(--header-top);
    background-color: var(--color--1);
    padding: var(--header-padding);
    width: 100vw;
    height: var(--header-height);

    .action-button {
      cursor: pointer;
      padding: var(--main-gap);
    }
  }

  > .content {
    position: static;
    transition: var(--fullscreen-transition);
    background-color: var(--color--5);
    padding: var(--main-gap);
    width: 100vw;
    height: var(--content-height);
    overflow-x: hidden;
    overflow-y: auto;

    &.no-padding-top {
      padding-top: 0;
    }

    > .phase-content {
      height: 100%;
    }
  }
`;

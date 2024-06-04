import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const TheIconWrapper = ({ ...attrs }: HTMLAttributes<HTMLOrSVGElement> & { name: string }) => {
  return (
    <StyledSvg
      {...attrs}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    />
  );
};

const AnimationName = ['sign'] as const;

export const StyledSvg = styled.svg`
  --icon-size: 24px;
  --icon-scale: 1;
  --icon-fill: var(--icon-color);
  --icon-stroke: var(--icon-color);

  scale: var(--icon-scale);
  width: var(--icon-size);
  min-width: var(--icon-size);
  max-width: var(--icon-size);
  height: var(--icon-size);
  min-height: var(--icon-size);
  max-height: var(--icon-size);

  &:not(.no-animate) {
    path {
      --stroke-length: 80;
      stroke-dasharray: var(--stroke-length);
      stroke-dashoffset: var(--stroke-length);
      animation: ${props => props.theme.id(AnimationName)} 1s ease forwards;

      ${[2, 3, 4, 5, 6, 7].reduce(
        (acc, i) => `${acc}
          &:nth-child(${i}) {
            animation-delay: ${i / 10}s;
          }
          `,
        '',
      )}
    }

    @keyframes ${props => props.theme.id(AnimationName)} {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
`;

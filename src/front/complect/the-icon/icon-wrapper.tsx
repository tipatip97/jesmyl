import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import mylib from '../my-lib/MyLib';

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

      ${(() => {
        let arr = [2, 3, 4, 5, 6, 7];
        let result = '';
        let nthChild = 2;

        while (arr.length) {
          const index = mylib.randomOf(0, arr.length - 1);

          result += `
            &:nth-child(${nthChild++}) {
              animation-delay: ${arr[index] / 10}s;
            }
          `;

          arr.splice(index, 1);
        }

        return result;
      })()}
    }

    @keyframes ${props => props.theme.id(AnimationName)} {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
`;

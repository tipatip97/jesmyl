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

export const StyledSvg = styled.svg`
  --icon-size: 24px;
  --icon-scale: 1;

  scale: var(--icon-scale);
  width: var(--icon-size);
  min-width: var(--icon-size);
  max-width: var(--icon-size);
  height: var(--icon-size);
  min-height: var(--icon-size);
  max-height: var(--icon-size);
`;

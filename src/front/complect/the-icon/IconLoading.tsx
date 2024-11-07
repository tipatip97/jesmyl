import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';
import { IconLoading03SolidRounded } from './icons/loading-03';
import { TheIconType } from './model';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  isLoading?: boolean;
  Icon?: TheIconType;
}

export const TheIconLoading = (props: Props) => {
  const { isLoading, Icon, ...attrs } = props;
  if (!('isLoading' in props)) return <StyledLoadingSpinner {...attrs} />;

  return isLoading ? <StyledLoadingSpinner {...attrs} /> : <>{Icon ? <Icon {...attrs} /> : props.children}</>;
};

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoadingSpinner = styled(IconLoading03SolidRounded)`
  animation: ${rotate} 1s linear infinite;
`;

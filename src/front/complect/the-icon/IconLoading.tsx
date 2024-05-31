import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { IconLoading03SolidRounded } from './icons/loading-03';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  isLoading?: boolean;
}

export const TheIconLoading = (props: Props) => {
  const { isLoading, ...attrs } = props;
  if (!('isLoading' in props)) return <Loading {...attrs} />;

  return isLoading ? <Loading {...attrs} /> : <>{props.children}</>;
};

const name = `rotate-${(Math.random() * 1000).toFixed(0)}`;

const Loading = styled(IconLoading03SolidRounded)`
  animation: ${name} 1s linear infinite;

  @keyframes ${name} {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

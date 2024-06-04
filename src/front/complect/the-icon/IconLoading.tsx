import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { IconLoading03SolidRounded } from './icons/loading-03';
import { TheIconType } from './model';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  isLoading?: boolean;
  Icon?: TheIconType;
}

export const TheIconLoading = (props: Props) => {
  const { isLoading, Icon, ...attrs } = props;
  if (!('isLoading' in props)) return <Loading {...attrs} />;

  return isLoading ? <Loading {...attrs} /> : <>{Icon ? <Icon {...attrs} /> : props.children}</>;
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

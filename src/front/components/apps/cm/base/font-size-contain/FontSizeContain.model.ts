import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

export type FontSizeContainProps = {
  className?: string;
  subUpdate?: string | number;
  style?: CSSProperties;
  shadowStyle?: CSSProperties;
  childStyle?: CSSProperties;
} & XOR<{ content?: ReactNode }, { html?: string }>;

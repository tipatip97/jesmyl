import { ReactNode } from 'react';

export type FontSizeContainProps = {
  className?: string;
  subUpdate?: string | number;
} & XOR<{ content?: ReactNode }, { html?: string }>;

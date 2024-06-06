import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 19C5.26413 19.9564 5.79671 21 7.18729 21C9.59365 21 10.1952 19 12 12C13.8048 5 14.4064 3 16.8127 3C18.2033 3 18.7359 4.04358 19 5',
  d2: 'M9 10H17',
  d3: 'M5 19C5.26413 19.9564 5.79671 21 7.18729 21C9.59365 21 10.1952 19 12 12C13.8048 5 14.4064 3 16.8127 3C18.2033 3 18.7359 4.04358 19 5M9 10H17',
  d4: 'M14.7251 2.60335C15.3586 2.15874 16.0642 2 16.813 2C17.7982 2 18.5485 2.38622 19.0747 2.975C19.5659 3.52469 19.8164 4.19882 19.9642 4.7338C20.1112 5.26616 19.7988 5.8169 19.2665 5.96392C18.7341 6.11094 18.1834 5.79856 18.0363 5.2662C17.92 4.84477 17.7721 4.5189 17.5834 4.30769C17.4296 4.13557 17.2183 4 16.813 4C16.3585 4 16.0866 4.09126 15.8741 4.2404C15.6423 4.40303 15.3781 4.70728 15.0782 5.31661C14.4582 6.57621 13.8832 8.70208 12.9686 12.2497C12.0785 15.7021 11.4503 18.0762 10.7167 19.5666C10.3398 20.3323 9.88966 20.9655 9.27539 21.3966C8.6419 21.8413 7.93631 22 7.18755 22C6.20227 22 5.45199 21.6138 4.92583 21.025C4.43461 20.4753 4.18408 19.8012 4.03633 19.2662C3.88932 18.7338 4.2017 18.1831 4.73406 18.0361C5.26641 17.8891 5.81715 18.2014 5.96417 18.7338C6.08055 19.1552 6.22838 19.4811 6.41712 19.6923C6.57093 19.8644 6.78224 20 7.18755 20C7.64197 20 7.91395 19.9087 8.12644 19.7596C8.35816 19.597 8.62237 19.2927 8.92229 18.6834C9.54227 17.4238 10.1173 15.2979 11.0319 11.7503C11.922 8.29792 12.5502 5.92379 13.2838 4.43339C13.6607 3.66772 14.1108 3.03447 14.7251 2.60335Z',
  d5: 'M8 10C8 9.44772 8.44772 9 9 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H9C8.44772 11 8 10.5523 8 10Z',
  d6: 'M14.7372 2.60335C15.3736 2.15874 16.0824 2 16.8345 2C17.8242 2 18.5779 2.38622 19.1065 2.975C19.5999 3.52469 19.8516 4.19882 20 4.7338L18.0634 5.2662C17.9465 4.84477 17.798 4.5189 17.6084 4.30769C17.4539 4.13557 17.2417 4 16.8345 4C16.378 4 16.1048 4.09126 15.8914 4.2404C15.6586 4.40303 15.3932 4.70728 15.0919 5.31661C14.4691 6.57621 13.8915 8.70208 12.9727 12.2497C12.0786 15.7021 11.4475 18.0762 10.7106 19.5666C10.3321 20.3323 9.87985 20.9655 9.2628 21.3966C8.62644 21.8413 7.91764 22 7.16549 22C6.17575 22 5.42207 21.6138 4.89353 21.025C4.40008 20.4753 4.14841 19.8012 4 19.2662L5.93657 18.7338C6.05348 19.1552 6.20197 19.4811 6.39158 19.6923C6.54608 19.8644 6.75834 20 7.16549 20C7.62197 20 7.89518 19.9087 8.10864 19.7596C8.3414 19.597 8.60681 19.2927 8.90809 18.6834C9.53088 17.4238 10.1085 15.2979 11.0273 11.7503C11.9214 8.29792 12.5525 5.92379 13.2894 4.43339C13.6679 3.66772 14.1202 3.03447 14.7372 2.60335Z',
  d7: 'M17.0235 11H8.9873V9H17.0235V11Z',
};

export const IconFunctionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-stroke-rounded IconFunctionStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-duotone-rounded IconFunctionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-twotone-rounded IconFunctionTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-solid-rounded IconFunctionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-bulk-rounded IconFunctionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-stroke-sharp IconFunctionStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-solid-sharp IconFunctionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFunction: TheIconSelfPack = {
  name: 'Function',
  StrokeRounded: IconFunctionStrokeRounded,
  DuotoneRounded: IconFunctionDuotoneRounded,
  TwotoneRounded: IconFunctionTwotoneRounded,
  SolidRounded: IconFunctionSolidRounded,
  BulkRounded: IconFunctionBulkRounded,
  StrokeSharp: IconFunctionStrokeSharp,
  SolidSharp: IconFunctionSolidSharp,
};
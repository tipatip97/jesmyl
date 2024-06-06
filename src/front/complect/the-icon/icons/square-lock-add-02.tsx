import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 16.6667V18M17 18V19.3333M17 18H18.3333M17 18H15.6667M21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18Z',
  d2: 'M11.5 21.9989C11.3349 21.9996 11.1683 22 11 22C9.4153 22 7.97627 21.966 6.55966 21.9009C4.87613 21.8235 3.49269 20.515 3.26781 18.8447C3.12105 17.7547 3 16.6376 3 15.5C3 14.3624 3.12105 13.2453 3.26781 12.1553C3.49269 10.485 4.87613 9.17649 6.55966 9.09909C7.97627 9.03397 9.4153 9 11 9C12.5847 9 14.0237 9.03397 15.4403 9.09909C16.8963 9.16603 18.0482 10.1538 18.5 11.5',
  d3: 'M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9',
  d4: 'M6.55966 21.9009C4.87613 21.8235 3.49269 20.515 3.26781 18.8447C3.12104 17.7547 3 16.6376 3 15.5C3 14.3624 3.12104 13.2453 3.26781 12.1553C3.49269 10.485 4.87613 9.17649 6.55966 9.09909C7.97627 9.03397 9.4153 9 11 9C12.5847 9 14.0237 9.03397 15.4403 9.09909C17.1239 9.17649 18.5073 10.485 18.7322 12.1553C18.8365 12.9303 18.9279 13.719 18.972 14.5191C18.39 14.1887 17.717 14 17 14C14.7909 14 13 15.7909 13 18C13 19.8288 14.2273 21.371 15.9032 21.8478C15.752 21.8757 15.5975 21.8937 15.4403 21.9009C14.0237 21.966 12.5847 22 11 22C9.4153 22 7.97627 21.966 6.55966 21.9009Z',
  d5: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM17.7513 16.6641C17.7513 16.2498 17.4155 15.9141 17.0013 15.9141C16.5871 15.9141 16.2513 16.2498 16.2513 16.6641V17.2474H15.668C15.2538 17.2474 14.918 17.5832 14.918 17.9974C14.918 18.4116 15.2538 18.7474 15.668 18.7474H16.2513V19.3307C16.2513 19.7449 16.5871 20.0807 17.0013 20.0807C17.4155 20.0807 17.7513 19.7449 17.7513 19.3307V18.7474H18.3346C18.7488 18.7474 19.0846 18.4116 19.0846 17.9974C19.0846 17.5832 18.7488 17.2474 18.3346 17.2474H17.7513V16.6641Z',
  d6: 'M6.52522 8.34988C7.95364 8.28422 9.40416 8.25 11 8.25C12.5958 8.25 14.0464 8.28422 15.4748 8.34989C17.5328 8.4445 19.2039 10.0382 19.4755 12.0552C19.4883 12.1504 19.3918 12.2232 19.3025 12.1878C18.5899 11.9053 17.8131 11.75 17 11.75C13.5482 11.75 10.75 14.5482 10.75 18C10.75 19.3277 11.164 20.5588 11.87 21.571C12.2667 22.1399 12.4651 22.4243 12.3813 22.5854C12.2976 22.7464 11.9816 22.7474 11.3495 22.7494C11.2337 22.7498 11.1173 22.75 11 22.75C9.40416 22.75 7.95364 22.7158 6.52522 22.6501C4.46716 22.5555 2.79609 20.9618 2.52452 18.9448C2.37636 17.8444 2.25 16.6882 2.25 15.5C2.25 14.3118 2.37636 13.1556 2.52452 12.0552C2.79609 10.0382 4.46716 8.4445 6.52522 8.34988Z',
  d7: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25C7.5 9.80228 7.05228 10.25 6.5 10.25C5.94772 10.25 5.5 9.80228 5.5 9.25V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25C16.5 9.80228 16.0523 10.25 15.5 10.25C14.9477 10.25 14.5 9.80228 14.5 9.25V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d8: 'M7.5 6.75C7.5 4.817 9.067 3.25 11 3.25C12.933 3.25 14.5 4.817 14.5 6.75V8.31016C14.827 8.32177 15.1515 8.33502 15.4748 8.34988C15.8298 8.3662 16.1732 8.42712 16.5 8.52712V6.75C16.5 3.71243 14.0376 1.25 11 1.25C7.96243 1.25 5.5 3.71243 5.5 6.75V8.52712C5.82676 8.42712 6.17023 8.3662 6.52522 8.34988C6.84854 8.33502 7.17299 8.32177 7.5 8.31016V6.75Z',
  d9: 'M16.9833 16V18M16.9833 18V20M16.9833 18H18.9809M16.9833 18H14.9857M20.9785 18C20.9785 20.2091 19.1897 22 16.9833 22C14.7768 22 12.988 20.2091 12.988 18C12.988 15.7909 14.7768 14 16.9833 14C19.1897 14 20.9785 15.7909 20.9785 18Z',
  d10: 'M15.5073 9.00586V6.52986C15.5073 3.96411 13.5592 1.99805 11.1218 1.99805C8.68442 1.99805 6.54467 3.96411 6.54467 6.52986L6.42485 9.00586M18.9999 12.0072V9.00586H2.98145L2.98265 21.9997H11.0034',
  d11: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM16.25 16V17.25H15V18.75H16.25V20H17.75V18.75H19V17.25H17.75V16H16.25Z',
  d12: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25H5.5V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25H14.5V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d13: 'M19.75 8.25H2.25V22.75H12.9378C11.5987 21.6037 10.75 19.901 10.75 18C10.75 14.5482 13.5482 11.75 17 11.75C17.9868 11.75 18.9201 11.9787 19.75 12.3859V8.25Z',
};

export const IconSquareLockAdd02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-add-02-stroke-rounded IconSquareLockAdd02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockAdd02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-add-02-duotone-rounded IconSquareLockAdd02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockAdd02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-add-02-twotone-rounded IconSquareLockAdd02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
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

export const IconSquareLockAdd02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-add-02-solid-rounded IconSquareLockAdd02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSquareLockAdd02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-add-02-bulk-rounded IconSquareLockAdd02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockAdd02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-add-02-stroke-sharp IconSquareLockAdd02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockAdd02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-add-02-solid-sharp IconSquareLockAdd02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareLockAdd02: TheIconSelfPack = {
  name: 'SquareLockAdd02',
  StrokeRounded: IconSquareLockAdd02StrokeRounded,
  DuotoneRounded: IconSquareLockAdd02DuotoneRounded,
  TwotoneRounded: IconSquareLockAdd02TwotoneRounded,
  SolidRounded: IconSquareLockAdd02SolidRounded,
  BulkRounded: IconSquareLockAdd02BulkRounded,
  StrokeSharp: IconSquareLockAdd02StrokeSharp,
  SolidSharp: IconSquareLockAdd02SolidSharp,
};
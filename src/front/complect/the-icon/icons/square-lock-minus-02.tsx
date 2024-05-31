import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.3333 18H15.6667M21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18Z',
  d2: 'M11.5 21.9989C11.3349 21.9996 11.1683 22 11 22C9.4153 22 7.97627 21.966 6.55966 21.9009C4.87613 21.8235 3.49269 20.515 3.26781 18.8447C3.12105 17.7547 3 16.6376 3 15.5C3 14.3624 3.12105 13.2453 3.26781 12.1553C3.49269 10.485 4.87613 9.17649 6.55966 9.09909C7.97627 9.03397 9.4153 9 11 9C12.5847 9 14.0237 9.03397 15.4403 9.09909C16.8963 9.16603 18.0482 10.1538 18.5 11.5',
  d3: 'M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9',
  d4: 'M6.55966 21.9009C4.87613 21.8235 3.49269 20.515 3.26781 18.8447C3.12104 17.7547 3 16.6376 3 15.5C3 14.3624 3.12104 13.2453 3.26781 12.1553C3.49269 10.485 4.87613 9.17649 6.55966 9.09909C7.97627 9.03397 9.4153 9 11 9C12.5847 9 14.0237 9.03397 15.4403 9.09909C17.1239 9.17649 18.5073 10.485 18.7322 12.1553C18.8365 12.9303 18.9279 13.719 18.972 14.5191C18.39 14.1887 17.717 14 17 14C14.7909 14 13 15.7909 13 18C13 19.8288 14.2273 21.371 15.9032 21.8478C15.752 21.8757 15.5975 21.8937 15.4403 21.9009C14.0237 21.966 12.5847 22 11 22C9.4153 22 7.97627 21.966 6.55966 21.9009Z',
  d5: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM15.668 17.25C15.2538 17.25 14.918 17.5858 14.918 18C14.918 18.4142 15.2538 18.75 15.668 18.75H18.3346C18.7488 18.75 19.0846 18.4142 19.0846 18C19.0846 17.5858 18.7488 17.25 18.3346 17.25H15.668Z',
  d6: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25C7.5 9.80228 7.05228 10.25 6.5 10.25C5.94772 10.25 5.5 9.80228 5.5 9.25V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25C16.5 9.80228 16.0523 10.25 15.5 10.25C14.9477 10.25 14.5 9.80228 14.5 9.25V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d7: 'M6.52522 8.34988C7.95364 8.28422 9.40416 8.25 11 8.25C12.5958 8.25 14.0464 8.28422 15.4748 8.34989C17.5328 8.4445 19.2039 10.0382 19.4755 12.0552C19.4883 12.1504 19.3918 12.2232 19.3025 12.1878C18.5899 11.9053 17.8131 11.75 17 11.75C13.5482 11.75 10.75 14.5482 10.75 18C10.75 19.3277 11.164 20.5588 11.87 21.571C12.2667 22.1399 12.4651 22.4243 12.3813 22.5854C12.2976 22.7464 11.9816 22.7474 11.3495 22.7494C11.2337 22.7498 11.1173 22.75 11 22.75C9.40416 22.75 7.95364 22.7158 6.52522 22.6501C4.46716 22.5555 2.79609 20.9618 2.52452 18.9448C2.37636 17.8444 2.25 16.6882 2.25 15.5C2.25 14.3118 2.37636 13.1556 2.52452 12.0552C2.79609 10.0382 4.46716 8.4445 6.52522 8.34988Z',
  d8: 'M7.5 6.75C7.5 4.817 9.067 3.25 11 3.25C12.933 3.25 14.5 4.817 14.5 6.75V8.31016C14.827 8.32177 15.1515 8.33502 15.4748 8.34988C15.8298 8.3662 16.1732 8.42712 16.5 8.52712V6.75C16.5 3.71243 14.0376 1.25 11 1.25C7.96243 1.25 5.5 3.71243 5.5 6.75V8.52712C5.82676 8.42712 6.17023 8.3662 6.52522 8.34988C6.84854 8.33502 7.17299 8.32177 7.5 8.31016V6.75Z',
  d9: 'M18.9976 17.9995H14.9976M20.9976 17.9995C20.9976 20.2086 19.2067 21.9995 16.9976 21.9995C14.7885 21.9995 12.9976 20.2086 12.9976 17.9995C12.9976 15.7904 14.7885 13.9995 16.9976 13.9995C19.2067 13.9995 20.9976 15.7904 20.9976 17.9995Z',
  d10: 'M18.9929 12.0262V9.02267H15.4909M11.0013 21.9985H3.00244V9.02267H6.47243M15.4909 9.02267V6.32196C15.3136 3.2232 12.825 2.0973 11.2075 2.00605C9.33344 1.90031 6.60368 3.3016 6.51363 6.30169L6.47243 9.02267M15.4909 9.02267H6.47243',
  d11: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM19 17.25H15V18.75H19V17.25Z',
  d12: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25H5.5V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25H14.5V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d13: 'M19.75 8.25H2.25V22.75H12.9378C11.5987 21.6037 10.75 19.901 10.75 18C10.75 14.5482 13.5482 11.75 17 11.75C17.9868 11.75 18.9201 11.9787 19.75 12.3859V8.25Z',
} as const;

export const IconSquareLockMinus02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-02-stroke-rounded IconSquareLockMinus02StrokeRounded"
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

export const IconSquareLockMinus02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-02-duotone-rounded IconSquareLockMinus02DuotoneRounded"
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

export const IconSquareLockMinus02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-02-twotone-rounded IconSquareLockMinus02TwotoneRounded"
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

export const IconSquareLockMinus02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-02-solid-rounded IconSquareLockMinus02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockMinus02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-02-bulk-rounded IconSquareLockMinus02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockMinus02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-02-stroke-sharp IconSquareLockMinus02StrokeSharp"
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

export const IconSquareLockMinus02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-02-solid-sharp IconSquareLockMinus02SolidSharp"
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

export const iconPackOfSquareLockMinus02: TheIconSelfPack = {
  name: 'SquareLockMinus02',
  StrokeRounded: IconSquareLockMinus02StrokeRounded,
  DuotoneRounded: IconSquareLockMinus02DuotoneRounded,
  TwotoneRounded: IconSquareLockMinus02TwotoneRounded,
  SolidRounded: IconSquareLockMinus02SolidRounded,
  BulkRounded: IconSquareLockMinus02BulkRounded,
  StrokeSharp: IconSquareLockMinus02StrokeSharp,
  SolidSharp: IconSquareLockMinus02SolidSharp,
};
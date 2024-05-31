import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 17L21 17',
  d2: 'M11 22C9.38582 22 8.06885 21.966 6.62588 21.9009C4.91103 21.8235 3.50186 20.515 3.27279 18.8447C3.1233 17.7547 3 16.6376 3 15.5C3 14.3624 3.1233 13.2453 3.27279 12.1553C3.50186 10.485 4.91103 9.17649 6.62588 9.09909C8.06885 9.03397 9.53465 9 11.1488 9C12.763 9 14.2288 9.03397 15.6718 9.09909C17.3331 9.17407 18.7076 10.4046 19 12',
  d3: 'M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9',
  d4: 'M3.26781 18.8447C3.49269 20.515 4.87613 21.8235 6.55966 21.9009C7.97627 21.966 9.4153 22 11 22C12.5847 22 14.0237 21.966 15.4403 21.9009C17.1239 21.8235 18.5073 20.515 18.7322 18.8447C18.879 17.7547 19 16.6376 19 15.5C19 14.3624 18.879 13.2453 18.7322 12.1553C18.5073 10.485 17.1239 9.17649 15.4403 9.09909C14.0237 9.03397 12.5847 9 11 9C9.4153 9 7.97627 9.03397 6.55966 9.09909C4.87613 9.17649 3.49269 10.485 3.26781 12.1553C3.12104 13.2453 3 14.3624 3 15.5C3 16.6376 3.12104 17.7547 3.26781 18.8447Z',
  d5: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25C7.5 9.80228 7.05228 10.25 6.5 10.25C5.94772 10.25 5.5 9.80228 5.5 9.25V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25C16.5 9.80228 16.0523 10.25 15.5 10.25C14.9477 10.25 14.5 9.80228 14.5 9.25V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d6: 'M11 8.25C9.40416 8.25 7.95364 8.28422 6.52522 8.34988C4.46716 8.4445 2.79609 10.0382 2.52452 12.0552C2.37636 13.1556 2.25 14.3118 2.25 15.5C2.25 16.6882 2.37636 17.8444 2.52452 18.9448C2.79609 20.9618 4.46716 22.5555 6.52522 22.6501C7.95364 22.7158 9.40416 22.75 11 22.75C12.5958 22.75 14.0464 22.7158 15.4748 22.6501C17.0679 22.5769 18.4291 21.6054 19.0888 20.2347C19.2344 19.9321 19.3073 19.7807 19.2191 19.6404C19.1308 19.5 18.9465 19.5 18.5778 19.5H12.75C11.3693 19.5 10.25 18.3807 10.25 17C10.25 15.6193 11.3693 14.5 12.75 14.5H19.0887C19.3873 14.5 19.5365 14.5 19.6257 14.4033C19.7148 14.3065 19.7028 14.1604 19.6788 13.8682C19.628 13.2503 19.5549 12.6447 19.4755 12.0552C19.2039 10.0382 17.5328 8.4445 15.4748 8.34989C14.0464 8.28422 12.5958 8.25 11 8.25Z',
  d7: 'M11.75 17C11.75 16.4477 12.1977 16 12.75 16L20.75 16C21.3023 16 21.75 16.4477 21.75 17C21.75 17.5523 21.3023 18 20.75 18L12.75 18C12.1977 18 11.75 17.5523 11.75 17Z',
  d8: 'M7.5 6.75C7.5 4.817 9.067 3.25 11 3.25C12.933 3.25 14.5 4.817 14.5 6.75V8.31016C14.827 8.32177 15.1515 8.33502 15.4748 8.34988C15.8298 8.3662 16.1732 8.42712 16.5 8.52712V6.75C16.5 3.71243 14.0376 1.25 11 1.25C7.96243 1.25 5.5 3.71243 5.5 6.75V8.52712C5.82676 8.42712 6.17023 8.3662 6.52522 8.34988C6.84854 8.33502 7.17299 8.32177 7.5 8.31016V6.75Z',
  d9: 'M12.9976 19.0044H20.9976',
  d10: 'M18.9929 15.0327V9.02315H15.4909M11.0013 21.999H3.00244V9.02315H6.47243M15.4909 9.02315V6.32244C15.3136 3.22369 12.825 2.09779 11.2075 2.00654C9.33344 1.9008 6.60368 3.30209 6.51363 6.30218L6.47243 9.02315M15.4909 9.02315H6.47243',
  d11: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25H5.5V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25H14.5V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d12: 'M13.75 19.75V17.75H21.75V19.75H13.75Z',
  d13: 'M19.75 8.25H2.25V22.75H19.75V21.25H12.25V16.25H19.75V8.25Z',
} as const;

export const IconSquareLockMinus01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-01-stroke-rounded IconSquareLockMinus01StrokeRounded"
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

export const IconSquareLockMinus01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-01-duotone-rounded IconSquareLockMinus01DuotoneRounded"
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

export const IconSquareLockMinus01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-01-twotone-rounded IconSquareLockMinus01TwotoneRounded"
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

export const IconSquareLockMinus01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-01-solid-rounded IconSquareLockMinus01SolidRounded"
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

export const IconSquareLockMinus01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-01-bulk-rounded IconSquareLockMinus01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSquareLockMinus01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-01-stroke-sharp IconSquareLockMinus01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockMinus01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-minus-01-solid-sharp IconSquareLockMinus01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfSquareLockMinus01: TheIconSelfPack = {
  name: 'SquareLockMinus01',
  StrokeRounded: IconSquareLockMinus01StrokeRounded,
  DuotoneRounded: IconSquareLockMinus01DuotoneRounded,
  TwotoneRounded: IconSquareLockMinus01TwotoneRounded,
  SolidRounded: IconSquareLockMinus01SolidRounded,
  BulkRounded: IconSquareLockMinus01BulkRounded,
  StrokeSharp: IconSquareLockMinus01StrokeSharp,
  SolidSharp: IconSquareLockMinus01SolidSharp,
};
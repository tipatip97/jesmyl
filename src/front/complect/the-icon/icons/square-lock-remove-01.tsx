import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 22L17.5 18.5M17.5 18.5L21 15M17.5 18.5L14 15M17.5 18.5L21 22',
  d2: 'M11 22C9.38582 22 8.06885 21.966 6.62588 21.9009C4.91103 21.8235 3.50186 20.515 3.27279 18.8447C3.1233 17.7547 3 16.6376 3 15.5C3 14.3624 3.1233 13.2453 3.27279 12.1553C3.50186 10.485 4.91103 9.17649 6.62588 9.09909C8.06885 9.03397 9.53465 9 11.1488 9C12.763 9 14.2288 9.03397 15.6718 9.09909C17.3331 9.17407 18.7076 10.4046 19 12',
  d3: 'M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9',
  d4: 'M3.26781 18.8447C3.49269 20.515 4.87613 21.8235 6.55966 21.9009C7.97627 21.966 9.4153 22 11 22C12.5847 22 14.0237 21.966 15.4403 21.9009C17.1239 21.8235 18.5073 20.515 18.7322 18.8447C18.879 17.7547 19 16.6376 19 15.5C19 14.3624 18.879 13.2453 18.7322 12.1553C18.5073 10.485 17.1239 9.17649 15.4403 9.09909C14.0237 9.03397 12.5847 9 11 9C9.4153 9 7.97627 9.03397 6.55966 9.09909C4.87613 9.17649 3.49269 10.485 3.26781 12.1553C3.12104 13.2453 3 14.3624 3 15.5C3 16.6376 3.12104 17.7547 3.26781 18.8447Z',
  d5: 'M21.4571 14.0429C21.8476 14.4335 21.8476 15.0666 21.4571 15.4571L18.664 18.25L21.4571 21.0429C21.8476 21.4334 21.8476 22.0665 21.4571 22.4571C21.0666 22.8476 20.4335 22.8476 20.0429 22.4571L17.2498 19.6642L14.4571 22.4567C14.0665 22.8472 13.4334 22.8472 13.0429 22.4566C12.6524 22.0661 12.6524 21.4329 13.0429 21.0424L15.8355 18.25L13.0429 15.4576C12.6524 15.0671 12.6524 14.4339 13.0429 14.0434C13.4334 13.6528 14.0665 13.6528 14.4571 14.0433L17.2498 16.8358L20.0429 14.0429C20.4335 13.6524 21.0666 13.6524 21.4571 14.0429Z',
  d6: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25C7.5 9.80228 7.05228 10.25 6.5 10.25C5.94772 10.25 5.5 9.80228 5.5 9.25V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25C16.5 9.80228 16.0523 10.25 15.5 10.25C14.9477 10.25 14.5 9.80228 14.5 9.25V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d7: 'M11 8.25C9.40416 8.25 7.95364 8.28422 6.52522 8.34988C4.46716 8.4445 2.79609 10.0382 2.52452 12.0552C2.37636 13.1556 2.25 14.3118 2.25 15.5C2.25 16.6882 2.37636 17.8444 2.52452 18.9448C2.79609 20.9618 4.46716 22.5555 6.52522 22.6501C7.95364 22.7158 9.40416 22.75 11 22.75C11.0255 22.75 11.0383 22.75 11.0389 22.75C11.2534 22.7492 11.3778 22.5928 11.3303 22.3835C11.3302 22.383 11.3249 22.3603 11.3144 22.3149C11.1267 21.5026 11.3493 20.6147 11.9823 19.9817L13.2898 18.6743C13.4898 18.4743 13.5898 18.3743 13.5898 18.25C13.5898 18.1257 13.4898 18.0257 13.2898 17.8257L11.9823 16.5183C11.0059 15.542 11.0059 13.9591 11.9822 12.9828C12.9585 12.0064 14.5414 12.0064 15.5177 12.9826L16.8255 14.2904C17.0255 14.4903 17.1255 14.5903 17.2498 14.5903C17.374 14.5903 17.474 14.4903 17.674 14.2904L18.9823 12.9822C19.053 12.9115 19.1269 12.8459 19.2035 12.7854C19.3784 12.6474 19.4659 12.5784 19.4957 12.5048C19.5255 12.4312 19.5135 12.3402 19.4893 12.1583C19.4847 12.1239 19.4801 12.0895 19.4755 12.0552C19.2039 10.0382 17.5328 8.4445 15.4748 8.34989C14.0464 8.28422 12.5958 8.25 11 8.25Z',
  d8: 'M11 8.25C9.40416 8.25 7.95364 8.28422 6.52522 8.34988C4.46716 8.4445 2.79609 10.0382 2.52452 12.0552C2.37636 13.1556 2.25 14.3118 2.25 15.5C2.25 16.6882 2.37636 17.8444 2.52452 18.9448C2.79609 20.9618 4.46716 22.5555 6.52522 22.6501C7.95364 22.7158 9.40416 22.75 11 22.75C11.0213 22.75 11.0342 22.75 11.0378 22.75C11.0383 22.75 11.0386 22.75 11.0391 22.75C11.0395 22.75 11.0397 22.75 11.04 22.75C11.2535 22.7487 11.3773 22.5929 11.3305 22.3846C11.3305 22.3843 11.3304 22.3842 11.3303 22.3838C11.3302 22.3833 11.3302 22.383 11.33 22.3825C11.3289 22.3774 11.3236 22.3547 11.3144 22.3149C11.1267 21.5026 11.3493 20.6147 11.9823 19.9817L13.2898 18.6743C13.4898 18.4743 13.5898 18.3743 13.5898 18.25C13.5898 18.1257 13.4898 18.0257 13.2898 17.8257L11.9823 16.5183C11.0059 15.542 11.0059 13.9591 11.9822 12.9828C12.9585 12.0064 14.5414 12.0064 15.5177 12.9826L16.8255 14.2904C17.0255 14.4903 17.1255 14.5903 17.2498 14.5903C17.374 14.5903 17.474 14.4903 17.674 14.2904L18.9823 12.9822C19.053 12.9115 19.1269 12.8459 19.2035 12.7854C19.3784 12.6474 19.4659 12.5784 19.4957 12.5048C19.5255 12.4312 19.5135 12.3402 19.4893 12.1583C19.4847 12.1239 19.4801 12.0895 19.4755 12.0552C19.2039 10.0382 17.5328 8.4445 15.4748 8.34989C14.0464 8.28422 12.5958 8.25 11 8.25Z',
  d9: 'M7.5 6.75C7.5 4.817 9.067 3.25 11 3.25C12.933 3.25 14.5 4.817 14.5 6.75V8.31016C14.827 8.32177 15.1515 8.33502 15.4748 8.34988C15.8298 8.3662 16.1732 8.42712 16.5 8.52712V6.75C16.5 3.71243 14.0376 1.25 11 1.25C7.96243 1.25 5.5 3.71243 5.5 6.75V8.52712C5.82676 8.42712 6.17023 8.3662 6.52522 8.34988C6.84854 8.33502 7.17299 8.32177 7.5 8.31016V6.75Z',
  d10: 'M13.9976 21.999L17.4976 18.499M17.4976 18.499L20.9976 14.999M17.4976 18.499L13.9976 14.999M17.4976 18.499L20.9976 21.999',
  d11: 'M19.0024 12.0257V9.02218H15.4984M11.0061 21.998H3.00244V9.02218H6.4745M15.4984 9.02218V6.32147C15.3209 3.22271 12.8308 2.09681 11.2124 2.00556C9.33722 1.89983 6.60583 3.30111 6.51573 6.3012L6.4745 9.02218M15.4984 9.02218H6.4745',
  d12: 'M16.6288 18.543L13.8359 15.7502L15.2501 14.3359L18.043 17.1288L20.8359 14.3359L22.2501 15.7502L19.4572 18.543L22.2501 21.3359L20.8359 22.7502L18.043 19.9573L15.2501 22.7502L13.8359 21.3359L16.6288 18.543Z',
  d13: 'M10.4999 3.25C8.56694 3.25 6.99994 4.817 6.99994 6.75V9.25H4.99994V6.75C4.99994 3.71243 7.46237 1.25 10.4999 1.25C13.5375 1.25 15.9999 3.71243 15.9999 6.75V9.25H13.9999V6.75C13.9999 4.817 12.4329 3.25 10.4999 3.25Z',
  d14: 'M19.2499 8.25H1.74994V22.75H13.1286L11.7148 21.3362L14.5077 18.5433L11.7148 15.7504L15.2503 12.2148L18.0432 15.0077L19.2499 13.801V8.25Z',
};

export const IconSquareLockRemove01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-01-stroke-rounded IconSquareLockRemove01StrokeRounded"
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

export const IconSquareLockRemove01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-01-duotone-rounded IconSquareLockRemove01DuotoneRounded"
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

export const IconSquareLockRemove01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-01-twotone-rounded IconSquareLockRemove01TwotoneRounded"
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

export const IconSquareLockRemove01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-01-solid-rounded IconSquareLockRemove01SolidRounded"
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

export const IconSquareLockRemove01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-01-bulk-rounded IconSquareLockRemove01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockRemove01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-01-stroke-sharp IconSquareLockRemove01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockRemove01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-remove-01-solid-sharp IconSquareLockRemove01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareLockRemove01: TheIconSelfPack = {
  name: 'SquareLockRemove01',
  StrokeRounded: IconSquareLockRemove01StrokeRounded,
  DuotoneRounded: IconSquareLockRemove01DuotoneRounded,
  TwotoneRounded: IconSquareLockRemove01TwotoneRounded,
  SolidRounded: IconSquareLockRemove01SolidRounded,
  BulkRounded: IconSquareLockRemove01BulkRounded,
  StrokeSharp: IconSquareLockRemove01StrokeSharp,
  SolidSharp: IconSquareLockRemove01SolidSharp,
};
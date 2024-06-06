import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 9.97873C5 11.095 6.79086 12 9 12V9.97873C9 8.98454 9 8.48745 8.60252 8.18419C8.20504 7.88092 7.811 7.99435 7.02292 8.22121C5.81469 8.56902 5 9.2258 5 9.97873Z',
  d2: 'M16 8.5C16 10.433 12.866 12 9 12C5.13401 12 2 10.433 2 8.5C2 6.567 5.13401 5 9 5C12.866 5 16 6.567 16 8.5Z',
  d3: 'M2 9V15.6667C2 17.5076 5.13401 19 9 19H20C20.9428 19 21.4142 19 21.7071 18.7071C22 18.4142 22 17.9428 22 17V14C22 13.0572 22 12.5858 21.7071 12.2929C21.4142 12 20.9428 12 20 12H9',
  d4: 'M18 19V17M14 19V17M10 19V17M6 18.5V16.5',
  d5: 'M2 15.6666C2 17.5076 5.13401 19 9 19H20C20.9428 19 21.4142 19 21.7071 18.7071C22 18.4142 22 17.9428 22 17V14C22 13.0572 22 12.5858 21.7071 12.2929C21.4142 12 20.9428 12 20 12H9C3.9977 11.7657 2.29761 9.90042 2.04857 8.99805L2 15.6666Z',
  d6: 'M2 15.6686C2 17.5095 5.13401 19.0019 9 19.0019H20C20.9428 19.0019 21.4142 19.0019 21.7071 18.709C22 18.4161 22 17.9447 22 17.0019V14.0019C22 13.0591 22 12.5877 21.7071 12.2948C21.4142 12.0019 20.9428 12.0019 20 12.0019H9C3.9977 11.7676 2.29761 9.90237 2.04857 9L2 15.6686Z',
  d7: 'M4.63817 7.00736C3.51399 7.55534 3.1875 8.13764 3.1875 8.5C3.1875 8.86235 3.51399 9.44466 4.63817 9.99264C5.70441 10.5124 7.24519 10.8611 9 10.8611C10.7548 10.8611 12.2956 10.5124 13.3618 9.99264C14.486 9.44466 14.8125 8.86235 14.8125 8.5C14.8125 8.13764 14.486 7.55534 13.3618 7.00736C12.2956 6.48761 10.7548 6.13889 9 6.13889C7.24519 6.13889 5.70441 6.48761 4.63817 7.00736ZM3.77169 5.31788C5.15979 4.64125 7.00963 4.25 9 4.25C10.9904 4.25 12.8402 4.64125 14.2283 5.31788C15.5585 5.96627 16.75 7.03675 16.75 8.5C16.75 9.96325 15.5585 11.0337 14.2283 11.6821C12.8402 12.3588 10.9904 12.75 9 12.75C7.00963 12.75 5.15979 12.3588 3.77169 11.6821C2.44155 11.0337 1.25 9.96325 1.25 8.5C1.25 7.03675 2.44155 5.96627 3.77169 5.31788Z',
  d8: 'M7.71925 9.1275C7.59933 9.15694 7.4602 9.19683 7.27452 9.25028C6.80476 9.38551 6.47025 9.56552 6.27243 9.73383C6.17601 9.81586 6.12667 9.88257 6.10344 9.92475C6.08297 9.96189 6.08321 9.97818 6.08324 9.9803C6.08324 9.98037 6.08324 9.98042 6.08324 9.98046C6.08324 9.98314 6.08331 9.99153 6.09071 10.0098C6.09879 10.0298 6.11725 10.065 6.15764 10.1133C6.24192 10.214 6.3991 10.3437 6.65395 10.4725C6.98025 10.6374 7.4123 10.7729 7.9166 10.8493V9.98046C7.9166 9.50588 7.91358 9.25823 7.88702 9.09197C7.84656 9.09854 7.79235 9.10955 7.71925 9.1275ZM7.80952 7.25614C8.2284 7.22421 8.64037 7.31322 9.02496 7.60665C9.44449 7.92674 9.61919 8.35017 9.69093 8.76378C9.75026 9.10586 9.75012 9.51758 9.74998 9.92126C9.74997 9.94101 9.74996 9.96075 9.74996 9.98046V11.8333C9.74996 12.3396 9.33955 12.75 8.83328 12.75C7.70794 12.75 6.64376 12.5215 5.82709 12.1088C5.06253 11.7224 4.24988 11.0213 4.24988 9.98046C4.24988 9.27878 4.63249 8.72197 5.08439 8.33748C5.53686 7.95251 6.12954 7.67207 6.76735 7.48847C6.7856 7.48322 6.80401 7.4779 6.82256 7.47255C7.13435 7.38254 7.4871 7.28072 7.80952 7.25614Z',
  d9: 'M2.77154 8.80053C2.67197 8.43975 2.32166 8.20759 1.9506 8.25648C1.57954 8.30537 1.30132 8.62034 1.29859 8.99459L1.25 15.6632V15.6686C1.25 17.0456 2.39567 18.0685 3.7278 18.7028C4.04365 18.8532 4.38419 18.9895 4.74562 19.1103C4.97104 19.1856 5.08376 19.2233 5.16688 19.1634C5.25 19.1036 5.25 18.9815 5.25 18.7374V16.5C5.25 16.0858 5.58579 15.75 6 15.75C6.41421 15.75 6.75 16.0858 6.75 16.5V19.2416C6.75 19.4064 6.75 19.4888 6.7999 19.5455C6.84981 19.6022 6.92998 19.6124 7.09031 19.6328C7.70316 19.7109 8.34342 19.752 9 19.752C9.04647 19.752 9.0697 19.752 9.08902 19.7481C9.16836 19.7324 9.23038 19.6703 9.24616 19.591C9.25 19.5717 9.25 19.5484 9.25 19.502V17C9.25 16.5858 9.58579 16.25 10 16.25C10.4142 16.25 10.75 16.5858 10.75 17V19.352C10.75 19.5405 10.75 19.6348 10.8086 19.6934C10.8672 19.752 10.9614 19.752 11.15 19.752L12.85 19.752C13.0386 19.752 13.1328 19.752 13.1914 19.6934C13.25 19.6348 13.25 19.5405 13.25 19.352V17C13.25 16.5858 13.5858 16.25 14 16.25C14.4142 16.25 14.75 16.5858 14.75 17V19.352C14.75 19.5405 14.75 19.6348 14.8086 19.6934C14.8672 19.752 14.9614 19.752 15.15 19.752L16.85 19.752C17.0386 19.752 17.1328 19.752 17.1914 19.6934C17.25 19.6348 17.25 19.5405 17.25 19.352V17C17.25 16.5858 17.5858 16.25 18 16.25C18.4142 16.25 18.75 16.5858 18.75 17V19.352C18.75 19.5405 18.75 19.6348 18.8086 19.6934C18.8672 19.752 18.9614 19.752 19.15 19.752H20.0447C20.4776 19.752 20.8744 19.7521 21.1972 19.7087C21.5527 19.6609 21.9284 19.5484 22.2374 19.2394C22.5465 18.9304 22.6589 18.5547 22.7067 18.1992C22.7501 17.8764 22.7501 17.4795 22.75 17.0467V13.9572C22.7501 13.5244 22.7501 13.1276 22.7067 12.8048C22.6589 12.4493 22.5465 12.0736 22.2374 11.7645C21.9284 11.4555 21.5527 11.3431 21.1972 11.2953C20.8744 11.2519 20.4776 11.2519 20.0448 11.252L9.01772 11.252C6.61174 11.1372 5.06242 10.6339 4.10955 10.0979C3.13641 9.55042 2.82568 8.9967 2.77154 8.80053Z',
  d10: 'M3.1875 8.5C3.1875 8.13764 3.51399 7.55534 4.63817 7.00736C5.70441 6.48761 7.24519 6.13889 9 6.13889C10.7548 6.13889 12.2956 6.48761 13.3618 7.00736C14.486 7.55534 14.8125 8.13764 14.8125 8.5C14.8125 8.86235 14.486 9.44466 13.3618 9.99264C12.4504 10.4369 11.1923 10.7562 9.75008 10.8396V9.98046L9.7501 9.92126C9.75024 9.51758 9.75039 9.10586 9.69105 8.76378C9.61931 8.35016 9.44461 7.92674 9.02508 7.60665C8.64049 7.31322 8.22852 7.22421 7.80964 7.25614C7.48722 7.28072 7.13447 7.38254 6.82268 7.47255L6.76747 7.48847C6.12966 7.67207 5.53699 7.95251 5.08451 8.33748C4.67433 8.68647 4.32123 9.17745 4.25953 9.78986C3.43879 9.30508 3.1875 8.8179 3.1875 8.5ZM8.36131 12.7365C6.61598 12.6623 5.01008 12.2858 3.77169 11.6821C2.44155 11.0337 1.25 9.96325 1.25 8.5C1.25 7.03675 2.44155 5.96627 3.77169 5.31788C5.15979 4.64125 7.00963 4.25 9 4.25C10.9904 4.25 12.8402 4.64125 14.2283 5.31788C15.5585 5.96627 16.75 7.03675 16.75 8.5C16.75 9.96325 15.5585 11.0337 14.2283 11.6821C12.8402 12.3588 10.9904 12.75 9 12.75C8.95544 12.75 8.91094 12.7498 8.86652 12.7494C8.85553 12.7498 8.84449 12.75 8.8334 12.75C8.67465 12.75 8.51711 12.7455 8.36131 12.7365ZM7.53654 10.7778C7.1937 10.7 6.89505 10.5942 6.65407 10.4725C6.39923 10.3437 6.24204 10.214 6.15777 10.1133C6.11737 10.065 6.09891 10.0298 6.09083 10.0098C6.08343 9.99153 6.08336 9.98314 6.08336 9.98046L6.08336 9.9803C6.08333 9.97818 6.0831 9.96189 6.10356 9.92475C6.12679 9.88257 6.17614 9.81586 6.27255 9.73383C6.47037 9.56552 6.80488 9.38551 7.27464 9.25028C7.46032 9.19683 7.59945 9.15694 7.71937 9.1275C7.79248 9.10955 7.84668 9.09854 7.88714 9.09197C7.9137 9.25823 7.91672 9.50588 7.91672 9.98046V10.8159C7.78833 10.8051 7.66156 10.7923 7.53654 10.7778Z',
  d11: 'M5 10C5 11.1046 6.79086 12 9 12V8C6.79086 8 5 8.89543 5 10Z',
  d12: 'M2 9V15.6667C2 17.5076 5.13401 19 9 19H22V12H9',
  d13: 'M18 19V16M14 19V16M10 19V16M6 18.5V15.5',
  d14: 'M14.9758 11.25C15.9935 10.5823 16.75 9.65439 16.75 8.5C16.75 7.09638 15.6316 6.02755 14.2852 5.35431C12.8938 4.65864 11.0242 4.25 9 4.25C6.97582 4.25 5.10618 4.65864 3.71484 5.35431C2.36836 6.02755 1.25 7.09638 1.25 8.5V15.6667C1.25 17.0436 2.39567 18.0665 3.7278 18.7008C4.18693 18.9195 4.69821 19.1082 5.25 19.263V15.5H6.75V19.5832C7.46466 19.6922 8.22084 19.75 9 19.75H9.25V16H10.75V19.75H13.25V16H14.75V19.75H17.25V16H18.75V19.75H22.75V11.25H14.9758ZM2.75 8.5C2.75 7.97062 3.19864 7.28946 4.38566 6.69595C5.52782 6.12487 7.15819 5.75 9 5.75C10.8418 5.75 12.4722 6.12487 13.6143 6.69595C14.8014 7.28946 15.25 7.97062 15.25 8.5C15.25 9.02938 14.8014 9.71054 13.6143 10.3041C12.6299 10.7963 11.2827 11.1428 9.75 11.229V7.25H9C7.80424 7.25 6.68461 7.49074 5.83616 7.91497C5.03258 8.31676 4.25 9.01059 4.25 10C4.25 10.083 4.2555 10.1638 4.26606 10.2427C3.16838 9.66397 2.75 9.01121 2.75 8.5ZM5.75 10C5.75 9.88484 5.86285 9.57867 6.50698 9.25661C6.95276 9.03372 7.55409 8.8621 8.25 8.78881V11.2112C7.55409 11.1379 6.95276 10.9663 6.50698 10.7434C5.86285 10.4213 5.75 10.1152 5.75 10Z',
};

export const IconTapeMeasureStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tape-measure-stroke-rounded IconTapeMeasureStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTapeMeasureDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tape-measure-duotone-rounded IconTapeMeasureDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTapeMeasureTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tape-measure-twotone-rounded IconTapeMeasureTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTapeMeasureSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tape-measure-solid-rounded IconTapeMeasureSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTapeMeasureBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tape-measure-bulk-rounded IconTapeMeasureBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTapeMeasureStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tape-measure-stroke-sharp IconTapeMeasureStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTapeMeasureSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tape-measure-solid-sharp IconTapeMeasureSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTapeMeasure: TheIconSelfPack = {
  name: 'TapeMeasure',
  StrokeRounded: IconTapeMeasureStrokeRounded,
  DuotoneRounded: IconTapeMeasureDuotoneRounded,
  TwotoneRounded: IconTapeMeasureTwotoneRounded,
  SolidRounded: IconTapeMeasureSolidRounded,
  BulkRounded: IconTapeMeasureBulkRounded,
  StrokeSharp: IconTapeMeasureStrokeSharp,
  SolidSharp: IconTapeMeasureSolidSharp,
};
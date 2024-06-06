import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.1 18H20.5C20.9659 18 21.1989 18 21.3827 17.9239C21.6277 17.8224 21.8224 17.6277 21.9239 17.3827C22 17.1989 22 16.9659 22 16.5M19.1 18V11.3955C19.1 9.32395 18.7412 8.25904 17.3783 6.71082C15.5455 4.62893 14.3713 4 11.5699 4H6.22222C4.23185 4 3.23666 4 2.61833 4.68342C2 5.36683 2 6.46678 2 8.66667V13.3333C2 15.5332 2 16.6332 2.61833 17.3166C3.23666 18 4.23185 18 6.22222 18H7M19.1 18H11',
  d2: 'M5 9.5C5 8.32149 5 7.73223 5.34171 7.36612C5.68342 7 6.23339 7 7.33333 7H9.66667C10.7666 7 11.3166 7 11.6583 7.36612C12 7.73223 12 8.32149 12 9.5C12 10.6785 12 11.2678 11.6583 11.6339C11.3166 12 10.7666 12 9.66667 12H7.33333C6.23339 12 5.68342 12 5.34171 11.6339C5 11.2678 5 10.6785 5 9.5Z',
  d3: 'M2 8.66667V13.3333C2 15.5332 2 16.6332 2.61833 17.3166C3.23666 18 4.23185 18 6.22222 18H7C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18H19.1V11.3955C19.1 9.32395 18.7412 8.25904 17.3783 6.71082C15.5455 4.62893 14.3713 4 11.5699 4H6.22222C4.23185 4 3.23666 4 2.61833 4.68342C2 5.36683 2 6.46678 2 8.66667ZM5.34171 7.36612C5 7.73223 5 8.32149 5 9.5C5 10.6785 5 11.2678 5.34171 11.6339C5.68342 12 6.23339 12 7.33333 12H9.66667C10.7666 12 11.3166 12 11.6583 11.6339C12 11.2678 12 10.6785 12 9.5C12 8.32149 12 7.73223 11.6583 7.36612C11.3166 7 10.7666 7 9.66667 7H7.33333C6.23339 7 5.68342 7 5.34171 7.36612Z',
  d4: 'M11.4449 3.62501C12.897 3.62501 14.0189 3.78664 15.036 4.27312C16.0468 4.75659 16.8791 5.52576 17.8162 6.59026C18.532 7.40337 19.0267 8.13734 19.3305 8.97672C19.6329 9.8126 19.725 10.6956 19.725 11.7705V16.5117C19.725 16.7971 19.725 16.9398 19.8139 17.0279C19.9028 17.1159 20.0455 17.1145 20.3309 17.1117L20.475 17.1103C20.6554 17.1085 20.7456 17.1077 20.803 17.0519C20.8604 16.9961 20.8638 16.9059 20.8708 16.7256L20.8746 16.6253C20.8747 16.073 21.3224 15.625 21.8746 15.625C22.4269 15.625 22.8746 16.0727 22.8746 16.625L22.8746 16.6288C22.8746 17.0568 22.8502 17.2851 22.8357 17.4086C22.8254 17.4965 22.8005 17.7017 22.7224 17.8904C22.497 18.4346 22.1181 18.7317 21.8473 18.8787C21.7571 18.9276 21.6889 18.9543 21.5865 18.9898C21.4755 19.0283 21.406 19.0479 21.307 19.0649C21.1018 19.1001 20.8518 19.1129 20.6927 19.1186C20.6048 19.1218 20.5267 19.1234 20.4705 19.1242L13.2841 19.1249C12.96 19.125 12.7979 19.125 12.7099 19.0365C12.6219 18.9481 12.6229 18.764 12.6249 18.3959C12.625 18.3889 12.625 18.382 12.625 18.375C12.625 16.3039 10.9461 14.625 8.875 14.625C6.80393 14.625 5.125 16.3039 5.125 18.375C5.125 18.3785 5.12501 18.3821 5.12502 18.3856C5.12606 18.7605 5.12658 18.9479 5.03352 19.0368C4.94046 19.1258 4.77971 19.1181 4.45819 19.1027C4.1725 19.089 3.90978 19.067 3.67052 19.0314C2.99788 18.9315 2.40476 18.7116 1.93718 18.1948C1.47931 17.6887 1.29364 17.065 1.20778 16.3592C1.12497 15.6784 1.12498 14.8156 1.125 13.7573V8.99273C1.12498 7.93441 1.12497 7.07161 1.20778 6.39081C1.29364 5.68502 1.47931 5.0613 1.93718 4.55524C2.40476 4.03844 2.99788 3.81853 3.67052 3.71858C4.30067 3.62494 5.09367 3.62497 6.04031 3.625L11.4449 3.62501ZM5.21671 7.74112C4.875 8.10723 4.875 8.69649 4.875 9.875C4.875 11.0535 4.875 11.6428 5.21671 12.0089C5.55842 12.375 6.10839 12.375 7.20833 12.375H9.54167C10.6416 12.375 11.1916 12.375 11.5333 12.0089C11.875 11.6428 11.875 11.0535 11.875 9.875C11.875 8.69649 11.875 8.10723 11.5333 7.74112C11.1916 7.375 10.6416 7.375 9.54167 7.375H7.20833C6.10839 7.375 5.55842 7.375 5.21671 7.74112Z',
  d5: 'M5.21671 7.74112C4.875 8.10723 4.875 8.69649 4.875 9.875C4.875 11.0535 4.875 11.6428 5.21671 12.0089C5.55842 12.375 6.10839 12.375 7.20833 12.375H9.54167C10.6416 12.375 11.1916 12.375 11.5333 12.0089C11.875 11.6428 11.875 11.0535 11.875 9.875C11.875 8.69649 11.875 8.10723 11.5333 7.74112C11.1916 7.375 10.6416 7.375 9.54167 7.375H7.20833C6.10839 7.375 5.55842 7.375 5.21671 7.74112Z',
  d6: 'M19 18H22V15.5M19 18V10C19 6.68629 16.3137 4 13 4H2V18H7M19 18H11',
  d7: 'M12 7H5V12H12V7Z',
  d8: 'M6.5 18.25C6.5 16.8693 7.61929 15.75 9 15.75C10.3807 15.75 11.5 16.8693 11.5 18.25C11.5 19.6307 10.3807 20.75 9 20.75C7.61929 20.75 6.5 19.6307 6.5 18.25Z',
  d9: 'M2 3.25C1.58579 3.25 1.25 3.58579 1.25 4V18C1.25 18.4142 1.58579 18.75 2 18.75H5.28304C5.26125 18.5864 5.25 18.4195 5.25 18.25C5.25 16.1789 6.92893 14.5 9 14.5C11.0711 14.5 12.75 16.1789 12.75 18.25C12.75 18.4195 12.7388 18.5864 12.717 18.75H21.75C22.3023 18.75 22.75 18.3023 22.75 17.75V15.25H20.75V16.75H19.75V10C19.75 6.27208 16.7279 3.25 13 3.25H2ZM12 7H5V12H12V7Z',
};

export const IconCaravanStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="caravan-stroke-rounded IconCaravanStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="9" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCaravanDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="caravan-duotone-rounded IconCaravanDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="9" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCaravanTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="caravan-twotone-rounded IconCaravanTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="9" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCaravanSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="caravan-solid-rounded IconCaravanSolidRounded"
    >
      <circle 
        cx="8.875" 
        cy="18.375" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCaravanBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="caravan-bulk-rounded IconCaravanBulkRounded"
    >
      <circle 
        cx="8.875" 
        cy="18.375" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCaravanStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="caravan-stroke-sharp IconCaravanStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="9" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCaravanSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="caravan-solid-sharp IconCaravanSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCaravan: TheIconSelfPack = {
  name: 'Caravan',
  StrokeRounded: IconCaravanStrokeRounded,
  DuotoneRounded: IconCaravanDuotoneRounded,
  TwotoneRounded: IconCaravanTwotoneRounded,
  SolidRounded: IconCaravanSolidRounded,
  BulkRounded: IconCaravanBulkRounded,
  StrokeSharp: IconCaravanStrokeSharp,
  SolidSharp: IconCaravanSolidSharp,
};
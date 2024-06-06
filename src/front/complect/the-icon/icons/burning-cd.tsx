import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 16.5C15 18.8456 15 20.0184 14.3237 20.8263C14.1496 21.0343 13.9465 21.2205 13.7196 21.3801C12.8382 22 11.5588 22 9 22C6.44119 22 5.16178 22 4.28042 21.3801C4.05351 21.2205 3.85041 21.0343 3.6763 20.8263C3 20.0184 3 18.8456 3 16.5L3 7.5C3 5.15442 3 3.98164 3.6763 3.17372C3.85041 2.96572 4.05351 2.77954 4.28042 2.61994C5.16179 2 6.44119 2 9 2C11.5588 2 12.8382 2 13.7196 2.61994C13.9465 2.77954 14.1496 2.96572 14.3237 3.17372C15 3.98164 15 5.15443 15 7.5L15 16.5Z',
  d2: 'M12 13.5L12 10.5',
  d3: 'M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9',
  d4: 'M15 19C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5',
  d5: 'M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9V15Z',
  d6: 'M13.375 5C13.375 4.44772 13.8227 4 14.375 4C18.7933 4 22.375 7.58172 22.375 12C22.375 16.4183 18.7933 20 14.375 20C13.8227 20 13.375 19.5523 13.375 19C13.375 18.4477 13.8227 18 14.375 18C17.6887 18 20.375 15.3137 20.375 12C20.375 8.68629 17.6887 6 14.375 6C13.8227 6 13.375 5.55228 13.375 5Z',
  d7: 'M14.375 15C16.0319 15 17.375 13.6569 17.375 12C17.375 10.3431 16.0319 9 14.375 9V15Z',
  d8: 'M11.4409 1.33147C10.6524 1.24998 9.66082 1.24999 8.41725 1.25H8.41724H8.33277H8.33276C7.08918 1.24999 6.09757 1.24998 5.30908 1.33147C4.50044 1.41503 3.81433 1.59121 3.22393 2.00649C2.94483 2.20281 2.69317 2.4331 2.4762 2.69231C2.00955 3.24978 1.80905 3.90518 1.71515 4.66869C1.62497 5.40194 1.62498 6.31988 1.625 7.45126V7.4513V16.5487V16.5487C1.62498 17.6801 1.62497 18.5981 1.71515 19.3313C1.80905 20.0948 2.00954 20.7502 2.4762 21.3077C2.69317 21.5669 2.94483 21.7972 3.22393 21.9935C3.81433 22.4088 4.50043 22.585 5.30907 22.6685C6.09756 22.75 7.08915 22.75 8.33271 22.75H8.3328H8.41728C9.66084 22.75 10.6524 22.75 11.4409 22.6685C12.2496 22.585 12.9357 22.4088 13.5261 21.9935C13.8052 21.7972 14.0568 21.5669 14.2738 21.3077C14.7405 20.7502 14.941 20.0948 15.0349 19.3313C15.125 18.5981 15.125 17.6801 15.125 16.5487L15.125 7.45132C15.125 6.31991 15.125 5.40196 15.0349 4.66869C14.941 3.90518 14.7405 3.24978 14.2738 2.69231C14.0568 2.4331 13.8052 2.20281 13.5261 2.00649C12.9357 1.59121 12.2496 1.41503 11.4409 1.33147ZM10.375 13.5C10.375 14.0523 10.8227 14.5 11.375 14.5C11.9273 14.5 12.375 14.0523 12.375 13.5V10.5C12.375 9.94771 11.9273 9.5 11.375 9.5C10.8227 9.5 10.375 9.94771 10.375 10.5V13.5Z',
  d9: 'M11.375 14.5C10.8227 14.5 10.375 14.0523 10.375 13.5L10.375 10.5C10.375 9.94772 10.8227 9.5 11.375 9.5C11.9273 9.5 12.375 9.94772 12.375 10.5L12.375 13.5C12.375 14.0523 11.9273 14.5 11.375 14.5Z',
  d10: 'M8.41725 1.25C9.66082 1.24999 10.6524 1.24998 11.4409 1.33147C12.2496 1.41503 12.9357 1.59121 13.5261 2.00649C13.8052 2.20281 14.0568 2.4331 14.2738 2.69231C14.7405 3.24978 14.941 3.90518 15.0349 4.66869C15.125 5.40196 15.125 6.31991 15.125 7.45132L15.125 16.5487C15.125 17.6801 15.125 18.5981 15.0349 19.3313C14.941 20.0948 14.7405 20.7502 14.2738 21.3077C14.0568 21.5669 13.8052 21.7972 13.5261 21.9935C12.9357 22.4088 12.2496 22.585 11.4409 22.6685C10.6524 22.75 9.66084 22.75 8.41728 22.75H8.3328H8.33271C7.08915 22.75 6.09756 22.75 5.30907 22.6685C4.50043 22.585 3.81433 22.4088 3.22393 21.9935C2.94483 21.7972 2.69317 21.5669 2.4762 21.3077C2.00954 20.7502 1.80905 20.0948 1.71515 19.3313C1.62497 18.5981 1.62498 17.6801 1.625 16.5487V16.5487V7.4513V7.45126C1.62498 6.31988 1.62497 5.40194 1.71515 4.66869C1.80905 3.90518 2.00955 3.24978 2.4762 2.69231C2.69317 2.4331 2.94483 2.20281 3.22393 2.00649C3.81433 1.59121 4.50044 1.41503 5.30908 1.33147C6.09757 1.24998 7.08918 1.24999 8.33276 1.25H8.33277H8.41724H8.41725Z',
  d11: 'M15.125 14.9047C16.4189 14.5717 17.375 13.3971 17.375 11.9992C17.375 10.6014 16.4189 9.42678 15.125 9.09375L15.125 14.9047Z',
  d12: 'M14.918 19.9831C19.0825 19.7034 22.3738 16.2367 22.3738 12.0013C22.3738 7.76592 19.0825 4.29926 14.918 4.01953C14.9687 4.22704 15.0058 4.44378 15.0337 4.67001C15.0831 5.07186 15.1054 5.52918 15.1155 6.04671C18.0793 6.41209 20.3738 8.93874 20.3738 12.0013C20.3738 15.0639 18.0793 17.5905 15.1155 17.9559C15.1054 18.4735 15.0831 18.9308 15.0337 19.3326C15.0058 19.5589 14.9687 19.7756 14.918 19.9831Z',
  d13: 'M3 21H14V3H3V21Z',
  d14: 'M11 14V10',
  d15: 'M14 15C15.6569 15 17 13.6569 17 12C17 10.3431 15.6569 9 14 9',
  d16: 'M14 19C17.866 19 21 15.866 21 12C21 8.13401 17.866 5 14 5',
  d17: 'M19.8125 12C19.8125 8.78984 17.2102 6.1875 14 6.1875V4.25C18.2802 4.25 21.75 7.71979 21.75 12C21.75 16.2802 18.2802 19.75 14 19.75V17.8125C17.2102 17.8125 19.8125 15.2102 19.8125 12Z',
  d18: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H14C14.4142 21.75 14.75 21.4142 14.75 21V3C14.75 2.58579 14.4142 2.25 14 2.25H3ZM10 10V14H12V10H10Z',
  d19: 'M14 15C15.6569 15 17 13.6569 17 12C17 10.3431 15.6569 9 14 9V15Z',
};

export const IconBurningCdStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="burning-cd-stroke-rounded IconBurningCdStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBurningCdDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="burning-cd-duotone-rounded IconBurningCdDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBurningCdTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="burning-cd-twotone-rounded IconBurningCdTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBurningCdSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="burning-cd-solid-rounded IconBurningCdSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBurningCdBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="burning-cd-bulk-rounded IconBurningCdBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBurningCdStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="burning-cd-stroke-sharp IconBurningCdStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBurningCdSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="burning-cd-solid-sharp IconBurningCdSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBurningCd: TheIconSelfPack = {
  name: 'BurningCd',
  StrokeRounded: IconBurningCdStrokeRounded,
  DuotoneRounded: IconBurningCdDuotoneRounded,
  TwotoneRounded: IconBurningCdTwotoneRounded,
  SolidRounded: IconBurningCdSolidRounded,
  BulkRounded: IconBurningCdBulkRounded,
  StrokeSharp: IconBurningCdStrokeSharp,
  SolidSharp: IconBurningCdSolidSharp,
};
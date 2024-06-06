import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.16293 12.9178C2.4453 13.6884 3.29859 14.3047 5.00518 15.5372C7.33231 17.218 8.49587 18.0583 9.4688 17.9969C10.2118 17.9499 10.9024 17.6007 11.3777 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 11.3777 6.96846C10.9024 6.39933 10.2118 6.0501 9.4688 6.00315C8.49587 5.94167 7.33231 6.78203 5.00518 8.46275C3.29859 9.6953 2.4453 10.3116 2.16293 11.0822C1.94569 11.675 1.94569 12.325 2.16293 12.9178Z',
  d2: 'M12.1629 12.9178C12.4453 13.6884 13.2986 14.3047 15.0052 15.5372C17.3323 17.218 18.4959 18.0583 19.4688 17.9969C20.2118 17.9499 20.9024 17.6007 21.3777 17.0315C22 16.2863 22 14.8575 22 12C22 9.14246 22 7.71369 21.3777 6.96846C20.9024 6.39933 20.2118 6.0501 19.4688 6.00315C18.4959 5.94167 17.3323 6.78203 15.0052 8.46275C13.2986 9.6953 12.4453 10.3116 12.1629 11.0822C11.9457 11.675 11.9457 12.325 12.1629 12.9178Z',
  d3: 'M2.16293 12.9178C2.4453 13.6884 3.29859 14.3047 5.00518 15.5372C7.3323 17.218 8.49587 18.0583 9.4688 17.9969C10.2118 17.9499 10.9024 17.6007 11.3777 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 11.3777 6.96846C10.9024 6.39933 10.2118 6.0501 9.4688 6.00315C8.49587 5.94167 7.3323 6.78203 5.00518 8.46275C3.29859 9.6953 2.4453 10.3116 2.16293 11.0822C1.94569 11.675 1.94569 12.325 2.16293 12.9178Z',
  d4: 'M2.55591 9.38142C3.04444 8.95368 3.70801 8.47444 4.53474 7.87736L4.53474 7.87736L4.53474 7.87736C5.6695 7.05779 6.6311 6.36329 7.36541 5.93266C8.09833 5.50285 8.79652 5.20916 9.5161 5.25464C10.4636 5.31451 11.3456 5.75989 11.9534 6.48772C12.4158 7.04155 12.5876 7.77819 12.6688 8.62019C12.6875 8.81522 12.702 9.02401 12.7131 9.24699C13.1834 8.8533 13.7935 8.41269 14.5347 7.87736L14.5347 7.87736L14.5348 7.87734C15.6695 7.05778 16.6311 6.36328 17.3654 5.93266C18.0983 5.50285 18.7965 5.20916 19.5161 5.25464C20.4636 5.31451 21.3456 5.75989 21.9534 6.48772C22.4158 7.04155 22.5876 7.77819 22.6688 8.62019C22.75 9.46374 22.75 10.5647 22.75 11.9576V11.9577V12.0423V12.0424C22.75 13.4353 22.75 14.5362 22.6688 15.3798C22.5876 16.2218 22.4158 16.9584 21.9534 17.5123C21.3456 18.2401 20.4636 18.6855 19.5161 18.7454C18.7965 18.7908 18.0983 18.4971 17.3654 18.0673C16.6311 17.6367 15.6695 16.9422 14.5348 16.1227L14.5348 16.1226L14.5347 16.1226C13.7935 15.5873 13.1834 15.1467 12.7131 14.753C12.702 14.976 12.6875 15.1848 12.6688 15.3798C12.5876 16.2218 12.4158 16.9584 11.9534 17.5123C11.3456 18.2401 10.4636 18.6855 9.5161 18.7454C8.79652 18.7908 8.09833 18.4971 7.36541 18.0673C6.63111 17.6367 5.66952 16.9422 4.53479 16.1227L4.53476 16.1226L4.53473 16.1226C3.70801 15.5255 3.04444 15.0463 2.55591 14.6186C2.05802 14.1826 1.66379 13.7355 1.45872 13.1759C1.18043 12.4164 1.18043 11.5836 1.45872 10.8241C1.66379 10.2645 2.05802 9.81736 2.55591 9.38142Z',
  d5: 'M14.5347 7.87736C13.708 8.47444 13.0444 8.95368 12.5559 9.38142C12.058 9.81736 11.6638 10.2645 11.4587 10.8241C11.1804 11.5836 11.1804 12.4164 11.4587 13.1759C11.6638 13.7355 12.058 14.1826 12.5559 14.6186C13.0444 15.0463 13.708 15.5255 14.5347 16.1226L14.5348 16.1226C15.6695 16.9422 16.6311 17.6367 17.3654 18.0673C18.0983 18.4971 18.7965 18.7908 19.5161 18.7454C20.4636 18.6855 21.3456 18.2401 21.9534 17.5123C22.4158 16.9584 22.5876 16.2218 22.6688 15.3798C22.75 14.5362 22.75 13.4352 22.75 12.0423V12.0423V11.9577V11.9577C22.75 10.5647 22.75 9.46376 22.6688 8.62019C22.5876 7.77819 22.4158 7.04155 21.9534 6.48772C21.3456 5.75989 20.4636 5.31451 19.5161 5.25464C18.7965 5.20916 18.0983 5.50285 17.3654 5.93266C16.6311 6.36329 15.6695 7.05779 14.5347 7.87736L14.5347 7.87736Z',
  d6: 'M4.53474 7.87736C3.70801 8.47444 3.04444 8.95368 2.55591 9.38142C2.05802 9.81736 1.66379 10.2645 1.45872 10.8241C1.18043 11.5836 1.18043 12.4164 1.45872 13.1759C1.66379 13.7355 2.05802 14.1826 2.55591 14.6186C3.04444 15.0463 3.70801 15.5255 4.53473 16.1226L4.53476 16.1226C5.6695 16.9422 6.63111 17.6367 7.36541 18.0673C8.09833 18.4971 8.79652 18.7908 9.5161 18.7454C10.4636 18.6855 11.3456 18.2401 11.9534 17.5123C12.4158 16.9584 12.5876 16.2218 12.6688 15.3798C12.75 14.5362 12.75 13.4352 12.75 12.0423V12.0423V11.9577V11.9577C12.75 10.5647 12.75 9.46376 12.6688 8.62019C12.5876 7.77819 12.4158 7.04155 11.9534 6.48772C11.3456 5.75989 10.4636 5.31451 9.5161 5.25464C8.79652 5.20916 8.09833 5.50285 7.36541 5.93266C6.6311 6.36329 5.6695 7.05779 4.53474 7.87736L4.53474 7.87736Z',
  d7: 'M12 18V6L2 12L12 18Z',
  d8: 'M22 18V6L12 12L22 18Z',
  d9: 'M12.3695 5.34735C12.6047 5.48048 12.75 5.7298 12.75 6V18C12.75 18.2702 12.6047 18.5195 12.3695 18.6526C12.1344 18.7858 11.8458 18.7821 11.6141 18.6431L1.61413 12.6431C1.38822 12.5076 1.25 12.2634 1.25 12C1.25 11.7366 1.38822 11.4924 1.61413 11.3569L11.6141 5.35688C11.8458 5.21786 12.1344 5.21422 12.3695 5.34735Z',
  d10: 'M22.3695 5.34735C22.6047 5.48048 22.75 5.7298 22.75 6V18C22.75 18.2702 22.6047 18.5195 22.3695 18.6526C22.1344 18.7858 21.8458 18.7821 21.6141 18.6431L11.6141 12.6431C11.3882 12.5076 11.25 12.2634 11.25 12C11.25 11.7366 11.3882 11.4924 11.6141 11.3569L21.6141 5.35688C21.8458 5.21786 22.1344 5.21422 22.3695 5.34735Z',
};

export const IconBackward02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-02-stroke-rounded IconBackward02StrokeRounded"
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

export const IconBackward02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-02-duotone-rounded IconBackward02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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

export const IconBackward02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-02-twotone-rounded IconBackward02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconBackward02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-02-solid-rounded IconBackward02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackward02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-02-bulk-rounded IconBackward02BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackward02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-02-stroke-sharp IconBackward02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBackward02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-02-solid-sharp IconBackward02SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBackward02: TheIconSelfPack = {
  name: 'Backward02',
  StrokeRounded: IconBackward02StrokeRounded,
  DuotoneRounded: IconBackward02DuotoneRounded,
  TwotoneRounded: IconBackward02TwotoneRounded,
  SolidRounded: IconBackward02SolidRounded,
  BulkRounded: IconBackward02BulkRounded,
  StrokeSharp: IconBackward02StrokeSharp,
  SolidSharp: IconBackward02SolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.78223 4.18192C6.43007 3.68319 6.754 3.43383 7.12788 3.27323C7.29741 3.20041 7.47367 3.14158 7.65459 3.09741C8.0536 3 8.4767 3 9.32289 3H14.6771C15.5233 3 15.9464 3 16.3454 3.09741C16.5263 3.14158 16.7026 3.20041 16.8721 3.27323C17.246 3.43383 17.5699 3.68319 18.2178 4.18192C20.3644 5.83448 21.4378 6.66077 21.8057 7.73078C21.9694 8.20673 22.0305 8.70728 21.9858 9.20461C21.8852 10.3227 21.0379 11.346 19.3433 13.3925L15.3498 18.2153C13.8126 20.0718 13.044 21 12 21C10.956 21 10.1874 20.0718 8.65018 18.2153L4.65671 13.3925C2.96208 11.346 2.11476 10.3227 2.0142 9.20461C1.96947 8.70728 2.03064 8.20673 2.1943 7.73078C2.56224 6.66077 3.63557 5.83448 5.78223 4.18192Z',
  d2: 'M10 8.5H14',
  d3: 'M5.78223 4.18192C6.43007 3.68319 6.754 3.43383 7.12788 3.27323C7.29741 3.20041 7.47367 3.14158 7.65459 3.09741C8.05361 3 8.4767 3 9.32289 3H14.6771C15.5233 3 15.9464 3 16.3454 3.09741C16.5263 3.14158 16.7026 3.20041 16.8721 3.27323C17.246 3.43383 17.5699 3.68319 18.2178 4.18192C20.3644 5.83448 21.4378 6.66077 21.8057 7.73078C21.9694 8.20673 22.0305 8.70728 21.9858 9.20461C21.8852 10.3227 21.0379 11.346 19.3433 13.3925L15.3498 18.2153C13.8126 20.0718 13.044 21 12 21C10.956 21 10.1874 20.0718 8.65018 18.2153L4.65671 13.3925C2.96208 11.346 2.11476 10.3227 2.0142 9.20461C1.96947 8.70728 2.03064 8.20673 2.1943 7.73078C2.56224 6.66077 3.63557 5.83448 5.78223 4.18192Z',
  d4: 'M9.32289 2.25003L9.23265 2.25001C8.47304 2.24984 7.96465 2.24972 7.47672 2.36883C7.25578 2.42277 7.03998 2.49476 6.83189 2.58414C6.37 2.78253 5.97535 3.08651 5.39532 3.53329L5.32472 3.58766L5.29273 3.61228C4.24651 4.41768 3.41746 5.0559 2.80797 5.62799C2.1851 6.21262 1.72591 6.7865 1.48506 7.48693C1.28734 8.06193 1.21295 8.66844 1.26722 9.27182C1.33356 10.0094 1.64582 10.6679 2.11451 11.3677C2.57202 12.0509 3.22764 12.8427 4.05236 13.8386L4.05239 13.8387L4.05242 13.8387L8.11023 18.7392L8.11025 18.7392L8.11026 18.7392C8.84673 19.6287 9.45218 20.3599 10.0079 20.8609C10.5914 21.3869 11.2168 21.75 12 21.75C12.7832 21.75 13.4086 21.3869 13.9921 20.8609C14.5478 20.3599 15.1533 19.6287 15.8898 18.7392L19.9476 13.8386C20.7724 12.8427 21.428 12.0509 21.8855 11.3677C22.3542 10.6679 22.6664 10.0094 22.7328 9.27182C22.7871 8.66844 22.7127 8.06193 22.5149 7.48693C22.2741 6.7865 21.8149 6.21262 21.192 5.62799C20.5825 5.05591 19.7535 4.41769 18.7073 3.6123L18.7072 3.61226L18.6753 3.58766L18.6047 3.53329C18.0246 3.08651 17.63 2.78253 17.1681 2.58414C16.96 2.49476 16.7442 2.42277 16.5233 2.36883C16.0353 2.24972 15.527 2.24984 14.7673 2.25001L14.6771 2.25003H9.32289ZM10 7.75C9.58579 7.75 9.25 8.08579 9.25 8.5C9.25 8.91421 9.58579 9.25 10 9.25H14C14.4142 9.25 14.75 8.91421 14.75 8.5C14.75 8.08579 14.4142 7.75 14 7.75H10Z',
  d5: 'M9.23265 2.25001L9.32289 2.25003H14.6771L14.7673 2.25001C15.527 2.24984 16.0353 2.24972 16.5233 2.36883C16.7442 2.42277 16.96 2.49476 17.1681 2.58414C17.63 2.78253 18.0246 3.08651 18.6047 3.53329L18.6753 3.58766L18.7072 3.61226L18.7073 3.6123C19.7535 4.41769 20.5825 5.05591 21.192 5.62799C21.8149 6.21262 22.2741 6.7865 22.5149 7.48693C22.7127 8.06193 22.7871 8.66844 22.7328 9.27182C22.6664 10.0094 22.3542 10.6679 21.8855 11.3677C21.428 12.0509 20.7724 12.8427 19.9476 13.8386L15.8898 18.7392C15.1533 19.6287 14.5478 20.3599 13.9921 20.8609C13.4086 21.3869 12.7832 21.75 12 21.75C11.2168 21.75 10.5914 21.3869 10.0079 20.8609C9.45218 20.3599 8.84672 19.6287 8.11025 18.7392L8.11023 18.7392L4.05242 13.8387L4.05239 13.8387C3.22766 12.8427 2.57203 12.0509 2.11451 11.3677C1.64582 10.6679 1.33356 10.0094 1.26722 9.27182C1.21295 8.66844 1.28734 8.06193 1.48506 7.48693C1.72591 6.7865 2.1851 6.21262 2.80797 5.62799C3.41746 5.0559 4.24651 4.41768 5.29273 3.61228L5.32472 3.58766L5.39532 3.53329C5.97535 3.08651 6.37 2.78253 6.83189 2.58414C7.03998 2.49476 7.25578 2.42277 7.47672 2.36883C7.96465 2.24972 8.47304 2.24984 9.23265 2.25001Z',
  d6: 'M9.25 8.5C9.25 8.08579 9.58579 7.75 10 7.75H14C14.4142 7.75 14.75 8.08579 14.75 8.5C14.75 8.91421 14.4142 9.25 14 9.25H10C9.58579 9.25 9.25 8.91421 9.25 8.5Z',
  d7: 'M8.97241 7.95264H14.9724',
  d8: 'M18.017 3.00271L5.97266 3.00244L2.00196 7.95186C1.99907 7.95546 1.99902 7.96056 2.00182 7.96421L12.0034 20.9936C12.0074 20.9989 12.0153 20.9989 12.0193 20.9936L21.9984 7.96422C22.0012 7.96056 22.0012 7.95546 21.9983 7.95187L18.017 3.00271Z',
  d9: 'M22.5951 8.45709C22.8056 8.18328 22.8019 7.80115 22.5861 7.53148L18.361 2.25H5.64002L1.41484 7.53148C1.19898 7.8013 1.1954 8.18367 1.40617 8.45748L11.413 21.4575C11.555 21.642 11.7747 21.7501 12.0076 21.75C12.2404 21.7499 12.46 21.6417 12.6019 21.4571L22.5951 8.45709ZM9.00049 9H15.0005V7H9.00049V9Z',
};

export const IconDiamond02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-02-stroke-rounded IconDiamond02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-02-duotone-rounded IconDiamond02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-02-twotone-rounded IconDiamond02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-02-solid-rounded IconDiamond02SolidRounded"
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

export const IconDiamond02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-02-bulk-rounded IconDiamond02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-02-stroke-sharp IconDiamond02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconDiamond02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-02-solid-sharp IconDiamond02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDiamond02: TheIconSelfPack = {
  name: 'Diamond02',
  StrokeRounded: IconDiamond02StrokeRounded,
  DuotoneRounded: IconDiamond02DuotoneRounded,
  TwotoneRounded: IconDiamond02TwotoneRounded,
  SolidRounded: IconDiamond02SolidRounded,
  BulkRounded: IconDiamond02BulkRounded,
  StrokeSharp: IconDiamond02StrokeSharp,
  SolidSharp: IconDiamond02SolidSharp,
};
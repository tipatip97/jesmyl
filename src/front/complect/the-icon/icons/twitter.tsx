import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z',
  d2: 'M2 18.5C3.5 18.3488 6.5 17.647 6.5 16.4705C3.39629 13.3561 2.25147 8.30185 3.48693 4.10523C5.34867 7.0213 8.56784 9.20927 12.1209 8.98003C11.5007 6.51734 13.4276 4 16 4C17.0144 4 17.9407 4.37764 18.6458 5L22 4.5',
  d3: 'M11.2582 8.23767C11.1447 5.63601 13.2575 3.25 16 3.25C17.0745 3.25 18.067 3.60755 18.8629 4.20937L21.8895 3.7582C22.1672 3.71679 22.4449 3.83404 22.6089 4.06201C22.7729 4.28998 22.7958 4.59048 22.6682 4.84067L20.7346 8.63307C20.4044 15.3809 14.8294 20.75 8.00005 20.75C5.70521 20.75 3.52189 20.2468 1.62451 19.1492C1.34284 18.9863 1.19837 18.6603 1.26684 18.3422C1.33531 18.0241 1.60109 17.7864 1.92484 17.7538C2.62749 17.683 3.68928 17.4806 4.55591 17.165C4.99281 17.0059 5.33383 16.8344 5.55154 16.6675C5.5727 16.6513 5.59165 16.6359 5.60862 16.6215C2.5742 13.2838 1.50804 8.17157 2.76751 3.89342C2.85052 3.61145 3.0906 3.40396 3.38162 3.36266C3.67264 3.32137 3.96096 3.45389 4.11913 3.70164C5.72891 6.22305 8.3663 8.09513 11.2582 8.23767Z',
  d4: 'M11.2589 8.23767C11.1455 5.63601 13.2582 3.25 16.0008 3.25C17.0753 3.25 18.0677 3.60755 18.8636 4.20937L21.8902 3.7582C22.168 3.71679 22.4456 3.83404 22.6096 4.06201C22.7736 4.28998 22.7965 4.59048 22.6689 4.84067L20.7353 8.63307C16.501 18.3422 6.00098 19 1.26758 18.3422C1.33604 18.0241 1.60182 17.7864 1.92558 17.7538C2.62822 17.683 3.69002 17.4806 4.55665 17.165C4.99355 17.0059 5.33457 16.8344 5.55227 16.6675C5.57344 16.6513 5.59239 16.6359 5.60936 16.6215C2.57494 13.2838 1.50878 8.17157 2.76825 3.89342C2.85126 3.61145 3.09133 3.40396 3.38236 3.36266C3.67338 3.32137 3.9617 3.45389 4.11987 3.70164C5.72964 6.22305 8.36703 8.09513 11.2589 8.23767Z',
  d5: 'M12.1126 9.00865C8.11367 9.3416 4.5085 6.13621 3.42539 4.12892C3.42108 4.12093 3.40948 4.12291 3.40715 4.13169C2.19156 8.6993 3.5013 13.7688 6.45502 16.4214C6.25865 16.6522 4.72947 18.5443 2.00924 18.5615C1.99902 18.5615 1.99508 18.5751 2.00392 18.5802C5.99776 20.894 11.0964 19.8812 12.7945 19.0186C18.0221 16.8494 20.0053 11.4812 20.0053 8.40639L21.9998 4.56514C22.0036 4.55793 21.9976 4.54952 21.9895 4.55064L18.6422 5.01914C14.5354 2.01754 11.5431 6.34336 12.1126 9.00865Z',
  d6: 'M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 16.4705 5 18.5 2 18.5Z',
};

export const IconTwitterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="twitter-stroke-rounded IconTwitterStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwitterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="twitter-duotone-rounded IconTwitterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwitterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="twitter-twotone-rounded IconTwitterTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTwitterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="twitter-solid-rounded IconTwitterSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwitterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="twitter-bulk-rounded IconTwitterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwitterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="twitter-stroke-sharp IconTwitterStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwitterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="twitter-solid-sharp IconTwitterSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTwitter: TheIconSelfPack = {
  name: 'Twitter',
  StrokeRounded: IconTwitterStrokeRounded,
  DuotoneRounded: IconTwitterDuotoneRounded,
  TwotoneRounded: IconTwitterTwotoneRounded,
  SolidRounded: IconTwitterSolidRounded,
  BulkRounded: IconTwitterBulkRounded,
  StrokeSharp: IconTwitterStrokeSharp,
  SolidSharp: IconTwitterSolidSharp,
};
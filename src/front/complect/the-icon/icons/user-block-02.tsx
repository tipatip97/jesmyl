import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M17.7322 8.26777L21.2662 4.73063M22 6.5C22 7.88071 20.8807 9 19.5 9C18.1193 9 17 7.88071 17 6.5C17 5.11929 18.1193 4 19.5 4C20.8807 4 22 5.11929 22 6.5Z',
  d4: 'M4.676 14.6493C7.85919 12.7836 11.8912 12.7836 15.0744 14.6493C15.1752 14.7084 15.3007 14.7781 15.4436 14.8574C16.0762 15.2086 17.0481 15.7481 17.7135 16.3892C18.129 16.7896 18.5385 17.3303 18.6133 18.0037C18.6934 18.7252 18.3711 19.3911 17.7548 19.9691C16.7047 20.9539 15.4368 21.75 13.7944 21.75H5.95596C4.31362 21.75 3.0457 20.9538 1.99562 19.9691C1.3793 19.3911 1.05695 18.7252 1.13707 18.0037C1.21184 17.3303 1.6214 16.7896 2.03689 16.3892C2.70228 15.7481 3.67419 15.2086 4.30683 14.8574C4.44965 14.7781 4.5752 14.7084 4.676 14.6493Z',
  d5: 'M5.12519 7C5.12519 4.37665 7.25184 2.25 9.87519 2.25C12.4985 2.25 14.6252 4.37665 14.6252 7C14.6252 9.62335 12.4985 11.75 9.87519 11.75C7.25184 11.75 5.12519 9.62335 5.12519 7Z',
  d6: 'M19.125 5C18.1585 5 17.375 5.7835 17.375 6.75C17.375 6.85507 17.3843 6.95797 17.402 7.05794L19.4314 5.02673C19.3319 5.00916 19.2295 5 19.125 5ZM21.7723 4.09398C21.094 3.41793 20.1583 3 19.125 3C17.0539 3 15.375 4.67893 15.375 6.75C15.375 7.78499 15.7943 8.72205 16.4723 9.40059C16.4727 9.40105 16.4732 9.40151 16.4737 9.40197C16.4741 9.40235 16.4744 9.40273 16.4748 9.40312C17.1533 10.0809 18.0902 10.5 19.125 10.5C21.1961 10.5 22.875 8.82107 22.875 6.75C22.875 5.71224 22.4535 4.77294 21.7723 4.09398ZM20.8475 6.43906L18.8156 8.47274C18.916 8.49065 19.0194 8.5 19.125 8.5C20.0915 8.5 20.875 7.7165 20.875 6.75C20.875 6.64388 20.8656 6.53997 20.8475 6.43906Z',
  d7: 'M2 21H17C17 16.9066 13.6421 13.5882 9.5 13.5882C5.35786 13.5882 2 16.9066 2 21Z',
  d8: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d9: 'M16.8787 12.1213L21.1194 7.87675M22 10C22 11.6569 20.6569 13 19 13C17.3431 13 16 11.6569 16 10C16 8.34315 17.3431 7 19 7C20.6569 7 22 8.34315 22 10Z',
  d10: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d11: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d12: 'M18.75 8C17.6454 8 16.75 8.89543 16.75 10C16.75 10.1789 16.7735 10.3524 16.8176 10.5174L19.2656 8.0671C19.1011 8.02333 18.9283 8 18.75 8ZM20.6816 9.47956L18.2313 11.9321C18.3967 11.9764 18.5706 12 18.75 12C19.8546 12 20.75 11.1046 20.75 10C20.75 9.81997 20.7262 9.6455 20.6816 9.47956ZM14.75 10C14.75 7.79086 16.5409 6 18.75 6C20.9591 6 22.75 7.79086 22.75 10C22.75 12.2091 20.9591 14 18.75 14C16.5409 14 14.75 12.2091 14.75 10Z',
};

export const IconUserBlock02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-02-stroke-rounded IconUserBlock02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-02-duotone-rounded IconUserBlock02DuotoneRounded"
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
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-02-twotone-rounded IconUserBlock02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-02-solid-rounded IconUserBlock02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconUserBlock02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-02-bulk-rounded IconUserBlock02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-02-stroke-sharp IconUserBlock02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-02-solid-sharp IconUserBlock02SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserBlock02: TheIconSelfPack = {
  name: 'UserBlock02',
  StrokeRounded: IconUserBlock02StrokeRounded,
  DuotoneRounded: IconUserBlock02DuotoneRounded,
  TwotoneRounded: IconUserBlock02TwotoneRounded,
  SolidRounded: IconUserBlock02SolidRounded,
  BulkRounded: IconUserBlock02BulkRounded,
  StrokeSharp: IconUserBlock02StrokeSharp,
  SolidSharp: IconUserBlock02SolidSharp,
};
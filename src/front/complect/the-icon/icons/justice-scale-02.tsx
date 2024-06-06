import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 17L18 10L15 17',
  d2: 'M9 17L6 10L3 17',
  d3: 'M4 10H5.0482C6.31166 10 7.5375 9.29466 8.5241 8C10.5562 5.33333 13.4438 5.33333 15.4759 8C16.4625 9.29466 17.6883 10 18.9518 10H20',
  d4: 'M18 22C19.5603 22 20.9182 20.9483 21.6181 19.3974C21.9707 18.6161 22.147 18.2255 21.8476 17.6127C21.5483 17 21.0525 17 20.061 17H15.939C14.9475 17 14.4517 17 14.1524 17.6127C13.853 18.2255 14.0293 18.6161 14.3819 19.3974C15.0818 20.9483 16.4397 22 18 22Z',
  d5: 'M6 22C7.56035 22 8.9182 20.9483 9.61809 19.3974C9.97068 18.6161 10.147 18.2255 9.84763 17.6127C9.54829 17 9.05251 17 8.06097 17H3.93903C2.94749 17 2.45171 17 2.15237 17.6127C1.85302 18.2255 2.02932 18.6161 2.38191 19.3974C3.0818 20.9483 4.43965 22 6 22Z',
  d6: 'M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z',
  d7: 'M18.9114 9.95108C18.7496 9.59309 18.3931 9.36304 18.0002 9.36304C17.6074 9.36304 17.2509 9.59309 17.089 9.95108L14.0988 16.565C14.0448 16.5994 13.9918 16.6378 13.9401 16.6806C13.7377 16.8481 13.5899 17.0552 13.4785 17.2833C13.264 17.7224 13.2027 18.1362 13.2854 18.5792C13.353 18.9417 13.5188 19.3086 13.6754 19.655L13.6983 19.7057C14.4887 21.4573 16.0767 22.7498 18 22.7498C19.9232 22.7498 21.5112 21.4573 22.3017 19.7057L22.3246 19.655L22.3246 19.655C22.4812 19.3086 22.647 18.9417 22.7146 18.5792C22.7973 18.1362 22.736 17.7224 22.5215 17.2833C22.4101 17.0552 22.2622 16.8481 22.0599 16.6806C22.0085 16.638 21.9557 16.5998 21.9019 16.5655L18.9114 9.95108ZM19.5643 16.2498L18.0002 12.7904L16.4362 16.2498H19.5643Z',
  d8: 'M6.91145 9.95108C6.7496 9.59309 6.39312 9.36304 6.00025 9.36304C5.60737 9.36304 5.25089 9.59309 5.08904 9.95108L2.09883 16.565C2.04479 16.5994 1.99175 16.6378 1.94007 16.6806C1.73775 16.8481 1.58994 17.0552 1.47848 17.2833C1.26399 17.7224 1.20274 18.1362 1.28538 18.5792C1.35301 18.9417 1.51881 19.3086 1.67537 19.655L1.6983 19.7057C2.48874 21.4573 4.07675 22.7498 6 22.7498C7.92325 22.7498 9.51125 21.4573 10.3017 19.7057L10.3246 19.655L10.3246 19.655C10.4812 19.3086 10.647 18.9417 10.7146 18.5792C10.7973 18.1362 10.736 17.7224 10.5215 17.2833C10.4101 17.0552 10.2622 16.8481 10.0599 16.6806C10.0085 16.638 9.95566 16.5998 9.90186 16.5655L6.91145 9.95108ZM7.56425 16.2498L6.00025 12.7904L4.43624 16.2498H7.56425Z',
  d9: 'M12 3.24976C11.4477 3.24976 11 3.69747 11 4.24976C11 4.80204 11.4477 5.24976 12 5.24976C12.5523 5.24976 13 4.80204 13 4.24976C13 3.69747 12.5523 3.24976 12 3.24976ZM14.4599 5.96739C14.8003 5.48083 15 4.88861 15 4.24976C15 2.5929 13.6569 1.24976 12 1.24976C10.3431 1.24976 9 2.5929 9 4.24976C9 4.88861 9.19969 5.48083 9.54006 5.96739C8.87632 6.37274 8.26496 6.93996 7.72872 7.64364C6.87158 8.76843 5.91278 9.24976 5.0482 9.24976H4C3.44772 9.24976 3 9.69747 3 10.2498C3 10.802 3.44772 11.2498 4 11.2498H5.0482C6.71055 11.2498 8.20343 10.3204 9.31948 8.85587C10.1995 7.7011 11.1604 7.24976 12 7.24976C12.8396 7.24976 13.8005 7.7011 14.6805 8.85587C15.7966 10.3204 17.2895 11.2498 18.9518 11.2498H20C20.5523 11.2498 21 10.802 21 10.2498C21 9.69747 20.5523 9.24976 20 9.24976H18.9518C18.0872 9.24976 17.1284 8.76843 16.2713 7.64364C15.735 6.93996 15.1237 6.37274 14.4599 5.96739Z',
  d10: 'M3 10H5.0482C6.31166 10 7.5375 9.471 8.5241 8.5C10.5562 6.5 13.4438 6.5 15.4759 8.5C16.4625 9.471 17.6883 10 18.9518 10H21',
  d11: 'M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z',
  d12: 'M6 21C8.20914 21 10 19.2091 10 17H2C2 19.2091 3.79086 21 6 21Z',
  d13: 'M18 21C20.2091 21 22 19.2091 22 17H14C14 19.2091 15.7909 21 18 21Z',
  d14: 'M12 4.25C11.4477 4.25 11 4.69772 11 5.25C11 5.80228 11.4477 6.25 12 6.25C12.5523 6.25 13 5.80228 13 5.25C13 4.69772 12.5523 4.25 12 4.25ZM9 5.25C9 3.59315 10.3431 2.25 12 2.25C13.6569 2.25 15 3.59315 15 5.25C15 6.90685 13.6569 8.25 12 8.25C10.3431 8.25 9 6.90685 9 5.25Z',
  d15: 'M9.22555 9.46272C10.8685 7.84576 13.1315 7.84576 14.7745 9.46272C15.3449 10.0241 15.9927 10.4672 16.6896 10.7718L14.082 16.8561L15.9203 17.6439L18.0012 12.7886L20.082 17.6439L21.9203 16.8561L19.5177 11.25H21V9.25H18.9518C17.9771 9.25 16.9965 8.84349 16.1773 8.03728C13.756 5.65424 10.244 5.65424 7.82265 8.03728C7.00349 8.84349 6.0229 9.25 5.0482 9.25H3V11.25H4.48464L2.08203 16.8561L3.92032 17.6439L6.00118 12.7886L8.08203 17.6439L9.92032 16.8561L7.31239 10.7709C8.00848 10.4664 8.65567 10.0236 9.22555 9.46272Z',
  d16: 'M10.75 16.25V17C10.75 19.6234 8.62335 21.75 6 21.75C3.37665 21.75 1.25 19.6234 1.25 17V16.25H10.75Z',
  d17: 'M22.75 16.25V17C22.75 19.6234 20.6234 21.75 18 21.75C15.3766 21.75 13.25 19.6234 13.25 17V16.25H22.75Z',
};

export const IconJusticeScale02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-02-stroke-rounded IconJusticeScale02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-02-duotone-rounded IconJusticeScale02DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-02-twotone-rounded IconJusticeScale02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-02-solid-rounded IconJusticeScale02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-02-bulk-rounded IconJusticeScale02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconJusticeScale02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-02-stroke-sharp IconJusticeScale02StrokeSharp"
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
        strokeLinejoin="round" 
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

export const IconJusticeScale02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-02-solid-sharp IconJusticeScale02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJusticeScale02: TheIconSelfPack = {
  name: 'JusticeScale02',
  StrokeRounded: IconJusticeScale02StrokeRounded,
  DuotoneRounded: IconJusticeScale02DuotoneRounded,
  TwotoneRounded: IconJusticeScale02TwotoneRounded,
  SolidRounded: IconJusticeScale02SolidRounded,
  BulkRounded: IconJusticeScale02BulkRounded,
  StrokeSharp: IconJusticeScale02StrokeSharp,
  SolidSharp: IconJusticeScale02SolidSharp,
};
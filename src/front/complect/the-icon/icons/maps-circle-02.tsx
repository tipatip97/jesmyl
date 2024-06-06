import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 9.5H14.509',
  d2: 'M14.5 6C16.3941 6 18 7.61319 18 9.57031C18 11.5586 16.368 12.9539 14.8605 13.9027C14.7506 13.9665 14.6264 14 14.5 14C14.3736 14 14.2494 13.9665 14.1395 13.9027C12.6348 12.9446 11 11.5655 11 9.57031C11 7.61319 12.6059 6 14.5 6Z',
  d3: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d4: 'M9 15L5 19M15 21L3 9',
  d5: 'M22.0003 12C22.0003 16.3491 19.224 20.0497 15.347 21.4263L2.62988 8.5001C4.04859 4.70338 7.70875 2 12.0003 2C17.5232 2 22.0003 6.47715 22.0003 12ZM18 9.57031C18 7.61319 16.3941 6 14.5 6C12.6059 6 11 7.61319 11 9.57031C11 11.5655 12.6348 12.9446 14.1395 13.9027C14.2494 13.9665 14.3736 14 14.5 14C14.6264 14 14.7506 13.9665 14.8605 13.9027C16.368 12.9539 18 11.5586 18 9.57031Z',
  d6: 'M13.501 5.25C11.182 5.25 9.25098 7.20968 9.25098 9.57031C9.25098 12.003 11.2356 13.5789 12.7377 14.5353L12.7506 14.5436L12.7639 14.5513C12.9875 14.6811 13.2416 14.75 13.501 14.75C13.7603 14.75 14.0144 14.6811 14.2381 14.5513L14.2496 14.5446L14.261 14.5374C15.7724 13.5861 17.751 11.9949 17.751 9.57031C17.751 7.20968 15.8199 5.25 13.501 5.25ZM13.4943 8C12.6695 8 12.001 8.67157 12.001 9.5C12.001 10.3284 12.6695 11 13.4943 11H13.5077C14.3324 11 15.001 10.3284 15.001 9.5C15.001 8.67157 14.3324 8 13.5077 8H13.4943Z',
  d7: 'M12.001 1.25C6.06392 1.25 1.25098 6.06294 1.25098 12C1.25098 14.3714 2.01881 16.5634 3.31942 18.3411C3.49619 18.5827 3.58457 18.7035 3.72217 18.7141C3.85976 18.7247 3.96975 18.6147 4.18973 18.3947L8.39858 14.1858C8.59857 13.9858 8.69857 13.8858 8.69857 13.7615C8.69857 13.6372 8.59857 13.5372 8.39857 13.3372L4.10012 9.03878C3.96327 8.90193 3.89485 8.83351 3.87799 8.74159C3.86113 8.64967 3.89904 8.56534 3.97488 8.3967C5.35122 5.33587 8.42708 3.20459 12.0007 3.20459C16.8583 3.20459 20.7962 7.14245 20.7962 12C20.7962 15.5737 18.6649 18.6495 15.6041 20.0259C15.4354 20.1017 15.3511 20.1396 15.2592 20.1228C15.1673 20.1059 15.0988 20.0375 14.962 19.9006L10.6613 15.6C10.4613 15.4 10.3613 15.3 10.237 15.3C10.1128 15.3 10.0128 15.4 9.81278 15.6L5.60357 19.8093C5.38366 20.0292 5.2737 20.1391 5.28427 20.2767C5.29485 20.4143 5.41558 20.5027 5.65706 20.6795C7.43521 21.9813 9.62833 22.75 12.001 22.75C17.938 22.75 22.751 17.9371 22.751 12C22.751 6.06294 17.938 1.25 12.001 1.25Z',
  d8: 'M14.5 5.99996C12.567 5.99996 11 7.4471 11 9.23224C11 10.253 11.4375 11.0467 12.3125 11.7556C12.9292 12.2553 14.0514 13.3272 14.5 14C14.9713 13.3406 16.0708 12.2553 16.6875 11.7556C17.5625 11.0467 18 10.253 18 9.23224C18 7.4471 16.433 5.99996 14.5 5.99996Z',
  d9: 'M13.5 5.25C11.2101 5.25 9.25 6.97785 9.25 9.23228C9.25 10.5222 9.82597 11.5165 10.8404 12.3384C11.1243 12.5684 11.5394 12.9429 11.9384 13.3427C12.3454 13.7505 12.6945 14.1439 12.876 14.4161C13.0127 14.6211 13.2414 14.7459 13.4878 14.7499C13.7342 14.7539 13.9669 14.6366 14.1102 14.4361C14.5296 13.8493 15.575 12.812 16.1596 12.3384C17.174 11.5165 17.75 10.5222 17.75 9.23228C17.75 6.97785 15.7899 5.25 13.5 5.25ZM13.4933 8C12.6686 8 12 8.67157 12 9.5C12 10.3284 12.6686 11 13.4933 11H13.5067C14.3314 11 15 10.3284 15 9.5C15 8.67157 14.3314 8 13.5067 8H13.4933Z',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 14.6084 2.17903 16.9999 3.72427 18.8615L9.00071 13.5849L3.92578 8.51C5.27656 5.38859 8.38403 3.20459 12.0016 3.20459C16.8592 3.20459 20.7971 7.14245 20.7971 12C20.7971 15.6176 18.6131 18.7251 15.4917 20.0759L10.4149 14.9991L5.13848 20.2758C7.00011 21.821 9.39156 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
};

export const IconMapsCircle02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-circle-02-stroke-rounded IconMapsCircle02StrokeRounded"
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

export const IconMapsCircle02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-circle-02-duotone-rounded IconMapsCircle02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsCircle02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-circle-02-twotone-rounded IconMapsCircle02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMapsCircle02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-circle-02-solid-rounded IconMapsCircle02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMapsCircle02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-circle-02-bulk-rounded IconMapsCircle02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsCircle02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-circle-02-stroke-sharp IconMapsCircle02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconMapsCircle02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-circle-02-solid-sharp IconMapsCircle02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfMapsCircle02: TheIconSelfPack = {
  name: 'MapsCircle02',
  StrokeRounded: IconMapsCircle02StrokeRounded,
  DuotoneRounded: IconMapsCircle02DuotoneRounded,
  TwotoneRounded: IconMapsCircle02TwotoneRounded,
  SolidRounded: IconMapsCircle02SolidRounded,
  BulkRounded: IconMapsCircle02BulkRounded,
  StrokeSharp: IconMapsCircle02StrokeSharp,
  SolidSharp: IconMapsCircle02SolidSharp,
};
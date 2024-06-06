import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 9.91601L11 9.91601M11 9.91601L4.75 9.91601C3.7835 9.91601 3 10.6995 3 11.666C3 12.6325 3.7835 13.416 4.75 13.416H10L10.4776 16.493C10.7669 18.4216 10.9115 19.386 11.3184 20.0652C11.9906 21.1872 13 22 14.4736 22C15.5 22 16.1886 21.7463 18.0387 21.1296C19.2127 20.7383 19.7996 20.5426 20.2643 20.2236C21.0293 19.6983 21.5878 18.9233 21.8442 18.0315C22 17.4898 22 16.8711 22 15.6336V14.2287C22 12.4442 22 11.552 21.6651 10.7858C21.5137 10.4397 21.3141 10.1167 21.0722 9.82659C20.5367 9.18438 19.7387 8.78536 18.1426 7.98731C16.8483 7.34015 16.2011 7.01657 15.5302 7.00083C15.2276 6.99373 14.9256 7.03246 14.6346 7.11571C13.9894 7.30031 13.4448 7.77678 12.3558 8.7297L11 9.91601Z',
  d2: 'M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7',
  d3: 'M4.75 9.91601L11 9.91601L12.3558 8.7297C13.4448 7.77678 13.9894 7.30031 14.6346 7.11571C14.9256 7.03246 15.2276 6.99373 15.5302 7.00083C16.2011 7.01657 16.8483 7.34015 18.1426 7.98731C19.7387 8.78536 20.5367 9.18438 21.0722 9.82659C21.3141 10.1167 21.5137 10.4397 21.6651 10.7858C22 11.552 22 12.4442 22 14.2287V15.6336C22 16.8711 22 17.4898 21.8442 18.0315C21.5878 18.9233 21.0293 19.6983 20.2643 20.2236C19.7996 20.5426 19.2127 20.7383 18.0387 21.1296C16.1886 21.7463 15.5 22 14.4736 22C13 22 11.9906 21.1872 11.3184 20.0652C10.9115 19.386 10.7669 18.4216 10.4776 16.493L10 13.416H4.75C3.7835 13.416 3 12.6325 3 11.666C3 10.6995 3.7835 9.91601 4.75 9.91601Z',
  d4: 'M10.7182 9.16601L4.75 9.16601C3.36929 9.16601 2.25 10.2853 2.25 11.666C2.25 13.0467 3.36929 14.166 4.75 14.166H9.35743L9.73587 16.6043L9.73645 16.608L9.73982 16.6306C9.88112 17.5726 9.9926 18.3158 10.121 18.9068C10.2515 19.5075 10.4108 20.0095 10.6751 20.4506C11.4404 21.7281 12.6633 22.75 14.4736 22.75C15.5606 22.75 16.3446 22.4875 17.8824 21.9727C18.9447 21.6188 20.1359 21.2216 20.6888 20.8418C21.5973 20.218 22.2605 19.2978 22.565 18.2388C22.7504 17.5941 22.7503 16.8758 22.75 15.7561L22.75 14.0544C22.7505 12.4387 22.7508 11.3971 22.3523 10.4854C22.1726 10.0744 21.9355 9.69085 21.6482 9.3463C21.011 8.58206 20.0793 8.11655 18.6339 7.3944C18.0101 7.0825 17.3183 6.73662 16.8823 6.56139C16.4287 6.37909 16.006 6.26179 15.5478 6.25103C15.1695 6.24216 14.7921 6.29057 14.4283 6.39464C13.9876 6.52073 13.6082 6.74093 13.2153 7.03182C12.8377 7.31143 12.4099 7.68574 11.8851 8.145L10.7182 9.16601Z',
  d5: 'M8.25004 5.50586C8.80232 5.50586 9.25004 5.05814 9.25004 4.50586C9.25004 3.95357 8.80232 3.50586 8.25004 3.50586L5.75 3.50586L5.75002 2.9116C5.75014 2.73596 5.7503 2.52031 5.72823 2.34387L5.72781 2.34053C5.71204 2.21408 5.64021 1.63804 5.07461 1.36368C4.50779 1.08872 4.00765 1.39065 3.89944 1.45597L3.43095 1.79511C3.05513 2.08975 2.54067 2.49545 2.14966 2.87588C1.95455 3.06571 1.75332 3.28297 1.59447 3.51388C1.45326 3.71914 1.25 4.06933 1.25 4.5C1.25 4.93067 1.45326 5.28086 1.59447 5.48612C1.75331 5.71703 1.95455 5.93429 2.14966 6.12412C2.54067 6.50455 3.05512 6.91025 3.43095 7.20488L3.89944 7.54403C4.00765 7.60935 4.50779 7.91128 5.07461 7.63632C5.64021 7.36196 5.71204 6.78592 5.72781 6.65947L5.72823 6.65613C5.7503 6.47969 5.75014 6.26403 5.75002 6.0884L5.75 5.50586L8.25004 5.50586Z',
  d6: 'M15.5302 9.91601L11 9.91601M11 9.91601L4.75 9.91601C3.7835 9.91601 3 10.6995 3 11.666C3 12.6325 3.7835 13.416 4.75 13.416H10L10 19C10 20.6569 11.3431 22 13 22H19C20.6569 22 22 20.6569 22 19V10.5L18.1426 7.98731C16.8152 7.11571 16.2011 7.01657 15.5302 7.00083C15.2276 6.99373 14.9256 7.03246 14.6346 7.11571C13.9894 7.30031 13.4448 7.77679 12.3558 8.7297L11 9.91601Z',
  d7: 'M8 4.5L2.67251 4.5M4.5 2L2 4.5L4.5 7',
  d8: 'M14.4283 6.39464C14.7921 6.29057 15.1695 6.24216 15.5478 6.25103C15.9259 6.25991 16.3291 6.29394 16.8294 6.46228C17.3153 6.62579 17.86 6.90464 18.5531 7.35959L18.5543 7.36038L22.75 10.0935V19C22.75 21.0711 21.0711 22.75 19 22.75H13C10.9289 22.75 9.25 21.0711 9.25 19L9.25 14.166H4.75C3.36929 14.166 2.25 13.0467 2.25 11.666C2.25 10.2853 3.36929 9.16601 4.75 9.16601L10.7182 9.16601L11.8619 8.16526L11.8851 8.145C12.4099 7.68575 12.8377 7.31144 13.2153 7.03183C13.6082 6.74093 13.9876 6.52073 14.4283 6.39464Z',
  d9: 'M5.07843 5.45711L5.87132 6.25L4.45711 7.66421L1.25 4.45711L4.45711 1.25L5.87132 2.66421L5.07843 3.45711L8.66421 3.45711V5.45711L5.07843 5.45711Z',
};

export const IconPointingLeft04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-04-stroke-rounded IconPointingLeft04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPointingLeft04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-04-duotone-rounded IconPointingLeft04DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPointingLeft04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-04-twotone-rounded IconPointingLeft04TwotoneRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconPointingLeft04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-04-solid-rounded IconPointingLeft04SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-04-bulk-rounded IconPointingLeft04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-04-stroke-sharp IconPointingLeft04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-04-solid-sharp IconPointingLeft04SolidSharp"
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

export const iconPackOfPointingLeft04: TheIconSelfPack = {
  name: 'PointingLeft04',
  StrokeRounded: IconPointingLeft04StrokeRounded,
  DuotoneRounded: IconPointingLeft04DuotoneRounded,
  TwotoneRounded: IconPointingLeft04TwotoneRounded,
  SolidRounded: IconPointingLeft04SolidRounded,
  BulkRounded: IconPointingLeft04BulkRounded,
  StrokeSharp: IconPointingLeft04StrokeSharp,
  SolidSharp: IconPointingLeft04SolidSharp,
};
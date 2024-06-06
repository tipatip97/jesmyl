import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M18.9994 3C18.0496 3 17.4337 3.6057 16.7054 3.82647C16.4092 3.91624 16.2611 3.96112 16.2012 4.02439C16.1413 4.08767 16.1237 4.18012 16.0886 4.36504C15.7131 6.3438 16.534 8.17319 18.4917 8.88524C18.702 8.96175 18.8072 9 19.0005 9C19.1937 9 19.2989 8.96174 19.5092 8.88524C21.4668 8.17318 22.2869 6.34379 21.9113 4.36504C21.8761 4.18009 21.8586 4.08762 21.7986 4.02435C21.7387 3.96107 21.5906 3.91621 21.2945 3.8265C20.5659 3.60574 19.9493 3 18.9994 3Z',
  d4: 'M4.801 14.6493C7.98419 12.7836 12.0162 12.7836 15.1994 14.6493C15.3002 14.7084 15.4257 14.7781 15.5686 14.8574C16.2012 15.2086 17.1731 15.7481 17.8385 16.3892C18.254 16.7896 18.6635 17.3303 18.7383 18.0037C18.8184 18.7252 18.4961 19.3911 17.8798 19.9691C16.8297 20.9539 15.5618 21.75 13.9194 21.75H6.08096C4.43862 21.75 3.1707 20.9538 2.12062 19.9691C1.5043 19.3911 1.18195 18.7252 1.26207 18.0037C1.33684 17.3303 1.7464 16.7896 2.16189 16.3892C2.82728 15.7481 3.79919 15.2086 4.43183 14.8574C4.57465 14.7781 4.7002 14.7084 4.801 14.6493Z',
  d5: 'M5.25019 7C5.25019 4.37665 7.37684 2.25 10.0002 2.25C12.6235 2.25 14.7502 4.37665 14.7502 7C14.7502 9.62335 12.6235 11.75 10.0002 11.75C7.37684 11.75 5.25019 9.62335 5.25019 7Z',
  d6: 'M17.4382 2.65753C17.8424 2.45859 18.356 2.25 18.9995 2.25C19.643 2.25 20.1567 2.45858 20.561 2.65748C20.7079 2.72971 20.8295 2.79351 20.9366 2.84971L20.9366 2.84972C21.1589 2.96629 21.3187 3.05014 21.512 3.10871L21.5305 3.11431C21.6624 3.15426 21.793 3.19379 21.8968 3.23243C21.9819 3.2641 22.1831 3.33959 22.3432 3.50855C22.4832 3.65631 22.5476 3.81672 22.5826 3.93323C22.6106 4.02638 22.6305 4.13169 22.6449 4.20794L22.6449 4.20796L22.6482 4.22515C23.0805 6.50215 22.1259 8.73156 19.7657 9.59006L19.7444 9.59781C19.5385 9.67285 19.3268 9.75 19.0005 9.75C18.6743 9.75 18.4626 9.67286 18.2567 9.59782L18.2354 9.59007C15.8753 8.73167 14.9196 6.50244 15.3519 4.22519L15.3551 4.208C15.3695 4.13177 15.3894 4.02645 15.4174 3.9333C15.4524 3.8168 15.5168 3.65641 15.6568 3.50865C15.8168 3.33968 16.018 3.26416 16.1031 3.23249C16.2069 3.19384 16.3375 3.15429 16.4694 3.11431L16.4879 3.10872C16.6811 3.05017 16.8407 2.96637 17.0627 2.84984L17.0627 2.84984C17.1698 2.79363 17.2914 2.72981 17.4382 2.65753Z',
  d7: 'M2 20.9997H17C17 16.9063 13.6421 13.5879 9.5 13.5879C5.35786 13.5879 2 16.9063 2 20.9997Z',
  d8: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d9: 'M19.005 8.00781C17.948 8.00781 17.2013 8.92608 16.1622 8.92338C15.5831 11.3243 16.5962 13.1146 18.3934 13.8187C18.6033 13.8952 18.8131 14.0078 19.006 14.0078C19.1989 14.0078 19.3039 13.9696 19.5138 13.8931C21.7697 13.071 22.3212 10.9312 21.84 8.91978C20.8791 8.91978 19.953 8.00781 19.005 8.00781Z',
  d10: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d11: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d12: 'M17.2721 7.76475C17.6871 7.54903 18.2625 7.25 18.9999 7.25C19.7403 7.25 20.3161 7.54951 20.7317 7.7657C21.1821 7.9996 21.4958 8.14999 21.8376 8.14999H22.4247L22.5657 8.71996C22.9206 10.1556 22.7547 11.5194 22.1347 12.6085C21.5124 13.7018 20.4593 14.4679 19.1497 14.7349L18.9999 14.7654L18.8501 14.7349C17.5404 14.4679 16.4874 13.7018 15.8651 12.6085C15.2451 11.5194 15.0792 10.1556 15.4342 8.71996L15.5751 8.14999H16.1622C16.505 8.14999 16.8217 7.99843 17.2721 7.76475Z',
};

export const IconUserShield02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-02-stroke-rounded IconUserShield02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserShield02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-02-duotone-rounded IconUserShield02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserShield02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-02-twotone-rounded IconUserShield02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserShield02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-02-solid-rounded IconUserShield02SolidRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserShield02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-02-bulk-rounded IconUserShield02BulkRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserShield02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-02-stroke-sharp IconUserShield02StrokeSharp"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserShield02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-02-solid-sharp IconUserShield02SolidSharp"
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserShield02: TheIconSelfPack = {
  name: 'UserShield02',
  StrokeRounded: IconUserShield02StrokeRounded,
  DuotoneRounded: IconUserShield02DuotoneRounded,
  TwotoneRounded: IconUserShield02TwotoneRounded,
  SolidRounded: IconUserShield02SolidRounded,
  BulkRounded: IconUserShield02BulkRounded,
  StrokeSharp: IconUserShield02StrokeSharp,
  SolidSharp: IconUserShield02SolidSharp,
};
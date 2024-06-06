import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.2273 7.78947V3.57895C11.2273 2.70692 10.5353 2 9.68182 2C8.82829 2 8.13636 2.70692 8.13636 3.57895V14.0655L6.46696 12.3546C5.73449 11.6039 4.52795 11.6724 3.88085 12.5014C3.38571 13.1357 3.37204 14.033 3.8476 14.6829L6.94263 18.9123C7.64502 19.8721 7.99622 20.352 8.41886 20.725C9.06365 21.2941 9.83631 21.6901 10.6674 21.8773C11.2121 22 11.7975 22 12.9681 22C15.2003 22 16.3164 22 17.205 21.6504C18.5637 21.1159 19.6373 20.0155 20.1589 18.623C20.5 17.7123 20.5 16.5684 20.5 14.2807V11.6782C20.5 10.649 19.7718 9.77073 18.7782 9.60154L18.4254 9.54147C17.8934 9.45089 17.4091 9.87003 17.4091 10.4211M11.2273 7.78947L11.8225 7.48542C12.1086 7.33925 12.4286 7.24491 12.7397 7.3211C13.6452 7.54286 14.3182 8.37534 14.3182 9.36842M11.2273 7.78947V10.4211M14.3182 9.36842V10.4211M14.3182 9.36842C14.3182 8.78707 14.7795 8.31579 15.3485 8.31579C16.4865 8.31579 17.4091 9.25835 17.4091 10.4211M17.4091 10.4211V11.4737',
  d2: 'M6.94263 18.9123L3.8476 14.6829C3.37204 14.033 3.38571 13.1357 3.88085 12.5014C4.52795 11.6724 5.73449 11.6039 6.46696 12.3546L8.13636 14.0655V3.57895C8.13636 2.70692 8.82829 2 9.68182 2C10.5353 2 11.2273 2.70692 11.2273 3.57895V7.78947L11.8225 7.48542C12.1086 7.33925 12.4286 7.24491 12.7397 7.3211C13.6452 7.54286 14.3182 8.37534 14.3182 9.36842C14.3182 8.78707 14.7795 8.31579 15.3485 8.31579C16.4865 8.31579 17.4091 9.25835 17.4091 10.4211C17.4091 9.87003 17.8934 9.45088 18.4254 9.54147L18.7782 9.60154C19.7718 9.77073 20.5 10.649 20.5 11.6782V14.2807C20.5 16.5684 20.5 17.7123 20.1589 18.623C19.6373 20.0155 18.5637 21.1159 17.205 21.6504C16.3164 22 15.2003 22 12.9681 22C11.7975 22 11.2121 22 10.6674 21.8773C9.83631 21.6901 9.06365 21.2941 8.41886 20.725C7.99622 20.352 7.64502 19.8721 6.94263 18.9123Z',
  d3: 'M11.2273 7.78947V3.57895C11.2273 2.70692 10.5353 2 9.68182 2C8.82829 2 8.13636 2.70692 8.13636 3.57895V14.0655L6.46696 12.3546C5.73449 11.6039 4.52795 11.6724 3.88085 12.5014C3.38571 13.1357 3.37204 14.033 3.8476 14.6829L6.94263 18.9123C7.64502 19.8721 7.99622 20.352 8.41886 20.725C9.06365 21.2941 9.83631 21.6901 10.6674 21.8773C11.2121 22 11.7975 22 12.9681 22C15.0322 22 16.142 22 17 21.7236M11.2273 7.78947L11.8225 7.48542C12.1086 7.33925 12.4286 7.24491 12.7397 7.3211C13.6452 7.54286 14.3182 8.37534 14.3182 9.36842V10.4211M11.2273 7.78947V10.4211',
  d4: 'M3.06299 14.7491L6.39311 19.4315C7.04214 20.3186 7.43824 20.86 7.92247 21.2873C8.66082 21.939 9.5472 22.3937 10.5025 22.6089C11.1295 22.7502 11.9149 22.7501 12.9946 22.75C14.0882 22.75 14.9456 22.75 15.6392 22.7047C16.3449 22.6586 16.9328 22.5634 17.4795 22.3483C19.0401 21.7343 20.2666 20.4734 20.8612 18.886C21.0687 18.3319 21.161 17.735 21.2058 17.0147C21.2499 16.3057 21.2499 15.4285 21.2499 14.3062V11.6781C21.2499 10.4784 20.4017 9.24132 19.1377 8.9343C18.8886 8.87381 18.7641 8.84356 18.649 8.93611C18.5338 9.02865 18.537 9.17741 18.5433 9.47494L18.5846 11.4122C18.5846 11.6435 18.3935 11.831 18.1577 11.831C17.9219 11.831 17.7308 11.6435 17.7308 11.4122V9.04866C17.7308 8.9602 17.7308 8.91597 17.7167 8.87167C17.7026 8.82737 17.6799 8.7952 17.6345 8.73084C17.2175 8.14032 16.629 7.73647 15.6647 7.62162C15.3998 7.59007 15.2673 7.5743 15.1665 7.66381C15.0657 7.75333 15.0657 7.89827 15.0657 8.18816V10.2365C15.0657 10.4678 14.8746 10.6553 14.6388 10.6553C14.403 10.6553 14.2119 10.4678 14.2119 10.2365V7.56781C14.2119 7.44014 14.2119 7.3763 14.1832 7.31547C14.1544 7.25463 14.1113 7.21915 14.025 7.14818C13.7071 6.88666 13.3311 6.69377 12.918 6.59259C12.7018 6.53965 12.3187 6.53365 11.9967 6.5564C11.8042 6.57 11.7079 6.5768 11.6274 6.66321C11.5469 6.74962 11.5469 6.85819 11.5469 7.07533V10.2365C11.5469 10.4678 11.3557 10.6553 11.1199 10.6553C10.8841 10.6553 10.693 10.4678 10.693 10.2365L10.6934 2.5828C10.6935 1.84672 10.0968 1.25 9.3607 1.25C8.62466 1.25 8.02798 1.84668 8.02798 2.58272V14.307C8.02798 14.4773 7.92282 14.6307 7.762 14.6949C7.60118 14.7591 7.41674 14.7214 7.29549 14.5995L5.39494 12.6885C4.74257 12.0326 3.67125 12.0908 3.09285 12.8177C2.88307 13.0814 2.76917 13.3971 2.75195 13.7173C2.76211 13.9714 2.80982 14.2244 2.8952 14.4672C2.94052 14.5654 2.99644 14.6599 3.06299 14.7491Z',
  d5: 'M14.3182 12.4211V10.5C14.3182 10.3247 14.2881 10.1564 14.2328 10M17.4091 12.9737V11.5C17.4091 11.3247 17.379 11.1564 17.3237 11M11.2273 9V11.4211M11.2273 9H12.8182C13.4713 9 14.0269 9.4174 14.2328 10M11.2273 9V3.57895C11.2273 2.70692 10.5353 2 9.68182 2C8.82829 2 8.13636 2.70692 8.13636 3.57895V14.0655L6.46696 12.3546C5.73449 11.6039 4.52795 11.6724 3.88085 12.5014C3.38571 13.1357 3.37204 14.033 3.8476 14.6829L8.13636 22H17.5C19.1569 22 20.5 20.6569 20.5 19V12.5C20.5 11.6716 19.8284 11 19 11H17.3237M14.2328 10H15.9091C16.5622 10 17.1178 10.4174 17.3237 11',
  d6: 'M5.43585 12.6673C4.77342 12.0009 3.6853 12.0601 3.09815 12.7984C2.64562 13.3674 2.63291 14.175 3.06785 14.7584L3.07978 14.7744L7.8425 22.7499H18.2423C19.9034 22.7499 21.25 21.4283 21.25 19.7979V12.5569C21.25 11.8494 20.6656 11.2758 19.9448 11.2758H18.5364V13.0846H17.7419V11.4429C17.7419 11.2925 17.7157 11.1489 17.6677 11.0159C17.4884 10.5178 17.0044 10.1619 16.4367 10.1619H15.0283V12.469H14.2338V10.329C14.2338 10.1785 14.2076 10.035 14.1597 9.90189C13.9803 9.40379 13.4963 9.04786 12.9286 9.04786H11.5202V11.355H10.7257V2.69162C10.7257 1.89543 10.0803 1.25 9.28412 1.25C8.48794 1.25 7.8425 1.89543 7.8425 2.69162V15.2588L5.43585 12.6673Z',
};

export const IconTouch07StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-07-stroke-rounded IconTouch07StrokeRounded"
    >
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

export const IconTouch07DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-07-duotone-rounded IconTouch07DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconTouch07TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-07-twotone-rounded IconTouch07TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch07SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-07-solid-rounded IconTouch07SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch07BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-07-bulk-rounded IconTouch07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch07StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-07-stroke-sharp IconTouch07StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch07SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-07-solid-sharp IconTouch07SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouch07: TheIconSelfPack = {
  name: 'Touch07',
  StrokeRounded: IconTouch07StrokeRounded,
  DuotoneRounded: IconTouch07DuotoneRounded,
  TwotoneRounded: IconTouch07TwotoneRounded,
  SolidRounded: IconTouch07SolidRounded,
  BulkRounded: IconTouch07BulkRounded,
  StrokeSharp: IconTouch07StrokeSharp,
  SolidSharp: IconTouch07SolidSharp,
};
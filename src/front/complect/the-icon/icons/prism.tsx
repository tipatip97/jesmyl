import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 15C12.3229 15 12.6069 15.2004 13.1749 15.6011L16.9191 18.2431C19.1042 19.7849 20.1967 20.5558 19.9708 21.2779M12 15C11.6771 15 11.3931 15.2004 10.8251 15.6011L7.08088 18.2431C4.89585 19.7849 3.80333 20.5558 4.02915 21.2779M12 15V11.5M19.9708 21.2779C19.745 22 18.4114 22 15.7443 22H8.25573C5.58856 22 4.25498 22 4.02915 21.2779M19.9708 21.2779V8M4.02915 21.2779V8',
  d2: 'M12 2C12.3229 2 12.6069 2.20038 13.1749 2.60114L16.9191 5.24311C19.1042 6.78487 20.1967 7.55575 19.9708 8.27788C19.745 9 18.4114 9 15.7443 9H8.25573C5.58856 9 4.25498 9 4.02915 8.27788C3.80333 7.55575 4.89585 6.78487 7.08088 5.24311L10.8251 2.60114C11.3931 2.20038 11.6771 2 12 2ZM12 2V6.5',
  d3: 'M15.7443 22H8.25573C5.58856 22 4.25498 22 4.02915 21.2779C3.80333 20.5558 4.89585 19.7849 7.08088 18.2431L10.8251 15.6011C11.3931 15.2004 11.6771 15 12 15C12.3229 15 12.6069 15.2004 13.1749 15.6011L16.9191 18.2431C19.1042 19.7849 20.1967 20.5558 19.9708 21.2779C19.745 22 18.4114 22 15.7443 22Z',
  d4: 'M15.7443 9H8.25573C5.58856 9 4.25498 9 4.02915 8.27788C3.80333 7.55575 4.89585 6.78487 7.08088 5.24311L10.8251 2.60114C11.3931 2.20038 11.6771 2 12 2C12.3229 2 12.6069 2.20038 13.1749 2.60114L16.9191 5.24311C19.1042 6.78487 20.1967 7.55575 19.9708 8.27788C19.745 9 18.4114 9 15.7443 9Z',
  d5: 'M19.969 8V20.9725C19.969 21.1007 19.969 21.1648 19.8934 21.3481C19.8178 21.5313 19.816 21.5331 19.8126 21.5366C19.3515 22 18.0431 22 15.7425 22H8.25392C5.95329 22 4.6449 22 4.1838 21.5366C4.18034 21.5331 4.17862 21.5313 4.10298 21.3481C4.02734 21.1648 4.02734 21.1007 4.02734 20.9724V8',
  d6: 'M19.5 21.5L12 15M12 15L4.5 21.5M12 15L12 11.5',
  d7: 'M12 6V3',
  d8: 'M4.22204 6.96484C4.75888 6.96484 5.19408 7.39809 5.19408 7.93252V18.4199C5.60522 18.1154 6.07746 17.7822 6.59886 17.4143L10.4214 14.7171C10.6808 14.534 10.9237 14.3626 11.1435 14.2418C11.3879 14.1075 11.6667 13.9988 12.0002 13.9988C12.3337 13.9988 12.6124 14.1075 12.8569 14.2418C13.0767 14.3626 13.3195 14.534 13.5789 14.7171L17.4015 17.4143C17.9226 17.782 18.3947 18.115 18.8057 18.4194V7.93252C18.8057 7.39809 19.2409 6.96484 19.7777 6.96484C20.3145 6.96484 20.7497 7.39809 20.7497 7.93252V20.7812C20.7497 20.7857 20.7497 20.7903 20.7496 20.7948C20.7544 20.9424 20.7355 21.095 20.6868 21.2506C20.5577 21.6636 20.2683 21.9398 19.9321 22.1119C19.6199 22.2716 19.2485 22.3531 18.8698 22.4023C18.1264 22.4989 17.0874 22.4989 15.8058 22.4988H8.19458C6.91295 22.4989 5.87398 22.4989 5.13052 22.4023C4.75185 22.3531 4.38046 22.2716 4.06829 22.1119C3.73208 21.9398 3.44268 21.6636 3.31352 21.2506C3.26628 21.0995 3.24707 20.9513 3.25036 20.8077C3.25012 20.7989 3.25 20.79 3.25 20.7812V7.93252C3.25 7.39809 3.6852 6.96484 4.22204 6.96484Z',
  d9: 'M12 10.75C12.5523 10.75 13 11.1977 13 11.75V14.75C13 15.3023 12.5523 15.75 12 15.75C11.4477 15.75 11 15.3023 11 14.75V11.75C11 11.1977 11.4477 10.75 12 10.75Z',
  d10: 'M11 2.02494C11 1.72846 11 1.58023 10.9004 1.52242C10.895 1.51932 10.8891 1.51621 10.8834 1.51364C10.7788 1.46559 10.6597 1.54965 10.4214 1.71778L6.59886 4.41501C5.54851 5.15611 4.69762 5.75647 4.14384 6.26501C3.86178 6.52402 3.60488 6.80465 3.44083 7.11443C3.26453 7.44733 3.18453 7.83883 3.31352 8.2513C3.44268 8.66433 3.73208 8.94056 4.06829 9.11259C4.38046 9.27233 4.75185 9.35388 5.13052 9.40306C5.87398 9.49961 6.91292 9.49959 8.19455 9.49957H15.8058C17.0874 9.49959 18.1264 9.49961 18.8698 9.40306C19.2485 9.35388 19.6199 9.27233 19.9321 9.11259C20.2683 8.94056 20.5577 8.66433 20.6868 8.2513C20.8158 7.83883 20.7358 7.44733 20.5595 7.11443C20.3955 6.80465 20.1386 6.52402 19.8565 6.26501C19.3027 5.75647 18.4519 5.15612 17.4015 4.41502L13.5789 1.71778C13.3403 1.54941 13.2211 1.46522 13.1163 1.51351C13.1109 1.51601 13.1051 1.51902 13.0999 1.52201C13 1.57977 13 1.72823 13 2.02514V6.24957C13 6.80185 12.5523 7.24957 12 7.24957C11.4477 7.24957 11 6.80185 11 6.24957V2.02494Z',
  d11: 'M13 14.3264V11.75C13 11.1977 12.5523 10.75 12 10.75C11.4477 10.75 11 11.1977 11 11.75V14.3266C11.0488 14.2967 11.0967 14.2687 11.1435 14.2429C11.3879 14.1086 11.6667 14 12.0002 14C12.3337 14 12.6124 14.1086 12.8569 14.2429C12.9035 14.2686 12.9513 14.2965 13 14.3264Z',
  d12: 'M12.0001 15L12 11M12.0001 15L19.489 21.5529M12.0001 15L4.51101 21.5529M20 9V22H4V9',
  d13: 'M12.0001 2L20 9H4L12.0001 2ZM12.0001 2L12 7',
  d14: 'M5 8.75V19.5463L11.0001 14.2962L11 11.75L13 11.75L13.0001 14.2962L19 19.5462V8.75H21V21.75C21 22.3023 20.5523 22.75 20 22.75H4C3.44772 22.75 3 22.3023 3 21.75V8.75H5Z',
  d15: 'M11 1.25012V6.74978L13 6.74982V1.25L20.6586 7.99721C20.9721 8.27155 21.0827 8.71153 20.9361 9.10151C20.7896 9.4915 20.4167 9.74978 20 9.74978H4.00005C3.58343 9.74978 3.21047 9.4915 3.06394 9.10151C2.91741 8.71151 3.02801 8.27154 3.34155 7.9972L11 1.25012Z',
};

export const IconPrismStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-stroke-rounded IconPrismStrokeRounded"
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

export const IconPrismDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-duotone-rounded IconPrismDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconPrismTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-twotone-rounded IconPrismTwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrismSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-solid-rounded IconPrismSolidRounded"
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrismBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-bulk-rounded IconPrismBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrismStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-stroke-sharp IconPrismStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrismSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-solid-sharp IconPrismSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPrism: TheIconSelfPack = {
  name: 'Prism',
  StrokeRounded: IconPrismStrokeRounded,
  DuotoneRounded: IconPrismDuotoneRounded,
  TwotoneRounded: IconPrismTwotoneRounded,
  SolidRounded: IconPrismSolidRounded,
  BulkRounded: IconPrismBulkRounded,
  StrokeSharp: IconPrismStrokeSharp,
  SolidSharp: IconPrismSolidSharp,
};
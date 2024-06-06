import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.5 7.5C9.99153 8.0057 11.2998 10 12 10M14.5 7.5C14.0085 8.0057 12.7002 10 12 10M12 10V4',
  d2: 'M18.3633 10.6357L16.9491 12.05',
  d3: 'M3 17H5',
  d4: 'M5.63657 10.6356L7.05078 12.0498',
  d5: 'M21 17H19',
  d6: 'M21 20H3',
  d7: 'M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17',
  d8: 'M18.3633 10.6367L16.9491 12.0509',
  d9: 'M5.63657 10.6366L7.05078 12.0508',
  d10: 'M12 13C9.79086 13 8 14.7909 8 17H16C16 14.7909 14.2091 13 12 13Z',
  d11: 'M13.0059 3C13.0059 2.44772 12.5581 2 12.0059 2C11.4536 2 11.0059 2.44772 11.0059 3L11.0059 6.00004L10.4116 6.00002C10.236 5.99989 10.0203 5.99974 9.84387 6.02181L9.84053 6.02223C9.71408 6.038 9.13804 6.10983 8.86368 6.67543C8.58872 7.24225 8.89065 7.74239 8.95597 7.8506L9.29511 8.31908C9.58975 8.69491 9.99545 9.20937 10.3759 9.60038C10.5657 9.79549 10.783 9.99672 11.0139 10.1556C11.2191 10.2968 11.5693 10.5 12 10.5C12.4307 10.5 12.7809 10.2968 12.9861 10.1556C13.217 9.99672 13.4343 9.79549 13.6241 9.60038C14.0046 9.20937 14.4102 8.69492 14.7049 8.31909L15.044 7.85059C15.1093 7.74239 15.4113 7.24225 15.1363 6.67543C14.862 6.10983 14.2859 6.03799 14.1595 6.02223L14.1561 6.02181C13.9797 5.99974 13.764 5.99989 13.5884 6.00002L13.0059 6.00004L13.0059 3Z',
  d12: 'M19.0704 9.92961C19.4609 10.3201 19.4609 10.9533 19.0704 11.3438L18.0097 12.4045C17.6192 12.795 16.986 12.795 16.5955 12.4045C16.205 12.014 16.205 11.3808 16.5955 10.9903L17.6562 9.92961C18.0467 9.53909 18.6799 9.53909 19.0704 9.92961ZM4.9295 9.93023C5.32002 9.53971 5.95319 9.53971 6.34371 9.93023L7.40437 10.9909C7.7949 11.3814 7.7949 12.0146 7.40437 12.4051C7.01385 12.7956 6.38068 12.7956 5.99016 12.4051L4.9295 11.3444C4.53897 10.9539 4.53897 10.3208 4.9295 9.93023ZM2 17.0007C2 16.4484 2.44772 16.0007 3 16.0007H4.5C5.05228 16.0007 5.5 16.4484 5.5 17.0007C5.5 17.553 5.05228 18.0007 4.5 18.0007H3C2.44772 18.0007 2 17.553 2 17.0007ZM18.5 17.0007C18.5 16.4484 18.9477 16.0007 19.5 16.0007H21C21.5523 16.0007 22 16.4484 22 17.0007C22 17.553 21.5523 18.0007 21 18.0007H19.5C18.9477 18.0007 18.5 17.553 18.5 17.0007Z',
  d13: 'M22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21Z',
  d14: 'M7 17C7 14.2386 9.23858 12 12 12C14.7614 12 17 14.2386 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z',
  d15: 'M9.5 7.5L12 10L14.5 7.5M12 4V9.38803',
  d16: 'M12.0001 9.91406L15.2072 6.70696L13.793 5.29274L13.0001 6.08564V2.49985L11.0001 2.49985V6.08564L10.2072 5.29274L8.79297 6.70696L12.0001 9.91406Z',
  d17: 'M16.242 10.8439L17.6562 9.42969L19.0705 10.8439L17.6563 12.2581L16.242 10.8439Z',
  d18: 'M3 15.501H5V17.501H3V15.501Z',
  d19: 'M6.3436 9.42954L7.75781 10.8438L6.3436 12.258L4.92939 10.8438L6.3436 9.42954Z',
  d20: 'M19 15.501H21V17.501H19V15.501Z',
  d21: 'M3 19.501H21V21.501H3V19.501Z',
  d22: 'M17 17.501H7V16.501C7 13.7396 9.23858 11.501 12 11.501C14.7614 11.501 17 13.7396 17 16.501V17.501Z',
};

export const IconSunsetStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sunset-stroke-rounded IconSunsetStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunsetDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sunset-duotone-rounded IconSunsetDuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunsetTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sunset-twotone-rounded IconSunsetTwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunsetSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sunset-solid-rounded IconSunsetSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunsetBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sunset-bulk-rounded IconSunsetBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunsetStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sunset-stroke-sharp IconSunsetStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunsetSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sunset-solid-sharp IconSunsetSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunset: TheIconSelfPack = {
  name: 'Sunset',
  StrokeRounded: IconSunsetStrokeRounded,
  DuotoneRounded: IconSunsetDuotoneRounded,
  TwotoneRounded: IconSunsetTwotoneRounded,
  SolidRounded: IconSunsetSolidRounded,
  BulkRounded: IconSunsetBulkRounded,
  StrokeSharp: IconSunsetStrokeSharp,
  SolidSharp: IconSunsetSolidSharp,
};
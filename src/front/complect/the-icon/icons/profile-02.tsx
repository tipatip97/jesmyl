import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 7.75736 2 5.63604 3.46447 4.31802C4.92893 3 7.28596 3 12 3C16.714 3 19.0711 3 20.5355 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.5355 19.682C19.0711 21 16.714 21 12 21C7.28596 21 4.92893 21 3.46447 19.682C2 18.364 2 16.2426 2 12Z',
  d2: 'M8.4 8H7.6C6.84575 8 6.46863 8 6.23431 8.23431C6 8.46863 6 8.84575 6 9.6V10.4C6 11.1542 6 11.5314 6.23431 11.7657C6.46863 12 6.84575 12 7.6 12H8.4C9.15425 12 9.53137 12 9.76569 11.7657C10 11.5314 10 11.1542 10 10.4V9.6C10 8.84576 10 8.46863 9.76569 8.23431C9.53137 8 9.15425 8 8.4 8Z',
  d3: 'M6 16H10',
  d4: 'M14 8H18',
  d5: 'M14 12H18',
  d6: 'M14 16H18',
  d7: 'M3.46447 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.46447 19.682C4.92893 21 7.28596 21 12 21C16.714 21 19.0711 21 20.5355 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.5355 4.31802C19.0711 3 16.714 3 12 3C7.28596 3 4.92893 3 3.46447 4.31802ZM7.6 8H8.4C9.15425 8 9.53137 8 9.76569 8.23431C10 8.46863 10 8.84576 10 9.6V10.4C10 11.1542 10 11.5314 9.76569 11.7657C9.53137 12 9.15425 12 8.4 12H7.6C6.84575 12 6.46863 12 6.23431 11.7657C6 11.5314 6 11.1542 6 10.4V9.6C6 8.84575 6 8.46863 6.23431 8.23431C6.46863 8 6.84575 8 7.6 8Z',
  d8: 'M17.5765 2.42018C16.1699 2.24998 14.365 2.24999 12.0522 2.25C9.73933 2.24999 7.83014 2.24998 6.42355 2.42018C4.99222 2.59338 3.85936 2.95359 2.96274 3.76055C2.05481 4.57769 1.63908 5.62747 1.44129 6.95147C1.24997 8.23221 1.24998 9.99422 1.25 12.0625C1.24998 14.1308 1.24997 15.7678 1.44129 17.0485C1.63908 18.3725 2.05481 19.4223 2.96274 20.2395C3.85936 21.0464 4.99222 21.4066 6.42355 21.5798C7.83014 21.75 9.73935 21.75 12.0522 21.75C14.365 21.75 16.1699 21.75 17.5765 21.5798C19.0078 21.4066 20.1406 21.0464 21.0373 20.2395C21.9452 19.4223 22.3609 18.3725 22.5587 17.0485C22.75 15.7678 22.75 14.1308 22.75 12.0625C22.75 9.99426 22.75 8.23221 22.5587 6.95147C22.3609 5.62747 21.9452 4.57769 21.0373 3.76055C20.1406 2.95359 19.0078 2.59338 17.5765 2.42018ZM9.37776 7.28599C9.10926 7.24989 8.78264 7.24995 8.44175 7.25H7.55827C7.21738 7.24995 6.89076 7.24989 6.62226 7.28599C6.32124 7.32646 5.98373 7.42426 5.70399 7.70399C5.42426 7.98373 5.32646 8.32124 5.28599 8.62226C5.24989 8.89076 5.24995 9.21737 5.25001 9.55826V9.55827V10.4417V10.4418C5.24995 10.7826 5.24989 11.1093 5.28599 11.3778C5.32646 11.6788 5.42426 12.0163 5.70399 12.296C5.98373 12.5758 6.32124 12.6736 6.62226 12.714C6.89076 12.7501 7.21738 12.7501 7.55828 12.75H8.44174C8.78264 12.7501 9.10926 12.7501 9.37776 12.714C9.67878 12.6736 10.0163 12.5758 10.296 12.296C10.5758 12.0163 10.6736 11.6788 10.714 11.3778C10.7501 11.1093 10.7501 10.7826 10.75 10.4417V9.55828C10.7501 9.21738 10.7501 8.89076 10.714 8.62226C10.6736 8.32124 10.5758 7.98373 10.296 7.70399C10.0163 7.42426 9.67878 7.32646 9.37776 7.28599ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16ZM14 7.25C13.5858 7.25 13.25 7.58579 13.25 8C13.25 8.41421 13.5858 8.75 14 8.75H18C18.4142 8.75 18.75 8.41421 18.75 8C18.75 7.58579 18.4142 7.25 18 7.25H14ZM13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H14C13.5858 12.75 13.25 12.4142 13.25 12ZM14 15.25C13.5858 15.25 13.25 15.5858 13.25 16C13.25 16.4142 13.5858 16.75 14 16.75H18C18.4142 16.75 18.75 16.4142 18.75 16C18.75 15.5858 18.4142 15.25 18 15.25H14Z',
  d9: 'M12.0522 2.25C14.365 2.24999 16.1699 2.24998 17.5765 2.42018C19.0078 2.59338 20.1406 2.95359 21.0373 3.76055C21.9452 4.57769 22.3609 5.62747 22.5587 6.95147C22.75 8.23221 22.75 9.99426 22.75 12.0625C22.75 14.1308 22.75 15.7678 22.5587 17.0485C22.3609 18.3725 21.9452 19.4223 21.0373 20.2395C20.1406 21.0464 19.0078 21.4066 17.5765 21.5798C16.1699 21.75 14.365 21.75 12.0522 21.75C9.73935 21.75 7.83014 21.75 6.42355 21.5798C4.99222 21.4066 3.85936 21.0464 2.96274 20.2395C2.05481 19.4223 1.63907 18.3725 1.44129 17.0485C1.24997 15.7678 1.24998 14.1308 1.25 12.0625C1.24998 9.99422 1.24997 8.23221 1.44129 6.95147C1.63907 5.62747 2.05481 4.57769 2.96274 3.76055C3.85936 2.95359 4.99222 2.59338 6.42355 2.42018C7.83014 2.24998 9.73933 2.24999 12.0522 2.25Z',
  d10: 'M8.44175 7.25C8.78264 7.24995 9.10926 7.24989 9.37776 7.28599C9.67878 7.32646 10.0163 7.42426 10.296 7.70399C10.5758 7.98373 10.6736 8.32124 10.714 8.62226C10.7501 8.89076 10.7501 9.21738 10.75 9.55828V10.4417C10.7501 10.7826 10.7501 11.1093 10.714 11.3778C10.6736 11.6788 10.5758 12.0163 10.296 12.296C10.0163 12.5758 9.67878 12.6736 9.37776 12.714C9.10926 12.7501 8.78264 12.7501 8.44174 12.75H7.55828C7.21738 12.7501 6.89076 12.7501 6.62226 12.714C6.32124 12.6736 5.98373 12.5758 5.70399 12.296C5.42426 12.0163 5.32646 11.6788 5.28599 11.3778C5.24989 11.1093 5.24995 10.7826 5.25 10.4417V9.55827C5.24995 9.21738 5.24989 8.89076 5.28599 8.62226C5.32646 8.32124 5.42426 7.98373 5.70399 7.70399C5.98373 7.42426 6.32124 7.32646 6.62226 7.28599C6.89076 7.24989 7.21738 7.24995 7.55827 7.25H8.44175Z',
  d11: 'M5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z',
  d12: 'M13.25 8C13.25 7.58579 13.5858 7.25 14 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H14C13.5858 8.75 13.25 8.41421 13.25 8Z',
  d13: 'M13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H14C13.5858 12.75 13.25 12.4142 13.25 12Z',
  d14: 'M13.25 16C13.25 15.5858 13.5858 15.25 14 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H14C13.5858 16.75 13.25 16.4142 13.25 16Z',
  d15: 'M22 3H2V21H22V3Z',
  d16: 'M10 8H6V12H10V8Z',
  d17: 'M14 8H18M14 12H18M14 16H18',
  d18: 'M5.24756 15.9727H9.99023',
  d19: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V3C22.75 2.58579 22.4142 2.25 22 2.25H2ZM6 7.25C5.58579 7.25 5.25 7.58579 5.25 8V12C5.25 12.4142 5.58579 12.75 6 12.75H10C10.4142 12.75 10.75 12.4142 10.75 12V8C10.75 7.58579 10.4142 7.25 10 7.25H6ZM5.25 15.25H10V16.75H5.25V15.25ZM18.75 7.25H13.25V8.75H18.75V7.25ZM18.75 11.25H13.25V12.75H18.75V11.25ZM18.75 15.25H13.25V16.75H18.75V15.25Z',
};

export const IconProfile02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profile-02-stroke-rounded IconProfile02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProfile02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profile-02-duotone-rounded IconProfile02DuotoneRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProfile02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profile-02-twotone-rounded IconProfile02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconProfile02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profile-02-solid-rounded IconProfile02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProfile02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profile-02-bulk-rounded IconProfile02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProfile02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profile-02-stroke-sharp IconProfile02StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconProfile02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profile-02-solid-sharp IconProfile02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfProfile02: TheIconSelfPack = {
  name: 'Profile02',
  StrokeRounded: IconProfile02StrokeRounded,
  DuotoneRounded: IconProfile02DuotoneRounded,
  TwotoneRounded: IconProfile02TwotoneRounded,
  SolidRounded: IconProfile02SolidRounded,
  BulkRounded: IconProfile02BulkRounded,
  StrokeSharp: IconProfile02StrokeSharp,
  SolidSharp: IconProfile02SolidSharp,
};
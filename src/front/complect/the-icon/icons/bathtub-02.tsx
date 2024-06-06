import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12H15C14.3509 12 13.7193 11.7895 13.2 11.4L10.8 9.6C10.2807 9.21053 9.64911 9 9 9H2',
  d2: 'M3 9V11C3 14.7712 3 16.6569 4.17157 17.8284C5.34315 19 7.22876 19 11 19H14C16.8089 19 18.2134 19 19.2223 18.3259C19.659 18.034 20.034 17.659 20.3259 17.2223C21 16.2134 21 14.8089 21 12',
  d3: 'M18 19V21M6 19V21',
  d4: 'M5 9V4.5C5 3.67157 5.67157 3 6.5 3C7.32843 3 8 3.67157 8 4.5V5',
  d5: 'M3 11V9H8.66667C9.32748 9 9.65789 9 9.96579 9.10263C10.2737 9.20527 10.538 9.40351 11.0667 9.8L12.9333 11.2C13.462 11.5965 13.7263 11.7947 14.0342 11.8974C14.3421 12 14.6725 12 15.3333 12H21C21 14.8089 21 16.2134 20.3259 17.2223C20.034 17.659 19.659 18.034 19.2223 18.3259C18.2134 19 16.8089 19 14 19H11C7.22876 19 5.34315 19 4.17157 17.8284C3 16.6569 3 14.7712 3 11Z',
  d6: 'M2.25 11.0564V10H2C1.44772 10 1 9.55229 1 9C1 8.44771 1.44772 8 2 8H9C9.86548 8 10.7076 8.28071 11.4 8.8L13.8 10.6C14.1462 10.8596 14.5673 11 15 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H21.7487C21.7447 13.9305 21.7284 14.7085 21.6619 15.3621C21.5716 16.2497 21.3826 16.9907 20.9495 17.639C20.6029 18.1576 20.1576 18.6029 19.639 18.9495C18.9907 19.3826 18.2497 19.5716 17.3621 19.6619C16.4957 19.75 15.4108 19.75 14.0416 19.75H10.9436C9.10583 19.75 7.65019 19.75 6.51098 19.5969C5.33856 19.4392 4.38961 19.1071 3.64124 18.3588C2.89288 17.6104 2.56076 16.6614 2.40314 15.489C2.24997 14.3498 2.24998 12.8942 2.25 11.0564Z',
  d7: 'M18 18C17.4477 18 17 18.4477 17 19V21C17 21.5523 17.4477 22 18 22C18.5523 22 19 21.5523 19 21V19C19 18.4477 18.5523 18 18 18ZM6 18C5.44771 18 5 18.4477 5 19V21C5 21.5523 5.44771 22 6 22C6.55229 22 7 21.5523 7 21V19C7 18.4477 6.55229 18 6 18Z',
  d8: 'M9 4.5C9 3.11929 7.88071 2 6.5 2C5.11929 2 4 3.11929 4 4.5V9C4 9.55228 4.44772 10 5 10C5.55228 10 6 9.55228 6 9V4.5C6 4.22386 6.22386 4 6.5 4C6.77614 4 7 4.22386 7 4.5V5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V4.5Z',
  d9: 'M9 10C9.43274 10 9.85381 10.1404 10.2 10.4L12.6 12.2C13.2924 12.7193 14.1345 13 15 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H15C14.5673 11 14.1462 10.8596 13.8 10.6L11.4 8.8C10.7076 8.28071 9.86548 8 9 8H2C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10H9Z',
  d10: 'M17 19.6948C17.1248 19.6859 17.2454 19.6756 17.3621 19.6638C17.9713 19.6018 18.5115 19.4933 19 19.2913V21.0019C19 21.5542 18.5523 22.0019 18 22.0019C17.4477 22.0019 17 21.5542 17 21.0019V19.6948Z',
  d11: 'M7 19.6537C6.83087 19.638 6.66792 19.6199 6.51098 19.5988C5.95849 19.5245 5.45563 19.4114 5 19.2344V21.0019C5 21.5542 5.44771 22.0019 6 22.0019C6.55229 22.0019 7 21.5542 7 21.0019V19.6537Z',
  d12: 'M4 8H6V4.5C6 4.22386 6.22386 4 6.5 4C6.77614 4 7 4.22386 7 4.5V5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V4.5C9 3.11929 7.88071 2 6.5 2C5.11929 2 4 3.11929 4 4.5V8Z',
  d13: 'M22 11H13L10 9H2',
  d14: 'M4 9V15C4 17.2091 5.79086 19 8 19H16.0001C18.2093 19 20.0001 17.2091 20.0001 14.9999L20 11',
  d15: 'M18 18V21M6 18V21',
  d16: 'M4 9V4.5C4 3.67157 4.67157 3 5.5 3C6.32843 3 7 3.67157 7 4.5V5',
  d17: 'M21.0001 15.4999L21 12.5H22V10.5H13.3028L10.3028 8.5H2V10.5H3V15.5C3 18.2614 5.23858 20.5 8 20.5H16.0001C18.7616 20.5 21.0002 18.2613 21.0001 15.4999Z',
  d18: 'M19 21.5V18.5H17V21.5H19ZM7 21.5V18.5H5V21.5H7Z',
  d19: 'M8 5C8 3.61929 6.88071 2.5 5.5 2.5C4.11929 2.5 3 3.61929 3 5V9.5H5V5C5 4.72386 5.22386 4.5 5.5 4.5C5.77614 4.5 6 4.72386 6 5V5.5H8V5Z',
};

export const IconBathtub02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-02-stroke-rounded IconBathtub02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBathtub02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-02-duotone-rounded IconBathtub02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconBathtub02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-02-twotone-rounded IconBathtub02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBathtub02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-02-solid-rounded IconBathtub02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBathtub02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-02-bulk-rounded IconBathtub02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconBathtub02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-02-stroke-sharp IconBathtub02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBathtub02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bathtub-02-solid-sharp IconBathtub02SolidSharp"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfBathtub02: TheIconSelfPack = {
  name: 'Bathtub02',
  StrokeRounded: IconBathtub02StrokeRounded,
  DuotoneRounded: IconBathtub02DuotoneRounded,
  TwotoneRounded: IconBathtub02TwotoneRounded,
  SolidRounded: IconBathtub02SolidRounded,
  BulkRounded: IconBathtub02BulkRounded,
  StrokeSharp: IconBathtub02StrokeSharp,
  SolidSharp: IconBathtub02SolidSharp,
};
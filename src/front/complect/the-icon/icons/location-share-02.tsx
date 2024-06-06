import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.1677 7C22.2774 9.54418 22.2774 12.4558 21.1677 15M2.83226 15C1.72258 12.4558 1.72258 9.54418 2.83226 7',
  d2: 'M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z',
  d3: 'M12 3.5C16.0588 3.5 19.5 6.92803 19.5 11.0869C19.5 15.312 16.0028 18.277 12.7725 20.2932C12.5371 20.4287 12.2709 20.5 12 20.5C11.7291 20.5 11.4629 20.4287 11.2275 20.2932C8.00325 18.2573 4.5 15.3266 4.5 11.0869C4.5 6.92803 7.9412 3.5 12 3.5Z',
  d4: 'M19.5 11.0869C19.5 6.92803 16.0588 3.5 12 3.5C7.9412 3.5 4.5 6.92803 4.5 11.0869C4.5 15.3266 8.00325 18.2573 11.2275 20.2932C11.4629 20.4287 11.7291 20.5 12 20.5C12.2709 20.5 12.5371 20.4287 12.7725 20.2932C16.0028 18.277 19.5 15.312 19.5 11.0869ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z',
  d5: 'M12 2.75C7.52225 2.75 3.75 6.51857 3.75 11.0869C3.75 15.7671 7.60753 18.8945 10.8271 20.9273L10.84 20.9355L10.8533 20.9431C11.2022 21.144 11.5974 21.25 12 21.25C12.4026 21.25 12.7978 21.144 13.1467 20.9431L13.1583 20.9365L13.1696 20.9294C16.4018 18.9121 20.25 15.7513 20.25 11.0869C20.25 6.51857 16.4778 2.75 12 2.75ZM12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5C13.933 14.5 15.5 12.933 15.5 11C15.5 9.067 13.933 7.5 12 7.5Z',
  d6: 'M2.73205 6.08365C3.23827 6.30444 3.46966 6.89381 3.24886 7.40004C2.25038 9.68929 2.25038 12.3112 3.24886 14.6005C3.46966 15.1067 3.23827 15.6961 2.73205 15.9169C2.22582 16.1377 1.63645 15.9063 1.41565 15.4C0.194784 12.6009 0.194783 9.39958 1.41565 6.60046C1.63645 6.09424 2.22582 5.86285 2.73205 6.08365ZM21.268 6.08365C21.7742 5.86285 22.3636 6.09424 22.5844 6.60046C23.8052 9.39957 23.8052 12.6009 22.5844 15.4C22.3636 15.9063 21.7742 16.1377 21.268 15.9169C20.7617 15.6961 20.5303 15.1067 20.7511 14.6005C21.7496 12.3112 21.7496 9.68929 20.7511 7.40004C20.5303 6.89381 20.7617 6.30444 21.268 6.08365Z',
  d7: 'M3.75 11.0869C3.75 6.51857 7.52225 2.75 12 2.75C16.4778 2.75 20.25 6.51857 20.25 11.0869C20.25 15.7513 16.4018 18.9121 13.1696 20.9294L13.1583 20.9365L13.1467 20.9431C12.7978 21.144 12.4026 21.25 12 21.25C11.5974 21.25 11.2022 21.144 10.8533 20.9431L10.84 20.9355L10.8271 20.9273C7.60753 18.8945 3.75 15.7671 3.75 11.0869Z',
  d8: 'M8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11Z',
  d9: 'M21.1677 6.5C22.2774 9.04418 22.2774 11.9558 21.1677 14.5M2.83226 14.5C1.72258 11.9558 1.72258 9.04418 2.83226 6.5',
  d10: 'M14.5 10C14.5 11.3807 13.3807 12.5 12 12.5C10.6193 12.5 9.5 11.3807 9.5 10C9.5 8.61929 10.6193 7.5 12 7.5C13.3807 7.5 14.5 8.61929 14.5 10Z',
  d11: 'M12 3C8.13401 3 5 6.25605 5 10.2726C5 12.5693 5.875 14.355 7.625 15.9501C8.8585 17.0744 11.1028 19.4861 12 20.9999C12.9426 19.5162 15.1415 17.0744 16.375 15.9501C18.125 14.355 19 12.5693 19 10.2726C19 6.25605 15.866 3 12 3Z',
  d12: 'M3.74886 6.90016C2.75038 9.18942 2.75038 11.8113 3.74886 14.1006L1.91565 14.9002C0.694784 12.1011 0.694783 8.8997 1.91565 6.10059L3.74886 6.90016ZM20.2511 14.1006C21.2496 11.8113 21.2496 9.18942 20.2511 6.90016L22.0844 6.10059C23.3052 8.8997 23.3052 12.1011 22.0844 14.9002L20.2511 14.1006Z',
  d13: 'M12 2.25C7.69305 2.25 4.25 5.8691 4.25 10.2726C4.25 12.8044 5.23264 14.7843 7.11977 16.5044C8.33443 17.6115 10.5142 19.964 11.3548 21.3823C11.4878 21.6066 11.7277 21.7458 11.9884 21.7498C12.2491 21.7538 12.4932 21.6222 12.633 21.4021C13.5293 19.9913 15.6787 17.5996 16.8802 16.5044C18.7674 14.7843 19.75 12.8044 19.75 10.2726C19.75 5.8691 16.307 2.25 12 2.25ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z',
};

export const IconLocationShare02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-share-02-stroke-rounded IconLocationShare02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLocationShare02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-share-02-duotone-rounded IconLocationShare02DuotoneRounded"
    >
      <path 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationShare02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-share-02-twotone-rounded IconLocationShare02TwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationShare02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-share-02-solid-rounded IconLocationShare02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLocationShare02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-share-02-bulk-rounded IconLocationShare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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

export const IconLocationShare02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-share-02-stroke-sharp IconLocationShare02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationShare02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-share-02-solid-sharp IconLocationShare02SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfLocationShare02: TheIconSelfPack = {
  name: 'LocationShare02',
  StrokeRounded: IconLocationShare02StrokeRounded,
  DuotoneRounded: IconLocationShare02DuotoneRounded,
  TwotoneRounded: IconLocationShare02TwotoneRounded,
  SolidRounded: IconLocationShare02SolidRounded,
  BulkRounded: IconLocationShare02BulkRounded,
  StrokeSharp: IconLocationShare02StrokeSharp,
  SolidSharp: IconLocationShare02SolidSharp,
};
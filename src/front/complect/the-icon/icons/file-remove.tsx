import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.2727 2C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V12',
  d2: 'M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22',
  d3: 'M10 9L6.5 5.5M6.5 5.5L3 2M6.5 5.5L10 2M6.5 5.5L3 9',
  d4: 'M20.9986 13.0104C20.6582 13.8464 19.09 15.5021 15.502 15.5021C15.2005 15.5021 14.4099 15.8053 14.4508 17.4483C14.4675 18.9333 13.9262 21.8711 11.6555 21.9978C11.2055 22 10.7164 22 10.1818 22C8.38275 22 7.48321 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818L4 7C4 6.07069 4 5.60603 4.07686 5.21964C4.39249 3.63287 5.63288 2.39248 7.21964 2.07686C7.60604 2 8.07069 2 9 2L13.2727 2C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29753 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 12.2452 21 12.6414 20.9986 13.0104Z',
  d5: 'M17.1885 1.47775C16.2062 1.37499 14.9185 1.37499 13.3774 1.375C12.8377 1.375 12.4001 1.81256 12.4001 2.35231C12.4001 2.89205 12.8377 3.32959 13.3774 3.32959C14.986 3.32959 16.1172 3.33084 16.9866 3.42179C17.8405 3.51112 18.3244 3.67788 18.6823 3.93092C18.9237 4.10167 19.1361 4.30276 19.3139 4.52711C19.5695 4.84961 19.7389 5.2824 19.8311 6.06919C19.9261 6.87895 19.9276 7.93628 19.9276 9.45973L19.9277 12.3599C19.9277 12.6269 19.9276 13.2655 19.647 13.7377C19.474 14.0286 19.2526 14.2717 19.0252 14.3956C18.6586 14.5951 18.2385 14.7085 17.7918 14.7085L16.7514 14.672C16.3713 14.6641 15.9278 14.6761 15.4996 14.7908C14.6657 15.0143 14.0143 15.6657 13.7908 16.4996C13.6761 16.9278 13.6641 17.3713 13.672 17.7514L13.7085 18.7918C13.7085 19.2595 13.5841 19.6666 13.3667 20.045C13.24 20.2656 13.0193 20.4675 12.7145 20.6448C12.2524 20.9137 11.699 20.9162 11.3608 20.9177C11.0227 20.9193 10.6659 20.9204 10.3678 20.9204C8.53372 20.9204 7.86659 20.9065 7.36323 20.7291C6.4906 20.4217 5.8249 19.78 5.51481 18.9947C5.43717 18.798 5.38233 18.5396 5.35289 18.0917C5.32288 17.635 5.32239 17.052 5.32239 16.2118V12.0987C5.32239 11.5609 4.88645 11.125 4.34869 11.125C3.81094 11.125 3.375 11.5609 3.375 12.0987V16.245C3.37499 17.0441 3.37499 17.6917 3.40973 18.2202C3.44552 18.7649 3.52113 19.2505 3.7044 19.7147C4.23321 21.054 5.34164 22.0883 6.7182 22.5733C7.577 22.8759 9.04908 22.8755 10.6041 22.8749C13.4437 22.8753 15.1304 22.8755 16.5128 22.3884C18.7328 21.6063 20.5065 19.9435 21.3499 17.8075C21.631 17.0955 21.7556 16.3308 21.8158 15.4139C21.875 14.5132 21.875 13.4006 21.875 11.9823V9.39882C21.875 7.95073 21.875 6.77808 21.7652 5.84075C21.651 4.86735 21.4078 4.02947 20.838 3.3104C20.5428 2.93792 20.1942 2.60914 19.8039 2.33309C19.0591 1.80643 18.1979 1.58334 17.1885 1.47775Z',
  d6: 'M2.41789 1.41789C2.80842 1.02737 3.44158 1.02737 3.83211 1.41789L6.625 4.21079L9.41789 1.41789C9.80842 1.02737 10.4416 1.02737 10.8321 1.41789C11.2226 1.80842 11.2226 2.44158 10.8321 2.83211L8.03921 5.625L10.8321 8.41789C11.2226 8.80842 11.2226 9.44158 10.8321 9.83211C10.4416 10.2226 9.80842 10.2226 9.41789 9.83211L6.625 7.03921L3.83211 9.83211C3.44158 10.2226 2.80842 10.2226 2.41789 9.83211C2.02737 9.44158 2.02737 8.80842 2.41789 8.41789L5.21079 5.625L2.41789 2.83211C2.02737 2.44158 2.02737 1.80842 2.41789 1.41789Z',
  d7: 'M12.9877 2L20.99 2.00032C20.9955 2.00032 21 2.0048 21 2.01032V15.0003L14 22.0003H4.01C4.00448 22.0003 4 21.9958 4 21.9903V11.9588M20.5256 15.0003H14V21.4188',
  d8: 'M3.25 21.7727C3.25 22.3125 3.68593 22.75 4.22368 22.75H14.3638L21.75 15.3366V2.22727C21.75 1.68754 21.3141 1.25 20.7763 1.25H13.9869V3.2045H19.8027V13.9545H12.9869L12.9869 20.7954H5.19747V12H3.25V21.7727Z',
  d9: 'M7.45711 6.87132L10.25 9.66421L11.6642 8.25L8.87132 5.45711L11.6642 2.66421L10.25 1.25L7.45711 4.04289L4.66421 1.25L3.25 2.66421L6.04289 5.45711L3.25 8.25L4.66421 9.66421L7.45711 6.87132Z',
};

export const IconFileRemoveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-remove-stroke-rounded IconFileRemoveStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileRemoveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-remove-duotone-rounded IconFileRemoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconFileRemoveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-remove-twotone-rounded IconFileRemoveTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileRemoveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-remove-solid-rounded IconFileRemoveSolidRounded"
    >
      <path 
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

export const IconFileRemoveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-remove-bulk-rounded IconFileRemoveBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileRemoveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-remove-stroke-sharp IconFileRemoveStrokeSharp"
    >
      <path 
        d={d.d3} 
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

export const IconFileRemoveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-remove-solid-sharp IconFileRemoveSolidSharp"
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

export const iconPackOfFileRemove: TheIconSelfPack = {
  name: 'FileRemove',
  StrokeRounded: IconFileRemoveStrokeRounded,
  DuotoneRounded: IconFileRemoveDuotoneRounded,
  TwotoneRounded: IconFileRemoveTwotoneRounded,
  SolidRounded: IconFileRemoveSolidRounded,
  BulkRounded: IconFileRemoveBulkRounded,
  StrokeSharp: IconFileRemoveStrokeSharp,
  SolidSharp: IconFileRemoveSolidSharp,
};
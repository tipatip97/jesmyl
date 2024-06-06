import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V12',
  d2: 'M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22',
  d3: 'M11 6L3 6M7 2V10',
  d4: 'M20.9986 13.0104C20.6582 13.8464 19.09 15.5021 15.502 15.5021C15.2005 15.5021 14.4099 15.8053 14.4508 17.4483C14.4675 18.9333 13.9262 21.8711 11.6555 21.9978C11.2055 22 10.7164 22 10.1818 22C8.38275 22 7.48321 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818L4 7C4 6.07069 4 5.60603 4.07686 5.21964C4.39249 3.63287 5.63288 2.39248 7.21964 2.07686C7.60604 2 8.07069 2 9 2L13.2727 2C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29753 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 12.2452 21 12.6414 20.9986 13.0104Z',
  d5: 'M17.1885 1.47773C16.2062 1.37497 14.9734 1.37499 13.4323 1.375H12.6023C12.0625 1.375 11.625 1.81255 11.625 2.35229C11.625 2.89203 12.0625 3.32957 12.6023 3.32957H13.3774C14.986 3.32957 16.1172 3.33082 16.9866 3.42177C17.8405 3.5111 18.3244 3.67786 18.6823 3.9309C18.9237 4.10165 19.1361 4.30274 19.3139 4.5271C19.5695 4.84959 19.7389 5.28238 19.8311 6.06917C19.9261 6.87893 19.9276 7.93626 19.9276 9.45971L19.9277 12.3599C19.9277 12.6269 19.9276 13.2655 19.647 13.7376C19.474 14.0286 19.2526 14.2717 19.0252 14.3956C18.6586 14.5951 18.2385 14.7084 17.7918 14.7084L16.7514 14.6719C16.3713 14.6641 15.9278 14.6761 15.4996 14.7908C14.6657 15.0142 14.0143 15.6656 13.7908 16.4996C13.6761 16.9278 13.6641 17.3713 13.672 17.7514L13.7085 18.7918C13.7085 19.2595 13.5841 19.6666 13.3667 20.045C13.24 20.2656 13.0193 20.4675 12.7145 20.6448C12.2524 20.9137 11.699 20.9162 11.3608 20.9177C11.0227 20.9192 10.6659 20.9204 10.3678 20.9204C8.53372 20.9204 7.86659 20.9065 7.36323 20.7291C6.4906 20.4216 5.8249 19.78 5.51481 18.9946C5.43717 18.798 5.38233 18.5396 5.35289 18.0916C5.32288 17.635 5.32239 17.052 5.32239 16.2118V12.0987C5.32239 11.5609 4.88645 11.125 4.34869 11.125C3.81094 11.125 3.375 11.5609 3.375 12.0987V16.2449C3.37499 17.0441 3.37499 17.6916 3.40973 18.2202C3.44552 18.7649 3.52113 19.2505 3.7044 19.7147C4.23321 21.054 5.34164 22.0883 6.7182 22.5733C7.577 22.8759 9.04908 22.8755 10.6041 22.8749C13.4437 22.8753 15.1304 22.8755 16.5128 22.3884C18.7328 21.6062 20.5065 19.9435 21.3499 17.8074C21.631 17.0955 21.7556 16.3308 21.8158 15.4139C21.875 14.5132 21.875 13.4006 21.875 11.9823V9.3988C21.875 7.95071 21.875 6.77806 21.7652 5.84073C21.651 4.86733 21.4078 4.02945 20.838 3.31039C20.5428 2.9379 20.1942 2.60912 19.8039 2.33307C19.0591 1.80641 18.1979 1.58332 17.1885 1.47773Z',
  d6: 'M7.125 1.125C7.67728 1.125 8.125 1.57272 8.125 2.125V5.125H11.125C11.6773 5.125 12.125 5.57272 12.125 6.125C12.125 6.67728 11.6773 7.125 11.125 7.125H8.125V10.125C8.125 10.6773 7.67728 11.125 7.125 11.125C6.57272 11.125 6.125 10.6773 6.125 10.125V7.125H3.125C2.57272 7.125 2.125 6.67729 2.125 6.125C2.125 5.57272 2.57272 5.125 3.125 5.125H6.125V2.125C6.125 1.57272 6.57272 1.125 7.125 1.125Z',
  d7: 'M11 5.75H3M7 1.75V9.75',
  d8: 'M13.0072 1.75H20.99C20.9955 1.75 21 1.75448 21 1.76V14.75L14 21.75H4.01C4.00448 21.75 4 21.7455 4 21.74V11.75M20.5918 14.75H14V21.2409',
  d9: 'M2.75 21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H13.8638L21.25 15.3366V2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H12.4869V3.2045H19.3027V13.9545H12.4869L12.4869 20.7954H4.69747V11H2.75V21.7727Z',
  d10: 'M5.75 4.25V1.25H7.75V4.25H10.75V6.25H7.75V9.25H5.75V6.25H2.75V4.25H5.75Z',
};

export const IconFileAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-add-stroke-rounded IconFileAddStrokeRounded"
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

export const IconFileAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-add-duotone-rounded IconFileAddDuotoneRounded"
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

export const IconFileAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-add-twotone-rounded IconFileAddTwotoneRounded"
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

export const IconFileAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-add-solid-rounded IconFileAddSolidRounded"
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

export const IconFileAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-add-bulk-rounded IconFileAddBulkRounded"
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

export const IconFileAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-add-stroke-sharp IconFileAddStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-add-solid-sharp IconFileAddSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileAdd: TheIconSelfPack = {
  name: 'FileAdd',
  StrokeRounded: IconFileAddStrokeRounded,
  DuotoneRounded: IconFileAddDuotoneRounded,
  TwotoneRounded: IconFileAddTwotoneRounded,
  SolidRounded: IconFileAddSolidRounded,
  BulkRounded: IconFileAddBulkRounded,
  StrokeSharp: IconFileAddStrokeSharp,
  SolidSharp: IconFileAddSolidSharp,
};
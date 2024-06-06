import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5714 21H5.42857M8 3V21M8 3C6.81082 3 5.28326 3.12265 4.06709 3.24346C3.55271 3.29456 3.29552 3.32011 3.06788 3.41021C2.59438 3.59763 2.21271 4.00855 2.06906 4.48556C2 4.71489 2 4.97659 2 5.5M8 3C8.60727 3 9.30278 3.03198 10 3.07938',
  d2: 'M18.5706 21H13.4277M15.9992 3V21M15.9992 3C17.1883 3 18.7159 3.12265 19.9321 3.24346C20.4465 3.29456 20.7036 3.32011 20.9313 3.41021C21.4048 3.59763 21.7865 4.00855 21.9301 4.48556C21.9992 4.71489 21.9992 4.97659 21.9992 5.5M15.9992 3C15.3921 3 14.6968 3.03196 13.9999 3.07933',
  d3: 'M8 21V3H15.9992V21H8Z',
  d4: 'M7.00021 4.02423C6.06968 4.06495 5.04517 4.15125 4.16616 4.23856C3.59345 4.29545 3.50303 4.31354 3.43612 4.34003C3.23947 4.41786 3.08005 4.59707 3.0268 4.7739C3.01048 4.82812 3.00021 4.91136 3.00021 5.5C3.00021 6.05228 2.5525 6.5 2.00021 6.5C1.44793 6.5 1.00021 6.05228 1.00021 5.5C1.00021 5.46686 1.00016 5.43382 1.00011 5.40088C0.99942 4.97835 0.99876 4.57242 1.11175 4.19721C1.34579 3.42002 1.94972 2.7774 2.70006 2.4804C3.06179 2.33722 3.45438 2.29876 3.87503 2.25756C3.90602 2.25452 3.93716 2.25147 3.96846 2.24836C5.19023 2.12699 6.75884 2 8.00021 2C8.63886 2 9.35909 2.03349 10.068 2.08168C10.619 2.11913 11.0354 2.59618 10.9979 3.14719C10.9605 3.6982 10.4834 4.11453 9.9324 4.07707C9.6159 4.05556 9.30255 4.03748 9.00021 4.02426V20H9.99791C10.5502 20 10.9979 20.4477 10.9979 21C10.9979 21.5523 10.5502 22 9.99791 22H5.42878C4.8765 22 4.42878 21.5523 4.42878 21C4.42878 20.4477 4.8765 20 5.42878 20H7.00021V4.02423Z',
  d5: 'M14.9994 4.02426C14.6972 4.03747 14.3841 4.05554 14.0678 4.07703C13.5168 4.11447 13.0398 3.69814 13.0023 3.14713C12.9649 2.59612 13.3812 2.11908 13.9322 2.08163C14.641 2.03347 15.3609 2 15.9994 2C17.2407 2 18.8093 2.12699 20.0311 2.24836C20.0624 2.25147 20.0935 2.25452 20.1245 2.25756C20.5452 2.29876 20.9378 2.33722 21.2995 2.4804C22.0498 2.7774 22.6538 3.42002 22.8878 4.19721C23.0008 4.57242 23.0001 4.97835 22.9995 5.40088C22.9994 5.43382 22.9994 5.46686 22.9994 5.5C22.9994 6.05228 22.5516 6.5 21.9994 6.5C21.4471 6.5 20.9994 6.05228 20.9994 5.5C20.9994 4.91136 20.9891 4.82812 20.9728 4.7739C20.9195 4.59707 20.7601 4.41786 20.5634 4.34003C20.4965 4.31354 20.4061 4.29545 19.8334 4.23856C18.9544 4.15125 17.9299 4.06495 16.9994 4.02423V20H18.5708C19.1231 20 19.5708 20.4477 19.5708 21C19.5708 21.5523 19.1231 22 18.5708 22H14.0023C13.45 22 13.0023 21.5523 13.0023 21C13.0023 20.4477 13.45 20 14.0023 20H14.9994V4.02426Z',
  d6: 'M19 21H13M16.0011 3V21M16.0011 3L22.0011 3.07933V5.49988M16.0011 3L13 3.00012',
  d7: 'M4.99916 21H7.99805M7.99805 21H10.9992M7.99805 21V3M7.99805 3H2.00195L2.00195 5.5M7.99805 3L10.9992 3.00012',
  d8: 'M16.0144 2L22.0144 2.07942C22.5615 2.08665 23.0012 2.5322 23.0012 3.07933V5.49988H21.0012V4.0662L17.0012 4.01331V20H19V22H13V20H15.0012V4.00004L13.0001 4.00012L13 2.00012L16.0144 2Z',
  d9: 'M1.00195 3C1.00195 2.44772 1.44967 2 2.00195 2L10.9992 2.00012L10.9991 4.00012L8.99805 4.00004V20H10.9992V22H4.99916V20H6.99805V4H3.00195V5.5H1.00195V3Z',
};

export const IconTextAllCapsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-all-caps-stroke-rounded IconTextAllCapsStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextAllCapsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-all-caps-duotone-rounded IconTextAllCapsDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextAllCapsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-all-caps-twotone-rounded IconTextAllCapsTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextAllCapsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-all-caps-solid-rounded IconTextAllCapsSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextAllCapsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-all-caps-bulk-rounded IconTextAllCapsBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextAllCapsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-all-caps-stroke-sharp IconTextAllCapsStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextAllCapsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-all-caps-solid-sharp IconTextAllCapsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTextAllCaps: TheIconSelfPack = {
  name: 'TextAllCaps',
  StrokeRounded: IconTextAllCapsStrokeRounded,
  DuotoneRounded: IconTextAllCapsDuotoneRounded,
  TwotoneRounded: IconTextAllCapsTwotoneRounded,
  SolidRounded: IconTextAllCapsSolidRounded,
  BulkRounded: IconTextAllCapsBulkRounded,
  StrokeSharp: IconTextAllCapsStrokeSharp,
  SolidSharp: IconTextAllCapsSolidSharp,
};
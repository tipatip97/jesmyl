import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 8.18677C2.60406 6.08705 2.91537 4.77792 3.84664 3.84664C4.77792 2.91537 6.08705 2.60406 8.18677 2.5M21.5 8.18677C21.3959 6.08705 21.0846 4.77792 20.1534 3.84664C19.2221 2.91537 17.9129 2.60406 15.8132 2.5M15.8132 21.5C17.9129 21.3959 19.2221 21.0846 20.1534 20.1534C21.0846 19.2221 21.3959 17.9129 21.5 15.8132M8.18676 21.5C6.08705 21.3959 4.77792 21.0846 3.84664 20.1534C2.91537 19.2221 2.60406 17.9129 2.5 15.8132',
  d2: 'M9.5 10.5548C9.5 9.71317 9.36781 8.41374 9.87602 7.65606C10.9985 5.98254 13.38 6.20484 14.22 7.83834C14.6323 8.64006 14.4769 9.76092 14.496 10.5548M9.5 10.5548C8.20267 10.5548 7.93843 11.2975 7.74002 11.8801C7.55687 12.5354 7.37042 14.1001 7.65602 15.8146C7.86969 16.9068 8.70479 17.3871 9.42297 17.4481C10.1098 17.5063 13.0097 17.4841 13.8492 17.4841C15.1501 17.4841 15.9624 17.1981 16.344 15.8874C16.5272 14.868 16.5773 13.0451 16.272 11.8801C15.8676 10.715 15.0523 10.5548 14.496 10.5548M9.5 10.5548C10.8736 10.5004 13.7107 10.5111 14.496 10.5548',
  d3: 'M2.75098 7.9397C2.85504 5.83998 3.16635 4.53085 4.09762 3.59957C5.0289 2.6683 6.33803 2.35699 8.43775 2.25293H16.0642C18.1639 2.35699 19.4731 2.6683 20.4044 3.59957C21.3356 4.53085 21.6469 5.83998 21.751 7.9397V15.5661C21.6469 17.6658 21.3356 18.975 20.4044 19.9063C19.4731 20.8375 18.1639 21.1488 16.0642 21.2529H8.43774C6.33803 21.1488 5.0289 20.8375 4.09762 19.9063C3.16635 18.975 2.85504 17.6658 2.75098 15.5661V7.9397ZM9.75329 17.1995C8.8063 17.1579 8.02812 16.4533 7.90162 15.5539C7.81907 14.967 7.75098 14.3655 7.75098 13.7529C7.75098 13.1403 7.81907 12.5388 7.90162 11.9519C8.02812 11.0525 8.8063 10.3479 9.75329 10.3063C10.5502 10.2712 11.3596 10.2529 12.251 10.2529C13.1424 10.2529 13.9518 10.2712 14.7487 10.3063C15.6957 10.3479 16.4739 11.0525 16.6004 11.9519C16.6829 12.5388 16.751 13.1403 16.751 13.7529C16.751 14.3655 16.6829 14.967 16.6004 15.5539C16.4739 16.4533 15.6957 17.1579 14.7487 17.1995C13.9518 17.2346 13.1424 17.2529 12.251 17.2529C11.3596 17.2529 10.5502 17.2346 9.75329 17.1995Z',
  d4: 'M2.75098 7.9397C2.85504 5.83998 3.16635 4.53085 4.09762 3.59957C5.0289 2.6683 6.33803 2.35699 8.43775 2.25293M21.751 7.9397C21.6469 5.83998 21.3356 4.53085 20.4044 3.59957C19.4731 2.6683 18.1639 2.35699 16.0642 2.25293M16.0642 21.2529C18.1639 21.1488 19.4731 20.8375 20.4044 19.9063C21.3356 18.975 21.6469 17.6658 21.751 15.5661M8.43774 21.2529C6.33803 21.1488 5.0289 20.8375 4.09762 19.9063C3.16635 18.975 2.85504 17.6658 2.75098 15.5661',
  d5: 'M9.75094 10.3126C9.75094 9.47098 9.61875 8.17155 10.127 7.41387C11.2494 5.74035 13.6309 5.96265 14.4709 7.59615C14.8832 8.39787 14.7278 9.51873 14.7469 10.3126M9.75094 10.3126C8.45361 10.3126 8.18937 11.0553 7.99096 11.6379C7.80781 12.2932 7.62136 13.8579 7.90696 15.5724C8.12063 16.6646 8.95573 17.1449 9.67391 17.2059C10.3607 17.2641 13.2606 17.2419 14.1001 17.2419C15.401 17.2419 16.2133 16.9559 16.5949 15.6452C16.7781 14.6258 16.8282 12.8029 16.5229 11.6379C16.1185 10.4728 15.3032 10.3126 14.7469 10.3126M9.75094 10.3126C11.1245 10.2582 13.9616 10.2689 14.7469 10.3126',
  d6: 'M9.49997 10.5548C9.49997 9.71317 9.36778 8.41374 9.87599 7.65606C10.9985 5.98254 13.38 6.20484 14.22 7.83834C14.6323 8.64006 14.4769 9.76092 14.496 10.5548M9.49997 10.5548C8.20264 10.5548 7.9384 11.2975 7.73999 11.8801C7.55684 12.5354 7.37039 14.1001 7.65599 15.8146C7.86966 16.9068 8.70476 17.3871 9.42294 17.4481C10.1098 17.5063 13.0097 17.4841 13.8492 17.4841C15.1501 17.4841 15.9624 17.1981 16.344 15.8874C16.5272 14.868 16.5773 13.0451 16.272 11.8801C15.8676 10.715 15.0523 10.5548 14.496 10.5548M9.49997 10.5548C10.8736 10.5004 13.7107 10.5111 14.496 10.5548',
  d7: 'M9.18554 2.45052C9.21287 3.00213 8.78787 3.47146 8.23626 3.4988C6.16429 3.60148 5.1994 3.90811 4.55374 4.55377C3.90808 5.19943 3.60145 6.16432 3.49877 8.23629C3.47143 8.7879 3.0021 9.21291 2.45049 9.18557C1.89889 9.15823 1.47388 8.6889 1.50122 8.1373C1.60666 6.00982 1.92264 4.35645 3.13953 3.13956C4.35642 1.92267 6.00979 1.60669 8.13726 1.50125C8.68887 1.47391 9.1582 1.89892 9.18554 2.45052ZM14.8144 2.45052C14.8418 1.89892 15.3111 1.47391 15.8627 1.50125C17.9902 1.60669 19.6436 1.92267 20.8605 3.13956C22.0773 4.35645 22.3933 6.00982 22.4988 8.1373C22.5261 8.6889 22.1011 9.15823 21.5495 9.18557C20.9979 9.21291 20.5286 8.7879 20.5012 8.23629C20.3985 6.16432 20.0919 5.19943 19.4462 4.55377C18.8006 3.90811 17.8357 3.60148 15.7637 3.4988C15.2121 3.47146 14.7871 3.00213 14.8144 2.45052ZM2.45049 14.8145C3.0021 14.7871 3.47143 15.2121 3.49877 15.7638C3.60145 17.8357 3.90808 18.8006 4.55374 19.4463C5.1994 20.0919 6.16429 20.3986 8.23626 20.5012C8.78786 20.5286 9.21287 20.9979 9.18553 21.5495C9.15819 22.1011 8.68886 22.5261 8.13726 22.4988C6.00979 22.3934 4.35642 22.0774 3.13953 20.8605C1.92264 19.6436 1.60666 17.9902 1.50122 15.8628C1.47388 15.3111 1.89888 14.8418 2.45049 14.8145ZM21.5495 14.8145C22.1011 14.8418 22.5261 15.3111 22.4988 15.8628C22.3933 17.9902 22.0773 19.6436 20.8605 20.8605C19.6436 22.0774 17.9902 22.3934 15.8627 22.4988C15.3111 22.5261 14.8418 22.1011 14.8144 21.5495C14.7871 20.9979 15.2121 20.5286 15.7637 20.5012C17.8357 20.3986 18.8006 20.0919 19.4462 19.4463C20.0919 18.8006 20.3985 17.8357 20.5012 15.7638C20.5286 15.2121 20.9979 14.7871 21.5495 14.8145Z',
  d8: 'M8.49997 10.0276V9.25C8.49997 7.317 10.067 5.75 12 5.75C13.933 5.75 15.5 7.317 15.5 9.25V10.0276C16.3374 10.3914 16.9607 11.1611 17.092 12.0945C17.1761 12.6922 17.25 13.3346 17.25 14C17.25 14.6654 17.1761 15.3078 17.092 15.9055C16.9137 17.1732 15.8279 18.1388 14.5306 18.1959C13.7225 18.2315 12.902 18.25 12 18.25C11.0979 18.25 10.2775 18.2315 9.4693 18.1959C8.17202 18.1388 7.08623 17.1732 6.90792 15.9055C6.82386 15.3078 6.74997 14.6654 6.74997 14C6.74997 13.3346 6.82386 12.6922 6.90792 12.0945C7.03921 11.1611 7.66251 10.3914 8.49997 10.0276ZM10.5 9.25C10.5 8.42157 11.1715 7.75 12 7.75C12.8284 7.75 13.5 8.42157 13.5 9.25V9.76838C13.0184 9.75622 12.5229 9.75 12 9.75C11.477 9.75 10.9815 9.75622 10.5 9.76838V9.25Z',
  d9: 'M9.14426 2.5H2.5V9.14426M14.8557 2.5H21.5V9.14426M14.8557 21.5H21.5V14.8557M9.14426 21.5H2.5V14.8557',
  d10: 'M14.4882 10.5263V8.88951C14.4882 7.51543 13.3856 6.47754 12.0115 6.47754C10.6374 6.47754 9.5122 7.51543 9.5122 8.88951V10.5263M7.50195 10.5263H16.5326V17.4851H7.50263L7.50195 10.5263Z',
  d11: 'M1.5 1.5H9.14426V3.5H3.5V9.14426H1.5V1.5ZM20.5 3.5H14.8557V1.5H22.5V9.14426H20.5V3.5ZM22.5 14.8557V22.5H14.8557V20.5H20.5V14.8557H22.5ZM3.5 20.5V14.8557H1.5V22.5H9.14426V20.5H3.5Z',
  d12: 'M15.25 9.75V9C15.25 7.20507 13.7949 5.75 12 5.75C10.2051 5.75 8.75 7.20507 8.75 9V9.75H6.75V18.25H17.25V9.75H15.25ZM10.25 9C10.25 8.0335 11.0335 7.25 12 7.25C12.9665 7.25 13.75 8.0335 13.75 9V9.75H10.25V9Z',
};

export const IconLockedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="locked-stroke-rounded IconLockedStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLockedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="locked-duotone-rounded IconLockedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconLockedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="locked-twotone-rounded IconLockedTwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLockedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="locked-solid-rounded IconLockedSolidRounded"
    >
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

export const IconLockedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="locked-bulk-rounded IconLockedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLockedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="locked-stroke-sharp IconLockedStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="locked-solid-sharp IconLockedSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfLocked: TheIconSelfPack = {
  name: 'Locked',
  StrokeRounded: IconLockedStrokeRounded,
  DuotoneRounded: IconLockedDuotoneRounded,
  TwotoneRounded: IconLockedTwotoneRounded,
  SolidRounded: IconLockedSolidRounded,
  BulkRounded: IconLockedBulkRounded,
  StrokeSharp: IconLockedStrokeSharp,
  SolidSharp: IconLockedSolidSharp,
};
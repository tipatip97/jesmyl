import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5 8.00232C17.3439 8.00232 18.3179 7.91895 18.799 8.75232C19 9.10039 19 9.5677 19 10.5023V13.5023C19 14.4369 19 14.9042 18.799 15.2523C18.3179 16.0857 17.3439 16.0023 16.5 16.0023C15.6561 16.0023 14.6821 16.0857 14.201 15.2523C14 14.9042 14 14.4369 14 13.5023L14 10.5023C14 9.5677 14 9.10039 14.201 8.75232C14.6821 7.91895 15.6561 8.00232 16.5 8.00232Z',
  d2: 'M7.5 4.00232C8.34389 4.00232 9.31789 3.91895 9.79904 4.75232C10 5.10039 10 5.5677 10 6.50232L10 17.5023C10 18.4369 10 18.9042 9.79904 19.2523C9.31789 20.0857 8.34389 20.0023 7.5 20.0023C6.65611 20.0023 5.68211 20.0857 5.20096 19.2523C5 18.9042 5 18.4369 5 17.5023L5 6.50232C5 5.5677 5 5.10039 5.20096 4.75232C5.68211 3.91895 6.65611 4.00232 7.5 4.00232Z',
  d3: 'M5 12H2',
  d4: 'M14 12L10 12',
  d5: 'M22 12L19 12',
  d6: 'M23 12C23 12.5523 22.5523 13 22 13L2 13C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11L22 11C22.5523 11 23 11.4477 23 12Z',
  d7: 'M19.75 13.5314C19.75 13.9709 19.75 14.35 19.7218 14.6611C19.692 14.9901 19.6259 15.3159 19.4486 15.6229C19.0708 16.2768 18.4884 16.5571 17.9352 16.6697C17.5083 16.7566 17.0393 16.752 16.6832 16.7485C16.618 16.7479 16.5566 16.7473 16.5 16.7473C16.4434 16.7473 16.382 16.7479 16.3168 16.7485C15.9607 16.752 15.4917 16.7566 15.0648 16.6697C14.5116 16.5571 13.9292 16.2768 13.5514 15.6229C13.3741 15.3159 13.308 14.9901 13.2782 14.6611C13.25 14.35 13.25 13.9709 13.25 13.5313L13.25 10.4687C13.25 10.0291 13.25 9.65 13.2782 9.33889C13.308 9.0099 13.3741 8.68413 13.5514 8.3771C13.9292 7.72321 14.5116 7.44288 15.0648 7.33028C15.4917 7.24337 15.9607 7.24799 16.3168 7.2515C16.382 7.25214 16.4434 7.25275 16.5 7.25275C16.5566 7.25275 16.618 7.25214 16.6832 7.2515C17.0393 7.24799 17.5083 7.24337 17.9352 7.33028C18.4884 7.44288 19.0708 7.72321 19.4486 8.3771C19.6259 8.68413 19.692 9.0099 19.7218 9.33889C19.75 9.65 19.75 10.0291 19.75 10.4686L19.75 10.4687L19.75 13.5313L19.75 13.5314Z',
  d8: 'M10.75 17.5305C10.75 17.9702 10.75 18.3494 10.7218 18.6606C10.692 18.9896 10.6259 19.3155 10.4486 19.6226C10.0708 20.2767 9.48842 20.5571 8.93523 20.6697C8.50827 20.7566 8.03925 20.752 7.68318 20.7485C7.61802 20.7479 7.55664 20.7472 7.5 20.7472C7.44335 20.7472 7.38198 20.7479 7.31682 20.7485C6.96075 20.752 6.49173 20.7566 6.06477 20.6697C5.51157 20.5571 4.92918 20.2767 4.55144 19.6226C4.37407 19.3155 4.30801 18.9896 4.27818 18.6606C4.24997 18.3494 4.24998 17.9701 4.25 17.5305L4.25 6.46951C4.24998 6.02986 4.24997 5.65064 4.27818 5.33944C4.30802 5.01036 4.37407 4.68451 4.55144 4.3774C4.92918 3.72334 5.51157 3.44293 6.06477 3.3303C6.49173 3.24337 6.96075 3.24799 7.31682 3.2515C7.38198 3.25214 7.44335 3.25275 7.5 3.25275C7.55664 3.25275 7.61802 3.25214 7.68318 3.2515C8.03925 3.24799 8.50827 3.24337 8.93523 3.3303C9.48842 3.44293 10.0708 3.72334 10.4486 4.3774C10.6259 4.68451 10.692 5.01036 10.7218 5.33944C10.75 5.65063 10.75 6.02984 10.75 6.46948L10.75 6.46951L10.75 17.5305L10.75 17.5305Z',
  d9: 'M23 12.0039C23 12.5562 22.5523 13.0039 22 13.0039L2 13.0039C1.44772 13.0039 1 12.5562 1 12.0039C1 11.4516 1.44772 11.0039 2 11.0039L22 11.0039C22.5523 11.0039 23 11.4516 23 12.0039Z',
  d10: 'M19.75 13.5353C19.75 13.9748 19.75 14.3539 19.7218 14.665C19.692 14.994 19.6259 15.3198 19.4486 15.6268C19.0708 16.2807 18.4884 16.561 17.9352 16.6736C17.5083 16.7605 17.0393 16.7559 16.6832 16.7524C16.618 16.7518 16.5566 16.7512 16.5 16.7512C16.4434 16.7512 16.382 16.7518 16.3168 16.7524C15.9607 16.7559 15.4917 16.7605 15.0648 16.6736C14.5116 16.561 13.9292 16.2807 13.5514 15.6268C13.3741 15.3198 13.308 14.994 13.2782 14.665C13.25 14.3539 13.25 13.9748 13.25 13.5352L13.25 10.4726C13.25 10.033 13.25 9.65391 13.2782 9.3428C13.308 9.0138 13.3741 8.68804 13.5514 8.381C13.9292 7.72712 14.5116 7.44679 15.0648 7.33418C15.4917 7.24727 15.9607 7.2519 16.3168 7.25541C16.382 7.25605 16.4434 7.25665 16.5 7.25665C16.5566 7.25665 16.618 7.25605 16.6832 7.25541C17.0393 7.2519 17.5083 7.24727 17.9352 7.33418C18.4884 7.44679 19.0708 7.72712 19.4486 8.381C19.6259 8.68804 19.692 9.0138 19.7218 9.3428C19.75 9.6539 19.75 10.033 19.75 10.4725L19.75 10.4726L19.75 13.5352L19.75 13.5353Z',
  d11: 'M10.75 17.5344C10.75 17.9741 10.75 18.3533 10.7218 18.6645C10.692 18.9935 10.6259 19.3194 10.4486 19.6265C10.0708 20.2806 9.48842 20.561 8.93523 20.6736C8.50827 20.7605 8.03925 20.7559 7.68318 20.7524C7.61802 20.7518 7.55664 20.7512 7.5 20.7512C7.44335 20.7512 7.38198 20.7518 7.31682 20.7524C6.96075 20.7559 6.49173 20.7605 6.06477 20.6736C5.51157 20.561 4.92918 20.2806 4.55144 19.6265C4.37407 19.3194 4.30801 18.9935 4.27818 18.6645C4.24997 18.3533 4.24998 17.974 4.25 17.5344L4.25 6.47342C4.24998 6.03377 4.24997 5.65454 4.27818 5.34335C4.30802 5.01427 4.37407 4.68842 4.55144 4.3813C4.92918 3.72724 5.51157 3.44684 6.06477 3.3342C6.49173 3.24727 6.96075 3.2519 7.31682 3.25541C7.38198 3.25605 7.44335 3.25666 7.5 3.25666C7.55664 3.25666 7.61802 3.25605 7.68318 3.25541C8.03925 3.2519 8.50827 3.24727 8.93523 3.3342C9.48842 3.44684 10.0708 3.72724 10.4486 4.3813C10.6259 4.68842 10.692 5.01427 10.7218 5.34335C10.75 5.65454 10.75 6.03375 10.75 6.47338L10.75 6.47342L10.75 17.5344L10.75 17.5344Z',
  d12: 'M5 12H2M14 12L10 12M22 12L19 12',
  d13: 'M5 20L5 4L10 4.01042L10 20H5Z',
  d14: 'M14 16L14 8L19 8.00521L19 16H14Z',
  d15: 'M10 11L14 11V13L10 13V11ZM19 11L22 11V13L19 13V11ZM2 11H5V13H2V11Z',
  d16: 'M4.47022 3.46912C4.61121 3.32842 4.80238 3.24959 5.00156 3.25L10.0016 3.26042C10.4152 3.26128 10.75 3.59681 10.75 4.01042L10.75 20C10.75 20.4142 10.4142 20.75 10 20.75H5C4.80109 20.75 4.61032 20.671 4.46967 20.5303C4.32902 20.3897 4.25 20.1989 4.25 20V4C4.25 3.80082 4.32923 3.60981 4.47022 3.46912Z',
  d17: 'M13.4699 7.46939C13.6108 7.32872 13.8017 7.24979 14.0008 7.25L19.0008 7.25521C19.4147 7.25564 19.75 7.5913 19.75 8.00521L19.75 16C19.75 16.4142 19.4142 16.75 19 16.75H14C13.8011 16.75 13.6103 16.671 13.4697 16.5303C13.329 16.3897 13.25 16.1989 13.25 16V8C13.25 7.80095 13.3291 7.61007 13.4699 7.46939Z',
};

export const IconAlignVerticalCenterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-vertical-center-stroke-rounded IconAlignVerticalCenterStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignVerticalCenterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-vertical-center-duotone-rounded IconAlignVerticalCenterDuotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignVerticalCenterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-vertical-center-twotone-rounded IconAlignVerticalCenterTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignVerticalCenterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-vertical-center-solid-rounded IconAlignVerticalCenterSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignVerticalCenterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-vertical-center-bulk-rounded IconAlignVerticalCenterBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignVerticalCenterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-vertical-center-stroke-sharp IconAlignVerticalCenterStrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignVerticalCenterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-vertical-center-solid-sharp IconAlignVerticalCenterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlignVerticalCenter: TheIconSelfPack = {
  name: 'AlignVerticalCenter',
  StrokeRounded: IconAlignVerticalCenterStrokeRounded,
  DuotoneRounded: IconAlignVerticalCenterDuotoneRounded,
  TwotoneRounded: IconAlignVerticalCenterTwotoneRounded,
  SolidRounded: IconAlignVerticalCenterSolidRounded,
  BulkRounded: IconAlignVerticalCenterBulkRounded,
  StrokeSharp: IconAlignVerticalCenterStrokeSharp,
  SolidSharp: IconAlignVerticalCenterSolidSharp,
};
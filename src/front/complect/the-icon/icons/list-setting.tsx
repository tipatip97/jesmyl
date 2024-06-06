import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5 19.8571V21M16.5 19.8571C15.4878 19.8571 14.5961 19.3521 14.073 18.5852M16.5 19.8571C17.5122 19.8571 18.4039 19.3521 18.927 18.5852M16.5 14.1429C17.5123 14.1429 18.4041 14.648 18.9271 15.415M16.5 14.1429C15.4877 14.1429 14.5959 14.648 14.0729 15.415M16.5 14.1429V13M20 14.7143L18.9271 15.415M13.0004 19.2857L14.073 18.5852M13 14.7143L14.0729 15.415M19.9996 19.2857L18.927 18.5852M18.9271 15.415C19.2364 15.8685 19.4167 16.4136 19.4167 17C19.4167 17.5864 19.2363 18.1316 18.927 18.5852M14.0729 15.415C13.7636 15.8685 13.5833 16.4136 13.5833 17C13.5833 17.5864 13.7637 18.1316 14.073 18.5852',
  d2: 'M4 3H20',
  d3: 'M4 9H20',
  d4: 'M4 15H9',
  d5: 'M18.9272 15.4147C18.4042 14.6477 17.5124 14.1426 16.5002 14.1426C15.4879 14.1426 14.5961 14.6477 14.0731 15.4147C13.7638 15.8683 13.5835 16.4134 13.5835 16.9997C13.5835 17.5861 13.7639 18.1313 14.0732 18.5849C14.5962 19.3518 15.488 19.8569 16.5002 19.8569C17.5123 19.8569 18.4041 19.3518 18.9271 18.5849C19.2365 18.1313 19.4168 17.5861 19.4168 16.9997C19.4168 16.4134 19.2365 15.8683 18.9272 15.4147Z',
  d6: 'M16.5001 12C17.0524 12 17.5001 12.4477 17.5001 13V13.2699C18.0994 13.4254 18.6436 13.7174 19.0951 14.1109L19.4533 13.877C19.9157 13.575 20.5354 13.7051 20.8374 14.1675C21.1394 14.6299 21.0093 15.2495 20.5469 15.5515L20.213 15.7696C20.345 16.1561 20.4168 16.5701 20.4168 17C20.4168 17.43 20.345 17.844 20.2129 18.2306L20.5466 18.4485C21.009 18.7505 21.139 19.3701 20.837 19.8325C20.535 20.2949 19.9153 20.425 19.4529 20.123L19.095 19.8892C18.6434 20.2827 18.0994 20.5746 17.5001 20.7301V21C17.5001 21.5523 17.0524 22 16.5001 22C15.9478 22 15.5001 21.5523 15.5001 21V20.7301C14.9009 20.5746 14.3568 20.2827 13.9053 19.8892L13.5473 20.123C13.0849 20.425 12.4652 20.2949 12.1632 19.8325C11.8612 19.3701 11.9913 18.7505 12.4537 18.4485L12.7873 18.2306C12.6552 17.844 12.5834 17.43 12.5834 17C12.5834 16.5701 12.6552 16.1561 12.7872 15.7696L12.4533 15.5515C11.9909 15.2495 11.8609 14.6299 12.1629 14.1675C12.4649 13.7051 13.0845 13.575 13.5469 13.877L13.9051 14.1109C14.3567 13.7174 14.9008 13.4254 15.5001 13.2699V13C15.5001 12.4477 15.9478 12 16.5001 12ZM16.5001 15.1429C15.8267 15.1429 15.2406 15.4777 14.8992 15.9784C14.6989 16.2722 14.5834 16.6222 14.5834 17C14.5834 17.3779 14.6989 17.7279 14.8993 18.0217C15.2407 18.5224 15.8268 18.8571 16.5001 18.8571C17.1735 18.8571 17.7595 18.5224 18.1009 18.0217C18.3013 17.7279 18.4168 17.3779 18.4168 17C18.4168 16.6222 18.3014 16.2722 18.101 15.9784C17.7596 15.4777 17.1735 15.1429 16.5001 15.1429Z',
  d7: 'M3 3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3C21 3.55228 20.5523 4 20 4H4C3.44772 4 3 3.55228 3 3Z',
  d8: 'M3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9Z',
  d9: 'M3 15C3 14.4477 3.44772 14 4 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H4C3.44772 16 3 15.5523 3 15Z',
  d10: 'M16.8659 12V13.2699C17.4653 13.4254 18.0094 13.7174 18.461 14.1109L19.6564 13.3302L20.75 15.0047L19.5788 15.7696C19.7109 16.1561 19.7826 16.5701 19.7826 17C19.7826 17.43 19.7108 17.844 19.5788 18.2306L20.7496 18.9953L19.656 20.6698L18.4608 19.8892C18.0093 20.2827 17.4652 20.5746 16.8659 20.7301V22H14.8659V20.7301C14.2667 20.5746 13.7226 20.2827 13.2711 19.8892L12.0759 20.6698L10.9822 18.9953L12.1531 18.2306C12.021 17.844 11.9493 17.43 11.9493 17C11.9493 16.5701 12.021 16.1561 12.153 15.7696L10.9819 15.0047L12.0755 13.3302L13.2709 14.1109C13.7225 13.7174 14.2666 13.4254 14.8659 13.2699V12H16.8659ZM15.8659 15.1429C15.1925 15.1429 14.6065 15.4777 14.265 15.9784C14.0647 16.2722 13.9493 16.6222 13.9493 17C13.9493 17.3779 14.0647 17.7279 14.2651 18.0217C14.6065 18.5224 15.1926 18.8571 15.8659 18.8571C16.5393 18.8571 17.1253 18.5224 17.4667 18.0217C17.6672 17.7279 17.7826 17.3779 17.7826 17C17.7826 16.6222 17.6672 16.2722 17.4668 15.9784C17.1254 15.4777 16.5393 15.1429 15.8659 15.1429Z',
  d11: 'M19.25 4H3.25V2H19.25V4Z',
  d12: 'M19.25 10H3.25V8H19.25V10Z',
  d13: 'M8.25 16H3.25V14H8.25V16Z',
};

export const IconListSettingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="list-setting-stroke-rounded IconListSettingStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconListSettingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="list-setting-duotone-rounded IconListSettingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconListSettingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="list-setting-twotone-rounded IconListSettingTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconListSettingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="list-setting-solid-rounded IconListSettingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconListSettingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="list-setting-bulk-rounded IconListSettingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconListSettingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="list-setting-stroke-sharp IconListSettingStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconListSettingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="list-setting-solid-sharp IconListSettingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfListSetting: TheIconSelfPack = {
  name: 'ListSetting',
  StrokeRounded: IconListSettingStrokeRounded,
  DuotoneRounded: IconListSettingDuotoneRounded,
  TwotoneRounded: IconListSettingTwotoneRounded,
  SolidRounded: IconListSettingSolidRounded,
  BulkRounded: IconListSettingBulkRounded,
  StrokeSharp: IconListSettingStrokeSharp,
  SolidSharp: IconListSettingSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 3.5H5',
  d2: 'M19 3.5H21',
  d3: 'M3 9.5H5',
  d4: 'M19 9.5H21',
  d5: 'M3 15.5H21',
  d6: 'M3 21H21',
  d7: 'M8.58579 10.4142C9.17157 11 10.1144 11 12 11C13.8856 11 14.8284 11 15.4142 10.4142C16 9.82843 16 8.88562 16 7C16 5.11438 16 4.17157 15.4142 3.58579C14.8284 3 13.8856 3 12 3C10.1144 3 9.17157 3 8.58579 3.58579C8 4.17157 8 5.11438 8 7C8 8.88562 8 9.82843 8.58579 10.4142Z',
  d8: 'M2 3.375C2 2.82272 2.44772 2.375 3 2.375H5C5.55228 2.375 6 2.82272 6 3.375C6 3.92728 5.55228 4.375 5 4.375H3C2.44772 4.375 2 3.92728 2 3.375Z',
  d9: 'M18 3.375C18 2.82272 18.4477 2.375 19 2.375H21C21.5523 2.375 22 2.82272 22 3.375C22 3.92728 21.5523 4.375 21 4.375H19C18.4477 4.375 18 3.92728 18 3.375Z',
  d10: 'M2 9.375C2 8.82272 2.44772 8.375 3 8.375H5C5.55228 8.375 6 8.82272 6 9.375C6 9.92728 5.55228 10.375 5 10.375H3C2.44772 10.375 2 9.92728 2 9.375Z',
  d11: 'M18 9.375C18 8.82272 18.4477 8.375 19 8.375H21C21.5523 8.375 22 8.82272 22 9.375C22 9.92728 21.5523 10.375 21 10.375H19C18.4477 10.375 18 9.92728 18 9.375Z',
  d12: 'M2 15.375C2 14.8227 2.44772 14.375 3 14.375H21C21.5523 14.375 22 14.8227 22 15.375C22 15.9273 21.5523 16.375 21 16.375H3C2.44772 16.375 2 15.9273 2 15.375Z',
  d13: 'M2 20.875C2 20.3227 2.44772 19.875 3 19.875H21C21.5523 19.875 22 20.3227 22 20.875C22 21.4273 21.5523 21.875 21 21.875H3C2.44772 21.875 2 21.4273 2 20.875Z',
  d14: 'M12.052 2.125C12.9505 2.12497 13.6997 2.12495 14.2945 2.20491C14.9223 2.28932 15.4891 2.47499 15.9445 2.93046C16.4 3.38593 16.5857 3.95273 16.6701 4.58052C16.7501 5.1753 16.75 5.92451 16.75 6.82298V6.82301V6.927V6.92703C16.75 7.8255 16.7501 8.57471 16.6701 9.16948C16.5857 9.79728 16.4 10.3641 15.9445 10.8195C15.4891 11.275 14.9223 11.4607 14.2945 11.5451C13.6997 11.6251 12.9505 11.625 12.052 11.625H12.052H11.948H11.948C11.0495 11.625 10.3003 11.6251 9.70552 11.5451C9.07773 11.4607 8.51093 11.275 8.05546 10.8195C7.59999 10.3641 7.41432 9.79728 7.32991 9.16948C7.24995 8.57471 7.24997 7.8255 7.25 6.92703V6.927V6.823V6.82297C7.24997 5.92451 7.24995 5.1753 7.32991 4.58052C7.41432 3.95273 7.59999 3.38593 8.05546 2.93046C8.51093 2.47499 9.07773 2.28932 9.70552 2.20491C10.3003 2.12495 11.0495 2.12497 11.948 2.125H11.948H12.052H12.052Z',
  d15: 'M16 3H8V11H16V3Z',
  d16: 'M2 2.25H5V4.25H2V2.25Z',
  d17: 'M19 2.25H22V4.25H19V2.25Z',
  d18: 'M2 8.25H5V10.25H2V8.25Z',
  d19: 'M19 8.25H22V10.25H19V8.25Z',
  d20: 'M2 14.25H22V16.25H2V14.25Z',
  d21: 'M2 19.75H22V21.75H2V19.75Z',
  d22: 'M7.25 3C7.25 2.58579 7.58579 2.25 8 2.25H16C16.4142 2.25 16.75 2.58579 16.75 3V11C16.75 11.4142 16.4142 11.75 16 11.75H8C7.58579 11.75 7.25 11.4142 7.25 11V3Z',
};

export const IconTextCenterlineCenterTopStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-centerline-center-top-stroke-rounded IconTextCenterlineCenterTopStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextCenterlineCenterTopDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-centerline-center-top-duotone-rounded IconTextCenterlineCenterTopDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextCenterlineCenterTopTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-centerline-center-top-twotone-rounded IconTextCenterlineCenterTopTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextCenterlineCenterTopSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-centerline-center-top-solid-rounded IconTextCenterlineCenterTopSolidRounded"
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextCenterlineCenterTopBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-centerline-center-top-bulk-rounded IconTextCenterlineCenterTopBulkRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextCenterlineCenterTopStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-centerline-center-top-stroke-sharp IconTextCenterlineCenterTopStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextCenterlineCenterTopSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-centerline-center-top-solid-sharp IconTextCenterlineCenterTopSolidSharp"
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

export const iconPackOfTextCenterlineCenterTop: TheIconSelfPack = {
  name: 'TextCenterlineCenterTop',
  StrokeRounded: IconTextCenterlineCenterTopStrokeRounded,
  DuotoneRounded: IconTextCenterlineCenterTopDuotoneRounded,
  TwotoneRounded: IconTextCenterlineCenterTopTwotoneRounded,
  SolidRounded: IconTextCenterlineCenterTopSolidRounded,
  BulkRounded: IconTextCenterlineCenterTopBulkRounded,
  StrokeSharp: IconTextCenterlineCenterTopStrokeSharp,
  SolidSharp: IconTextCenterlineCenterTopSolidSharp,
};
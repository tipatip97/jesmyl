import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 5.5L13 5.5',
  d2: 'M18.6 16.8926C17.5333 17.607 17 17.9642 17 18.5C17 19.0358 17.5333 19.393 18.6 20.1074C19.6667 20.8218 20.2 21.1789 20.6 20.9111C21 20.6432 21 19.9288 21 18.5C21 17.0712 21 16.3568 20.6 16.0889C20.2 15.8211 19.6667 16.1782 18.6 16.8926Z',
  d3: 'M18.6 3.89263C17.5333 4.60702 17 4.96421 17 5.5C17 6.03579 17.5333 6.39298 18.6 7.10737C19.6667 7.82176 20.2 8.17895 20.6 7.91105C21 7.64316 21 6.92877 21 5.5C21 4.07123 21 3.35684 20.6 3.08895C20.2 2.82105 19.6667 3.17824 18.6 3.89263Z',
  d4: 'M3 12L13 12',
  d5: 'M3 18.5L13 18.5',
  d6: 'M14 5.5C14 4.94772 13.5523 4.5 13 4.5L3 4.5C2.44771 4.5 2 4.94772 2 5.5C2 6.05229 2.44771 6.5 3 6.5L13 6.5C13.5523 6.5 14 6.05228 14 5.5Z',
  d7: 'M18.4832 16.236L18.4326 16.2699L18.3859 16.3011L18.3859 16.3011C17.8928 16.6313 17.4518 16.9266 17.1419 17.212C16.8044 17.5228 16.5 17.9315 16.5 18.5004C16.5 19.0693 16.8044 19.4779 17.1419 19.7888C17.4518 20.0741 17.8928 20.3694 18.3859 20.6996L18.3859 20.6996L18.4326 20.7309L18.4832 20.7648C18.9729 21.0928 19.4152 21.3891 19.7876 21.5598C20.1816 21.7403 20.7368 21.8899 21.2673 21.5346C21.7532 21.2092 21.8883 20.6708 21.9439 20.2364C22.0001 19.7978 22 19.2222 22 18.5517V18.5517L22 18.5004L22 18.4491V18.449C22 17.7785 22.0001 17.2029 21.9439 16.7643C21.8883 16.3299 21.7532 15.7915 21.2673 15.4662C20.7368 15.1108 20.1816 15.2604 19.7876 15.441C19.4152 15.6116 18.9729 15.9079 18.4832 16.236Z',
  d8: 'M18.4832 3.23598L18.4326 3.26985L18.3859 3.30114L18.3859 3.30114C17.8928 3.63134 17.4518 3.92661 17.1419 4.21196C16.8044 4.52281 16.5 4.93149 16.5 5.50037C16.5 6.06926 16.8044 6.47794 17.1419 6.78879C17.4518 7.07413 17.8928 7.36941 18.3859 7.69961L18.3859 7.69961L18.4326 7.7309L18.4832 7.76477C18.9729 8.09281 19.4152 8.38914 19.7876 8.55976C20.1816 8.74031 20.7368 8.88991 21.2673 8.53458C21.7532 8.20922 21.8883 7.67081 21.9439 7.23644C22.0001 6.79782 22 6.22221 22 5.55172V5.55167L22 5.50037L22 5.44908V5.44903C22 4.77854 22.0001 4.20293 21.9439 3.76431C21.8883 3.32994 21.7532 2.79153 21.2673 2.46617C20.7368 2.11084 20.1816 2.26044 19.7876 2.44098C19.4152 2.61161 18.9729 2.90795 18.4832 3.23598Z',
  d9: 'M14 12C14 11.4477 13.5523 11 13 11L3 11C2.44771 11 2 11.4477 2 12C2 12.5523 2.44771 13 3 13L13 13C13.5523 13 14 12.5523 14 12Z',
  d10: 'M14 18.5C14 17.9477 13.5523 17.5 13 17.5L3 17.5C2.44771 17.5 2 17.9477 2 18.5C2 19.0523 2.44771 19.5 3 19.5L13 19.5C13.5523 19.5 14 19.0523 14 18.5Z',
  d11: 'M13.5 5.5L3.5 5.5',
  d12: 'M16.5 5.5L20.5 3V8L16.5 5.5Z',
  d13: 'M16.5 18.5L20.5 16V21L16.5 18.5Z',
  d14: 'M13.5 12L3.5 12',
  d15: 'M13.5 18.5L3.5 18.5',
  d16: 'M3.5 4.5L13.5 4.5V6.5L3.5 6.5V4.5Z',
  d17: 'M3.5 11L13.5 11V13L3.5 13V11Z',
  d18: 'M3.5 17.5L13.5 17.5V19.5L3.5 19.5V17.5Z',
};

export const IconRightToLeftListTriangleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-to-left-list-triangle-stroke-rounded IconRightToLeftListTriangleStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRightToLeftListTriangleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-to-left-list-triangle-duotone-rounded IconRightToLeftListTriangleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRightToLeftListTriangleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-to-left-list-triangle-twotone-rounded IconRightToLeftListTriangleTwotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRightToLeftListTriangleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-to-left-list-triangle-solid-rounded IconRightToLeftListTriangleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconRightToLeftListTriangleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-to-left-list-triangle-bulk-rounded IconRightToLeftListTriangleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconRightToLeftListTriangleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-to-left-list-triangle-stroke-sharp IconRightToLeftListTriangleStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRightToLeftListTriangleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-to-left-list-triangle-solid-sharp IconRightToLeftListTriangleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
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
    </TheIconWrapper>
  );
};

export const iconPackOfRightToLeftListTriangle: TheIconSelfPack = {
  name: 'RightToLeftListTriangle',
  StrokeRounded: IconRightToLeftListTriangleStrokeRounded,
  DuotoneRounded: IconRightToLeftListTriangleDuotoneRounded,
  TwotoneRounded: IconRightToLeftListTriangleTwotoneRounded,
  SolidRounded: IconRightToLeftListTriangleSolidRounded,
  BulkRounded: IconRightToLeftListTriangleBulkRounded,
  StrokeSharp: IconRightToLeftListTriangleStrokeSharp,
  SolidSharp: IconRightToLeftListTriangleSolidSharp,
};
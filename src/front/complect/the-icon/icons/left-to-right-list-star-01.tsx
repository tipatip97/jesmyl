import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 5.5L12 5.5',
  d2: 'M3 12L12 12',
  d3: 'M3 18.5L12 18.5',
  d4: 'M21 5.5H16M17.0417 8L19.9583 3M19.9583 8L17.0417 3',
  d5: 'M21 18.5H16M17.0417 21L19.9583 16M19.9583 21L17.0417 16',
  d6: 'M2 5.5C2 4.94772 2.44772 4.5 3 4.5L12 4.5C12.5523 4.5 13 4.94772 13 5.5C13 6.05229 12.5523 6.5 12 6.5L3 6.5C2.44772 6.5 2 6.05228 2 5.5Z',
  d7: 'M2 12C2 11.4477 2.44772 11 3 11L12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13L3 13C2.44772 13 2 12.5523 2 12Z',
  d8: 'M2 18.5C2 17.9477 2.44772 17.5 3 17.5L12 17.5C12.5523 17.5 13 17.9477 13 18.5C13 19.0523 12.5523 19.5 12 19.5L3 19.5C2.44772 19.5 2 19.0523 2 18.5Z',
  d9: 'M16.5378 2.13614C17.0148 1.85786 17.6272 2.019 17.9054 2.49605L18.5 3.51528L19.0946 2.49605C19.3728 2.019 19.9852 1.85786 20.4622 2.13614C20.9393 2.41442 21.1004 3.02674 20.8221 3.50379L20.241 4.49992H21C21.5523 4.49992 22 4.94763 22 5.49992C22 6.0522 21.5523 6.49992 21 6.49992H20.241L20.8221 7.49605C21.1004 7.9731 20.9393 8.58542 20.4622 8.8637C19.9852 9.14198 19.3728 8.98084 19.0946 8.50379L18.5 7.48455L17.9054 8.50379C17.6272 8.98084 17.0148 9.14198 16.5378 8.8637C16.0607 8.58542 15.8996 7.9731 16.1779 7.49605L16.759 6.49992H16C15.4477 6.49992 15 6.0522 15 5.49992C15 4.94763 15.4477 4.49992 16 4.49992H16.759L16.1779 3.50379C15.8996 3.02674 16.0607 2.41442 16.5378 2.13614Z',
  d10: 'M16.5378 15.1361C17.0148 14.8579 17.6272 15.019 17.9054 15.496L18.5 16.5153L19.0946 15.496C19.3728 15.019 19.9852 14.8579 20.4622 15.1361C20.9393 15.4144 21.1004 16.0267 20.8221 16.5038L20.241 17.4999H21C21.5523 17.4999 22 17.9476 22 18.4999C22 19.0522 21.5523 19.4999 21 19.4999H20.241L20.8221 20.496C21.1004 20.9731 20.9393 21.5854 20.4622 21.8637C19.9852 22.142 19.3728 21.9808 19.0946 21.5038L18.5 20.4846L17.9054 21.5038C17.6272 21.9808 17.0148 22.142 16.5378 21.8637C16.0607 21.5854 15.8996 20.9731 16.1779 20.496L16.759 19.4999H16C15.4477 19.4999 15 19.0522 15 18.4999C15 17.9476 15.4477 17.4999 16 17.4999H16.759L16.1779 16.5038C15.8996 16.0267 16.0607 15.4144 16.5378 15.1361Z',
  d11: 'M3 5.5L13 5.5',
  d12: 'M3 12L13 12',
  d13: 'M3 18.5L13 18.5',
  d14: 'M3 6.5L13 6.5V4.5L3 4.5L3 6.5Z',
  d15: 'M3 13L13 13V11L3 11L3 13Z',
  d16: 'M3 19.5L13 19.5V17.5L3 17.5L3 19.5Z',
  d17: 'M18.5 6.86638L19.3105 8.25581L20.6062 7.5L19.8058 6.1279H21V4.6279H19.8058L20.6062 3.25581L19.3105 2.5L18.5 3.88943L17.6895 2.5L16.3938 3.25581L17.1942 4.6279H16V6.1279H17.1942L16.3938 7.5L17.6895 8.25581L18.5 6.86638Z',
  d18: 'M18.5 20.1105L19.3105 21.4999L20.6062 20.7441L19.8058 19.372H21V17.872H19.8058L20.6062 16.4999L19.3105 15.7441L18.5 17.1336L17.6895 15.7441L16.3938 16.4999L17.1942 17.872H16V19.372H17.1942L16.3938 20.7441L17.6895 21.4999L18.5 20.1105Z',
};

export const IconLeftToRightListStar01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-01-stroke-rounded IconLeftToRightListStar01StrokeRounded"
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

export const IconLeftToRightListStar01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-01-duotone-rounded IconLeftToRightListStar01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLeftToRightListStar01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-01-twotone-rounded IconLeftToRightListStar01TwotoneRounded"
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

export const IconLeftToRightListStar01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-01-solid-rounded IconLeftToRightListStar01SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftToRightListStar01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-01-bulk-rounded IconLeftToRightListStar01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLeftToRightListStar01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-01-stroke-sharp IconLeftToRightListStar01StrokeSharp"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftToRightListStar01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-01-solid-sharp IconLeftToRightListStar01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfLeftToRightListStar01: TheIconSelfPack = {
  name: 'LeftToRightListStar01',
  StrokeRounded: IconLeftToRightListStar01StrokeRounded,
  DuotoneRounded: IconLeftToRightListStar01DuotoneRounded,
  TwotoneRounded: IconLeftToRightListStar01TwotoneRounded,
  SolidRounded: IconLeftToRightListStar01SolidRounded,
  BulkRounded: IconLeftToRightListStar01BulkRounded,
  StrokeSharp: IconLeftToRightListStar01StrokeSharp,
  SolidSharp: IconLeftToRightListStar01SolidSharp,
};
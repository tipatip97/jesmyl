import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.9244 12.102C20.3882 11.4385 18.588 9.20647 18.0742 8.81246C17.6051 8.45281 17 8.27446 15.7896 7.91776C14.5811 7.56161 13.2866 7 12 7C10.7134 7 9.41894 7.56161 8.21043 7.91776C7.00005 8.27446 6.39486 8.45281 5.92582 8.81246C5.41197 9.20647 3.61181 11.4385 4.07564 12.102C4.96428 13.3732 19.1407 13.2231 19.9244 12.102Z',
  d2: 'M9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13',
  d3: 'M12.0002 20V22M15 19L17 20.4999M9 19L7 20.5',
  d4: 'M12 7V2',
  d5: 'M12 16C10.3431 16 9 14.6569 9 13H15C15 14.6569 13.6569 16 12 16Z',
  d6: 'M12 20V22',
  d7: 'M9.79652 6.36515C10.4676 6.16989 11.2181 6 12 6C12.7819 6 13.5324 6.16989 14.2034 6.36515C14.5406 6.46327 14.872 6.57226 15.1818 6.67445L15.2107 6.684L15.2108 6.68401C15.5152 6.78446 15.7972 6.87751 16.0722 6.95855L16.2378 7.00726C17.2864 7.31552 18.0631 7.54384 18.6826 8.0189C18.9005 8.18596 19.1665 8.46856 19.4072 8.75172C19.6636 9.05342 19.9471 9.4221 20.2001 9.80469C20.4472 10.1785 20.6933 10.6076 20.8436 11.0236C20.9187 11.2314 20.9858 11.4786 20.998 11.7398C21.0102 12.0011 20.9697 12.352 20.7439 12.675C20.5248 12.9884 20.1974 13.145 20.0173 13.2214C19.7969 13.3149 19.5429 13.3887 19.2831 13.4496C18.7594 13.5724 18.0905 13.6705 17.3463 13.7483C15.8505 13.9046 13.9424 13.9896 12.0443 13.9991C10.1469 14.0086 8.22961 13.9428 6.71678 13.791C5.96417 13.7154 5.28236 13.6158 4.74321 13.4846C4.47515 13.4194 4.21239 13.3394 3.98265 13.2365C3.78195 13.1466 3.47002 12.9811 3.256 12.675C3.03027 12.352 2.98977 12.0011 3.00194 11.7398C3.01411 11.4786 3.08121 11.2314 3.15629 11.0236C3.30664 10.6076 3.55277 10.1785 3.79988 9.80469C4.05281 9.4221 4.3363 9.05342 4.59275 8.75172C4.83344 8.46856 5.09943 8.18596 5.3173 8.0189C5.93685 7.54384 6.71353 7.31552 7.76215 7.00726L7.92771 6.95855C8.2027 6.87751 8.48475 6.78445 8.7892 6.684L8.78921 6.684L8.81814 6.67445C9.12792 6.57226 9.4593 6.46327 9.79652 6.36515Z',
  d8: 'M15 12C15.5523 12 16 12.4477 16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 12.4477 14.4477 12 15 12Z',
  d9: 'M9.80006 18.4001C10.1314 18.8419 10.0419 19.4687 9.60006 19.8001L7.60006 21.3001C7.15823 21.6314 6.53143 21.5419 6.20006 21.1001C5.86869 20.6582 5.95823 20.0314 6.40006 19.7001L8.40006 18.2001C8.84189 17.8687 9.46869 17.9582 9.80006 18.4001ZM14.2 18.4001C14.5314 17.9582 15.1582 17.8687 15.6 18.2L17.6 19.6999C18.0419 20.0313 18.1314 20.6581 17.8001 21.0999C17.4687 21.5417 16.8419 21.6313 16.4001 21.3L14.4001 19.8001C13.9582 19.4687 13.8687 18.8419 14.2 18.4001ZM12.0003 19.0001C12.5525 19.0001 13.0003 19.4478 13.0003 20.0001V22.0001C13.0003 22.5523 12.5525 23.0001 12.0003 23.0001C11.448 23.0001 11.0003 22.5523 11.0003 22.0001V20.0001C11.0003 19.4478 11.448 19.0001 12.0003 19.0001Z',
  d10: 'M12 1C12.5523 1 13 1.44772 13 2V7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7V2C11 1.44772 11.4477 1 12 1Z',
  d11: 'M13.7492 13.9719C14.4956 13.9501 15.2233 13.9164 15.9051 13.8711C15.5082 15.6623 13.9105 17.0018 11.9999 17.0018C10.1003 17.0018 8.50994 15.6777 8.10156 13.902C8.78451 13.9434 9.51268 13.9716 10.259 13.9871C10.6027 14.593 11.2535 15.0018 11.9999 15.0018C12.7524 15.0018 13.4079 14.5862 13.7492 13.9719Z',
  d12: 'M11 6.08477C11.3247 6.03224 11.6594 6 12 6C12.3406 6 12.6753 6.03224 13 6.08478V2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V6.08477Z',
  d13: 'M9.01465 14C9.01465 15.6569 10.3546 17 12.0076 17C13.6606 17 15.0006 15.6569 15.0006 14',
  d14: 'M12.008 20V22M15.0008 19L16.9961 20.4999M9.01484 19L7.01953 20.5',
  d15: 'M12.0078 8V2',
  d16: 'M6.50859 10.0261L4.09841 13.8557C4.0565 13.9223 4.10436 14.0089 4.18304 14.0089H19.8175C19.896 14.0089 19.9439 13.9227 19.9024 13.8561L17.5175 10.0261L12.0528 7.98828L6.50859 10.0261Z',
  d17: 'M12 18C9.79086 18 8 16.2091 8 14H10C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14H16C16 16.2091 14.2091 18 12 18Z',
  d18: 'M16.3999 21.2999L14.3999 19.8L15.5999 18.2L17.5999 19.6998L16.3999 21.2999ZM6.3999 19.7L8.3999 18.2L9.5999 19.8L7.5999 21.3L6.3999 19.7ZM11.0001 22V20H13.0001V22H11.0001Z',
  d19: 'M13 7.56559L17.9991 9.38344L20.636 13.6025C20.7805 13.8337 20.7882 14.1251 20.656 14.3636C20.5238 14.602 20.2726 14.75 20 14.75H4C3.72736 14.75 3.47619 14.602 3.34402 14.3636C3.21185 14.1251 3.2195 13.8337 3.364 13.6025L6.00092 9.38344L11 7.56559V2H13V7.56559Z',
};

export const IconLamp02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-02-stroke-rounded IconLamp02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconLamp02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-02-duotone-rounded IconLamp02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconLamp02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-02-twotone-rounded IconLamp02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconLamp02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-02-solid-rounded IconLamp02SolidRounded"
    >
      <path 
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

export const IconLamp02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-02-bulk-rounded IconLamp02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLamp02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-02-stroke-sharp IconLamp02StrokeSharp"
    >
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
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLamp02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-02-solid-sharp IconLamp02SolidSharp"
    >
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLamp02: TheIconSelfPack = {
  name: 'Lamp02',
  StrokeRounded: IconLamp02StrokeRounded,
  DuotoneRounded: IconLamp02DuotoneRounded,
  TwotoneRounded: IconLamp02TwotoneRounded,
  SolidRounded: IconLamp02SolidRounded,
  BulkRounded: IconLamp02BulkRounded,
  StrokeSharp: IconLamp02StrokeSharp,
  SolidSharp: IconLamp02SolidSharp,
};
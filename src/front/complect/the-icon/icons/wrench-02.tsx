import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 7.10593C17.9999 8.55778 16.5891 9.89558 14.4697 11.9901C13.1062 13.3376 10.8936 13.336 9.52937 11.9892C7.41145 9.8961 5.99988 8.55754 6 7.10568C6.00012 5.65383 6.3543 5.36258 9.60848 2.14658C9.92161 1.83445 10.4602 2.05389 10.4602 2.49338L10.4604 5.80524C10.4604 6.64587 11.1488 7.32849 11.9994 7.32842C12.85 7.32835 13.5396 6.64688 13.5398 5.80625L13.5405 2.49435C13.5406 2.05485 14.0793 1.83532 14.3924 2.14739C17.646 5.36287 18.0001 5.65408 18 7.10593Z',
  d2: 'M15 12L15 19.1652C15 20.7308 13.6569 22 12 22C10.3431 22 9 20.7308 9 19.1652L9 12',
  d3: 'M12.0063 18.9995L12 19.0059',
  d4: 'M18.5 6.8201C18.4999 8.40394 16.9715 9.86336 14.6755 12.1483C13.1984 13.6183 10.8014 13.6165 9.32349 12.1473C7.02907 9.86393 5.49987 8.40368 5.5 6.81984C5.50013 5.236 5.88383 4.91827 9.40918 1.4099C9.74841 1.0694 10.3319 1.30879 10.3319 1.78823L10.3321 5.40117C10.3321 6.31823 11.0778 7.0629 11.9993 7.06282C12.9208 7.06275 13.6679 6.31933 13.6681 5.40227L13.6689 1.78929C13.669 1.30984 14.2526 1.07035 14.5917 1.41079C18.1165 4.91858 18.5001 5.23626 18.5 6.8201Z',
  d5: 'M15.6019 13.6726C15.75 13.7596 15.75 14.0525 15.75 14.6382L15.75 19.1642C15.75 21.1835 14.0305 22.749 12 22.749C9.96951 22.749 8.25 21.1835 8.25 19.1642L8.25 14.6371C8.25 14.0517 8.25 13.7589 8.39807 13.672C8.54614 13.585 8.8303 13.7435 9.3986 14.0604C11.006 14.9568 12.9928 14.9581 14.6008 14.0614C15.1695 13.7442 15.4539 13.5856 15.6019 13.6726ZM11.115 18.1229C10.6283 18.6095 10.6283 19.3984 11.115 19.885C11.6016 20.3717 12.3905 20.3717 12.8771 19.885L12.885 19.8771C13.3717 19.3905 13.3717 18.6016 12.885 18.115C12.3984 17.6283 11.6095 17.6283 11.1229 18.115L11.115 18.1229Z',
  d6: 'M15.75 14.6383C15.75 14.0526 15.75 13.7597 15.6019 13.6727C15.4539 13.5858 15.1695 13.7443 14.6008 14.0615C12.9928 14.9583 11.006 14.9569 9.3986 14.0605C8.8303 13.7436 8.54614 13.5851 8.39807 13.6721C8.25 13.759 8.25 14.0518 8.25 14.6372V19.1643C8.25 21.1836 9.96951 22.7491 12 22.7491C14.0305 22.7491 15.75 21.1836 15.75 19.1643L15.75 14.6383Z',
  d7: 'M11.115 19.885C10.6283 19.3984 10.6283 18.6095 11.115 18.1229L11.1229 18.115C11.6095 17.6283 12.3984 17.6283 12.885 18.115C13.3717 18.6016 13.3717 19.3905 12.885 19.8771L12.8771 19.885C12.3905 20.3717 11.6016 20.3717 11.115 19.885Z',
  d8: 'M12.008 19H11.999',
  d9: 'M15.0068 21.9505C15.0068 21.956 15.0024 21.9605 14.9969 21.9605L8.9998 21.9648C8.99427 21.9649 8.98976 21.9604 8.98975 21.9549V12.8006C6.04355 11.0096 5.38893 7.82083 6.50646 5.27824C7.17987 3.7461 8.61224 2.44701 10.0053 1.96484C10.0088 2.61061 10.0019 3.59783 10.0053 4.42161C10.0088 5.29142 9.94683 6.4707 10.0053 6.97835C10.5783 9.33405 13.5857 9.01089 13.9855 6.97835C14.0515 6.64312 13.9699 5.71173 13.9855 5.00999C14.008 3.99964 13.9809 2.97782 13.9855 1.97641C15.6881 2.57676 16.9342 3.90539 17.5184 5.32592C18.0839 6.70119 18.1643 8.05043 17.6509 9.68411C17.1824 10.8043 16.5517 11.8725 15.0073 12.8055L15.0068 21.9505Z',
  d10: 'M14.2499 1.60343L13.25 1.25L13.25 6.96914C13.25 7.6595 12.6904 8.21914 12 8.21914C11.3096 8.21914 10.75 7.6595 10.75 6.96914L10.75 1.25L9.75007 1.60343C7.12939 2.5297 5.25 5.02898 5.25 7.96914C5.25 10.3104 6.44235 12.3725 8.25 13.5824L8.25 22C8.25 22.4142 8.58579 22.75 9 22.75L15 22.75C15.1989 22.75 15.3897 22.671 15.5303 22.5303C15.671 22.3897 15.75 22.1989 15.75 22L15.75 13.5824C17.5576 12.3725 18.75 10.3104 18.75 7.96914C18.75 5.02898 16.8706 2.5297 14.2499 1.60343ZM12.9922 18L10.9922 18V20L12.9922 20V18Z',
};

export const IconWrench02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-02-stroke-rounded IconWrench02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWrench02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-02-duotone-rounded IconWrench02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWrench02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-02-twotone-rounded IconWrench02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWrench02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-02-solid-rounded IconWrench02SolidRounded"
    >
      <path 
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

export const IconWrench02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-02-bulk-rounded IconWrench02BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWrench02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-02-stroke-sharp IconWrench02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWrench02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wrench-02-solid-sharp IconWrench02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWrench02: TheIconSelfPack = {
  name: 'Wrench02',
  StrokeRounded: IconWrench02StrokeRounded,
  DuotoneRounded: IconWrench02DuotoneRounded,
  TwotoneRounded: IconWrench02TwotoneRounded,
  SolidRounded: IconWrench02SolidRounded,
  BulkRounded: IconWrench02BulkRounded,
  StrokeSharp: IconWrench02StrokeSharp,
  SolidSharp: IconWrench02SolidSharp,
};
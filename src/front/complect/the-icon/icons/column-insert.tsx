import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 7C18.9045 7 19.6067 7 20.1111 7.33706C20.3295 7.48298 20.517 7.67048 20.6629 7.88886C21 8.39331 21 9.09554 21 10.5L21 18.5C21 19.9045 21 20.6067 20.6629 21.1111C20.517 21.3295 20.3295 21.517 20.1111 21.6629C19.6067 22 18.9045 22 17.5 22C16.0955 22 15.3933 22 14.8889 21.6629C14.6705 21.517 14.483 21.3295 14.3371 21.1111C14 20.6067 14 19.9045 14 18.5L14 10.5C14 9.09554 14 8.39331 14.3371 7.88886C14.483 7.67048 14.6705 7.48298 14.8889 7.33706C15.3933 7 16.0955 7 17.5 7Z',
  d2: 'M6.5 7C7.90446 7 8.60669 7 9.11114 7.33706C9.32952 7.48298 9.51702 7.67048 9.66294 7.88886C10 8.39331 10 9.09554 10 10.5L10 18.5C10 19.9045 10 20.6067 9.66294 21.1111C9.51702 21.3295 9.32952 21.517 9.11114 21.6629C8.60669 22 7.90446 22 6.5 22C5.09554 22 4.39331 22 3.88886 21.6629C3.67048 21.517 3.48298 21.3295 3.33706 21.1111C3 20.6067 3 19.9045 3 18.5L3 10.5C3 9.09554 3 8.39331 3.33706 7.88886C3.48298 7.67048 3.67048 7.48298 3.88886 7.33706C4.39331 7 5.09554 7 6.5 7Z',
  d3: 'M15 2L13.4142 3.53318C12.7475 4.17772 12.4142 4.5 12 4.5C11.5858 4.5 11.2525 4.17773 10.5858 3.53318L9 2',
  d4: 'M17.5384 6.25C18.2079 6.24998 18.7667 6.24997 19.219 6.29598C19.6925 6.34415 20.1318 6.44886 20.5278 6.71346C20.8281 6.9141 21.0859 7.17191 21.2865 7.47218C21.5511 7.86818 21.6559 8.30755 21.704 8.78102C21.75 9.23335 21.75 9.79208 21.75 10.4617L21.75 18.5383V18.5384C21.75 19.2079 21.75 19.7667 21.704 20.219C21.6559 20.6925 21.5511 21.1318 21.2865 21.5278C21.0859 21.8281 20.8281 22.0859 20.5278 22.2865C20.1318 22.5511 19.6925 22.6559 19.219 22.704C18.7667 22.75 18.2079 22.75 17.5384 22.75H17.4616C16.7921 22.75 16.2333 22.75 15.781 22.704C15.3075 22.6559 14.8682 22.5511 14.4722 22.2865C14.1719 22.0859 13.9141 21.8281 13.7135 21.5278C13.4489 21.1318 13.3441 20.6925 13.296 20.219C13.25 19.7667 13.25 19.2079 13.25 18.5384V18.5383V10.4617V10.4616C13.25 9.79206 13.25 9.23334 13.296 8.78102C13.3442 8.30755 13.4489 7.86818 13.7135 7.47218C13.9141 7.17191 14.1719 6.9141 14.4722 6.71346C14.8682 6.44886 15.3075 6.34415 15.781 6.29598C16.2333 6.24997 16.7921 6.24998 17.4616 6.25H17.4617H17.5383H17.5384Z',
  d5: 'M6.53838 6.25C7.20794 6.24998 7.76666 6.24997 8.21898 6.29598C8.69245 6.34415 9.13182 6.44886 9.52782 6.71346C9.82809 6.9141 10.0859 7.17191 10.2865 7.47218C10.5511 7.86818 10.6559 8.30755 10.704 8.78102C10.75 9.23335 10.75 9.79208 10.75 10.4617L10.75 18.5383V18.5384C10.75 19.2079 10.75 19.7667 10.704 20.219C10.6559 20.6925 10.5511 21.1318 10.2865 21.5278C10.0859 21.8281 9.82809 22.0859 9.52782 22.2865C9.13182 22.5511 8.69245 22.6559 8.21898 22.704C7.76665 22.75 7.20793 22.75 6.53836 22.75H6.46164C5.79207 22.75 5.23335 22.75 4.78102 22.704C4.30755 22.6559 3.86818 22.5511 3.47218 22.2865C3.17191 22.0859 2.9141 21.8281 2.71346 21.5278C2.44886 21.1318 2.34415 20.6925 2.29598 20.219C2.24997 19.7667 2.24998 19.2079 2.25 18.5384V18.5383V10.4617V10.4616C2.24998 9.79206 2.24997 9.23334 2.29599 8.78102C2.34415 8.30755 2.44886 7.86818 2.71346 7.47218C2.9141 7.17191 3.17191 6.9141 3.47218 6.71346C3.86818 6.44886 4.30755 6.34415 4.78102 6.29598C5.23335 6.24997 5.79207 6.24998 6.46164 6.25H6.46166H6.53835H6.53838Z',
  d6: 'M8.28107 1.55492C8.66495 1.15787 9.29803 1.14719 9.69508 1.53107L11.2809 3.06425C11.6343 3.40593 11.8479 3.60495 12 3.71718C12.1521 3.60495 12.3657 3.40593 12.7191 3.06424L14.3049 1.53107C14.702 1.14719 15.3351 1.15787 15.7189 1.55492C16.1028 1.95198 16.0921 2.58505 15.6951 2.96893L14.0707 4.53939L14.0707 4.5394C13.771 4.8293 13.4791 5.11161 13.2061 5.31304C12.8969 5.54106 12.5034 5.75 12 5.75C11.4966 5.75 11.1031 5.54106 10.7939 5.31304C10.5209 5.11161 10.229 4.8293 9.92926 4.53939L8.30492 2.96893C7.90787 2.58505 7.89719 1.95198 8.28107 1.55492Z',
  d7: 'M14 22L14 7L21 7.00977L21 22H14Z',
  d8: 'M3 22L3 7L10 7.00977L10 22H3Z',
  d9: 'M15 2L12 4.5L9 2',
  d10: 'M13.47 6.4693C13.6109 6.32862 13.802 6.24972 14.001 6.25L21.001 6.25977C21.4149 6.26034 21.75 6.59596 21.75 7.00977V22C21.75 22.4142 21.4142 22.75 21 22.75H14C13.8011 22.75 13.6103 22.671 13.4697 22.5303C13.329 22.3897 13.25 22.1989 13.25 22V7C13.25 6.80091 13.3292 6.60998 13.47 6.4693Z',
  d11: 'M2.47004 6.4693C2.61092 6.32862 2.80195 6.24972 3.00105 6.25L10.001 6.25977C10.4149 6.26034 10.75 6.59596 10.75 7.00977V22C10.75 22.4142 10.4142 22.75 10 22.75H3C2.80109 22.75 2.61032 22.671 2.46967 22.5303C2.32902 22.3897 2.25 22.1989 2.25 22V7C2.25 6.80091 2.32916 6.60998 2.47004 6.4693Z',
  d12: 'M11.9996 3.21651L9.63974 1.25L8.35938 2.78644L11.9996 5.81993L15.6397 2.78644L14.3594 1.25L11.9996 3.21651Z',
};

export const IconColumnInsertStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-insert-stroke-rounded IconColumnInsertStrokeRounded"
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

export const IconColumnInsertDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-insert-duotone-rounded IconColumnInsertDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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

export const IconColumnInsertTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-insert-twotone-rounded IconColumnInsertTwotoneRounded"
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

export const IconColumnInsertSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-insert-solid-rounded IconColumnInsertSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconColumnInsertBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-insert-bulk-rounded IconColumnInsertBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconColumnInsertStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-insert-stroke-sharp IconColumnInsertStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconColumnInsertSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="column-insert-solid-sharp IconColumnInsertSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfColumnInsert: TheIconSelfPack = {
  name: 'ColumnInsert',
  StrokeRounded: IconColumnInsertStrokeRounded,
  DuotoneRounded: IconColumnInsertDuotoneRounded,
  TwotoneRounded: IconColumnInsertTwotoneRounded,
  SolidRounded: IconColumnInsertSolidRounded,
  BulkRounded: IconColumnInsertBulkRounded,
  StrokeSharp: IconColumnInsertStrokeSharp,
  SolidSharp: IconColumnInsertSolidSharp,
};
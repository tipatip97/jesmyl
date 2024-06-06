import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.5C7 5.09554 7 4.39331 7.33706 3.88886C7.48298 3.67048 7.67048 3.48298 7.88886 3.33706C8.39331 3 9.09554 3 10.5 3H18.5C19.9045 3 20.6067 3 21.1111 3.33706C21.3295 3.48298 21.517 3.67048 21.6629 3.88886C22 4.39331 22 5.09554 22 6.5C22 7.90446 22 8.60669 21.6629 9.11114C21.517 9.32952 21.3295 9.51702 21.1111 9.66294C20.6067 10 19.9045 10 18.5 10H10.5C9.09554 10 8.39331 10 7.88886 9.66294C7.67048 9.51702 7.48298 9.32952 7.33706 9.11114C7 8.60669 7 7.90446 7 6.5Z',
  d2: 'M7 17.5C7 16.0955 7 15.3933 7.33706 14.8889C7.48298 14.6705 7.67048 14.483 7.88886 14.3371C8.39331 14 9.09554 14 10.5 14H18.5C19.9045 14 20.6067 14 21.1111 14.3371C21.3295 14.483 21.517 14.6705 21.6629 14.8889C22 15.3933 22 16.0955 22 17.5C22 18.9045 22 19.6067 21.6629 20.1111C21.517 20.3295 21.3295 20.517 21.1111 20.6629C20.6067 21 19.9045 21 18.5 21H10.5C9.09554 21 8.39331 21 7.88886 20.6629C7.67048 20.517 7.48298 20.3295 7.33706 20.1111C7 19.6067 7 18.9045 7 17.5Z',
  d3: 'M2 9L3.53318 10.5858C4.17772 11.2525 4.5 11.5858 4.5 12C4.5 12.4142 4.17773 12.7475 3.53318 13.4142L2 15',
  d4: 'M18.5384 2.25C19.2079 2.24998 19.7667 2.24997 20.219 2.29598C20.6925 2.34415 21.1318 2.44886 21.5278 2.71346C21.8281 2.9141 22.0859 3.17191 22.2865 3.47218C22.5511 3.86818 22.6559 4.30755 22.704 4.78102C22.75 5.23335 22.75 5.79207 22.75 6.46164V6.53836C22.75 7.20793 22.75 7.76665 22.704 8.21898C22.6559 8.69245 22.5511 9.13182 22.2865 9.52782C22.0859 9.82809 21.8281 10.0859 21.5278 10.2865C21.1318 10.5511 20.6925 10.6559 20.219 10.704C19.7667 10.75 19.2079 10.75 18.5384 10.75H18.5383H10.4617H10.4616C9.79206 10.75 9.23335 10.75 8.78102 10.704C8.30755 10.6559 7.86818 10.5511 7.47218 10.2865C7.17191 10.0859 6.9141 9.82809 6.71346 9.52782C6.44886 9.13182 6.34415 8.69245 6.29598 8.21898C6.24997 7.76666 6.24998 7.20794 6.25 6.53837V6.53835V6.46166V6.46163C6.24998 5.79206 6.24997 5.23335 6.29598 4.78102C6.34415 4.30755 6.44886 3.86818 6.71346 3.47218C6.9141 3.17191 7.17191 2.9141 7.47218 2.71346C7.86818 2.44886 8.30755 2.34415 8.78102 2.29598C9.23335 2.24997 9.79206 2.24998 10.4616 2.25H10.4617H18.5383H18.5384Z',
  d5: 'M18.5384 13.25C19.2079 13.25 19.7667 13.25 20.219 13.296C20.6925 13.3441 21.1318 13.4489 21.5278 13.7135C21.8281 13.9141 22.0859 14.1719 22.2865 14.4722C22.5511 14.8682 22.6559 15.3075 22.704 15.781C22.75 16.2333 22.75 16.7921 22.75 17.4616V17.5384C22.75 18.2079 22.75 18.7667 22.704 19.219C22.6559 19.6925 22.5511 20.1318 22.2865 20.5278C22.0859 20.8281 21.8281 21.0859 21.5278 21.2865C21.1318 21.5511 20.6925 21.6559 20.219 21.704C19.7667 21.75 19.2079 21.75 18.5384 21.75H18.5383H10.4617H10.4616C9.79206 21.75 9.23335 21.75 8.78102 21.704C8.30755 21.6559 7.86818 21.5511 7.47218 21.2865C7.17191 21.0859 6.9141 20.8281 6.71346 20.5278C6.44886 20.1318 6.34415 19.6925 6.29598 19.219C6.24997 18.7667 6.24998 18.2079 6.25 17.5384V17.5383V17.4617V17.4616C6.24998 16.7921 6.24997 16.2333 6.29598 15.781C6.34415 15.3075 6.44886 14.8682 6.71346 14.4722C6.9141 14.1719 7.17191 13.9141 7.47218 13.7135C7.86818 13.4489 8.30755 13.3441 8.78102 13.296C9.23335 13.25 9.79206 13.25 10.4616 13.25H10.4617H18.5383H18.5384Z',
  d6: 'M1.55492 8.28107C1.95198 7.89719 2.58505 7.90787 2.96893 8.30492L4.50211 9.89071C4.51454 9.90357 4.52697 9.91642 4.53939 9.92925C4.8293 10.229 5.11161 10.5209 5.31304 10.7939C5.54106 11.1031 5.75 11.4966 5.75 12C5.75 12.5034 5.54106 12.8969 5.31304 13.2061C5.11161 13.4791 4.8293 13.771 4.53939 14.0707C4.52697 14.0836 4.51455 14.0964 4.50211 14.1093L2.96893 15.6951C2.58505 16.0921 1.95198 16.1028 1.55492 15.7189C1.15787 15.3351 1.14719 14.702 1.53107 14.3049L3.06425 12.7191C3.40593 12.3657 3.59133 12.1709 3.70355 12.0188C3.70847 12.0121 3.71301 12.0059 3.71718 12C3.713 11.9941 3.70847 11.9879 3.70355 11.9812C3.59133 11.8291 3.40593 11.6343 3.06424 11.2809L1.53107 9.69508C1.14719 9.29803 1.15787 8.66495 1.55492 8.28107Z',
  d7: 'M22 3H7V10H22V3Z',
  d8: 'M22 14H7V21H22V14Z',
  d9: 'M2 9L4.5 12L2 15',
  d10: 'M6.4693 10.53C6.32862 10.3891 6.24972 10.198 6.25 9.99895L6.25977 2.99895C6.26034 2.58515 6.59596 2.25 7.00977 2.25L22 2.25C22.4142 2.25 22.75 2.58579 22.75 3V10C22.75 10.1989 22.671 10.3897 22.5303 10.5303C22.3897 10.671 22.1989 10.75 22 10.75L7 10.75C6.80091 10.75 6.60998 10.6708 6.4693 10.53Z',
  d11: 'M6.4693 21.53C6.32862 21.3891 6.24972 21.198 6.25 20.999L6.25977 13.999C6.26034 13.5851 6.59596 13.25 7.00977 13.25L22 13.25C22.4142 13.25 22.75 13.5858 22.75 14V21C22.75 21.1989 22.671 21.3897 22.5303 21.5303C22.3897 21.671 22.1989 21.75 22 21.75L7 21.75C6.80091 21.75 6.60998 21.6708 6.4693 21.53Z',
  d12: 'M3.21651 12.0004L1.25 14.3602L2.78644 15.6406L5.81993 12.0004L2.78644 8.36023L1.25 9.6406L3.21651 12.0004Z',
};

export const IconRowInsertStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="row-insert-stroke-rounded IconRowInsertStrokeRounded"
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

export const IconRowInsertDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="row-insert-duotone-rounded IconRowInsertDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconRowInsertTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="row-insert-twotone-rounded IconRowInsertTwotoneRounded"
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

export const IconRowInsertSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="row-insert-solid-rounded IconRowInsertSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRowInsertBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="row-insert-bulk-rounded IconRowInsertBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRowInsertStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="row-insert-stroke-sharp IconRowInsertStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRowInsertSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="row-insert-solid-sharp IconRowInsertSolidSharp"
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

export const iconPackOfRowInsert: TheIconSelfPack = {
  name: 'RowInsert',
  StrokeRounded: IconRowInsertStrokeRounded,
  DuotoneRounded: IconRowInsertDuotoneRounded,
  TwotoneRounded: IconRowInsertTwotoneRounded,
  SolidRounded: IconRowInsertSolidRounded,
  BulkRounded: IconRowInsertBulkRounded,
  StrokeSharp: IconRowInsertStrokeSharp,
  SolidSharp: IconRowInsertSolidSharp,
};
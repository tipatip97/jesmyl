import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 14L3.23384 14.6626C4.144 17.2413 4.59908 18.5307 5.63742 19.2654C6.67576 20 8.0431 20 10.7778 20H13.2222C15.9569 20 17.3242 20 18.3626 19.2654C19.4009 18.5307 19.856 17.2413 20.7662 14.6626L21 14',
  d2: 'M12 14V4M12 14C11.2998 14 9.99153 12.0057 9.5 11.5M12 14C12.7002 14 14.0085 12.0057 14.5 11.5',
  d3: 'M13.2222 20H10.7778C8.0431 20 6.67576 20 5.63742 19.2654C4.59908 18.5307 4.144 17.2413 3.23384 14.6626C3.11969 14.3391 3.35963 14 3.70262 14H20.2974C20.6404 14 20.8803 14.3391 20.7662 14.6626C19.856 17.2413 19.4009 18.5307 18.3626 19.2654C17.3242 20 15.9569 20 13.2222 20Z',
  d4: 'M21.3331 13.0573C21.8539 13.2411 22.1271 13.8123 21.9433 14.3331L21.6901 15.0504C21.2515 16.2933 20.8945 17.3048 20.5124 18.0923C20.1137 18.9141 19.6471 19.582 18.9404 20.082C18.2338 20.5819 17.4487 20.7997 16.541 20.9021C15.6713 21.0003 14.5986 21.0003 13.2806 21.0003H10.72C9.40197 21.0003 8.32928 21.0003 7.45957 20.9021C6.55186 20.7997 5.76676 20.5819 5.06012 20.082C4.35347 19.582 3.88686 18.9141 3.48813 18.0923C3.10609 17.3048 2.74909 16.2933 2.31045 15.0504C2.30402 15.0322 2.29758 15.014 2.29113 14.9957L2.05728 14.3331C1.87347 13.8123 2.14665 13.2411 2.66745 13.0573C3.18825 12.8735 3.75945 13.1467 3.94326 13.6675L4.17711 14.33C4.63975 15.6408 4.96051 16.5452 5.28754 17.2193C5.60347 17.8705 5.88357 18.2146 6.21526 18.4493C6.54696 18.684 6.96471 18.8336 7.68392 18.9148C8.42839 18.9988 9.38798 19.0003 10.778 19.0003H13.2225C14.6126 19.0003 15.5722 18.9988 16.3166 18.9148C17.0358 18.8336 17.4536 18.684 17.7853 18.4493C18.117 18.2146 18.3971 17.8705 18.713 17.2193C19.04 16.5452 19.3608 15.6408 19.8234 14.33L20.0573 13.6675C20.2411 13.1467 20.8123 12.8735 21.3331 13.0573Z',
  d5: 'M13.0059 4C13.0059 3.44772 12.5581 3 12.0059 3C11.4536 3 11.0059 3.44772 11.0059 4L11.0059 10.5L10.4116 10.5C10.236 10.4999 10.0203 10.4997 9.84387 10.5218L9.84053 10.5222C9.71408 10.538 9.13804 10.6098 8.86368 11.1754C8.58872 11.7423 8.89065 12.2424 8.95597 12.3506L8.95841 12.3546C9.05062 12.5076 9.18477 12.6785 9.29511 12.8191L9.31885 12.8493C9.61348 13.2252 9.99545 13.7094 10.3759 14.1004C10.5657 14.2955 10.783 14.4967 11.0139 14.6556C11.2191 14.7968 11.5693 15 12 15C12.4307 15 12.7809 14.7968 12.9861 14.6556C13.217 14.4967 13.4343 14.2955 13.6241 14.1004C14.0046 13.7094 14.3865 13.2252 14.6812 12.8493L14.7049 12.8191C14.8152 12.6785 14.9494 12.5077 15.0416 12.3546L15.044 12.3506C15.1093 12.2424 15.4113 11.7422 15.1363 11.1754C14.862 10.6098 14.2859 10.538 14.1595 10.5222L14.1561 10.5218C13.9797 10.4997 13.764 10.4999 13.5884 10.5L13.0059 10.5L13.0059 4Z',
  d6: 'M3 14L6 20H18L21 14',
  d7: 'M12 4L12 13.5732M9 10.9998L12 14L15 10.9998',
  d8: 'M22 13.9472L18.7236 20.4999H5.27639L2 13.9472L3.78885 13.0527L6.51246 18.4999H17.4875L20.2111 13.0527L22 13.9472Z',
  d9: 'M13.0001 3.5L13.0001 11.0857L14.293 9.7927L15.7072 11.2069L12.0001 14.9143L8.29297 11.2069L9.70723 9.7927L11.0001 11.0857L11.0001 3.5H13.0001Z',
};

export const IconDownload02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-02-stroke-rounded IconDownload02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDownload02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-02-duotone-rounded IconDownload02DuotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDownload02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-02-twotone-rounded IconDownload02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDownload02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-02-solid-rounded IconDownload02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDownload02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-02-bulk-rounded IconDownload02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDownload02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-02-stroke-sharp IconDownload02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDownload02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-02-solid-sharp IconDownload02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfDownload02: TheIconSelfPack = {
  name: 'Download02',
  StrokeRounded: IconDownload02StrokeRounded,
  DuotoneRounded: IconDownload02DuotoneRounded,
  TwotoneRounded: IconDownload02TwotoneRounded,
  SolidRounded: IconDownload02SolidRounded,
  BulkRounded: IconDownload02BulkRounded,
  StrokeSharp: IconDownload02StrokeSharp,
  SolidSharp: IconDownload02SolidSharp,
};
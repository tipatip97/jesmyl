import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 14L3.23384 14.6626C4.144 17.2413 4.59908 18.5307 5.63742 19.2654C6.67576 20 8.0431 20 10.7778 20H13.2222C15.9569 20 17.3242 20 18.3626 19.2654C19.4009 18.5307 19.856 17.2413 20.7662 14.6626L21 14',
  d2: 'M12 4V14M12 4C11.2998 4 9.99153 5.9943 9.5 6.5M12 4C12.7002 4 14.0085 5.9943 14.5 6.5',
  d3: 'M13.2222 20H10.7778C8.0431 20 6.67576 20 5.63742 19.2654C4.59908 18.5307 4.144 17.2413 3.23384 14.6626C3.11969 14.3391 3.35963 14 3.70262 14H20.2974C20.6404 14 20.8803 14.3391 20.7662 14.6626C19.856 17.2413 19.4009 18.5307 18.3626 19.2654C17.3242 20 15.9569 20 13.2222 20Z',
  d4: 'M21.3331 13.0573C21.8539 13.2411 22.1271 13.8123 21.9433 14.3331L21.6901 15.0504C21.2515 16.2933 20.8945 17.3048 20.5124 18.0923C20.1137 18.9141 19.6471 19.582 18.9404 20.082C18.2338 20.5819 17.4487 20.7997 16.541 20.9021C15.6713 21.0003 14.5986 21.0003 13.2806 21.0003H10.72C9.40197 21.0003 8.32928 21.0003 7.45957 20.9021C6.55186 20.7997 5.76676 20.5819 5.06012 20.082C4.35347 19.582 3.88686 18.9141 3.48813 18.0923C3.10609 17.3048 2.74909 16.2933 2.31045 15.0504C2.30402 15.0322 2.29758 15.014 2.29113 14.9957L2.05728 14.3331C1.87347 13.8123 2.14665 13.2411 2.66745 13.0573C3.18825 12.8735 3.75945 13.1467 3.94326 13.6675L4.17711 14.33C4.63975 15.6408 4.96051 16.5452 5.28754 17.2193C5.60347 17.8705 5.88357 18.2146 6.21526 18.4493C6.54696 18.684 6.96471 18.8336 7.68392 18.9148C8.42839 18.9988 9.38798 19.0003 10.778 19.0003H13.2225C14.6126 19.0003 15.5722 18.9988 16.3166 18.9148C17.0358 18.8336 17.4536 18.684 17.7853 18.4493C18.117 18.2146 18.3971 17.8705 18.713 17.2193C19.04 16.5452 19.3608 15.6408 19.8234 14.33L20.0573 13.6675C20.2411 13.1467 20.8123 12.8735 21.3331 13.0573Z',
  d5: 'M13.0059 14C13.0059 14.5523 12.5581 15 12.0059 15C11.4536 15 11.0059 14.5523 11.0059 14L11.0059 7.49996L10.4116 7.49998C10.236 7.50011 10.0203 7.50026 9.84387 7.47819L9.84053 7.47777C9.71408 7.462 9.13804 7.39017 8.86368 6.82457C8.58872 6.25775 8.89065 5.75761 8.95597 5.6494L8.95841 5.64537C9.05062 5.49235 9.18477 5.32147 9.29511 5.18092L9.31885 5.15067C9.61348 4.77485 9.99545 4.29063 10.3759 3.89962C10.5657 3.70451 10.783 3.50328 11.0139 3.34443C11.2191 3.20323 11.5693 2.99996 12 2.99996C12.4307 2.99996 12.7809 3.20323 12.9861 3.34443C13.217 3.50328 13.4343 3.70451 13.6241 3.89962C14.0046 4.29063 14.3865 4.77485 14.6812 5.15067L14.7049 5.18091C14.8152 5.32147 14.9494 5.49235 15.0416 5.64537L15.044 5.64941C15.1093 5.75761 15.4113 6.25775 15.1363 6.82457C14.862 7.39017 14.2859 7.46201 14.1595 7.47777L14.1561 7.47819C13.9797 7.50026 13.764 7.50011 13.5884 7.49998L13.0059 7.49996L13.0059 14Z',
  d6: 'M3 14L6 20H18L21 14',
  d7: 'M12 14L12 4.29795M9 7.00021L12 4L15 7.00021',
  d8: 'M22 14.6972L18.7236 21.2499H5.27639L2 14.6972L3.78885 13.8027L6.51246 19.2499H17.4875L20.2111 13.8027L22 14.6972Z',
  d9: 'M12.0001 2.75L15.7072 6.4574L14.293 7.87156L13.0001 6.5786L13.0001 14.1643H11.0001L11.0001 6.5786L9.70723 7.87156L8.29297 6.4574L12.0001 2.75Z',
};

export const IconUpload02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-02-stroke-rounded IconUpload02StrokeRounded"
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

export const IconUpload02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-02-duotone-rounded IconUpload02DuotoneRounded"
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

export const IconUpload02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-02-twotone-rounded IconUpload02TwotoneRounded"
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

export const IconUpload02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-02-solid-rounded IconUpload02SolidRounded"
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

export const IconUpload02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-02-bulk-rounded IconUpload02BulkRounded"
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

export const IconUpload02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-02-stroke-sharp IconUpload02StrokeSharp"
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

export const IconUpload02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-02-solid-sharp IconUpload02SolidSharp"
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

export const iconPackOfUpload02: TheIconSelfPack = {
  name: 'Upload02',
  StrokeRounded: IconUpload02StrokeRounded,
  DuotoneRounded: IconUpload02DuotoneRounded,
  TwotoneRounded: IconUpload02TwotoneRounded,
  SolidRounded: IconUpload02SolidRounded,
  BulkRounded: IconUpload02BulkRounded,
  StrokeSharp: IconUpload02StrokeSharp,
  SolidSharp: IconUpload02SolidSharp,
};
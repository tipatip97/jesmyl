import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.5 10.5C9.99153 9.9943 11.2998 8 12 8M14.5 10.5C14.0085 9.9943 12.7002 8 12 8M12 8V16',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12 17C12.5523 17 13 16.5523 13 16V11.5H13.162C13.4524 11.5001 13.7597 11.5002 14.0022 11.4712C14.179 11.45 14.8295 11.3702 15.1296 10.7613C15.43 10.1519 15.0851 9.60918 14.9914 9.46263C14.8625 9.26085 14.6695 9.02819 14.4869 8.80808L14.4555 8.77028C14.168 8.42352 13.8257 8.02882 13.4824 7.71482C13.311 7.55802 13.1127 7.39647 12.8974 7.26884C12.6978 7.15052 12.3826 7 12 7C11.6174 7 11.3022 7.15052 11.1026 7.26884C10.8873 7.39647 10.689 7.55802 10.5176 7.71482C10.1743 8.02882 9.83196 8.42352 9.54449 8.77029L9.51315 8.80807L9.51314 8.80808C9.33054 9.02819 9.13753 9.26085 9.00859 9.46263C8.91494 9.60918 8.57002 10.1519 8.87038 10.7613C9.1705 11.3702 9.82103 11.45 9.99783 11.4712C10.2403 11.5002 10.5476 11.5001 10.838 11.5H11V16C11 16.5523 11.4477 17 12 17Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11.5H10.838C10.5476 11.5001 10.2403 11.5002 9.99783 11.4712C9.82103 11.45 9.1705 11.3702 8.87038 10.7613C8.57002 10.1519 8.91494 9.60918 9.00859 9.46263C9.13753 9.26085 9.33054 9.02819 9.51315 8.80807L9.54449 8.77029C9.83196 8.42352 10.1743 8.02882 10.5176 7.71482C10.689 7.55802 10.8873 7.39647 11.1026 7.26884C11.3022 7.15052 11.6174 7 12 7C12.3826 7 12.6978 7.15052 12.8974 7.26884C13.1127 7.39647 13.311 7.55802 13.4824 7.71482C13.8257 8.02882 14.168 8.42352 14.4555 8.77028L14.4869 8.80808C14.6695 9.02819 14.8625 9.26085 14.9914 9.46263C15.0851 9.60918 15.43 10.1519 15.1296 10.7613C14.8295 11.3702 14.179 11.45 14.0022 11.4712C13.7597 11.5002 13.4524 11.5001 13.162 11.5H13V16Z',
  d5: 'M12.0004 16V8.35046M15 11L12.0004 8L9 11',
  d6: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM15.5294 11.0001L11.9995 7.46973L8.46875 11L9.52934 12.0608L11.2494 10.3409V16.5304H12.7494V10.3412L14.4687 12.0607L15.5294 11.0001Z',
};

export const IconCircleArrowUp02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-02-stroke-rounded IconCircleArrowUp02StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUp02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-02-duotone-rounded IconCircleArrowUp02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUp02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-02-twotone-rounded IconCircleArrowUp02TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUp02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-02-solid-rounded IconCircleArrowUp02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUp02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-02-bulk-rounded IconCircleArrowUp02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUp02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-02-stroke-sharp IconCircleArrowUp02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowUp02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-02-solid-sharp IconCircleArrowUp02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowUp02: TheIconSelfPack = {
  name: 'CircleArrowUp02',
  StrokeRounded: IconCircleArrowUp02StrokeRounded,
  DuotoneRounded: IconCircleArrowUp02DuotoneRounded,
  TwotoneRounded: IconCircleArrowUp02TwotoneRounded,
  SolidRounded: IconCircleArrowUp02SolidRounded,
  BulkRounded: IconCircleArrowUp02BulkRounded,
  StrokeSharp: IconCircleArrowUp02StrokeSharp,
  SolidSharp: IconCircleArrowUp02SolidSharp,
};
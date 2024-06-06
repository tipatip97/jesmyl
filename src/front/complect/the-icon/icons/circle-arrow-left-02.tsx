import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 12L16 12M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5',
  d2: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM17 12C17 11.4477 16.5523 11 16 11L11.5 11L11.5 10.838C11.5001 10.5476 11.5002 10.2403 11.4712 9.99783C11.45 9.82103 11.3702 9.1705 10.7613 8.87038C10.1519 8.57002 9.60918 8.91494 9.46263 9.00859C9.26085 9.13753 9.02819 9.33054 8.80808 9.51314L8.77028 9.54449C8.42352 9.83196 8.02882 10.1743 7.71482 10.5176C7.55802 10.689 7.39647 10.8873 7.26884 11.1026C7.15052 11.3022 7 11.6174 7 12C7 12.3826 7.15052 12.6978 7.26884 12.8974C7.39647 13.1127 7.55802 13.311 7.71482 13.4824C8.02882 13.8257 8.42352 14.168 8.77028 14.4555L8.80807 14.4869L8.80808 14.4869C9.02819 14.6695 9.26085 14.8625 9.46263 14.9914C9.60918 15.0851 10.1519 15.43 10.7613 15.1296C11.3702 14.8295 11.45 14.179 11.4712 14.0022C11.5002 13.7597 11.5001 13.4524 11.5 13.162L11.5 13L16 13C16.5523 13 17 12.5523 17 12Z',
  d3: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75Z',
  d4: 'M16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L11.5 13L11.5 13.162C11.5001 13.4524 11.5002 13.7597 11.4712 14.0022C11.45 14.179 11.3702 14.8295 10.7613 15.1296C10.1519 15.43 9.60918 15.0851 9.46263 14.9914C9.26085 14.8625 9.02819 14.6695 8.80807 14.4869L8.77029 14.4555C8.42352 14.168 8.02882 13.8257 7.71482 13.4824C7.55802 13.311 7.39647 13.1127 7.26884 12.8974C7.15052 12.6978 7 12.3826 7 12C7 11.6174 7.15052 11.3022 7.26884 11.1026C7.39647 10.8873 7.55802 10.689 7.71482 10.5176C8.02882 10.1743 8.42352 9.83196 8.77028 9.54449L8.80808 9.51314C9.02819 9.33054 9.26085 9.13753 9.46263 9.00859C9.60918 8.91494 10.1519 8.57002 10.7613 8.87038C11.3702 9.1705 11.45 9.82103 11.4712 9.99783C11.5002 10.2403 11.5001 10.5476 11.5 10.838L11.5 11L16 11Z',
  d5: 'M16 12.0004L8.26036 12.0004M11 15L8 12.0004L11 9',
  d6: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM11.0001 15.5294L7.46973 11.9995L11 8.46875L12.0608 9.52934L10.3409 11.2494H16.5304V12.7494H10.3412L12.0607 14.4687L11.0001 15.5294Z',
};

export const IconCircleArrowLeft02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-02-stroke-rounded IconCircleArrowLeft02StrokeRounded"
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

export const IconCircleArrowLeft02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-02-duotone-rounded IconCircleArrowLeft02DuotoneRounded"
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

export const IconCircleArrowLeft02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-02-twotone-rounded IconCircleArrowLeft02TwotoneRounded"
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

export const IconCircleArrowLeft02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-02-solid-rounded IconCircleArrowLeft02SolidRounded"
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

export const IconCircleArrowLeft02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-02-bulk-rounded IconCircleArrowLeft02BulkRounded"
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

export const IconCircleArrowLeft02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-02-stroke-sharp IconCircleArrowLeft02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeft02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-02-solid-sharp IconCircleArrowLeft02SolidSharp"
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

export const iconPackOfCircleArrowLeft02: TheIconSelfPack = {
  name: 'CircleArrowLeft02',
  StrokeRounded: IconCircleArrowLeft02StrokeRounded,
  DuotoneRounded: IconCircleArrowLeft02DuotoneRounded,
  TwotoneRounded: IconCircleArrowLeft02TwotoneRounded,
  SolidRounded: IconCircleArrowLeft02SolidRounded,
  BulkRounded: IconCircleArrowLeft02BulkRounded,
  StrokeSharp: IconCircleArrowLeft02StrokeSharp,
  SolidSharp: IconCircleArrowLeft02SolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.38188 5.00507C10.5901 3.66836 11.1943 3 12 3C12.8057 3 13.4099 3.66836 14.6181 5.00507L17.5897 8.29254C19.1966 10.0702 20 10.9591 20 12C20 13.0409 19.1966 13.9298 17.5897 15.7075L14.6181 18.9949C13.4099 20.3316 12.8057 21 12 21C11.1943 21 10.5901 20.3316 9.38188 18.9949L6.41031 15.7075C4.80344 13.9298 4 13.0409 4 12C4 10.9591 4.80344 10.0702 6.41031 8.29254L9.38188 5.00507Z',
  d2: 'M12 21C11.1943 21 10.5901 20.3316 9.38188 18.9949L6.41031 15.7075C4.80344 13.9298 4 13.0409 4 12C4 10.9591 4.80344 10.0702 6.41031 8.29254L9.38188 5.00507C10.5901 3.66836 11.1943 3 12 3',
  d3: 'M10.2034 2.73166C10.7016 2.31833 11.2741 2 12 2C12.7259 2 13.2984 2.31833 13.7966 2.73166C14.2553 3.1122 14.7493 3.65879 15.3136 4.28319L15.3136 4.2832L18.3748 7.66985L18.3748 7.66986C19.1414 8.51788 19.7792 9.22339 20.217 9.84954C20.677 10.5075 21 11.1911 21 12C21 12.8089 20.677 13.4925 20.217 14.1505C19.7792 14.7766 19.1414 15.4821 18.3748 16.3301L15.3136 19.7168C14.7493 20.3412 14.2553 20.8878 13.7966 21.2683C13.2984 21.6817 12.7259 22 12 22C11.2741 22 10.7016 21.6817 10.2034 21.2683C9.74473 20.8878 9.25076 20.3413 8.68648 19.7169L8.68644 19.7168L5.62514 16.3301L5.62513 16.3301C4.85857 15.4821 4.22083 14.7766 3.78304 14.1505C3.32299 13.4925 3 12.8089 3 12C3 11.1911 3.32299 10.5075 3.78304 9.84954C4.22084 9.2234 4.85858 8.5179 5.62515 7.66989L5.62515 7.66988L8.64002 4.33451L8.68641 4.28318L8.68641 4.28318C9.25072 3.65879 9.74471 3.1122 10.2034 2.73166Z',
  d4: 'M10.2034 2.73166C10.7016 2.31833 11.2741 2 12 2V22C11.2741 22 10.7016 21.6817 10.2034 21.2683C9.74473 20.8878 9.25076 20.3413 8.68648 19.7169L8.68644 19.7168L5.62514 16.3301L5.62513 16.3301C4.85857 15.4821 4.22083 14.7766 3.78304 14.1505C3.32299 13.4925 3 12.8089 3 12C3 11.1911 3.32299 10.5075 3.78304 9.84954C4.22084 9.2234 4.85858 8.5179 5.62515 7.66989L5.62515 7.66988L8.64002 4.33451L8.68641 4.28318L8.68641 4.28318C9.25072 3.65879 9.74471 3.1122 10.2034 2.73166Z',
  d5: 'M20 12L12 3L4 12L12 21L20 12Z',
  d6: 'M12 2L21 12L12 22L3 12L12 2Z',
};

export const IconKeyframeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-stroke-rounded IconKeyframeStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-duotone-rounded IconKeyframeDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconKeyframeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-twotone-rounded IconKeyframeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconKeyframeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-solid-rounded IconKeyframeSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-bulk-rounded IconKeyframeBulkRounded"
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

export const IconKeyframeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-stroke-sharp IconKeyframeStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-solid-sharp IconKeyframeSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKeyframe: TheIconSelfPack = {
  name: 'Keyframe',
  StrokeRounded: IconKeyframeStrokeRounded,
  DuotoneRounded: IconKeyframeDuotoneRounded,
  TwotoneRounded: IconKeyframeTwotoneRounded,
  SolidRounded: IconKeyframeSolidRounded,
  BulkRounded: IconKeyframeBulkRounded,
  StrokeSharp: IconKeyframeStrokeSharp,
  SolidSharp: IconKeyframeSolidSharp,
};
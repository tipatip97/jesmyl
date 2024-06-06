import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 10C3 12.8284 3 14.2426 3.87868 15.1213C4.75736 16 6.17157 16 9 16H15C17.8284 16 19.2426 16 20.1213 15.1213C21 14.2426 21 12.8284 21 10V4.5H3V10Z',
  d2: 'M12 16L12 19',
  d3: 'M21 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V3.5C2 3.9714 2 4.20711 2.14645 4.35355C2.29289 4.5 2.5286 4.5 3 4.5H21C21.4714 4.5 21.7071 4.5 21.8536 4.35355C22 4.20711 22 3.9714 22 3.5V3C22 2.5286 22 2.29289 21.8536 2.14645C21.7071 2 21.4714 2 21 2Z',
  d4: 'M12 19C11.1716 19 10.5 19.6716 10.5 20.5C10.5 21.3284 11.1716 22 12 22C12.8284 22 13.5 21.3284 13.5 20.5C13.5 19.6716 12.8284 19 12 19ZM12 19V16',
  d5: 'M12 19.75C11.5858 19.75 11.25 20.0858 11.25 20.5C11.25 20.9142 11.5858 21.25 12 21.25C12.4142 21.25 12.75 20.9142 12.75 20.5C12.75 20.0858 12.4142 19.75 12 19.75ZM9.75 20.5C9.75 19.2574 10.7574 18.25 12 18.25C13.2426 18.25 14.25 19.2574 14.25 20.5C14.25 21.7426 13.2426 22.75 12 22.75C10.7574 22.75 9.75 21.7426 9.75 20.5Z',
  d6: 'M12 15.25C12.4142 15.25 12.75 15.5858 12.75 16L12.75 19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19L11.25 16C11.25 15.5858 11.5858 15.25 12 15.25Z',
  d7: 'M2.96557 1.25001C2.97711 1.25001 2.9886 1.25002 3.00002 1.25002H21C21.0114 1.25002 21.0229 1.25001 21.0345 1.25001C21.2396 1.24993 21.4614 1.24984 21.6486 1.27501C21.8679 1.3045 22.1481 1.38033 22.3839 1.61613C22.6197 1.85193 22.6955 2.13212 22.725 2.35145C22.7502 2.53866 22.7501 2.76046 22.75 2.96558C22.75 2.97711 22.75 2.9886 22.75 3.00002V3.50002C22.75 3.51144 22.75 3.52292 22.75 3.53446C22.7501 3.73958 22.7502 3.96137 22.725 4.14859C22.6955 4.36791 22.6197 4.6481 22.3839 4.8839C22.1481 5.1197 21.8679 5.19554 21.6486 5.22502C21.4614 5.2502 21.2396 5.25011 21.0345 5.25003C21.0229 5.25002 21.0114 5.25002 21 5.25002H3.00002C2.98859 5.25002 2.97711 5.25002 2.96557 5.25003C2.76046 5.25011 2.53866 5.2502 2.35145 5.22502C2.13212 5.19554 1.85193 5.1197 1.61613 4.8839C1.38033 4.6481 1.3045 4.36791 1.27501 4.14859C1.24984 3.96137 1.24993 3.73958 1.25001 3.53446C1.25001 3.52293 1.25002 3.51144 1.25002 3.50002V3.00002C1.25002 2.9886 1.25001 2.97711 1.25001 2.96557C1.24993 2.76046 1.24984 2.53866 1.27501 2.35145C1.3045 2.13212 1.38033 1.85193 1.61613 1.61613C1.85193 1.38033 2.13212 1.3045 2.35145 1.27501C2.53866 1.24984 2.76046 1.24993 2.96557 1.25001ZM2.75117 2.75117C2.75005 2.82063 2.75002 2.90094 2.75002 3.00002V3.50002C2.75002 3.5991 2.75005 3.67941 2.75117 3.74887C2.82063 3.74999 2.90094 3.75002 3.00002 3.75002H21C21.0991 3.75002 21.1794 3.74998 21.2489 3.74886C21.25 3.67941 21.25 3.5991 21.25 3.50002V3.00002C21.25 2.90094 21.25 2.82063 21.2489 2.75117C21.1794 2.75005 21.0991 2.75002 21 2.75002H3.00002C2.90094 2.75002 2.82063 2.75005 2.75117 2.75117Z',
  d8: 'M2.25 9.9713C2.25 13.1686 2.25 14.7673 3.2019 15.7606C4.15381 16.7539 5.68587 16.7539 8.75 16.7539H15.25C18.3141 16.7539 19.8462 16.7539 20.7981 15.7606C21.75 14.7673 21.75 13.1686 21.75 9.9713V3.75391H2.25V9.9713Z',
  d9: 'M12.75 16.7539H11.25V18.378C10.3761 18.6869 9.75 19.5203 9.75 20.5C9.75 21.7426 10.7574 22.75 12 22.75C13.2426 22.75 14.25 21.7426 14.25 20.5C14.25 19.5203 13.6239 18.6869 12.75 18.378L12.75 16.7539ZM11.25 20.5C11.25 20.0858 11.5858 19.75 12 19.75C12.4142 19.75 12.75 20.0858 12.75 20.5C12.75 20.9142 12.4142 21.25 12 21.25C11.5858 21.25 11.25 20.9142 11.25 20.5Z',
  d10: 'M3.5 2V16H20.5V2H3.5Z',
  d11: 'M2 2H22',
  d12: 'M22 3.25H2V1.25H22V3.25Z',
  d13: 'M2.75 2C2.75 1.58579 3.08579 1.25 3.5 1.25H20.5C20.9142 1.25 21.25 1.58579 21.25 2V16C21.25 16.4142 20.9142 16.75 20.5 16.75H3.5C3.08579 16.75 2.75 16.4142 2.75 16V2Z',
  d14: 'M11 17.958V15.75H13V17.958C13.883 18.3438 14.5 19.2248 14.5 20.25C14.5 21.6307 13.3807 22.75 12 22.75C10.6193 22.75 9.5 21.6307 9.5 20.25C9.5 19.2248 10.117 18.3438 11 17.958ZM12 19.75C11.7239 19.75 11.5 19.9739 11.5 20.25C11.5 20.5261 11.7239 20.75 12 20.75C12.2761 20.75 12.5 20.5261 12.5 20.25C12.5 19.9739 12.2761 19.75 12 19.75Z',
};

export const IconPresentation03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-03-stroke-rounded IconPresentation03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="12" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconPresentation03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-03-duotone-rounded IconPresentation03DuotoneRounded"
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
      <circle 
        cx="12" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconPresentation03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-03-twotone-rounded IconPresentation03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentation03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-03-solid-rounded IconPresentation03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentation03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-03-bulk-rounded IconPresentation03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPresentation03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-03-stroke-sharp IconPresentation03StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
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
    </TheIconWrapper>
  );
};

export const IconPresentation03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-03-solid-sharp IconPresentation03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPresentation03: TheIconSelfPack = {
  name: 'Presentation03',
  StrokeRounded: IconPresentation03StrokeRounded,
  DuotoneRounded: IconPresentation03DuotoneRounded,
  TwotoneRounded: IconPresentation03TwotoneRounded,
  SolidRounded: IconPresentation03SolidRounded,
  BulkRounded: IconPresentation03BulkRounded,
  StrokeSharp: IconPresentation03StrokeSharp,
  SolidSharp: IconPresentation03SolidSharp,
};
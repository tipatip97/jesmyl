import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z',
  d2: 'M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z',
  d3: 'M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z',
  d4: 'M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z',
  d5: 'M20 6V18M18 20H6M18 4H6M4 6V18',
  d6: 'M10.6497 8.48045L9.56106 9.01321C8.18702 9.68563 7.5 10.0218 7.5 10.5C7.5 10.9782 8.18702 11.3144 9.56106 11.9868L10.6497 12.5195C11.3042 12.8398 11.6315 13 12 13C12.3685 13 12.6958 12.8398 13.3503 12.5195L14.4389 11.9868C15.813 11.3144 16.5 10.9782 16.5 10.5C16.5 10.0218 15.813 9.68563 14.4389 9.01321L13.3503 8.48045C12.6958 8.16015 12.3685 8 12 8C11.6315 8 11.3042 8.16015 10.6497 8.48045Z',
  d7: 'M16.5 13.5C16.5 13.9782 15.813 14.3144 14.4389 14.9868L13.3503 15.5195C12.6958 15.8398 12.3685 16 12 16C11.6315 16 11.3042 15.8398 10.6497 15.5195L9.56106 14.9868C8.18702 14.3144 7.5 13.9782 7.5 13.5',
  d8: 'M1.25 4C1.25 2.48122 2.48122 1.25 4 1.25C5.51878 1.25 6.75 2.48122 6.75 4C6.75 5.51878 5.51878 6.75 4 6.75C2.48122 6.75 1.25 5.51878 1.25 4Z',
  d9: 'M17.25 4C17.25 2.48122 18.4812 1.25 20 1.25C21.5188 1.25 22.75 2.48122 22.75 4C22.75 5.51878 21.5188 6.75 20 6.75C18.4812 6.75 17.25 5.51878 17.25 4Z',
  d10: 'M17.25 20C17.25 18.4812 18.4812 17.25 20 17.25C21.5188 17.25 22.75 18.4812 22.75 20C22.75 21.5188 21.5188 22.75 20 22.75C18.4812 22.75 17.25 21.5188 17.25 20Z',
  d11: 'M1.25 20C1.25 18.4812 2.48122 17.25 4 17.25C5.51878 17.25 6.75 18.4812 6.75 20C6.75 21.5188 5.51878 22.75 4 22.75C2.48122 22.75 1.25 21.5188 1.25 20Z',
  d12: 'M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5H6C5.44772 5 5 4.55228 5 4ZM4 5C4.55228 5 5 5.44772 5 6V18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18V6C3 5.44772 3.44772 5 4 5ZM20 5C20.5523 5 21 5.44772 21 6V18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18V6C19 5.44772 19.4477 5 20 5ZM5 20C5 19.4477 5.44772 19 6 19H18C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20Z',
  d13: 'M10.4261 7.75476C10.9746 7.48527 11.4534 7.25 12 7.25C12.5466 7.25 13.0254 7.48527 13.5739 7.75476L14.8178 8.3636L14.8178 8.3636C15.4628 8.67923 16.0145 8.94917 16.3993 9.20447C16.7625 9.44539 17.25 9.84533 17.25 10.5C17.25 11.1547 16.7625 11.5546 16.3993 11.7955C16.0145 12.0508 15.4628 12.3208 14.8177 12.6364L13.5739 13.2452C13.0254 13.5147 12.5466 13.75 12 13.75C11.4534 13.75 10.9746 13.5147 10.4261 13.2452L10.4261 13.2452L9.18225 12.6364C8.5372 12.3208 7.98551 12.0508 7.60067 11.7955C7.23749 11.5546 6.75 11.1547 6.75 10.5C6.75 9.84533 7.23749 9.44539 7.60067 9.20447C7.98551 8.94917 8.5372 8.67923 9.18225 8.3636L9.18225 8.3636L10.4261 7.75476Z',
  d14: 'M7.70455 12.75C8.15634 12.75 8.53482 13.0423 8.63383 13.4349C8.89672 13.5973 9.40917 13.8511 10.0915 14.1621L11.1307 14.6356C11.833 14.9557 11.9193 14.9722 12 14.9722C12.0807 14.9722 12.167 14.9557 12.8693 14.6356L13.9085 14.1621C14.5908 13.8511 15.1033 13.5973 15.3662 13.4349C15.4652 13.0423 15.8437 12.75 16.2955 12.75C16.8226 12.75 17.25 13.148 17.25 13.6389C17.25 14.344 16.6842 14.7576 16.3313 14.9757C15.9506 15.2108 15.4117 15.4564 14.8062 15.7322L14.7477 15.7589L13.7085 16.2325L13.5949 16.2845C13.0863 16.5177 12.5797 16.75 12 16.75C11.4203 16.75 10.9137 16.5177 10.4051 16.2845L10.2915 16.2325L9.25234 15.7589L9.19382 15.7322C8.58832 15.4564 8.04939 15.2108 7.66872 14.9757C7.31579 14.7576 6.75 14.344 6.75 13.6389C6.75 13.148 7.17736 12.75 7.70455 12.75Z',
  d15: 'M3 6.56253V17.4375C3.30993 17.3164 3.64721 17.25 4 17.25C4.35279 17.25 4.69007 17.3164 5 17.4375V6.56253C4.69007 6.68357 4.35279 6.75 4 6.75C3.64721 6.75 3.30993 6.68357 3 6.56253Z',
  d16: 'M6.56253 5H17.4375C17.3164 4.69007 17.25 4.35279 17.25 4C17.25 3.64721 17.3164 3.30993 17.4375 3H6.56253C6.68357 3.30993 6.75 3.64721 6.75 4C6.75 4.35279 6.68357 4.69007 6.56253 5Z',
  d17: 'M19 6.56253C19.3099 6.68357 19.6472 6.75 20 6.75C20.3528 6.75 20.6901 6.68357 21 6.56253V17.4375C20.6901 17.3164 20.3528 17.25 20 17.25C19.6472 17.25 19.3099 17.3164 19 17.4375V6.56253Z',
  d18: 'M17.4375 19H6.56253C6.68357 19.3099 6.75 19.6472 6.75 20C6.75 20.3528 6.68357 20.6901 6.56253 21H17.4375C17.3164 20.6901 17.25 20.3528 17.25 20C17.25 19.6472 17.3164 19.3099 17.4375 19Z',
  d19: 'M12 8L17 10.5L12 13L7 10.5L12 8Z',
  d20: 'M14 12L17 13.5L12 16L7 13.5L10 12',
  d21: 'M6 3H18V5H6V3ZM3 18V6H5V18H3ZM19 18V6H21V18H19ZM6 19H18V21H6V19Z',
  d22: 'M11.6646 7.07918C11.8757 6.97361 12.1243 6.97361 12.3354 7.07918L17.3354 9.57918C17.5895 9.70622 17.75 9.96592 17.75 10.25C17.75 10.5341 17.5895 10.7938 17.3354 10.9208L12.3354 13.4208C12.1243 13.5264 11.8757 13.5264 11.6646 13.4208L6.66459 10.9208C6.4105 10.7938 6.25 10.5341 6.25 10.25C6.25 9.96592 6.4105 9.70622 6.66459 9.57918L11.6646 7.07918Z',
  d23: 'M6.77975 12.7891L9.65475 11.3516L11 12.7891L9.35123 13.6462L12 14.9706L14.6488 13.6462L13 12.7891L14.3452 11.3516L17.2202 12.7891C17.5449 12.9514 17.75 13.2832 17.75 13.6462C17.75 14.0092 17.5449 14.341 17.2202 14.5034L12.4286 16.8992C12.1588 17.0341 11.8412 17.0341 11.5714 16.8992L6.77975 14.5034C6.45509 14.341 6.25 14.0092 6.25 13.6462C6.25 13.2832 6.45509 12.9514 6.77975 12.7891Z',
};

export const IconGroupLayersStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="group-layers-stroke-rounded IconGroupLayersStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGroupLayersDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="group-layers-duotone-rounded IconGroupLayersDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGroupLayersTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="group-layers-twotone-rounded IconGroupLayersTwotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGroupLayersSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="group-layers-solid-rounded IconGroupLayersSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGroupLayersBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="group-layers-bulk-rounded IconGroupLayersBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGroupLayersStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="group-layers-stroke-sharp IconGroupLayersStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGroupLayersSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="group-layers-solid-sharp IconGroupLayersSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGroupLayers: TheIconSelfPack = {
  name: 'GroupLayers',
  StrokeRounded: IconGroupLayersStrokeRounded,
  DuotoneRounded: IconGroupLayersDuotoneRounded,
  TwotoneRounded: IconGroupLayersTwotoneRounded,
  SolidRounded: IconGroupLayersSolidRounded,
  BulkRounded: IconGroupLayersBulkRounded,
  StrokeSharp: IconGroupLayersStrokeSharp,
  SolidSharp: IconGroupLayersSolidSharp,
};